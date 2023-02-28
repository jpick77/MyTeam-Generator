const Engineer = require('../lib/engineer.js');


test('creates object from engineer to test', () => {
    const engineer = new Engineer('Jacob', 23, 'probablyjpickron30@gmail.com', 'jpick77');
    

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});



test('get name from getName()', () => {
    const engineer = new Engineer('Jacob', 23, 'probablyjpickron30@gmail.com', 'jpick77');
    expect(engineer.getName()).toEqual(expect.any(String));
});


test('get ID # from getId()', () => {
    const engineer = new Engineer('Jacob', 23, 'probablyjpickron30@gmail.com', 'jpick77');
    expect(engineer.getId()).toEqual(expect.any(Number));
});


test('get email from getEmail()', () => {
    const engineer = new Engineer('Jacob', 23, 'probablyjpickron30@gmail.com', 'jpick77');
    expect(engineer.getEmail()).toEqual(expect.any(String));
});


test('get github from getGithub()', () => {
    const engineer = new Engineer('Jacob', 23, 'probablyjpickron30@gmail.com', 'jpick77');
    expect(engineer.getGithub()).toEqual(expect.any(String));
});


test('get role from getRole()', () => {
    const engineer = new Engineer('Jacob', 23, 'probablyjpickron30@gmail.com', 'jpick77');
    expect(engineer.getRole()).toEqual(expect.any(String));
});