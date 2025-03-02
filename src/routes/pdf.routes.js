// src/routes/user.routes.js
const express = require("express");
const router = express.Router();
const PdfController = require("../controllers/pdf.controller")

router.post("/", PdfController.getUsers);

module.exports = router;
