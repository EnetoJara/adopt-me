"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expressConfig = expressConfig;

var _bodyParser = require("body-parser");

var compression = _interopRequireWildcard(require("compression"));

var cors = _interopRequireWildcard(require("cors"));

var express = _interopRequireWildcard(require("express"));

var helmet = _interopRequireWildcard(require("helmet"));

var _routes = require("./routes/routes");

/**
 * Creates the basic configuration for an express server.
 *
 * @param {string} env - environment in which the app is going to run on.
 * @returns {import("express").Application} app - and express basic config.
 */
function expressConfig(env) {
  const app = express();

  if (env === "production") {
    app.use(helmet());
    app.use(compression());
  } else {
    app.use(cors());
  }

  app.use((0, _bodyParser.json)());
  app.use((0, _bodyParser.urlencoded)({
    extended: true
  }));
  app.use("/api", (0, _routes.routes)());
  return app;
}