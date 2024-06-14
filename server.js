const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/taskifyRoutes");
const env = require("dotenv");
env.config();
// PORT of the app
const PORT = process.env.PORT || 5500;
const URI = process.env.MONGODBURL || "mongodb://127.0.0.1:27017/taskify";
// MongoDB Connection
mongoose.connect(URI);
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
  console.log(`Server started on Port ${PORT}`);
});
