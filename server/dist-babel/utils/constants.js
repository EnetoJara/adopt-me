"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUTE_GOOGLE_CALLBACK = exports.ROUTE_GOOGLE_AUTH = exports.ROUTE_REGISTER = exports.ROUTE_LOGIN = exports.DEVELOPMENT = exports.PRODUCTION = exports.HTTP = exports.DEBUG = exports.VERBOSE = exports.INFO = exports.WARN = exports.ERROR = void 0;
const ERROR = 0;
exports.ERROR = ERROR;
const WARN = 1;
exports.WARN = WARN;
const INFO = 2;
exports.INFO = INFO;
const VERBOSE = 3;
exports.VERBOSE = VERBOSE;
const DEBUG = 4;
exports.DEBUG = DEBUG;
const HTTP = 5;
exports.HTTP = HTTP;
const PRODUCTION = "production";
exports.PRODUCTION = PRODUCTION;
const DEVELOPMENT = "development";
exports.DEVELOPMENT = DEVELOPMENT;
const ROUTE_LOGIN = "/v1/login";
exports.ROUTE_LOGIN = ROUTE_LOGIN;
const ROUTE_REGISTER = "/v1/register";
exports.ROUTE_REGISTER = ROUTE_REGISTER;
const ROUTE_GOOGLE_AUTH = "/v1/auth/google";
exports.ROUTE_GOOGLE_AUTH = ROUTE_GOOGLE_AUTH;
const ROUTE_GOOGLE_CALLBACK = "/v1/auth/google/callback";
exports.ROUTE_GOOGLE_CALLBACK = ROUTE_GOOGLE_CALLBACK;