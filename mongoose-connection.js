const mongoose = require("mongoose");
const debug = require('debug')("development:mongoose")
mongoose
  .connect("mongodb://127.0.0.1:27017/khaatabookn18")
  .then(function () {
    debug("connected to Mongo");
  })
  .catch(function (err) {
    debug(err);
  });

  
let db = mongoose.connection;

module.exports = db;

