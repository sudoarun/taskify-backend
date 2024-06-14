const express = require("express");
const taskifyController = require("../controllers/taskifyController");
const router = express.Router();
// all todo's
router.get("/getData", taskifyController.get);
// Create Todo
router.post("/create", taskifyController.create);
// Delete Todo
router.post("/delete", taskifyController.delete);
// Update existing todo
router.patch("/update", taskifyController.update);

module.exports = router;
