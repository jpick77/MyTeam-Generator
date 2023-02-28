const Employee = require('../lib/employee.js');



test('creates object from Employee to test', () => {
    const employee = new Employee('Sofia', 20, 'probalysoficke@gmail.com');


    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});


test('gets name from getName()', () => {
    const employee = new Employee('Sofia', 20, 'probalysoficke@gmail.com');
    expect(employee.getName).toEqual(expect.any(String));
});


test('gets ID # from getId()', () => {
    const employee = new Employee('Sofia', 20, 'probalysoficke@gmail.com');
    expect(employee.getId).toEqual(expect.any(Number));
});


test('gets email from getEmail()', () => {
    const employee = new Employee('Sofia', 20, 'probalysoficke@gmail.com');
    expect(employee.getEmail).toEqual(expect.any(String));
});


test('gets role from getRole()', () => {
    const employee = new Employee('Sofia', 20, 'probalysoficke@gmail.com');
    expect(employee.getRole).toEqual(expect.any(String));
});