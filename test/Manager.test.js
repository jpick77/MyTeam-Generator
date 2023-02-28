const Manager = require('../lib/manager');


test('creates object from manager to test', () => {
    const manager = new Manager('Jacob', 23, 'probablyjpickron30@gmail.com', 70);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets name from getName()', () => {
    const manager = new Manager('Jacob', 23, 'probablyjpickron30@gmail.com', 70);
    expect(manager.getName()).toEqual(expect.any(String));
});


test('gets ID # from getId()', () => {
    const manager = new Manager('Jacob', 23, 'probablyjpickron30@gmail.com', 70);
    expect(manager.getId()).toEqual(expect.any(Number));
});


test('gets email from getEmail()', () => {
    const manager = new Manager('Jacob', 23, 'probablyjpickron30@gmail.com', 70);
    expect(manager.getEmail()).toEqual(expect.any(String));
});


test('gets officeNumber from getOfficeNumb()', () => {
    const manager = new Manager('Jacob', 23, 'probablyjpickron30@gmail.com', 70);
    expect(manager.getOfficeNumb()).toEqual(expect.any(Number));
});


test('gets role from getRole()', () => {
    const manager = new Manager('Jacob', 23, 'probablyjpickron30@gmail.com', 70);
    expect(manager.getRole()).toEqual(expect.any(String));
});