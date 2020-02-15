import * as winston from "winston";
import { DEBUG, ERROR, HTTP, INFO, PRODUCTION, VERBOSE, WARN } from "./constants";

const {colorize, combine, timestamp, label, printf, json} = winston.format;
const levels = {
    error: ERROR,
    warn : WARN,
    info: INFO,
    verbose: VERBOSE,
    debug: DEBUG,
    http: HTTP
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

export const myFormat = printf(info => `[${info.timestamp}] [${info.level}] [38;5;13m[1m=>[22m[39m ${info.message}`);

const { NODE_ENV = "development" } = process.env;

export const logger = winston.createLogger({
    levels: levels,
    level: NODE_ENV===PRODUCTION ? "error" : "debug",
    format: combine(
        label({ label: "order-api errors" }),
        timestamp(),
        colorize({ colors: colors }),
        json(),
        myFormat
    ),

    transports: [
        new winston.transports.File({ filename: "info.log", level: "debug" }),
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.Console({ level: NODE_ENV === "production" ? "error" : "debug" })
    ]
});
