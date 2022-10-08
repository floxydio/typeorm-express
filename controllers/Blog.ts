import {Request,Response} from 'express'
import { appDataSource } from '../database/Db'
import { News } from '../models/News'

export class BlogController {
    
    public async getAllItem(req: Request, res: Response) {
       const app = appDataSource.getRepository(News)

       const data = await app.find()


       res.send({
        status: 200,
        message: "All Data Blog",
        data: data
       })
    }

    public async createBlog(req: Request, res: Response) {
        const news = new News()
        news.title = req.body.title
        news.description = req.body.description
        const app = appDataSource.getRepository(News)
        await app.save(news)

        res.send({
            message: "Successfully Create Blog"
        })

    }

}