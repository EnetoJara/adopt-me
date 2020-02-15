import * as passport from "passport";
import { OAuth2Strategy } from "passport-google-oauth";
import { GOOGLE_CALLBACK, GOOGLE_ID, GOOGLE_SECRET } from "./constants";
console.log('GOO: ', GOOGLE_ID);
console.log('GOO: ', GOOGLE_SECRET);
console.log('GOO: ', GOOGLE_CALLBACK);

passport.use(new OAuth2Strategy({
    clientID: GOOGLE_ID,
    clientSecret: GOOGLE_SECRET,
    callbackURL: GOOGLE_CALLBACK
}, (accessToken: string, refreshToken: string, profile, done) => {
    console.log('accessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);

    return done(null, profile);
}));

export const google = passport;
