// Starting JS--> JavaScript
// var let constant(const)

// variable decleration
var a; // datatype int string float not required
//variable initalization
a=10;
console.log(a);
a="Hello";
console.log(a)
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof(a));

a=null;
console.log(a);
console.log(typeof(a));


//Numbers
var num=10;
console.log(num);
var float=2.4;
console.log(float);

//Boolean
var t=true;
var f=false;
console.log(t);
console.log(f);

//String
//'',"",``
//single quotes, double quotes, backtick
var str='a';
console.log(typeof str);
str="I am Amit";
console.log(str);
console.log(typeof str);

str1="How you doing? \nI am fine how about you?";
console.log(str1);


var b=`hi hope you guys are able to graps the concept`;
console.log(b);

var num=200;
console.log(`half of ${num} is ${num/2}`);

//var has some problem
//redecleration is allowed
var r="hello";
console.log(r);
var r=100;
console.log(r);

//isko overcome krne ke liye
//let keyword is used
let l=100;
console.log(l);
    //syntax Error: identifier 'l' has already been decleared
//let l="200";         //Invalid it gives the error
console.log(l)


//we can reinitialize a variable but can not decleare it
//l=300;               //Valid
console.log(l);


//loops in JS
var num=10;
for(var i=0;i<num;i++)
{
    if(i%2==0)
    {
        console.log("num is even");
    }
}


//const keyword
//isme na hi decleare hota hai na hi initialization hota hai
// ekbaar declear ho gya to fir change nhi hoga 
const x=2;
console.log(x);


//const x=5;    //Invalid
console.log(x);
//Type Error:Assignment to constant variable
//x=10;         //Invalid
console.log(x );