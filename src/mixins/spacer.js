import { rem } from "polished";

const getLineHeight = breakpoint => {
  switch (breakpoint) {
    case "large":
      return 1.5;
    case "medium":
      return 1.4;
    case "small":
      return 1.3;
    case "extra-small":
    default:
      return 1.2;
  }
};

export default (increment = 1, breakpoint) => {
  const baseFontSize = 16;
  const lineHeight = getLineHeight(breakpoint);
  const spacer = increment * (baseFontSize * lineHeight);

  return rem(spacer);
};
