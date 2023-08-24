// Import required modules
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Define a function to collect user input through prompts
function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter the title of your project:',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Provide a brief description of your project:',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the installation steps for your application?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Explain how users should use your application:',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Guidelines for contributing to this project:',
                name: 'contributions',
            },
            {
                type: 'input',
                message: 'What are the testing instructions?',
                name: 'testing',
            },
            {
                type: 'list',
                message: 'Choose a license for your project:',
                name: 'license',
                choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC']
            },
            {
                type: 'input',
                message: 'Enter your GitHub username:',
                name: 'username',
            },
            {
                type: 'input',
                message: 'Provide your email address:',
                name: 'email',
            },
        ])
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            saveMarkdownToFile('ExampleREADME.md', markdownContent);
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
}

// Define a function to save generated markdown content to a file
function saveMarkdownToFile(filename, content) {
    fs.appendFile(filename, `${content}\n`, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('README file generated successfully!');
        }
    });
}

// Initialize the application
promptUser();
