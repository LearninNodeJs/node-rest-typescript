import {Request, Response} from "express"

import {ContactController} from "../controller/contact-controller";

export class Routes {

    public contactController: ContactController = new ContactController()

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'Get Working Successfully'
                })
            })

        app.route('/contact').post(this.contactController.addNewContact)
        app.route('/contact').post(this.contactController.getAllContacts)

        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithId)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact)

    }
}