"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  name: String,
  items: [{ type: Schema.ObjectId, ref: "Product", amount: Number }],
  date: { type: Date, default: Date.now },
  completed: Boolean
});

module.exports = mongoose.model("List", ListSchema);
