
//is indirect call
//callback function
//Event handler
//Listener
//nonblocking function
function processRequest1(){
    console.log("Processing request...1");
    console.log("performing task 1");
    console.log("Generating Response  1");
    console.log("sending Response  1");
}


//nonblocking function
function processRequest2(){
    console.log("Processing request..2.");
    console.log("performing task 2");
    console.log("Generating Response 2");
    console.log("sending Response 2");
}


//processRequest();





//setInterval is direct call but processRequest is indirect call
setInterval(processRequest1, 4000); // 4 seconds
setInterval(processRequest2, 1000); // 4 seconds

console.log("stoping main function");

