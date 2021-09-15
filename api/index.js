const express = require("express");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
Sentry.init({
  dsn: "https://2c20d7b937df4e0da1b0a1a8cd28c427@o997694.ingest.sentry.io/5958022",
  release: "demo-backend@1.0.1",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// All controllers should live here
app.get("/", function rootHandler(req, res) {
  res.end("Hello world!!");
});

app.get("/testget", function mainHandler(req, res) {
  throw new Error("Sentry invoked error in the GET api!!");
});

app.get("/test", function mainHandler(req, res) {
  throw new Error("Sentry invoked error in a new GET api!!");
});

app.post("/testpost", function (req, res) {
  console.log(req.body);
  throw new Error("Sentry invoked error in the POST api!!");
});

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end("Internal Server Error");
});

app.listen(5000, () => {
  console.log("server is up");
});
