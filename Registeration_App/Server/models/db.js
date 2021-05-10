const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) return console.log(`Failed to connect DataBase ${error}`);
    console.log("DataBase Connected Successfully");
  }
);
