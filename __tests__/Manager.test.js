const Manager = require('../lib/Manager.class');

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', 'email' and 'school' property when called with the 'new' keyword", () => {
      // Arrange
      const obj = new Manager();
      // Assert
      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("officeNumber" in obj).toEqual(true);
    });
    it("should set 'officeNumber' when created", () => {
      // Arrange
      const officeNumber = 777;
      // Act
      const obj = new Manager(officeNumber);
      // Assert
      expect(obj.officeNumber).toEqual(officeNumber);
    });
    // exception test
    it("obj.officeNumber should return undefined if there are no parameters passed in", () => {
      // Arrange
      const obj = new Manager();
      // Assert
      expect(obj.officeNumber).toBe(undefined);
    });
  });
});