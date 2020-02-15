"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _express = require("express");

/**
 * Place where all the endpoints of our server are defined.
 *
 * @returns {Router} api - Defines all the endpoints of our app.
 */
function routes() {
  const api = (0, _express.Router)();
  api.route("/v1/login").post(endPointLogger, (req, res) => {});
  return api;
}