import * as Sentry from "@sentry/node";

try {
  throw new Error("Test error for Sentry!");
} catch (e) {
  Sentry.captureException(e);
}
