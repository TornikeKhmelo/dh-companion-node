const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const db = require("./dbConfig");

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

// GET all tasks
server.get("/tasks", async (req, res) => {
  try {
    const tasks = await db("tasks");
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
  }
});

// // POST TASK
server.post("/tasks", async (req, res) => {
  const { existingTasks, newTask } = req.body;
  try {
    const [id] = await db("tasks").insert(newTask);
    res.status(201).json({ ...newTask, id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating task" });
  }
});

// UPDATE task
server.put("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  const { title, details, completed } = req.body;
  try {
    const currentTask = await db("tasks")
      .where({ id })
      .update({ title, details, completed });
    res.status(200).json({ message: "Update successful!" });
  } catch (err) {
    console.log(err);
  }
});
// DELETE a Task by id
server.delete("/tasks/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db("tasks").where({ id }).del();
    res.status(200).json({ message: "Delete successful!" });
  } catch (err) {
    console.log(err);
  }
});
// DELETE all Task

server.delete("/tasks", async (req, res) => {
  const { completed } = req.query;
  try {
    const deleteQuery = db("tasks");
    if (completed !== undefined) {
      await deleteQuery.where({ completed: completed == 1 }).del();
    } else {
      await deleteQuery.del();
    }
    res.status(200).json({ message: "Tasks deleted successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to delete tasks" });
  }
});

module.exports = server;
