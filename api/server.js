import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import Categories from "./routes/categories.js"
import Products from "./routes/products.js"
import Invoices from "./routes/invoices.js"
import Auth from "./routes/auth.js"
import Users from "./routes/users.js"
import logger from "morgan"

const app = express();
const port =  3011;

dotenv.config();

const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI, () => {
            console.log("connected db")
        })
        
    }catch(error){
        throw error
    }
}
// middlewares
app.use(logger("dev"))
app.use(express.json())
app.use(cors())

app.use("/api/categories", Categories)
app.use("/api/products", Products)
app.use("/api/invoices", Invoices)
app.use("/api/auth", Auth)
app.use("/api/users", Users)

app.get("/", (req,res) => {
    res.send("hello")
})

app.listen(port, () => {
    connect();
    console.log(`Exaffmple port listening ${port}`)
})

