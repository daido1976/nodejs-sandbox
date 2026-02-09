import * as Sentry from "@sentry/node";
Sentry.init({
  dsn: "https://576f005f04bfd1436fde3c9e5dde7c0b@o4510853458296832.ingest.us.sentry.io/4510853485559808",
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
