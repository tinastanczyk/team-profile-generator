// const Employee = require('./lib/Employee.class');

function renderCard(emp) {
  
  return `<section class="col">
  <article class="card border-primary mb-3" style="max-width: 18rem">
    <section class="card-body">
      <h2 class="card-title">${data.managerName}</h2>
      <p class="card-text">Manager</p>
    </section>
  </article>
</section>`;
}

function generateMarkdown(emp) {
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
      <h1>My Team</h1>
    </header>
    <main>
      <section class="row row-cols-1 row-cols-md-3 g-4">
        ${renderCard(emp)}
      </section>
    </main>
  </body>
</html>`;
}

module.exports = generateMarkdown;
