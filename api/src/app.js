const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const cors = require("cors");

const server = express();

server.name = "API";

server.use(
  cors({
    origin: "https://recipesjb.vercel.app", // Restrict access to your frontend origin
    credentials: true, // Enable credentials (if needed)
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"], // Allowed headers
  })
);

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
  next();
});

server.use("/", routes);

server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;

  res.status(status).send(message);
});
server.use("*", (req, res) => {
  res.status(404).send("Path Not Found");
});
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
