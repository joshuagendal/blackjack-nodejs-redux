jest.mock("promptly");
const promptly = require("promptly");
const { getNPlayers } = require("../promptUser/promptUser");

describe("#getNPlayers", () => {
  beforeEach(() => {
    promptly.prompt.mockImplementation(() => Promise.resolve(4));
  });
  afterEach(() => {
    promptly.prompt.mockReset();
  });
  it("returns the correct num of players received from user", () => {
    expect.assertions(1);
    return getNPlayers().then(n => expect(n).toEqual(4));
  });
  it("calls promptly.prompt exactly once w/ correct arg", () => {
    expect.assertions(2);
    return getNPlayers().then(n => {
      expect(promptly.prompt).toHaveBeenCalledTimes(1);
      expect(promptly.prompt).toHaveBeenCalledWith(
        "How many players would you like to include in this game?"
      );
    });
  });
});
