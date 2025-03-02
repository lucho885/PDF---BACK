const fs = require("fs");
const path = require("path");

// Ruta absoluta de la fuente en utils/fonts/
const fontPath = path.join(__dirname, "fonts", "VeganStylePersonal.ttf");

// Lee la fuente y la convierte a Base64
const fontData = fs.readFileSync(fontPath).toString("base64");

module.exports = {
    fontData
  };


