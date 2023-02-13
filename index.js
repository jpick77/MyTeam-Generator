const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const Manager = require('./classes/manager.js');
const Engineer = require('./classes/engineer.js');
const Intern = require('./classes/intern.js');
const generateHTML = require('./src/generateHTML.js');