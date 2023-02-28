function managerCard(manager) {
    return `<div class="card text-center" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Manager</h5>
        <h6 class="card-subtitle mb-2 text-muted">${manager.name}</h6>
        <p class="card-text">ID #: ${manager.id}</p>
        <p class="card-text">Office #: ${manager.officeNumber}</p>
        <p class="card-text">Email: <a href="mailto: ${manager.email}">${manager.email}</a></p>
        </div>
        </div>`
}

function engineerCard(engineer) {
    return `<div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Engineer</h5>
      <h6 class="card-subtitle mb-2 text-muted">${engineer.name}</h6>
      <p class="card-text">ID #: ${engineer.id}</p>
      <p class="card-text">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></p>
      <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
    </div>
  </div>`
}


function internCard(intern) {
    return `<div class="card text-center" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Intern</h5>
      <h6 class="card-subtitle mb-2 text-muted">${intern.name}</h6>
      <p class="card-text">ID #: ${intern.id}</p>
      <p class="card-text">Email: <a href="mailto: ${intern.email}">${intern.email}</a></p>
      <p class="card-text">School: ${intern.school}</p>
    </div>
  </div>`
}


function generateHTML(teamArray) {
    let cardArray = [];

    for (let i = 0; i < teamArray.lenght; i++) {
        const employee = teamArray[i];
        constrole = employee.getRole();


        if(role === 'Manager') {
            const manager = managerCard(employee);
            cardArray.push(manager);
        }

        if(role === 'Engineer') {
            const engineer = engineerCard(employee);
            cardArray.push(engineer);
        }


        if(role === 'Intern') {
            const intern = internCard(employee);
            cardArray.push(intern);
        }
    }

    const employeeCards = cardArray.join(''); // combining  cards code
   
    const teamCode = HTMLbase(employeeCards);
    return teamCode;

}


function HTMLbase(employeeCards) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MyTeam Generator</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
    <header class="header">MyTeam!!</header>
    <main>
        <div class="container card-group">
            ${employeeCards}
        </div>
    </main>
    </body>
    </html>`
}

module.exports = generateHTML;