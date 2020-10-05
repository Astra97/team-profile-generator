const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UoA";
  const intern = new Intern("Abel", 1, "test@test.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("Abel", 1, "test@test.com", "UoA");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UoA";
  const intern = new Intern("Abel", 1, "test@test.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});