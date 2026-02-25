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




const corsOptions = {
  origin: "https://spontaneous-chebakia-c0484d.netlify.app",
//   origin: "http://localhost:5173",
 methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};


app.use(cors(corsOptions));
app.options("*", (req, res) => res.sendStatus(200));

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Server running successfully 18:34");
});

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});