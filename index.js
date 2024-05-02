// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
 {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
},
{
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
},
{
    type: "input",
    name: "Table of Contents",
    message: "Please provide a Table of Contents for your project."
},   
{
    type: "input",
    name: "Installation",
    message: "Please provide installation instructions for your project.",
},
{
    type: "input",
    name: "Usage",
    message: "Please provide usage information for your project.",
},
{
    type: "checkbox",
    name: "License",
    message: "Please provide license information for your project.", 
},
{
    type: "input",
    name: "Contributing",
    message: "Please provide contribution guidelines for your project.",
},
{
    type: "input",
    name: "Tests",
    message: "Please provide test instructions for your project.",
},
{
    type: "input",
    name: "Questions",
    message: "Please provide contact information for your project.",
    
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Your Professional README.md File is being created...");
      writeToFile("./develp/dist/README.md", generateMarkdown({ ...responses }));
    });
  }
// Function call to initialize app
init();
