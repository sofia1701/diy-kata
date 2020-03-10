const { humanCatDogYears } = require("../src");

// Look Ma, no handlebars!!!
describe("humanCatDogYears", () => {
  test("returns array of human, cat and dog years when passed human years", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
    expect(humanCatDogYears(11)).toEqual([11, 60, 69]);
    expect(humanCatDogYears(5)).toEqual([5, 36, 39]);
    expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
  });
});
