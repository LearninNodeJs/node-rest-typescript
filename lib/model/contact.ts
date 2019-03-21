import * as mongoose from "mongoose"

export const ContactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    company: {type: String, required: true},
    phone: {type: Number, required: true},
    created_date: {type: Date, default: Date.now()}
})