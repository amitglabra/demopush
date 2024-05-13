var x=10;
function greet(){
    console.log("Hello pepcoder");
}
console.log(x);      //10
greet();            //Hello pepcoder
console.log(greet)  // [Function: greet]    greet is a function
console.log(greet());  //undefined



console.log("2nd execution")
console.log(a);         //undefined   //because value of a is not initialized
hello();               //Hello Everyone
var a=20;
function hello(){
    console.log("Hello Everyone");
}
hello();             //Hello Everyone



// Javascript hoisting refers to the process whereby the interpreter appears to move the decleration of functions, 
// variables or classes to the top of their ScriptProcessorNode,prior to execution of the code 

// MY DEFINITION
// we can access the variables and the function even before we declere it.   //HOISTING


console.log(hello);
hello();
var hello=function(){                   //function expression
    console.log("YOU guys rocks");
}
hello();


// Function expression 
//     variable ke ander ek function hai
//              variable is initialized by undefinied

// function 
//     function   function: Bye(){

//     }
