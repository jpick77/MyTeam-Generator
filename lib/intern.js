const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }

    getSchool() {
        return this.school;
    };
    
    getRole() {
        return this.role;
    }; // return 'Intern'

}

module.exports = Intern;