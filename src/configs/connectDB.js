import Sequelize from "sequelize";
import Logger from './logger'
import constant from "./constant";

export default new Sequelize(constant.DB_DATABASE, constant.DB_USERNAME, constant.DB_PASSWORD, {
   host: constant.DB_HOSTNAME,
   dialect: constant.DB_DIALECT,
   logging: msg =>  Logger.debug(msg),
   pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
 });