"use strict";
const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/product");
const listRoutes = require("./routes/list");
const categoryRoutes = require("./routes/category");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", listRoutes);

module.exports = app;
