const {
  personalIcon,
  resumeIcon,
  workIcon,
  educationIcon,
  skillsIcon,
} = require("../../utils/utils");


function generateStyle1Html(userData) {
  // Verifica si hay una imagen en base64
  const imageTag = userData.image
    ? `<div style="display: flex; align-items: center; gap: 10px; margin: -7px 0 -20px 0; ">
      <img src="${userData.image}" style="width: 40px; height: 40px; border-radius: 55%; display: block;">
       <h1>${userData.personalData.name}</h1>
      </div>`
    : `<h1>${userData.personalData.name}</h1>`;

    const workExperience = `
    <div class="barra">
      <img class="icon" src="${workIcon}" alt="Work Icon" class="icon">
      <span>Work Experience</span>
    </div>
    ` +
    userData.workExperience
      .map(
        (job) => `
        <div class="work">
          <div class="position">
            <h3 class="jobPosition">${job.position}</h3>
            <h3 class="jobPosition">${job.data}</h3>
          </div>
  
            <p class="place">${job.place}</p>
            <p class="description">${job.description}</p>
        </div>
      `
      )
      .join("");

  // education
  const education =
    `
  <div class="barra">
    <img class="icon" src="${educationIcon}" alt="Education Icon" class="icon">
    <span>Education and Qualifications</span>
  </div>
  ` +
    userData["education"]
      .map(
        (edu) => `
      <p><strong>${edu.title}</strong> (${edu.data})</p>
      <p>${edu.place}</p>
    `
      )
      .join("");

  // Personal Data
  const formattedData = `
  <div class="barra">
    <img class="icon" src="${personalIcon}" alt="Personal Icon" class="icon">
    <span>Personal</span>
  </div>
  
  <div style="display: flex; gap: 50px;">
    <div class="personal-info-labels">
      ${Object.entries(userData.personalData)
        .filter(([key, value]) => key !== "image" && value)
        .map(([key]) => {
          const label = key
            .replace(/_/g, " ")
            .replace(/^\w/, (c) => c.toUpperCase());
          return `<p class="info-label">${label}</p>`;
        })
        .join("")}
    </div>

    <div class="personal-info-values">
      ${Object.entries(userData.personalData)
        .filter(([_, value]) => value)
        .map(([_, value]) => `<p class="info-value">${value}</p>`)
        .join("")}
    </div>
  </div>
`;

    
  //Resume objetive
  const resumeObjetive = `
    <div class="barra">
    <img class="icon" src="${resumeIcon}" alt="Personal Icon" class="icon">
    <span>Resume Objetive</span>
  </div>
  <p>${userData.resumeObjetive}</p>
    `;
    
  //skills
  const skills =
    `
  <div class="barra">
    <img class="icon" src="${skillsIcon}" alt="Skills Icon" class="icon">
    <span>Skills</span>
  </div>
  ` +
    userData.skills
      .map((skill) => `<p><strong>${skill.name}:</strong> ${skill.level}</p>`)
      .join("");

  const htmlContent = `
    <html>
      <head>
        <style>
          @page:first {
            size: A4;
            margin: 0px 33px 33px 33px;
          }
          @page {
            margin: 33px 33px;
          }
          body {color: red;font-family: sans-serif; letter-spacing: 0.4px; line-height: 1.5;}
          .work p { margin: 5px 0; padding: 0;}
          .work {margin-bottom: 20px}
          .position {display: flex; justify-content: space-between;}
          p { font-size: 12px; color: #333333;}
          h1 {color: #333333; font-weight: 500;}
          .place {font-size: 12px; font-style: italic;}
          span {color: #333333; font-weight: 500;}
          .barra {padding: 10px; display: flex;page-break-inside: avoid; align-items: center; background-color: #f5f5f5; width: 100%; height: 20px; padding-left: 10px; font-weight: bold; margin: 20px 0; color: #333333; gap: 6px;}
          .jobPosition {font-weight: 600; font-size: 12px; color: #333333; margin: 0 0;}
          .icon {width: 16px; height: 16px; margin-right: 8px; color: #333333;}
          .personal-info-item {display: grid; grid-template-columns: 1fr 2fr; margin-bottom: 7px;}
          .info-value {font-weight: 700; font-size: 12px; margin: 5px;}
          .info-label { font-size: 12px; margin: 5px;}
          .description {color: #3B3B3B;}
          p {color: #333333;}
        </style>
      </head>
      <body>
        ${imageTag}
        ${formattedData}
        ${resumeObjetive}
        ${workExperience}
        ${education}
        ${skills}
      </body>
    </html>
    `;

  return htmlContent;
}

module.exports = generateStyle1Html;
