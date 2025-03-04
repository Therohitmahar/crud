import express from "express";
import mongoose from "mongoose";
import { Product } from "./models/product.model.js";

const app = express();
const port = 4000;
app.use(express.json());

app.listen(port, () => {
  console.log("hello world");
});

app.get("/", (req, res) => {
  res.status(200).json({ some: "Hello world!" });
});

app.post("/product/create", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/product/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://therohitmahar:uOgcx1N9zbUN7D5L@cluster0.dlbgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connection done");
  })
  .catch((err) => console.log("failed", err));
