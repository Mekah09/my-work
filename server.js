const express = require("express");
const dotenv = require("dotenv");
const userRoute = require("./route/todo.route")
const connectDB = require("./config/db")
dotenv.config();
const PORT = process.env.PORT;
const authRoute = require("./route/auth.route")
const app = express();

app.use(express.json())
app.use("/", userRoute)
app.use("/auth", authRoute)
// app.get("/home", (req, res) => {
//     res.send("Hello world")
// })

connectDB();

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
} )