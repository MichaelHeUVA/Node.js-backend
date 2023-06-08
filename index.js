const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/post", (req, res) => {
  res.send("hi globe");
});

app.listen(process.env.PORT || 3000, (error) => {
  if (error) console.log(error);
  else console.log("http://localhost:3000");
});
