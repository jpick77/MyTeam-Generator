const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const tempHTML = require('./src/tempHTML.js');
// const { createConnection } = require('net');
// const { type } = require('os');

let teamArray = [];


function addManager() {
    inquirer.prompt([
        {type: 'input',
        message: "What is the team managers name?",
        name: 'name',
        validate: (value)=>{if(value){return true} else {return "Please provide team managers name."}}},

        {type: 'input',
        message: "What is their employee ID number?",
        name: 'id',
        validate: (value)=>{if(value){return true} else {return "Please provide team managers ID."}}},

        {type: 'input',
        message: "What is their email address?",
        name: 'email',
        validate: (value)=>{if(value){return true} else {return "Please provide their email."}}},

        {type: 'input',
        message: "What is their office number?",
        name: 'officeNumb',
        validate: (value)=>{if(value){return true} else {return "Please provide their office number."}}},])


        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumb);
            teamArray.push(manager);
            anotherOne();
         })

}


function addEngineer() {
    inquirer.promt([
        {type: 'input',
        message: "What is engineer's name?",
        name: 'name',
        validate: (value)=>{if(value){return true} else {return "Please provide engineer's name."}}},

        {type: 'input',
        message: "What is engineer's ID?",
        name: 'id',
        validate: (value)=>{if(value){return true} else {return "Please provide engineer's ID."}}},

        {type: 'input',
        message: "What is engineer's email?",
        name: 'email',
        validate: (value)=>{if(value){return true} else {return "Please provide engineer's email."}}},

        {type: 'input',
        message: "What is the engineer's GitHub?",
        name: 'github',
        validate: (value)=>{if(value){return true} else {return "Please provide engineer's GitHub."}}},])


        .then((answers) => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamArray.push(engineer);
            anotherOne();
         })
}


function addIntern() {
    inquirer.prompt([
        {type: 'input',
        message: "What is the intern's name?",
        name: 'name',
        validate: (value)=>{if(value){return true} else {return "Please provide the intern's name."}}},

        {type: 'input',
        message: "What is the intern's ID?",
        name: 'id',
        validate: (value)=>{if(value){return true} else {return "Please provide the intern's ID."}}},

        {type: 'input',
        message: "What is the intern's email?",
        name: 'email',
        validate: (value)=>{if(value){return true} else {return "Please provide the intern's email."}}},

        {type: 'input',
        message: "What is the intern's school?",
        name: 'school',
        validate: (value)=>{if(value){return true} else {return "Please provide the intern's school."}}},])

        .then((answers) => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            teamArray.push(intern);
            anotherOne();
         })
}


function anotherOne() {
    inquirer.prompt([
        {type: 'list',
        message: "Would you like to add another employee?",
        name: 'another',
        choices: ['Manager', 'Engineer', 'Intern']},])

        .then((answers) => {
            if (answers.another === 'Manager') {
                addManager();
            }

            else if (answers.another === 'Engineer') {
                addEngineer();
            }

            else if (answers.another === 'Intern') {
                addIntern();
            }

            else {
                creation(teamArray);
            }
        })
}


function creation() {

    const data = tempHTML(teamArray);
    writeFileAsync('myTeam.html', data);
}


function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {if (err) {
        return console.log(err);
    }

    console.log("Congrats!! Your file is created!") });
}


const writeFileAsync = util.promisify(writeToFile);



async function init() {
    console.log("Welcome to the Team Profile Generator!");
    addManager();
}


// Function to call and initialize the app
init();