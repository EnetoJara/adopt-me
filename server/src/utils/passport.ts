import * as passport from "passport";
import { OAuth2Strategy, Profile, VerifyFunction } from "passport-google-oauth";
import { GOOGLE_CALLBACK, GOOGLE_ID, GOOGLE_SECRET } from "./constants";

passport.use(
  new OAuth2Strategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: GOOGLE_CALLBACK
    },
   (accessToken: string, refreshToken: string, profile: Profile , done: VerifyFunction) => {



    }
  )
);

export const google = passport;
