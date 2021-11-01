"use strict";
//Libreria para ocultar la url de la db
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

//llamada de las variables del archivo .env
const URL = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3999;

mongoose.connect(URL, { useNewUrlParser: true }, (err, res) => {
  if (err) throw err;
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Shoppingify API RESTful API server started on port ${PORT}`);
  });
});
