const fs = require('fs');
const inquirer = require('inquirer');

//Test question
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
]);
