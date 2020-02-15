export const ERROR = 0;
export const WARN = 1;
export const INFO = 2;
export const VERBOSE = 3;
export const DEBUG = 4;
export const HTTP =  5;

export const PRODUCTION = "production";
export const DEVELOPMENT = "development";

export const ROUTE_LOGIN = "/v1/login";
export const ROUTE_REGISTER = "/v1/register";
export const ROUTE_GOOGLE_AUTH = "/v1/auth/google";
export const ROUTE_GOOGLE_CALLBACK = "/v1/auth/google/callback";

export const GOOGLE_CALLBACK = process.env.GOOGLE_CALLBACK || "";
export const GOOGLE_ID = process.env.GOOGLE_ID || "";
export const GOOGLE_SECRET = process.env.GOOGLE_SECRET || "";
export const BD_NAME = process.env.BD_NAME || "";
export const BD_PASSWORD = process.env.BD_PASSWORD || "";
export const BD_PORT = process.env.BD_PORT || "";
export const BD_HOST = process.env.BD_HOST || "";
export const BD_USER = process.env.BD_USER || "";
