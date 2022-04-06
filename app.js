const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("./database/dbConnect");
const MongoStore = require('connect-mongo');
const flash = require('flash')
const dotenv = require("dotenv").config();

const userRouter = require('./router/userRouter')

// TEMPLATE ENGINE
app.set("view engine", "ejs");


// Global Variables
global.userIN = null;

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: "register_login_app",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eugm0.mongodb.net/registerLoginApp?retryWrites=true&w=majority`,
    }),
  })
);

app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
// Routes
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});

app.use('/users', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at ${port} port`);
});
