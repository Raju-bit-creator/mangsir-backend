const express = require("express");
const dbConnect = require("./db");
const app = express();
let PORT = process.env.PORT || 5000; //assignment research about MVC architecture
// console.log(PORT);
dbConnect();
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/api/auth", require("./routes/Auth"));
// app.use("/api/product", require('./routes.js/Products'));

app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});
