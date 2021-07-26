import WebSocket from "ws";

import { getName } from "./src/client/getName.js";
import { getMessage } from "./src/client/getMessage.js";
import { createToken } from "./src/client/createToken.js";

import { fetchMessage } from "./src/client/fetchMessage.js";

const clientSocket = new WebSocket("ws://localhost:8080");

clientSocket.on("open", async () => {
  console.log("Connected to the server!");
  const token = createToken();
  const username = await getName();
  getMessage(clientSocket, username, token);

  clientSocket.on("message", (message) => fetchMessage(message, token));
});
