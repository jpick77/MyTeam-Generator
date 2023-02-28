const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumb){

        super(name, id, email);
        this.officeNumber = officeNumb;
        this.role = 'Manager';
    };

    getOfficeNumb() {
        return this.officeNumber;
    };

    getRole() {
        return this.role;
    }; // return 'Manager' 

}

module.exports = Manager;