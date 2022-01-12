const Engineer = require('../lib/Engineer.class');

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing a 'name', 'id', 'email' and 'github' property when called with the 'new' keyword", () => {
      // Arrange
      const obj = new Engineer();
      // Assert
      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("github" in obj).toEqual(true);
    });
    it("should set 'github' when created", () => {
      // Arrange
      const github = "mollyEngineer"
      // Act
      const obj = new Engineer(github);
      // Assert
      expect(obj.github).toEqual(github);
    });
    // exception test
    it("obj.github should return undefined if there are no parameters passed in", () => {
      // Arrange
      const obj = new Engineer();
      // Assert
      expect(obj.github).toBe(undefined);
    });
  });
});