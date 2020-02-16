import { Router } from "express";
import { ADDRESS, BDAY, CONTACTS, EMAIL, LOGIN, PHONES, PROFILE, ROUTE_GOOGLE_AUTH, ROUTE_GOOGLE_CALLBACK } from "../utils/constants";
import { google } from "../utils/passport";

/**
 * Place where all the endpoints of our server are defined.
 *
 * @returns {Router} api - Defines all the endpoints of our app.
 */
export function routes(): Router {
  const api: Router = Router();

  api.get(
    ROUTE_GOOGLE_AUTH,
    google.authenticate("google", {
      scope: [
        LOGIN,
        PROFILE,
        EMAIL,
        PHONES,
        ADDRESS,
        BDAY,
        CONTACTS
      ]
    })
  );
  api.get(
    ROUTE_GOOGLE_CALLBACK,
    google.authenticate("google", { failureRedirect: "/login" }),
    function(req, res) {
      console.log('res: ', res);
      res.redirect("/");
    }
  );
  return api;
}
