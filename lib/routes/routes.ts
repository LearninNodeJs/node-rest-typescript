import {Request,Response} from "express"
import * as express from "express"

let router = express.Router()

export class Routes {
    public  routes(): void {
        router.get('/',(req : Request,res: Response)=>{
            res.status(200).send({
                message:'Message sent successfully'
            })
        })
    }
}