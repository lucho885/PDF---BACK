const puppeteer = require("puppeteer");
const generateStyle1Html = require("../templates/styles1");

class PdfService {
  async generatePdfFromData(userData) {
    try {
      const browser = await puppeteer.launch({
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || "/usr/bin/google-chrome-stable", // Ruta del navegador en Render
        headless: "new", // Para evitar problemas de compatibilidad
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      const page = await browser.newPage();

      const contentHtml = generateStyle1Html(userData); // Generar HTML

      await page.setContent(contentHtml); // Establecer el contenido

      const pdfBuffer = await page.pdf({ format: "A4", printBackground: true }); // Crear el PDF

      await browser.close();

      return Buffer.from(pdfBuffer); // Retornar el PDF en formato buffer
    } catch (error) {
      console.error("Error generando PDF:", error);
      throw error; // Propagar el error al controlador
    }
  }
}

module.exports = new PdfService();
