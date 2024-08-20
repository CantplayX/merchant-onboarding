import { DataSourceOptions } from "typeorm";

import "dotenv/config";
import {
  BusinessDetails,
  PersonalDetails,
  PublicDetails,
  BankDetails,
} from "./src/entity";

const config: DataSourceOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT!, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  // entities: ["dist/src/entity/**/*.js,ts"],
  entities: [PersonalDetails, BusinessDetails, PublicDetails, BankDetails],
  migrations: ["dist/migration/**/*.js,ts"],
  subscribers: ["dist/subscriber/**/*.js,ts"],
};

export default config;
