import * as sequelize from "sequelize";
import { BD_HOST, BD_NAME, BD_PASSWORD, BD_PORT, BD_USER } from "../utils/constants";

export const dbConfig = new sequelize.Sequelize(BD_NAME,BD_USER,BD_PASSWORD, {
  port: Number(BD_PORT),
  host: BD_HOST,
  dialect: "postgres",
  pool: {
    min: 0,
    max: 10,
    acquire: 30000,
    idle: 10000
  }
})
