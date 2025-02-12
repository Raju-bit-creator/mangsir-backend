const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/mangsir-group";

const dbConnect = () => {
  mongoose.connect(MONGO_URI).then(() => {
    console.log("mongodb connected successfully");
  });
};
module.exports = dbConnect;
