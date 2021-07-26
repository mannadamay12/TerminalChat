export const createToken = () =>
  "x"
    .repeat(20)
    .replace(/x/g, () => Math.floor(Math.random() * 16).toString(16));
