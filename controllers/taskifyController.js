const taskify = require("../models/taskifyModel");

// get all todo's
exports.get = async (req, res) => {
  try {
    const allTask = await taskify.find(req.query);
    if (!allTask) {
      return res.status(200).json("Not task found");
    }
    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// create method
exports.create = async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ message: "task field is required" });
    }
    const makeTask = new taskify({ ...req.body, isCompleted: false });
    await makeTask.save();
    res.status(201).json(makeTask);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
// delete method
exports.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const task = await taskify.findByIdAndDelete(id);
    if (!task) {
      return res.status(400).json("message: Id is not availble in database");
    }

    res.status(200).json({ message: "Todo is deleted" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
// update method
exports.update = async (req, res) => {
  try {
    const { id, task, isCompleted } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Enter a valid Id" });
    }
    const updateTask = await taskify.findByIdAndUpdate(id, {
      task: task,
      isCompleted: isCompleted,
    });
    if (!updateTask) {
      return res.status(400).json("Task not found");
    }
    res.status(200).json({ message: "Data Updated" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
