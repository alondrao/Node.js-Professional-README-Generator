// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (License === "None") {
    return ""; 
  }
  else {
    return `![License](https://img.shields.io/badge/License-${License}-blue.svg)`
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let LinkUrl = "";
  switch (license) {
    case "MIT":
      LinkUrl = "https://opensource.org/licenses/MIT";
      break;
    case "Apache":
      LinkUrl = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      LinkUrl = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "None":
      LinkUrl = "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  else {
    return `## License
    This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data)
  const { github, licenseChoice, confirmLiveLink, liveSiteLink, siteDemoLink, ...info } = data;

  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${info.description}
  ${renderLicenseSection(licenseChoice)} 
  ${renderLinkSection(liveSiteLink)}
  ${renderDemo(siteDemoLink)}

  ## Installation 
  ${info.installationInstructions}

  ## Usage 
  ${info.usageInstructions}

  ## Contribution
  ${info.contributionInstructions}

  ## Testing
  ${info.testInstructions}

  ## Questions
  Reach out to the repo owner, [${github}](https://github.com/${github}) at ${info.questionsEmail}.
  `;
}

module.exports = generateMarkdown;