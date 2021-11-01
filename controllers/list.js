"use strict";
const List = require("../models/list");

let controller = {
  addList: (req, res) => {
    let list = new List();
    let params = req.body;
    let date = new Date();

    console.log(params);
    if (
      params.name === undefined ||
      params.name === " " ||
      params.items.length <= 0 ||
      params.completed === undefined
    ) {
      res.status(200).send({
        message: "El nombre de la lista es obligatorio"
      });
      return;
    }
    list.name = params.name;
    list.items = params.items;
    list.date = date.getTime();
    list.completed = params.completed;

    list.save((err, listStored) => {
      if (err) {
        res.status(500).send({
          message: "Error al guardar la lista",
          error: err
        });
      } else {
        if (!listStored) {
          res.status(404).send({
            message: "No se ha guardado la lista"
          });
        } else {
          res.status(200).send({
            list: listStored
          });
        }
      }
    });
  }
};

module.exports = controller;
