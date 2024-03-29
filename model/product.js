const mongoose = require("mongoose");
const { Schema } = mongoose;

// Schema
const productSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, min: [0, "minimum is 0"] },
  discountPercentage: {
    type: Number,
    min: [0, "minimum is 0"],
    max: [50, "maximum is 50"],
  },
  rating: {
    type: Number,
    min: [0, "minimum is 0"],
    max: [5, "maximum is 5"],
    default: 0,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: String,
  images: [String],
});

// Model
exports.Product = mongoose.model("Product", productSchema);
