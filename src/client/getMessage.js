import { readline } from "./readline.js";

export const getMessage = (clientSocket, username, token) => {
  readline.question("> ", (answer) => {
    clientSocket.send(
      JSON.stringify({
        username: username,
        token: token,
        content: answer,
      })
    );
    getMessage(clientSocket, username, token);
  });
};
