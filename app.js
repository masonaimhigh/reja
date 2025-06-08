console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

//MongoDB 
const bd = require("./server").db();

//1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:Session code

//3: View code
// BCCR - backend da view, fronted yasaymiz, bu tradational usul - backend html yasab climate ga yuboramiz
app.set("views", "views");
app.set("view engine", "ejs");

//4: Routing code
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style= "background: red">Hello World </h1>`);
// });

// app.get("/gift", function (req, res) {
//   res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", (req, res) => {
  res.render("reja");
});
module.exports = app;