const mongoose = require("mongoose");

const connectDatabase = async () => {
  await mongoose.connect(process.env.MongoDB_URL);
  console.log("MongoDB Connected");
};

module.exports = connectDatabase;