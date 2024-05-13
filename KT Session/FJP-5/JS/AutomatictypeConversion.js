var ans="5"+1;      //"5"+"1"->51
console.log(ans);
var ans=1+"5";     //"1"+5->15
console.log(ans);

console.log(null*5) //null is converted to zero hence output is 0
console.log(null*"5"); //0 anything multiplied by 0 obiously 0
console.log(undefined*5);  //NaN

console.log("5"-1);   //5-1->4

console.log("ten"*3);  //"ten" string cannot be napped to a number like "5" can be napped to a number 5 hence the output is NaN
console.log("18"*3);