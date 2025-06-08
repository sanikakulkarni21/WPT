function show(){
var count=30;
count++; //or count=count+1;
console.log(count);
};



function display(company){
    console.log("company name=" +company);
};

function add(num1,num2){
    var result=num1+num2;
    return result;
};


function main(){
show(); //invoking javascript function

var company="transflower pvt ltd";
display(company);

var num1=10;
var num2=20;
var total=add(num1,num2);
console.log("Total=" +total);
}

main();