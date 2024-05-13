// 3 types of function 

// normal function 

function getready()
{
    console.log("brush");
    console.log("bath");
    console.log("breakfast");
    console.log("coading");
}

// function function_name(param1,param2)
// {
//     //do something
// }
// function_name(arg1,arg2);


// Example
function add(a,b)
{
    return a+b;
}
let ans=add(2,6);
console.log(ans);



// Function are treated as first class citizens in Javascropt
// function can be returned
// function can be passed as parameters/arguments

function calculator(str,a,b)
{
    if (str=='add')
    {
        function add(a,b)
        {
            return a+b;
        }
    }
    else if(str=='sub')
    {

    }
}
let returnFun=calculator('add',2,3);
console.log("Returned function is\n"+returnFun); //function print hoga
//returnFun()     //




// (2)  Function expression 
// Syntax
let variable_name=function function_name()
{
    // do something
}
//name of the variable is used to invoke the function
//variable_name(); 

// EXAMPLE

let sayhi=function abcd()
{
    console.log("Hello I am function expression");
}
sayhi();
// abcd(); // error abcd is not defined
console.log(sayhi)     //it will print the expression of the function 


// (3) IIFE-> Imediately invoke function expression 

function add(a,b)
{
    return a+b;
}
add(2,3)  

// let additionIIFE={function add(a,b){
//     return a+b;

// }
// }(20,30);  

// console.log(additionIIFE);
// // console.log(additionIIFE(20,30));



