import Readline from "readline";

export const readline = Readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
