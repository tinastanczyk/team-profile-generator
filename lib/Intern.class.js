const Employee = require('./Employee.class');
class Intern extends Employee {
  constructor(school){
    super(school);
    this.school = school;
  }
  getSchool(){
    return this.school;
  }
  getRole(){
    return "Intern"
  }
}
module.exports = Intern;