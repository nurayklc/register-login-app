const mongoose = require("mongoose");
require('dotenv').config()


// Connect DB
const connenct = mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.eugm0.mongodb.net/registerLoginApp?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Database is connected successfully!");
  }).catch(()=>{
    console.log('Database is disconnected successfully');
  });

module.exports = connenct;