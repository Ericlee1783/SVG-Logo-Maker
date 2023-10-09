const fs = require('fs');
const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        message: 'Enter up to 3 characters of text for the logo',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'color',
    },
    {
        type: 'list',
        message: 'Select a shape for the logo',
        name: 'shape',
        choices: ['triangle', 'circle', 'square'],
    },
    {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shape color',
    }
])