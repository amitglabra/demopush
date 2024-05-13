// Arrays-> It is a collection of Element

let cars=['BMW','Audi','Mg',1,2,3,true];
//in js u can store different values of different types in an array
console.log(cars);


// accessing the element of an array 
console.log(cars[0]);
console.log(cars[3]);

// replacing element in arrays
cars[3]="Mahindra";
console.log(cars[3]);
 

//adding element

cars[7]="Honda";
console.log(cars);



// Methods in an array 

// (1) pop method-> this method removes the last element from the last of array 
cars.pop();
console.log("after poping the element\n"+cars);


//(2) push method -> it pushes a new element at the end of array

cars.push("Tata");
console.log("after pushing an element"+cars);


// (3) unshift method -> this adds element at the starting of array 
cars.unshift("JLR");
cars.unshift("Mustang");
console.log(cars);

// (4) shift method-> it removes element from 0th index of an array 
cars.shift();
cars.shift();
console.log(cars);

console.log(cars.length);


// 2D arrays

let array2d=[[1,2,3],
             [4,5,6],
             [7,8,9]
            ];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);

console.log(array2d[1][7]);    //undefined 
console.log(array2d.length);    //it gives the number of rows in a 2d arrays
console.log(array2d[0].length);  // it gives the number of columns in a 2d arrays
console.log(array2d[1].length);



//memory allocation in 2d arrays
//2d arrays me value kaishe dale
//directory
