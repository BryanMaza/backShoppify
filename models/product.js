"use strict";
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  note: String,
  image: String,
  category: String
});

ProductSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.__v;
  delete obj._id;
  return obj;
};

module.exports = mongoose.model("Product", ProductSchema);
