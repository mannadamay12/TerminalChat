export const fetchMessage = (message, token) => {
  const messageObject = JSON.parse(message);
  if (messageObject.token === token) return;

  const stdout = process.stdout;

  stdout.clearLine();
  stdout.write(`${messageObject.username}: ${messageObject.content}`);
  stdout.write("\n> ");
};
