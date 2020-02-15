"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.myFormat = void 0;

var winston = _interopRequireWildcard(require("winston"));

var _constants = require("./constants");

var _utility = require("./utility");

const {
  colorize,
  combine,
  timestamp,
  label,
  printf,
  json
} = winston.format;
const levels = {
  error: _constants.ERROR,
  warn: _constants.WARN,
  info: _constants.INFO,
  verbose: _constants.VERBOSE,
  debug: _constants.DEBUG,
  http: _constants.HTTP
};
const colors = {
  error: "red",
  warn: "orange",
  info: "white bold yellow",
  verbose: "blue",
  debug: "green",
  http: "pink"
};
winston.addColors(colors);
const myFormat = printf(info => `[${info.timestamp}] [${info.level}] [38;5;13m[1m=>[22m[39m ${info.message}`);
exports.myFormat = myFormat;
const {
  NODE_ENV = "development"
} = process.env;
const logger = winston.createLogger({
  levels: levels,
  level: (0, _utility.is)(NODE_ENV, "error", "debug"),
  format: combine(label({
    label: "order-api errors"
  }), timestamp(), colorize({
    colors: colors
  }), json(), myFormat),
  transports: [new winston.transports.File({
    filename: "info.log",
    level: "debug"
  }), new winston.transports.File({
    filename: "error.log",
    level: "error"
  }), new winston.transports.Console({
    level: NODE_ENV === "production" ? "error" : "debug"
  })]
});
exports.logger = logger;