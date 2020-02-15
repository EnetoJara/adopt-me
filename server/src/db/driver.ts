import * as Pg from "pg";
import { BD_HOST, BD_NAME, BD_PASSWORD, BD_PORT, BD_USER } from "../utils/constants";
import { logError } from "../utils/utility";

export const pool = new Pg.Pool({
    database: BD_NAME,
    password: BD_PASSWORD,
    port:  Number(BD_PORT),
    host: BD_HOST,
    user: BD_USER,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
});

export function getConnection () {
    return pool.connect()
        .then((connection: Pg.PoolClient) => {

            return connection.connect();
        }).catch(error => {
            logError(error);

            return undefined;
        });
}
