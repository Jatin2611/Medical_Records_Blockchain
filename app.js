//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home");
});

app.get("/register",function(req,res){
  res.render("register");
});

app.get("/upload-history",function(req,res){
  res.render("upload-history");
});

app.post("/register",function(req,res){
  console.log(req.body.username);
  console.log(req.body.email);
  console.log(req.body.password);
  console.log(req.body.role);
  console.log(req.body.License_no);
  res.send("Successfully submitted..!");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
