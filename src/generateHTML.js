// const Employee = require('./lib/Employee.class');

function renderCard(emp) {
  let particular = "";
  switch(emp.getRole()){
    case 'Manager':
      particular = `Office Number: ${emp.officeNumber}`;
      break;
    case 'Engineer': 
      particular = `Github: <a href="https://github.com/${emp.github}" target="_blank">${emp.github}</a>`;
      break;
    case 'Intern':
      particular = `School: ${emp.school}`;
      break;
  }
  return `<section class="col d-flex justify-content-center">
  <article class="card border-primary mb-3" style="width: 18rem">
      <article class="card-header bg-primary text-white border-success">
        <h2 class="card-title">${emp.getName()}</h2>
        <h3 class="card-text">${emp.getRole()}</h3>
      </article>
      <article class="card-body border-success bg-light">
        <ul class="list-group list-group-flush border">
          <li class="list-group-item">ID: ${emp.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></li>
          <li class="list-group-item">${particular} </li>
        </ul>
      </article>
  </article>
</section>`;
}

function generateHTML(emp) {
  let cards = [];
  emp.map(member => {
    switch(member.getRole()){
      case 'Manager':
        let managerCard = renderCard(member);
        cards.push(managerCard);
        break;
      case 'Engineer':
        let engineerCard = renderCard(member);
        cards.push(engineerCard);
        break;
      case 'Intern':
        let internCard = renderCard(member);
        cards.push(internCard);
        break;
    }
  })
  let cardHTML = cards.join("");
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profile</title>
    </head>
    <body>
      <header>
        <h1 class="text-center bg-danger text-white" style="padding: 1rem">My Team</h1>
      </header>
      <main class="container">
        <section class="row row-cols-1 row-cols-md-3 g-4 align-middle" style="padding: 1rem">
          ${cardHTML}
        </section>
      </main>
    </body>
  </html>
  `;
}

module.exports = generateHTML;
