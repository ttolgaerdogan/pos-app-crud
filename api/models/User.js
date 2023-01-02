import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
},{timestamps: true})

export default mongoose.model("users", UserSchema)
