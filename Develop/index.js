// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: input,
        name: Name,
        message: 'What is the name of your project?',
        validate: NAmeInput => {
            if (NAmeInput) {
              return true;
            } else {
              console.log('Please enter your Project Name!');
              return false;
            }
        }
    },
    {
        type: input,
        name: Description,
        message: 'Write a description about your product:',
        validate: DescriptionInput => {
            if (DescriptionInput) {
              return true;
            } else {
              console.log('Please enter a description about your project!');
              return false;
            }
        }
    },
    {
        type: input,
        name: Installation,
        message: 'How does the user install your project?'
    },
    {
        type: input,
        name: Usage,
        message: 'What does the user need to know about using your project?'
    },
    {
        type: input,
        name: Credit,
        message: 'List any collaborators and their links:'
    },
    {
        type: input,
        name: Liscense,
        message: 'What liscense would you like your project to have?'
    },
    {
        type: confirm,
        name: confrimFeatures,
        message: 'Does your project have any features you would like to add?',
        default: false
    },
    {
        type: input,
        name: Features,
        message: 'List your features below:',
        when: ({ confrimFeatures }) => confrimFeatures
    },
    {
        type: input,
        name: Contibute,
        message: 'What does the user need to know about contributing to the project?'
    },
    {
        type: input,
        name: Test,
        message: 'How does the user test the project?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
