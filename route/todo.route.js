const express = require("express");
const route = express.Router();
const { getTodo, addTodo, getOneTodo, removeTodo, updateTodo } = require("../controller/todo.controller")

route.get("/get", getTodo)
route.post("/add", addTodo)
route.get("/todo/:id", getOneTodo)
route.put("/todo/:id", updateTodo)
route.delete("/delete/:id", removeTodo)


module.exports = route