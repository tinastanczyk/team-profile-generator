const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require('./src/generateMarkdown');

const managerQuestions = [
  {
    type: "input",
    message: `Enter the team manager's name: `,
    name: "managerName",
  },
  {
    type: "input",
    message: `Enter the team manager's employee ID: `,
    name: "managerId",
  },
  {
    type: "input",
    message: `Enter the team manager's email: `,
    name: "managerEmail",
  },
  {
    type: "input",
    message: `Enter the team manager's office number: `,
    name: "managerOffice",
  },
  {
    type: "list",
    message: `Choose a following option: `,
    choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
    name: "addToTeam",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: `Enter the Engineer's name: `,
    name: "engineerName",
  },
  {
    type: "input",
    message: `Enter the Engineer's employee ID: `,
    name: "engineerId",
  },
  {
    type: "input",
    message: `Enter the Engineer's email: `,
    name: "engineerEmail",
  },
  {
    type: "input",
    message: `Enter the Engineer's Github username: `,
    name: "engineerGithub",
  },
  {
    type: "list",
    message: `Choose a following option: `,
    choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
    name: "addToTeam",
  },
];

const internQuestions = [
  {
    type: "input",
    message: `Enter the Intern's name: `,
    name: "internName",
  },
  {
    type: "input",
    message: `Enter the intern's employee ID: `,
    name: "internId",
  },
  {
    type: "input",
    message: `Enter the intern's email: `,
    name: "internEmail",
  },
  {
    type: "input",
    message: `Enter the intern's Github username: `,
    name: "internGithub",
  },
  {
    type: "list",
    message: `Choose a following option: `,
    choices: ["Add an Engineer", "Add an Intern", "Finish building my team"],
    name: "addToTeam",
  },
];

function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerData) => {
    switch (engineerData.addToTeam) {
      case "Add an Engineer":
        addEngineer();
        break;
      case "Add an Intern":
        addIntern();
        break;
      case "Finish building my team":
        writeToHtml(engineerData);
        break;
    }
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((internData) => {
    switch (internData.addToTeam) {
      case "Add an Engineer":
        addEngineer();
        break;
      case "Add an Intern":
        addIntern();
        break;
      case "Finish building my team":
        writeToHtml(internData);
        break;
    }
  });
}

function writeToHtml(teamData) {
  fs.writeFile("./dist/index.html", markDown(teamData), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

function init() {
  inquirer.prompt(managerQuestions).then((managerData) => {
    switch (managerData.addToTeam) {
      case "Add an Engineer":
        addEngineer();
        break;
      case "Add an Intern":
        addIntern();
        break;
      case "Finish building my team":
        writeToHtml(managerData);
        break;
    }
  });
}

init();
