const Intern = require('../lib/Intern.class');

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', 'email' and 'school' property when called with the 'new' keyword", () => {
      // Arrange
      const obj = new Intern();
      // Assert
      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });
    it("should set 'school' when created", () => {
      // Arrange
      const school = "tinaSchool"
      // Act
      const obj = new Intern(school);
      // Assert
      expect(obj.school).toEqual(school);
    });
    // exception test
    it("obj.school should return undefined if there are no parameters passed in", () => {
      // Arrange
      const obj = new Intern();
      // Assert
      expect(obj.school).toBe(undefined);
    });
  });
});