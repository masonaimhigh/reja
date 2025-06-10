const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://heymino68:j7VCfV5DG8USSZDE@cluster0.ldqpz00.mongodb.net/Reja";

mongodb.connect(connectionString,
     {
      useNewUrlParser: true, 
     useUnifiedTopology: true
    }, 
    (err, client) => {
        if(err) console.log("Error on connection MongoDB",err);
        else {
            console.log("MongoDb connection succeed");
            module.exports = client;
            
            const app = require("./app");
            const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running succesfully on port: ${PORT}`);
  console.log(
    `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
  );
});      }
});
