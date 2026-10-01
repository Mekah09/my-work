const express = require("express");
const route = express.Router();
const {register, getAuthdetails, login, getProfile, uploadData} = require("../controller/auth.controller")
const uploadGuard = require("../middleware/uploadGuard");

route.post("/register", register)
route.get("/registers", getAuthdetails)
route.post("/login", login)
route.get("/profile", getProfile)

route.post("/upload",  uploadGuard.single("image"), uploadData)

module.exports = route