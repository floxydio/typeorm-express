import {Request,Response} from 'express'
import { appDataSource } from '../database/Db'
import { News } from '../models/News'

export class BlogController {
    
    public async getAllItem(req: Request, res: Response) {
       const app = appDataSource.getRepository(News)

       const data = await app.find({
        order:{
            id: "DESC"
        }
       })
       res.send({
        status: 200,
        message: "All Data Blog",
        data: data
       })
    }

    public async createBlog(req: Request, res: Response) {
        const timestamp = 1643200384959;
        const date = new Date(timestamp);
        const news = new News()
        news.title = req.body.title
        news.description = req.body.description
        news.created =  date
        const app = appDataSource.getRepository(News)
        await app.save(news)

        res.send({
            message: "Successfully Create Blog"
        })
    }

    public async getBlogById(req: Request, res: Response) {
        const paramsSlug = req.params.slug
        const app = appDataSource.getRepository(News)

        const data = await app.findOneBy({
            id: Number(paramsSlug)
        })

        res.send({
            status: 200,
            data: data,
            message: `Successfully Get Detail ${paramsSlug}`
        })
    }

}