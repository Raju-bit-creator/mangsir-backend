const express = require("express");
const { chats } = require("./data/data");
const app = express();
let PORT = process.env.PORT || 5000; //assignment research about MVC architecture
// console.log(PORT);

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/mangsir-group", function (req, res) {
  res.send("frontend completed");
});
app.get("/chats", function (req, res) {
  res.json(chats);
});
app.get("/chats/:id", function (req, res) {
  console.log(req);

  const singleChat = chats.find((c) => c._id === req.params.id);
  // console.log(singleChat);
  res.json(singleChat);
});
app.listen(PORT, () => {
  console.log(`api is running on port ${PORT}`);
});
