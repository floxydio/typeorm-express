import { DataSource } from "typeorm";
import { News } from "../models/News";


export const appDataSource = new DataSource({
    type: 'postgres',
    host: '103.250.10.192',
    port: 5432,
    username: "root",
    password: "root",
    database: "blog",
    entities: [News],
    synchronize: true
})

appDataSource.initialize()
    .then(() => {
        console.log("[DB-Postgr es]: Is Connected")
    })
    .catch((error) => console.log(error))