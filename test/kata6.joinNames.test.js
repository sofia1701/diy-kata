const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

    expect(joinNames(namesObj)).toBe("Bart, Lisa & Maggie");
  });
  test("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }, { name: "Sofia" }];

    expect(joinNames(namesObj)).toBe("Bart, Lisa, Maggie & Sofia");
  });
  test("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj = [{ name: "Bart" }, { name: "Lisa" }];

    expect(joinNames(namesObj)).toBe("Bart & Lisa");
  });
});
