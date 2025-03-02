const puppeteer = require("puppeteer");
const generateStyle1Html = require("../templates/styles1");

class PdfService {
  async generatePdfFromData(userData) {
    try {
      const browser = await puppeteer.launch({
        headless: "new", // Para evitar problemas de compatibilidad
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });
    
      
      const page = await browser.newPage();

      const contentHtml = generateStyle1Html(userData) 
     
      await page.setContent(contentHtml);

      // const pdfBuffer = await page.pdf({ format: "A4" });
      const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });


      await browser.close();

      return Buffer.from(pdfBuffer);
    } catch (error) {
      console.error("Error generando PDF:", error);
      throw error; // Propaga el error al controlador
    }
  }

}

module.exports = new PdfService();
