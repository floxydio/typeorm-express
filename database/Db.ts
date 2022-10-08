import { DataSource } from "typeorm";
import { News } from "../models/News";
import dotenv from 'dotenv'

dotenv.config()
export const appDataSource = new DataSource({
    type: 'postgres',
    host: `${process.env.DATA_HOST}`,
    port: Number(process.env.DATA_PORT),
    username: `${process.env.DATA_USERNAME}`,
    password: `${process.env.DATA_PASSWORD}`,
    database:  `${process.env.DATA_DB}`,
    entities: [News],
    synchronize: true
})

appDataSource.initialize()
    .then(() => {
        console.log("[DB-Postgres]: Is Connected")
    })
    .catch((error) => console.log(error))