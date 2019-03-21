import * as mongoose from "mongoose"
import ContactSchema from "../model/contact";
import {Request, Response} from "express"

export class ContactController {

    public async addNewContact(req: Request, res: Response) {
        try {
            let _this = req.body
            let contact = new ContactSchema(_this)
            let saveContact = await contact.save()
            res.status(200).send({
                message: 'Contact Saved Successfully'
            })
        } catch (e) {
            res.status(500).send({
                message: 'Error Saving Contact',
                error: e.message
            })
        }
    }
}
