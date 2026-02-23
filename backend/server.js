const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./config/db"); 
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

dotenv.config();
connectDatabase();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    // origin: "http://localhost:5173",
    origin: "https://unique-truffle-fa8a4f.netlify.app/",
    credentials: true
}));

app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});