const express = require("express");
const cors = require("cors");
const { createServer } = require("http");
const port = 3000;
const app = express();
const server = createServer(app);

// Import the database models
const { users } = require("./database/index.js");

app.use(express.json());
app.use(cors());

server.listen(port, () => {
  // Log the server start message
  console.log("the server is listening on ", port);

  // Log the database synchronization message
  console.log("All models were synchronized successfully.");
});
