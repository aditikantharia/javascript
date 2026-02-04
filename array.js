// Array - Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]
// create
// variable_name = [values]
let arr = [1, 2, 3, 4];
// access
// position = [0123]
// access
// array_name [position / index]
arr[0]
// modify
// array_name [position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;

// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push -> enter new value into array -place it into last
let a = [1, 2, 3, 4, 5];
// variable || function.method --> koi variable ke function in pachhal value add karva mate
a.push(700);
console.log(a);

// pop --> remove last value into array
let b = [10, 20, 30, 40];
b.pop();
console.log(b);

//example-self:1
let product = ["iphone15","iphone16","iphone17","iphone18"];
//remove the product
// use case -remove last producat you add into your list
product.pop();
console.log(product);

//add the value
// use case -enter new probucats into existing producats list
product.push("iphone19","iphone20");
console.log(product);

//shift -- remove first value into Array
let c = [30, 40, 50, 60];
c.shift();
console.log(c);


// unshift add value into array first
let d = [52, 35, 65, 85];
 d.unshift(20);
console.log(d);

// example-self:2
//remove at the first
// use case remove old producat automatic after sometimes
product.shift();
console.log(product);
//add at the first
// use case add a value into top of that data you receive -
product.unshift("iphone21");
console.log(product);

// splice remove value into array --specific position and specific number of values
// into () -first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);
 //e.splice(3, 0, 50, 100)

// use case select msg and remove multiple msg at on click
// slice -copy values from array specific position and specific number of values
// new variable array_name.slice(start index,end index) 
 // start index --include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(0, 2);
console.log(f);

//example-self:3
// use case select msg and remove multiple msg at on click
let message1 =["hi","hello","good","bye"];
message1.splice(1,3);
console.log(message1);
//hi print thay

// generate a report based on date and generate a file or save the file into your local machine
// splice vs slice

// splice remove value into main array or modify new array
// use case -- copy specific data and save it into new variable
let message2 =["hi","hello","good","bye"];
let msg= message2.slice(0,2);
console.log(msg);
//hi,hello print thay

//e.splice(0,3);
//console.log(e);
// slice - copy value from main array and create a new array that hold the value that you can into I


// reverse -reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();


// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
//h.sort();

//example-self:3
// use case show latest update first into your fronted
let i =[500,700,300,200];
i.reverse();

let i1 =[5000,7000,3000,2000];
//i1.sort();

// use case show latest update first into your fronted
//i1.sort().reverse();


let h1 = [11, 62, 3, 4, 25];
let sr = h1.sort
    (function(a, b){
    return a - b; // ascending order -
})

//ARRAY
//5
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
//students.splice(1,1);
// students.splice(1,1);
// students.slice(0,1);
students.splice(1,1,'john','sara');
//6
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1,2);

//7
let days1 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekday = days1.slice(5,8);

//8
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();

//9
let scores = [45, 12, 78, 34, 89];
scores.sort();

//10
let prices = [199, 49, 999, 299, 149];
let prices1 = prices.sort
(function(a,b){
    return a-b;
})

//11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let pro = products.splice(0,3);

//12
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange')

//13
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse().push('final round');

//14
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

//15
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push("inseption");
movies.shift();
movies.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

// movies.push("inspection").shift().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))

//17
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);

//18
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);

//19
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();

//21
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');

//23
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);

//24

//25
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());