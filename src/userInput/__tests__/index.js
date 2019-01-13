// const { prompt } = require("../__mocks__/prompt");

// jest.mock(prompt);
// const promptly = jest.genMockFromModule("promptly");

jest.mock("promptly");
var promptly = require("promptly");
const { getName } = require("../index");

describe("#getName", () => {
  it("returns the correct value and is called once", () => {
    promptly.prompt.mockReturnValue(Promise.resolve("josh"));
    expect.assertions(2);
    return getName().then(name => {
      expect(name).toEqual("josh");
      expect(promptly.prompt).toHaveBeenCalledTimes(1);
    });
  });
});
