export const ERROR = 0;
export const WARN = 1;
export const INFO = 2;
export const VERBOSE = 3;
export const DEBUG = 4;
export const HTTP = 5;

export const PRODUCTION = "production";
export const DEVELOPMENT = "development";

export const ROUTE_LOGIN = "/v1/login";
export const ROUTE_REGISTER = "/v1/register";
export const ROUTE_GOOGLE_AUTH = "/auth/google";
export const ROUTE_GOOGLE_CALLBACK = "/auth/google/callback";

export const GOOGLE_CALLBACK = process.env.GOOGLE_CALLBACK || "";
export const GOOGLE_ID = process.env.GOOGLE_ID || "";
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";
export const BD_NAME = process.env.BD_NAME || "";
export const BD_PASSWORD = process.env.BD_PASSWORD || "";
export const BD_PORT = process.env.BD_PORT || "";
export const BD_HOST = process.env.BD_HOST || "";
export const BD_USER = process.env.BD_USER || "";

export const LOGIN = "https://www.googleapis.com/auth/plus.login";
export const PROFILE = "https://www.googleapis.com/auth/userinfo.profile";
export const EMAIL = "https://www.googleapis.com/auth/userinfo.email";
export const PHONES = "https://www.googleapis.com/auth/user.phonenumbers.read";
export const ADDRESS = "https://www.googleapis.com/auth/user.addresses.read";
export const BDAY = "https://www.googleapis.com/auth/user.birthday.read";
export const CONTACTS = "https://www.googleapis.com/auth/contacts.readonly";
