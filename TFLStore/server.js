const exp = require("constants");

var express=require('express');
var path=require('path');

var app=express();
var credentials=require("./data/credentials.json");
var flowers=require("./data/flowers.json");
var customers=require("./data/customers.json");

//product catalog

//CRM data


var orders=[
            
        ];
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//node js application consist of 5 http handlers 
//node js application consist of 4 rest api handlers 
app.get("/",function(req,res){
    res.sendFile("index.html");
});

//web query:http//localhost:9898/api/flowers
//sql query:select * from flowers;
app.get("/api/flowers",(request,response)=>{
    response.send(flowers);

});

//when client application invoke web api and received json data as response it is called as rest api
//it is also called as web api, web service or web listner    
//web query:http//localhost:9898/api/flowers/2
//sql query:select * from flowers where id=2;

//web api Handler mapped with web query
app.get("/api/flowers/:id",(request,response)=>{
    // scope variable
    //web query processing logic
    let id=request.params.id;
    let flower=flowers.find(product=>product.id==id);
    response.send(flower);
});



app.get("/api/customers",(request,response)=>{
    response.send(customers);

});

app.get("/api/customers/:id",(request,response)=>{
    let id=request.params.id;
    let cust=customers.find(cust=>cust.id==id);
    response.send(cust);
});

//http post handlers
app.post("/api/login",(request,response)=>{
    console.log("Login post is invoked");
    var user=request.body;
   /* if(user.username=="sanika"&& user.password=="sanika"){
        response.send("valid user");

    }
    else{
        response.send("invalid user");
    }*/
   let theUser=credentials.find(credential=>credential.username==user.username && credential.password==user.password);
    let message="invalid user";
   if(theUser!==undefined){
        message="valid user";
    }
    response.send(message);
    

    /*check credentials against mysql database
    and send proper response back to calling client application*/ 
});


app.post("/api/register",(request,response)=>{
    console.log("Register post is invoked");
    var newCustomer=request.body;
    customers.push(newCustomer);
    response.send("Customer registered successfully");
    /*Insert newly created customers details to mysql database customer table*/ 


});


app.post("/api/flowers",(request,response)=>{
    let newFlower=request.body;
    flowers.push(newFlower);
    response.send("Flower added successfully");
});

app.delete("/api/flowers/:id",(request,response)=>{
    let id=request.params.id;
    let remainingFlowers=flowers.filter(f=>f.id!=id);
    flowers=remainingFlowers;
    response.send("Flower deleted successfully");
});
app.listen(9898);
console.log("Server is running on port 9898");


