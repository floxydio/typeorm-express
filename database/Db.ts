import { DataSource } from "typeorm";
import { News } from "../models/News";


export const appDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: "root",
    password: "root",
    database: "blog",
    entities: [News],
    synchronize: true
})

appDataSource.initialize()
    .then(() => {
        console.log("[DB-Postgres]: Is Connected")
    })
    .catch((error) => console.log(error))