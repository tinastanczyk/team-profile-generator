// importing inquirer package, filesystem, htmlgenerator, manager class, engineer class and intern class.
const inquirer = require("inquirer");
const fs = require("fs");
const htmlGen = require('./src/generateHTML');
const Manager = require('./lib/Manager.class');
const Engineer = require('./lib/Engineer.class');
const Intern = require('./lib/Intern.class');
// initialized an array to pass in manager, engineer and intern objects to pass into htmlgenerator file
const teamData = [];
// prompts for entering manager, engineer and intern data
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
// using inquirer package to prompt user to enter engineer data
function addEngineer() {
  inquirer.prompt(engineerQuestions).then((engineerData) => {
    // creating a new instance of engineer every time addEngineer() is called and setting user input to object's key values
    const engineer = new Engineer();
    engineer.name = engineerData.engineerName;
    engineer.id = engineerData.engineerId;
    engineer.email = engineerData.engineerEmail;
    engineer.github = engineerData.engineerGithub;
    // if the user selects one of the prompts from the menu list then different functions are called, but the new engineer objects is always pushed into the teamData array
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
// using inquirer package to prompt user to enter intern data
function addIntern() {
  inquirer.prompt(internQuestions).then((internData) => {
    // creating a new instance of intern every time addIntern() is called and setting user input to object's key values
    const intern = new Intern();
    intern.name = internData.internName;
    intern.id = internData.internId;
    intern.email = internData.internEmail;
    intern.school = internData.internSchool;
    // if the user selects one of the prompts from the menu list then different functions are called, but the new intern objects is always pushed into the teamData array
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
// this function creates a new index.html file in desired path and writes what htmlGen returns after teamData is passed in, returns an error if it cannot write to file
function writeToHtml() {
  fs.writeFile("./dist/index.html", htmlGen(teamData), (err) => {
    err ? console.error(err) : console.log("Success!");
  });
}
// this function initializes the application by prompting the user for the manager's data using the inquirer package
function init() {
  inquirer.prompt(managerQuestions).then((managerData) => {
    // a new instance of manager is created every time the application runs and the user's inputs to the object's key values
    const manager = new Manager();
    manager.name = managerData.managerName;
    manager.id = managerData.managerId;
    manager.email = managerData.managerEmail;
    manager.officeNumber = managerData.managerOffice;
    // if the user selects one of the prompts from the menu list then different functions are called, but the new intern objects is always pushed into the teamData array
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