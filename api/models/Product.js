import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title: {type: String, require: true},
    image: {type: String, require: true},
    price: {type: Number, require: true},
    category: {type: String, require: true}
},{timestamps: true})

export default mongoose.model("products", ProductSchema);