import * as mongoose from "mongoose"
import ContactSchema from "../model/contact";
import {Request, Response} from "express"

export class ContactController {

    public async addNewContact(req: Request, res: Response) {
        try {
            let _this = req.body
            let contact = new ContactSchema({
                _id: new mongoose.Types.ObjectId(),
                firstName: _this.firstName,
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

    public async getAllContacts(req: Request, res: Response) {
        try {
            let fetchedContacts = await ContactSchema.find({});
            if (fetchedContacts.length < 0) {
                return res.status(404).send({
                    message: "No Contacts Found"
                })
            }
            return res.status(200).send({
                message: 'Fetched Contacts',
                contactsLength: fetchedContacts.length,
                fetchedContacts
            })
        } catch (e) {
            console.error("Error Fetching Contacts ", e.message0)
            return res.status(500).send({
                message: 'Error Fetching Contacts',
                error: e.message
            })
        }
    }

    public async getContactWithId(req: Request, res: Response) {
        let _this = req.params;
        try {
            let foundContact = await ContactSchema.findById(_this.contactId);
            if (!foundContact) {
                return res.status(404).send({
                    message: `Contact with ${_this.contactId} Not found`
                })
            }
            return res.status(200).send({
                message: "Fetched Contact",
                foundContact
            })
        } catch (e) {
            console.error("Error Fetching single Contact ", e.message)
            return res.status(500).send({
                message: `Error Fetching Contact ${_this.contactId}`,
                error: e.message
            })
        }
    }

    public async updateContact(req: Request, res: Response) {
        let _this = req.params;
        try {
            if (this.checkIfContactExists) {
                return res.status(404).send({
                    message: 'Contact Not Found'
                })
            }
            let updatedContact = await ContactSchema.findOneAndUpdate({_id: _this.contactId}, req.body);
            return res.status(200).send({
                message: 'Contact Updated',
                updatedContact
            })


        } catch (e) {
            console.error("Error Updating Contact ", e.message);
            return res.status(500).send({
                message: "Error Updating Contact",
                error: e.message
            })
        }
    }

    public async deleteContact(req: Request, res: Response) {
        let _this = req.params;
        try {
            if (this.checkIfContactExists) {
                return res.status(404).send({
                    message: 'Contact Not Found'
                })
            }
            let deletedContact = await ContactSchema.remove({_id: _this.contactId});
            return res.status(200).send({
                message: `Contact ${_this.contactId} deleted successfully`,
                deletedContact
            })
        } catch (e) {
            console.error("Error Deleting Contact ", e.message);
            res.status(500).send({
                message: "Error Deleting Contact",
                error: e.message
            })
        }
    }


    public async checkIfContactExists(_id) {
        return await !ContactSchema.find({_id: _id});
    }
}
