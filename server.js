import WebSocket from "ws";

import { sendAll } from "./src/server/sendAll.js";

const serverSocket = new WebSocket.Server({ port: 8080 });

export const clientSockets = [];

serverSocket.on("connection", (clientSocket) => {
  clientSockets.push(clientSocket);
  clientSocket.on("message", (message) => {
    sendAll(message);
  });
});

serverSocket.on("listening", () => console.log("Server is online!"));
