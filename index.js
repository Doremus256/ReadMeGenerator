const fs = require("fs");
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// array of questions for user
const questions = [ {
    type: "input",
    message: "What is the title of your company?",
    name: "Title"
}, {
    type: "input",
    message: "What is your github username?",
    name: "Username",
}, {
    type: "input",
    message: "What is your email address?",
    name: "Email",
}, {
    type: "input",
    message: "What is your project name?",
    name: "Name",
}, {
    type: "input",
    message: "Write a short descrition of your project",
    name: "Description",
}, {
    type: "input",
    message: "What kind of license should your project have?",
    name: "License",
}, {
    type: "input",
    message: "How do you install your project?",
    name: "Installation",
}, {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "Usage",
}, {
    type: "input",
    message: "How can the user contribute to the repo?",
    name: "Contribution",
},];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    });}

// function call to initialize program
init();

