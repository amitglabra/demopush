//string is a sequence of characters

var str="hello pepcoder";
console.log(str);
console.log(str[0]);   //h
console.log(str[4]);   //o
console.log(str.length);  //it will gives the length of string

//string method

// (1) Extraction method 

//slice method 
//slice(start,end) -> start index is inclusive and end index is exclusive
//slice(start,end)
let slicedStr =str.slice(2,7);
console.log(slicedStr);
console.log(str);
var slicestr=str.slice(6);
console.log(slicestr);   //6 se start hoga or end tk jayega

//if end value is (-)   (start+lengthofstring-end value)
var slicestr=str.slice(6,-2);
console.log(slicestr);  //6 se start hoga or -2 tk jayega (6+lengthofstring-2) 

var slicestr=str.slice(2,-2);
console.log(slicestr);  //2 se -2 tk   


// substring method 
// substr(start,length);  //start index se suru hoga or length tk ka character capture karega

let ans=str.substr(2,6);
console.log(ans);
console.log(str);


//replacing of string
 str="AMIT KUMAR GUPTA";
 console.log(str);

 //to change lower character
 console.log(str.toLowerCase());
 console.log(str);


//to change upper character
str="apurav and something";
console.log(str.toUpperCase());
console.log(str);  //information is intact and has not been tempered out

//concatination method -> to combine two string
let firststr="how are u? ";
let secondstr="thanks i am good";

let cocatinatedstr= firststr+secondstr;
console.log(cocatinatedstr);

 //concat method

 let concatstr=firststr.concat(secondstr+" what about you");
 console.log(concatstr);

 //trim method-->>it removes the all whitespaces of starting and ending

 console.log("TRIM METHOD");

 let trimstr="                        Hellllllllo";
 console.log(trimstr);     //string print hoga
 console.log(trimstr.trim());    //space remove ho jayega
 console.log(trimstr.trim().length);







