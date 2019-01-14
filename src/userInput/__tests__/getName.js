// const { prompt } = require("../__mocks__/prompt");

// jest.mock(prompt);
// const promptly = jest.genMockFromModule("promptly");

jest.mock("promptly");
const promptly = require("promptly");
const { getName } = require("../index");

describe("#getName", () => {
  beforeEach(() => {
    promptly.prompt.mockImplementation(() => Promise.resolve("josh"));
  });
  afterEach(() => {
    promptly.prompt.mockReset();
  });
  it("returns the correct value", () => {
    expect.assertions(1);
    return getName().then(name => {
      expect(name).toEqual("josh");
    });
  });
  it("implements promptly.prompt correctly", () => {
    expect.assertions(2);
    return getName().then(name => {
      expect(promptly.prompt).toHaveBeenCalledTimes(1);
      expect(promptly.prompt).toHaveBeenCalledWith("What is your name?: ");
    });
  });
});
