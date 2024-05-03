// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
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
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)


  ## Project Description
  ${data.description}
  
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Testing
  ${data.tests}

  ## Questions
  If you have any questions, please feel free to reach out to me at ${data.questionsEmail} or visit my GitHub profile at [${data.github}](
  `;
}

module.exports = generateMarkdown;