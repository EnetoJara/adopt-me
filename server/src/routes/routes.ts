import { Router } from "express";
import { ROUTE_LOGIN } from "../utils/constants";
import { google } from "../utils/passport";

/**
 * Place where all the endpoints of our server are defined.
 *
 * @returns {Router} api - Defines all the endpoints of our app.
 */
export function routes (): Router {
    const api: Router = Router ();

    api.route(ROUTE_LOGIN).post();

    api.get("/auth/google", google.authenticate("google",  { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email','https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/user.phonenumbers.read', 'https://www.googleapis.com/auth/user.addresses.read', 'https://www.googleapis.com/auth/user.birthday.read','https://www.googleapis.com/auth/contacts.readonly'] }));
    api.get("/auth/google/callback", google.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });
    return api;
}
