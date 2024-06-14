const mongoose = require("mongoose");
// Todo Schema
const taskifySchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    isCompleted: {
      type: Boolean,
      require: false,
    },
  },
  { timestamps: true }
);

const taskify = mongoose.model("Task", taskifySchema);
module.exports = taskify;
