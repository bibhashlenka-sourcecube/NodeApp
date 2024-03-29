// by using core nodejs
// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log("��️req.url --->", req.url);

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id == +id);
//     res.setHeader("Content-Type", "text/html");
//     let newIndex = index
//       .replace("**title**", product.title)
//       .replace("**url**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating);
//     res.end(newIndex);
//     return;
//   }

//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html");
//       res.end(index);
//       break;
//     case "/api":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//     default:
//       res.writeHead(400, { "Content-Type": "text/plain" });
//       res.end();
//   }

//   console.log("server started");
// });

// server.listen(3000);

// by using express

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//db connection
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to db");
}

// body parser - middleware
server.use(cors());
server.use(express.json());
// server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "/index.html"));
});

// console.log(process?.env?.DB_PASSWORD);

// server.use(express.urlencoded({ extended: true }));
// server.use(morgan("dev"));
// server.use(morgan("common"));

// middleware
// server.use((req, res, next) => {
//   console.log("req.url --->", req.method, req.ip, req.hostname);
//   next();
// });

// // middleware
// const auth = (req, res, next) => {
// if (req.query.password === "123") {
// if (req.body.password === "123") {
//   next();
// } else {
//   res.sendStatus(401);
// }
// next();
// };
// // middleware
// server.use(auth);

// API - Endpoint -Route

// Products
// API ROOT , base URL,

// MVC model - view - controller

// server.get("/demo", (req, res) => {
// res.sendStatus(404);
// res.send(index);
// res.json(products);
// });

server.listen(process.env.PORT, () => {
  console.log("server started");
});
