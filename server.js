console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//1: Kirish kodlari
app.use(express.static("public"));
app.use(express.json()); // => json formatni object ga o'girib beradi
app.use(express.urlencoded({ extended: true })); // html dan traditional request - forum request  bor, forumda post qilganda express qabul qilib oladi

//2:Session code

//3: View code
// BCCR - backend da view, fronted yasaymiz, bu tradational usul - backend html yasab climate ga yuboramiz
app.set("views", "views");
app.set("view engine", "ejs"); // views ni ichidan o'qiydi - folder name same

//4: Routing code
app.get("/hello", function (req, res) {
  res.end(`<h1 style= "background: red">Hello World </h1>`);
});

app.get("/gift", function (req, res) {
  res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app); // app variable ni pass qilamiz
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
});
