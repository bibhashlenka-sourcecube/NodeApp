const express = require("express");
const server = express();
const productController = require("../controller/product");

const router = express.Router();

router
  .post("/", productController.createProduct)
  .get("/", productController.readProducts)
  .get("/:id", productController.readProductByID)
  .put("/:id", productController.replaceProduct)
  .patch("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct);

exports.router = router;
