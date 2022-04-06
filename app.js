const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("./database/dbConnect");
const MongoStore = require("connect-mongo");
const flash = require("flash");
const dotenv = require("dotenv").config();

const pageRouter = require("./router/pageRouter");
const userRouter = require("./router/userRouter");

// TEMPLATE ENGINE
app.set("view engine", "ejs");


// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', pageRouter);
app.use("/users", userRouter);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at ${port} port`);
});
