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
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU', 'Apache', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is the project URL?',
    }];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", (error) => {
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