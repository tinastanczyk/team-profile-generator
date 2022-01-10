const Employee = require('./Employee.class');
class Manager extends Employee {
  constructor(officeNumber){
    super(officeNumber);
    this.officeNumber = officeNumber;
  }
  getRole(){
    return "Manager";
  }
}
module.exports = Manager;