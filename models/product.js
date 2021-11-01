"use strict";
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  note: String,
  image: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});

ProductSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.__v;
  return obj;
};

module.exports = mongoose.model("Product", ProductSchema);
