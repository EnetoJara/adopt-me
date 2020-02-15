import { json, urlencoded } from 'body-parser';
import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import { getConnection } from "./db/driver";
import { routes } from "./routes/routes";
import { google } from "./utils/passport";

/**
 * Creates the basic configuration for an express server.
 *
 * @param {string} env - environment in which the app is going to run on.
 * @returns {import("express").Application} app - and express basic config.
 */
export function expressConfig (env: string): express.Application {
    getConnection().then(console.log).catch(console.error);
    const app: express.Application = express();

    if (env === "production") {
        app.use(helmet());
        app.use(compression());
    } else {
        app.use(cors());
    }

    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use(google.initialize())
    app.use("/api", routes());

    return app;
}
