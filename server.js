console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});


// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true})); // html form recieved

//2 Session
//3 Views - BSSR backenda frontend 
app.set('views', "views");
app.set("view engine", "ejs");


//4 Routing code
app.post("/create-item", (req, res) => {      
    // TODO: code with db here
})

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function(req, res){               
    res.render("harid");
}); 


// app.get("/hello", function(req, res){
//     res.end("Hello World");
// }); 

// app.get("/gift", function(req, res){
//     res.end("Siz sovgalar pagedasiz");
// }); 

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
})