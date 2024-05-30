const express = require('express');
const app = express();
const path = require('path');
const db = require("./config/mongoose-connection");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const usermodel = require("./models/users-model")
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.use(cookieparser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
 


app.listen(process.env.PORT || 3000);

