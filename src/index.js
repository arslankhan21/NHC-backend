const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

// connect with db
require("./db");

const { PORT } = require("./config");
const routes = require("./routes");

//Sever config
const app = express();
const http = require("http").Server(app);
global.io = require("socket.io")(http, { path: "/socket.io" });

app.get("/", (req, res) => {
  res.send("Queue System Server");
});

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware for handling FormData
app.use(upload.single("file"));

app.use(cors());

// for parsing application/json
app.use(bodyParser.json());

// For backend APIs
app.use("/api", routes);

// For sockets
require("./routes/sockets");

http.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
