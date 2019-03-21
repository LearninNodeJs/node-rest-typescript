import {Request, Response} from "express"

export class Routes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Get Working Successfully'
                })
            })

        app.route('contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Contact Get is Successful'
                })
            })

        app.route('/add')
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Post Request Successful'
                })
            })

        app.route('/contact/:contactId')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Get using Parameters successful'
                })
            })

        app.route('/update')
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Put Request Successful'
                })
            })

        app.route('/contact/:id')
            .delete((req: Request,res: Response)=>{
                res.status(200).send({
                    message: 'Delete request successful'
                })
            })

    }
}