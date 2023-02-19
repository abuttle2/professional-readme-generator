const fs = require('fs');
const inquirer = require('inquirer');

//Test question
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
]).then((answers) => {
    // Generate README file based on the users answers
    fs.writeFile('README.md', answers.title, (error) => {
        error ? console.error(error) : console.log('Generated README File!');
    });
}).catch((error) => console.log(error));
