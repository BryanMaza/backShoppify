"use strict";
const Product = require("../models/product");
const Category = require("../models/category");

let controller = {
  addProduct: function (req, res) {
    const params = req.body;
    const product = new Product();

    if (
      params.name === undefined ||
      params.category === undefined ||
      params.name === " " ||
      params.category === " "
    ) {
      res.status(400).send({
        message: "Envie los datos necesarios"
      });
      return;
    }

    //Comprobamos que el producto no exista
    Product.findOne({ name: params.name }, (err, productStored) => {
      if (err) {
        res.status(500).send({
          message: "Error en la petición"
        });
      } else {
        if (productStored) {
          res.status(200).send({
            message: "El producto ya existe"
          });
        } else {
          //Buscamos si la categoria existe
          Category.findOne({ name: params.category }, (err, category) => {
            if (err) {
              res.status(500).send({
                message: "Error en la petición"
              });
            } else {
              if (!category) {
                //Si no existe la creamos
                const newCategory = new Category();
                newCategory.name = params.category;
                newCategory.save();
              } else {
                //Guardamos el producto
                product.name = params.name;
                product.note = params.note;
                product.image = params.image;
                product.name = params.category;
                product.save((err, productStored) => {
                  if (err) {
                    res.status(500).send({
                      message: "Error en la petición"
                    });
                  } else {
                    if (!productStored) {
                      res.status(404).send({
                        message: "No se ha guardado el producto"
                      });
                    } else {
                      res.status(200).send({
                        product: productStored
                      });
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  },
  getProduct: function (req, res) {
    let productId = req.params.id;

    Product.findById(productId, (err, product) => {
      if (err) {
        res.status(500).send({
          message: "Error en la petición"
        });
      } else {
        if (!product) {
          res.status(404).send({
            message: "El producto no existe"
          });
        } else {
          res.status(200).send({
            product
          });
        }
      }
    });
  },
  getProducts: function (req, res) {
    Product.find({}, (err, products) => {
      if (err) {
        res.status(500).send({ message: "Error al devolver los productos" });
      } else {
        if (!products) {
          res.status(404).send({ message: "No hay productos" });
        } else {
          res.status(200).send({ products });
        }
      }
    });
  }
};

module.exports = controller;
