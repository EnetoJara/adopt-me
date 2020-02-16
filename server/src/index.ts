import * as http from "http";
import { expressConfig } from "./express-config";
import { dbConfig } from "./models";
import { logger } from "./utils/logger";

require("dotenv-expand")(
    require("dotenv").config({
        path: '.env',
    })
);

dbConfig.sync().then(()=>logger.debug("Db sync")).catch(error => {
    Object.keys(error).forEach(key => logger.error(`${error[key]}`))
})

const { NODE_ENV = "development" } = process.env;

const express = expressConfig(NODE_ENV);

export const server = http.createServer(express);

server.listen(5000, () => console.log("running"));
