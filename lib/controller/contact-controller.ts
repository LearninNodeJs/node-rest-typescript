import * as mongoose from "mongoose"
import ContactSchema from "../model/contact";
import {Request, Response} from "express"

export class ContactController {

    public async addNewContact(req: Request, res: Response) {
        try {
            let _this = req.body
            let contact = new ContactSchema({
                _id: new mongoose.Types.ObjectId(),
                firstName:_this.firstName,
                lastName: _this.lastName,
                email: _this.email,
                company: _this.company,
                phone: _this.phone

            })
            let saveContact = await contact.save()
            res.status(200).send({
                message: 'Contact Saved Successfully',
                saveContact
            })
        } catch (e) {
            res.status(500).send({
                message: 'Error Saving Contact',
                error: e.message
            })
        }
    }
}
