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
    name: "installation",
    message: "Please provide installation instructions for your project.",
},
{
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
},
{
    type: "list",
    name: "license",
    message: "Select the type of license you would like for your project:", 
    choices: ["MIT", "Apache", "GPL", "None"],
},
{
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project.",
},
{
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project.",
},
{
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
},
{
    type: "input",
    name: "questionsEmail",
    message: "Please provide an email address for questions about your project.",
    
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
      writeToFile("./utils/README.md", generateMarkdown({ ...responses }));
    });
  }
// Function call to initialize app
init();
