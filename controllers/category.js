"use strict";
const Category = require("../models/category");

let controller = {
  getCategories: function (req, res) {
    Category.find({}, (err, categories) => {
      if (err) {
        return res
          .status(500)
          .send({ message: `Error al realizar la peticion: ${err}` });
      }
      if (!categories) {
        return res.status(404).send({ message: `No existen categorias` });
      }
      res.status(200).send({ categories });
    });
  }
};

module.exports = controller;
