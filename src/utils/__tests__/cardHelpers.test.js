const cardHelpers = require("../cardHelpers");

describe("cardHelpers utility functions", () => {
  describe("#getInitialHand", () => {
    // @TODO: mock chance.integer to more appropriately test this function
    it("returns two items in an array", () => {
      const result = cardHelpers.getInitialHand();
      expect(result.length).toBe(2);
      expect(result).toBeArray;
    });
  });
  describe("#initialCardNumericalConverter", () => {
    const { initialCardNumericalConverter } = cardHelpers;
    describe("when fed a number", () => {
      it("returns that number", () => {
        const result = initialCardNumericalConverter(4);
        expect(result).toBe(4);
      });
    });
    describe("when fed a face card", () => {
      it("returns 10", () => {
        const result = initialCardNumericalConverter("J");
        expect(result).toBe(10);
      });
    });
    describe("when fed an Ace", () => {
      it("returns 'A'", () => {
        const result = initialCardNumericalConverter("A");
        expect(result).toBe("A");
      });
    });
  });
});
