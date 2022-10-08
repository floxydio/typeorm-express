import bodyParser from 'body-parser'
import express from 'express'
import "reflect-metadata"
import { BlogController } from './controllers/Blog'
import cors from 'cors'

const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))

const blogController = new BlogController()

app.get("/news", blogController.getAllItem)  


app.listen(port, () => console.log("[command] : Server Running On 3000"))