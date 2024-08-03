const mongoose = require("mongoose");

let mongoConfig = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database Connected"));
};

module.exports = mongoConfig;
