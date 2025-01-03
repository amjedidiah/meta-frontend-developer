const { default: TestRunner } = require("jest-runner");
const addFive = require("../module-4/addFive");

test("returns the number plus 5", () => {
  expect(addFive(1)).toBe(6);
});
