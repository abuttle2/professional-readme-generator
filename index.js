const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateReadme = require("./utils/generateReadme.js");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for the project:",
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to include a table of contents?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    }];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log("README file has been generated!");
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readme = generateReadme(answers);
        const fileName = "README.md";
        const filePath = path.join(process.cwd(), fileName);
        writeToFile(filePath, readme);
        console.log(filePath)
    });
}

// function call to initialize program
init();