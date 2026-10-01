const Data = require("../models/Todo.model.js")

function getTodo(req, res) {
  res.status(200).json({ message: "users fetched successfully", Data });
}

function addTodo(req, res) {
  try {
    const { taskName, completed } = req.body || {};

    if (!taskName || completed === undefined || completed === null) {
      return res.status(403).send("Name and Email is required")
    }

    const newData = {
      id: Data.length + 1,
      taskName: taskName,
      completed: completed,
      date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    Data.push(newData);
    res.status(201).send("Todo created successfully")

  } catch (error) {

    console.error(error)

  }
}

function getOneTodo(req, res) {
  try {
    const { id } = req.params

    if (isNaN(id)) {
      return res.status(400).send("Invalid ID")
    }

    const findOneTodo = Data.find(e => e.id === Number(id));

    if (!findOneTodo) {
      return res.status(404).send("Todo not Found")
    }

    res.status(200).json({ message: "Todo gotten successfully", findOneTodo })
  } catch (error) {
    console.error(error)
  }
}

function updateTodo(req, res) {
  try {
    const { id } = req.params
    const { completed } = req.body

    if (isNaN(id)) {
      return res.status(400).send("Invalid ID")
    }

    const findAndUpdate = Data.find(e => e.id === Number(id));

    if (!findAndUpdate) {
      return res.status(404).send("Status not Found")
    }

    if (!completed) {
      return res.status(400).send("Status is required")
    }

    findAndUpdate.completed = completed;

    res.status(200).json({ message: "todo status was updated successfully", findAndUpdate })
  } catch (error) {
    console.error(error)
  }

}

function removeTodo(req, res) {
  try {
    const { id } = req.params

    if (isNaN(id)) {
      return res.status(400).send("Invalid ID")
    }

    Data.filter(e => e.id !== Number(id))

    res.status(200).send("Todo deleted successfully")
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getTodo, addTodo, getOneTodo, updateTodo, removeTodo }