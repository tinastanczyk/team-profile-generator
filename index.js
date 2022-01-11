const inquirer = require("inquirer");
const fs = require("fs");
const markDown = require('./src/generateHTML');
const Employee = require('./lib/Employee.class');
const Manager = require('./lib/Manager.class');
const Engineer = require('./lib/Engineer.class');
const Intern = require('./lib/Intern.class');
const teamData = [];

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
    message: `Enter the intern's school: `,
    name: "internSchool",
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
    const engineer = new Engineer();
    engineer.name = engineerData.engineerName;
    engineer.id = engineerData.engineerId;
    engineer.email = engineerData.engineerEmail;
    engineer.github = engineerData.engineerGithub;
    switch (engineerData.addToTeam) {
      case "Add an Engineer":
        teamData.push(engineer);
        addEngineer();
        break;
      case "Add an Intern":
        teamData.push(engineer);
        addIntern();
        break;
      case "Finish building my team":
        teamData.push(engineer);
        writeToHtml();
        break;
    }
  });
}
function addIntern() {
  inquirer.prompt(internQuestions).then((internData) => {
    const intern = new Intern();
    intern.name = internData.internName;
    intern.id = internData.internId;
    intern.email = internData.internEmail;
    intern.school = internData.internSchool;
    switch (internData.addToTeam) {
      case "Add an Engineer":
        teamData.push(intern);
        addEngineer();
        break;
      case "Add an Intern":
        teamData.push(intern);
        addIntern();
        break;
      case "Finish building my team":
        teamData.push(intern);
        writeToHtml();
        break;
    }
  });
}

function writeToHtml() {
  console.log(teamData);
  fs.writeFile("./dist/index.html", markDown(teamData), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}

function init() {
  inquirer.prompt(managerQuestions).then((managerData) => {
    const manager = new Manager();
    manager.name = managerData.managerName;
    manager.id = managerData.managerId;
    manager.email = managerData.managerEmail;
    manager.officeNumber = managerData.managerOffice;
    switch (managerData.addToTeam) {
      case "Add an Engineer":
        teamData.push(manager);
        addEngineer();
        break;
      case "Add an Intern":
        teamData.push(manager);
        addIntern();
        break;
      case "Finish building my team":
        teamData.push(manager);
        writeToHtml();
        break;
    }
  });
}

init();
