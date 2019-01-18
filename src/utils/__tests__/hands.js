const { getBlackjackHands } = require("../hands");

describe("#getBlackjackHands", () => {
  it("returns n number of arrays when fed n as arg", () => {
    const result = getBlackjackHands(3);
    expect.assertions(4);
    expect(result.length).toBe(3);
    result.forEach(hand => {
      expect(Array.isArray(hand)).toBeTruthy();
    });
  });
});
