const Employee = require('./Employee.class');
class Engineer extends Employee {
  constructor(github){
    super(github);
    this.github = github;
  }
  getGithub(){
    return this.github;
  }
  getRole(){
    return "Engineer"
  }
}
module.exports = Engineer;