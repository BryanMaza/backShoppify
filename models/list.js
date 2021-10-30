"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = require("./product");

const ListSchema = new Schema({
  name: String,
  items: [{ type: Product.schema, ref: "Product" }],
  date: { type: Date, default: Date.now },
  state: String
});

module.exports = mongoose.model("Category", ListSchema);
