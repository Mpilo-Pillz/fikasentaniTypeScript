const express = require("express");
const bodyParser = require("body-parser");

const todoRoutes = require("./routes/todos");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(
    "Just creating this middleware to say aaaaa for the day I finally understand what a middleware is"
  );
  next();
});

app.use(todoRoutes);

app.listen(3000);
