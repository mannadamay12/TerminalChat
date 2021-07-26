import { clientSockets } from "../../server.js";

export const sendAll = (message) => {
  clientSockets.forEach((clientSocket) => {
    clientSocket.send(message);
  });
};
