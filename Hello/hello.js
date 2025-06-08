

//declare variables

var name="Transflor";
var status="false";
var count=67;

//json syntax
var flower={
  id:45,
  title:"Gerbera",
  description:"A wedding flower",
  unitprice:12,
  quantity:56000,
  likes:1200,

}
console.log("Hello, world!");
console.log(name);
console.log(status);
console.log(count);
//console.log(flower);


//Array

var flowers=[];   //empty array
var flowers=["Rose","Lilly","Tulip","Daisy","Orchid"];  //array with strings
var marks=[45,67,89,23,56];  //array with numbers

flowers=[
  
  {id:45, title:"Gerbera",description:"A wedding flower", unitprice:12,quantity:56000,likes:1200},
  {id:46, title:"Rose",description:"A wedding flower", unitprice:12,quantity:56000,likes:1200},
  {id:47, title:"Lilly",description:"A wedding flower", unitprice:12,quantity:56000,likes:1200},

  {id:48, title:"Tulip",description:"A wedding flower", unitprice:12,quantity:56000,likes:1200},
  {id:49, title:"Daisy",description:"A wedding flower", unitprice:12,quantity:56000,likes:1200}
]    //array of json objects
console.log(flowers[1]);