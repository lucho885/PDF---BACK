// src/app.js
const express = require("express");
const pdfRoutes = require("./routes/pdf.routes");
const bodyParser = require("body-parser");
const cors = require("cors");


  

const app = express();
app.use(cors());
// Aumentar el límite del JSON para aceptar imágenes en Base64 grandes
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.get("/", (req, res) => {
    res.send("El backend está funcionando 🚀");
  });
app.use(express.json()); // Middleware para JSON
app.use("/pdf", pdfRoutes); // Usa las rutas de usuarios

module.exports = app;
