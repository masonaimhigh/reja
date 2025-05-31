console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");


// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true})); // html form recieved

//2 Session

//3 Views - BSSR backenda frontend 
app.set('views', "views");
app.set("view engine", "ejs");

//4 Routing
app.get("/hello", function(req, res){
    res.end("Hello World");
}); 

app.get("/gift", function(req, res){
    res.end("Siz sovgalar pagedasiz");
}); 

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function(){
    console.log(`The server is running successfully on port: ${PORT}`);
})