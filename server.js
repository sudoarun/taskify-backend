const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/taskifyRoutes");
// PORT of the app
const PORT = process.env.PORT || 5500;
// MongoDB Connection
mongoose.connect(
  "mongodb+srv://unlock:z3YGdZmeSOM8Oi7r@userdb.pwbrr.mongodb.net/?retryWrites=true&w=majority&appName=userDB"
);
const db = mongoose.connection;
// MongoDB Connection test
db.on("error", () => console.log("Error in connection"));
db.once("open", () => console.log("MongoDB Connected"));
// app initialize
const app = express();
app.use(express.json());
// Routes initialize
app.use(router);
// Default Route
app.get("/", (req, res) => {
  res.send("Server is live");
});
// Error for unknown route
app.use((req, res) => {
  return res.json({ message: "Oops you are lost !" });
});

// Listening on Port

app.listen(PORT, () => {
  console.log("server started...");
});
