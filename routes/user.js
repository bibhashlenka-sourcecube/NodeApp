const express = require("express");
const server = express();
const userController = require("../controller/user");

const router = express.Router();

router
  .post("/", userController.createUser)
  .get("/", userController.readUsers)
  .get("/:id", userController.readUserByID)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
