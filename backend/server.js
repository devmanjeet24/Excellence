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

/* ✅ FULLY OPEN CORS (DEV MODE) */
app.use(cors({
  origin: true,        // allow ALL origins dynamically
  credentials: true    // allow cookies
}));

app.options("*", cors()); // handle preflight

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Server running successfully 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});