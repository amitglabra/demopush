// Javascript objects are always in key value pair 


let obj={}; //empty object
console.log(obj);
//person object
let person={
    name:"Amit",
    age:23,
    phone: 7999999090,
    gender:"Male",
    height: "160cm",
};

console.log('Hey ${person.name},thank you for signing up!');
console.log(person.gender);    //dot notation
console.log(person["gender"]); //squre bracket notation

console.log(person.height);     //dot notation
console.log(person["height"]); //squre bracket notation



let str="Hello";
console.log(str);
console.log(str.length);     //dot notation
console.log(str["length"]);  //squre bracket notation



//nesting of objects
let captainAmerica={
    firstname:"Steve",
    lastName:"Rogers",
    friends:["Bucky","Tony Stark","Brue Banner"],
    age: 102,
    isAvenger:true,
    address:{
        state:"Manhattan",
        city:"New York",
        country:"USA",
        
    },
    sayHi:function()
        {
            console.log('Hello my name is ${this.firstname}');
        }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]); //dot notation
console.log("printed using bracket notation "+captainAmerica["friends"][0]); //bracket notation
captainAmerica.sayHi();        //method accessing

//nested objects
console.log(captainAmerica.address.city);



//for loop
//in keyword in JS is used to get keys from the objects
for(let haathi in captainAmerica)
{
    //key
    console.log(haathi);    //key hai


    //haathi jo variable h uske ander meri key ki value padi hui hai
    //value
    //variable ke ander jo binded value h wo chhaiye
    console.log(captainAmerica[haathi]);
}

console.log(typeof captainAmerica.friends);



//deleting the key of an object
delete captainAmerica.lastName;
console.log(captainAmerica.lastName);


// str{
//     length: //
//     toUpperCase: function(){
//         for()
//     }
// }


let car={
    name:"Ferrari",
    model:2022,
    startEngine: function(){
        console.log('Starting the engine of the car ${this.model}');
    }
}
car.startEngine();


//methods-> objects ke ander function
//console.lof(str.toUpperCase());


let arr=["a","b",1,true];

let arrr={
    0:"a",
    1:"b",
    2:1,
    3:true
}





