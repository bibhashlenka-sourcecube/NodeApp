const fs = require("fs");
const model = require("../model/product");
const { assert } = require("console");
const mongoose = require("mongoose");
const Product = model.Product;
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

exports.createProduct = async (req, res) => {
  const products = new Product(req.body);
  try {
    const res1 = await products.save();
    res.status(201).json(res1);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.readProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.readProductByID = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({ _id: id });
  res.json(product);
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    );
    res.status(201).json(doc);
  } catch (error) {
    res.status(400).json(error);
  }
};
