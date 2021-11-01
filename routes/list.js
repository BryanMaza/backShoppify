"use strict";
const express = require("express");
const listController = require("../controllers/list");
const router = express.Router();

router.post("/list", listController.addList);

module.exports = router;
