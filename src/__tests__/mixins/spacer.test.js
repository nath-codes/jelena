import spacer from "../../mixins/spacer";

describe("spacer mixin", () => {
  it("should return correct line-height at large breakpoint", () => {
    const lineHeight = spacer(1, "large");
    expect(lineHeight).toEqual("1.5rem");
  });

  it("should return correct line-height at medium breakpoint", () => {
    const lineHeight = spacer(1, "medium");
    expect(lineHeight).toEqual("1.4rem");
  });

  it("should return correct line-height at small breakpoint", () => {
    const lineHeight = spacer(1, "small");
    expect(lineHeight).toEqual("1.3rem");
  });
  it("should return correct line-height at extra-small breakpoint", () => {
    const lineHeight = spacer(1, "extra-small");
    expect(lineHeight).toEqual("1.2rem");
  });
  it("should return default line-height", () => {
    const lineHeight = spacer();
    expect(lineHeight).toEqual("1.2rem");
  });
});
