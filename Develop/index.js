// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your Project Name!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description about your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description about your project!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List steps on how the user installs your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like your project to have?',
        choices: ['MIT', 'ISC', 'Apache-2.0', 'BSD-3-Clause', 'None'],
        default: 'None'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How does the user test the project?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub Username?',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please enter your GitHub Username!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./Your-README/README.md', generateMarkdown(data), err => {
        if (err) {
            reject(err);
            return;
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    })
    .catch((error) => {
        if (error) {
            throw new Error('Error!');
        }
    })

}

// Function call to initialize app
init();
