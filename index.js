const express = require("express");
const app = express();
let PORT = process.env.PORT || 5000; //assignment research about MVC architecture
// console.log(PORT);

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/mangsir-group", function (req, res) {
  res.send("frontend completed");
});
app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});
