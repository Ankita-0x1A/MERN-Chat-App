// const dotenv = require("dotenv");
// const express = require("express");
// const { chats } = require("./data/data");
// const connectDB = require("./config/db");

// dotenv.config();   // FIRST
// const app = express();

// connectDB();       // 

// app.get("/", (req, res) => {
//   res.send("API is running succesfully!! ye");
// });

// app.get("/api/chats", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chats/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );


const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

// 🔥 Load env FIRST (VERY IMPORTANT)
dotenv.config({ path: __dirname + "/.env" });

// 🔥 Connect DB AFTER env
connectDB();

const app = express();

app.use(express.json()); // to accept JSON data

// Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

// 🔥 PORT fix
const PORT = process.env.PORT || 5000;

// 🔥 Start server
const server = app.listen(PORT, () =>
  console.log(`Server running on PORT ${PORT}...`)
);

// 🔥 Socket.io setup
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Connected to socket.io");

  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });

  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });

  socket.on("typing", (room) => socket.in(room).emit("typing"));

  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  // socket.on("new message", (newMessageRecieved) => {
  //   const chat = newMessageRecieved.chat;

  //   if (!chat.users) return console.log("chat.users not defined");

  //   chat.users.forEach((user) => {
  //     if (user._id === newMessageRecieved.sender._id) return;

  //     socket.in(user._id).emit("message recieved", newMessageRecieved);
  //   });
  // });

  socket.on("new message", (newMessageRecieved) => {
  const chat = newMessageRecieved.chat;

  if (!chat.users) return console.log("chat.users not defined");

  chat.users.forEach((user) => {
    if (user._id === newMessageRecieved.sender._id) return;

    socket.in(user._id).emit("message recieved", newMessageRecieved);
  });
  });

  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
  });
});

