const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  // how do we create specs again???
  it("returns Yes when passed true ", () => {
    expect(booleanToWord(true)).toBe("Yes");
  });

  it("returns No when passed false ", () => {
    expect(booleanToWord(false)).toBe("No");
  });
});