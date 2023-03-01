const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    // GitHub url in generateHTML.js

    getGithub() {
        return this.github;
    };


    getRole() {
        return this.role;
    }; //return 'Engineer'

}

module.exports = Engineer;