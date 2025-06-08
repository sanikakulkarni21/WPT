


var express = require('express');

var path=require('path'); // path module to work with file paths

var app = express();  // get global object from framework
                    // global object contains http server

// for configuration of middleware
// for regestration of http requests with their handlers
var staticFolder=express.static(path.join(__dirname, 'public')); // public folder to serve static files 

//Express framework configuration
//configure static middleware
app.use(staticFolder);

// Express framework setting handlers
//mapping incomming request to callback function
//three request handlers are implemented
//
app.get("/",(request, response) => {
    response.sendFile(__dirname+"/index.html")

});

app.get("/hello",(request,response) => {
    var flower=[{"id":29,"name":"rose","unitprice":100}
    ];
response.send(flower);
})

app.listen(9000);
console.log("Express web application is listening on port no 9000");


