function outer(){
    inner();
    function inner(){
        console.log(b);
    }
}
var b=10;
outer();
console.log(b);


// SCOPE:
// where can this variable/function be accessed in the Code 
//                            O R
// is variable/function inside the scope of code /function 


// lexical environment=local memory+lexical environment of parent;

// scope chain: chain of lexical environment and the parent refferences;