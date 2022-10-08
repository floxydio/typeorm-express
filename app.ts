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

app.get("/news", blogController.getAllItem) /* GET BLOG ITEM */
app.get("/news/:slug", blogController.getBlogById) /* GET BLOG BY ID */
app.post("/create-news", blogController.createBlog) /* CREATE BLOG */


app.listen(port, () => console.log("[command] : Server Running"))