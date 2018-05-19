import { rem } from "polished";

const height = 24;

export default (increment = 1) => {
  const space = increment * height;
  return rem(space);
};
