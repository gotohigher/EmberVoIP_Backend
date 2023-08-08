const WebSocket = require("ws");

const serverUrl = "wss://west01.embervoip.net:8089/ws";

const ws = new WebSocket(serverUrl, ["protocolOne", "protocolTwo"]);

ws.on("open", () => {
  console.log("Connected to the WebSocket server");

  // Send a message to the server
  ws.send("Hello, server!");
});

ws.on("message", (data) => {
  console.log("Received message:", data);
});

ws.on("close", () => {
  console.log("Disconnected from the WebSocket server");
});

ws.on("error", (error) => {
  console.error("WebSocket error:", error);
});
