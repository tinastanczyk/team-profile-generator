const Employee = require('../lib/Employee.class');

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id' and 'email' property when called with the 'new' keyword", () => {
      // Arrange
      const obj = new Employee();
      // Assert
      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });
    it("should set 'name', 'id' and 'email' when created", () => {
      // Arrange
      const name = "Sal";
      const id = 123;
      const email = "developer@gmail.com"
      // Act
      const obj = new Employee(name, id, email);
      // Assert
      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
    // exception test
    it("obj.name, obj.id, obj.email should return undefined if there are no parameters passed in", () => {
      // Arrange
      const obj = new Employee();
      // Assert
      expect(obj.name).toBe(undefined);
      expect(obj.id).toBe(undefined);
      expect(obj.email).toBe(undefined);
    });
  });
});