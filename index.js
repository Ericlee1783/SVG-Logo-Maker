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
        name: 'shapeColor',
    }
])
.then((response) => {
    const svgResult = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${response.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.color}">${response.text}</text>
  
  </svg>`;
  fs.writeFile('result.svg', svgResult, (err) => {
    if (err) throw err;
    console.log("Circle Created!")
  });
});