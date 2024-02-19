const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const { PORT } = require("./config"); // Ensure FRONTEND_URL is configured in your config file
const routes = require("./routes");
const http = require("http");

// Assuming FRONTEND_URL is something like "https://staging.nhc.narsunprojects.com"
// Connect with the database
require("./db");

// Server configuration
const app = express();
const server = http.createServer(app);

// Configure Socket.IO with CORS
const io = require("socket.io")(server, {
  cors: {
    origin: "*", // Allows requests from all origins
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // This is important for sessions or when using cookies
  },
  path: "/socket.io", // Keep the custom Socket.IO path
});

// Attach io to the app object
global.io = io;

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Middleware for handling FormData
app.use(upload.single("file"));

// CORS configuration for Express to accept requests from FRONTEND_URL
app.use(
  cors({
    origin: "*", // Allows requests from all origins
    credentials: true, // This is important for sessions or when using cookies
  })
);

// For parsing application/json
app.use(bodyParser.json());

// Backend APIs
app.use("/api", routes);

// Socket.IO connection handler
io.on("connection", (socket) => {
  console.log(socket, "<==socket");
  console.log("A user connected", socket.id);

  // Handle socket events here
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
// For sockets
require("./routes/sockets");
require("./routes/pubNub");

// Start the server
server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
