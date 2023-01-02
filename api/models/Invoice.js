import mongoose from "mongoose";

const InvoiceSchema = mongoose.Schema({
    customerName: {type: String, require: true},
    customerPhoneNumber: {type: String, require: true},
    paymentMode: {type: String, require: true},
    subTotal: {type: Number, require: true},
    cartItems: {type: Array, require: true},
    tax: {type: String, require: true},
    totalAmount: {type: Number, require: true}
    
},{timestamps: true})

export default mongoose.model("invoices", InvoiceSchema)

