import express from "express"
import Category from "../models/Category.js"


const router = express.Router();

router.get("/get-all", async (req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post("/add-category", async (req,res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).json("category added succ");
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/update-category", async (req,res) => {
    try {
        await Category.findOneAndUpdate({_id: req.body.categoryId}, req.body);
        res.status(200).json("Item updaded")
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/delete-category", async (req,res) => {
    try {
        await Category.findOneAndDelete({_id: req.body.categoryId});
        res.status(200).json("Item deleted")
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router;