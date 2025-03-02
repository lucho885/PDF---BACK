// src/controllers/user.controller.js
const PfdService = require("../services/pdf.service");

class PdfController {
  static async getUsers(req, res) {
    try {
      console.log("funciona")
      const userData = req.body; // Recibe la data enviada desde el frontend
      const pdfBuffer = await PfdService.generatePdfFromData(userData);

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=generated.pdf");
 
      res.send(pdfBuffer);
    } catch (error) {
      res.status(500).json({ message: "Error al generar el PDF" });
    }
  }

}

module.exports = PdfController;

