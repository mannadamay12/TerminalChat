import { readline } from "./readline.js";

export const getName = () => {
  return new Promise((resolve, reject) => {
    readline.question("What would you like to be called?\n> ", (answer) => {
      console.log("You can now start messaging!");
      resolve(answer);
    });
  });
};
