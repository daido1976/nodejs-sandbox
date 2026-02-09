import * as Sentry from "@sentry/node";

// ===========================================
// 1. setContext の見え方
// Sentry UI: Issue詳細 > "CONTEXTS" セクションに表示
// 検索不可、表示のみ
// ===========================================
Sentry.setContext("user_preference", {
  theme: "dark",
  language: "ja",
  notifications: { email: true, push: false },
});

// JSON.stringify した文字列を入れた場合
Sentry.setContext("stringified_data", {
  raw_object: { foo: "bar", nested: { a: 1 } },
  stringified: JSON.stringify({ foo: "bar", nested: { a: 1 } }),
});

try {
  throw new Error("Error with context");
} catch (e) {
  Sentry.captureException(e);
}

// ===========================================
// 2. setTag の見え方
// Sentry UI: Issue詳細 > "TAGS" セクションに表示
// 検索可能（例: tag:environment:production）
// ===========================================
Sentry.setTag("environment", "staging");
Sentry.setTag("feature_flag", "new_checkout");

try {
  throw new Error("Error with tags");
} catch (e) {
  Sentry.captureException(e);
}

// ===========================================
// 3. スコープ付き setContext（グローバル汚染の回避）
// ===========================================

// ❌ グローバル汚染が起こるパターン
// 以下のsetContextは全てのイベントに影響する
Sentry.setContext("global_context", { polluted: true });

// ✅ withScope でスコープを分離するパターン
Sentry.withScope((scope) => {
  // このスコープ内でのみ有効
  scope.setContext("scoped_context", {
    request_id: "req-123",
    user_action: "checkout",
  });
  scope.setTag("scoped_tag", "only_this_error");

  try {
    throw new Error("Error with scoped context");
  } catch (e) {
    Sentry.captureException(e);
  }
});

// このエラーには scoped_context は付かない（globalのみ）
try {
  throw new Error("Error without scoped context");
} catch (e) {
  Sentry.captureException(e);
}

// ===========================================
// 4. Error cause の見え方
// Sentry UI: スタックトレースに "Caused by:" として連鎖表示
// ===========================================
const fetchData = () => {
  throw new Error("Network connection failed");
};

const processData = () => {
  try {
    fetchData();
  } catch (e) {
    throw new Error("Failed to process data", { cause: e });
  }
};

const handleRequest = () => {
  try {
    processData();
  } catch (e) {
    // 3段階のエラーチェーン
    throw new Error("Request handler failed", { cause: e });
  }
};

try {
  handleRequest();
} catch (e) {
  Sentry.captureException(e);
}

console.log("All test errors sent to Sentry!");
