// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keywork, name, parameters, body, return statement

// type of functions
                                              
// function name(params) {} --> function declaration
function abc(){}
//let fnc = function (){} --> function expression
let fnc = function (){};
// let fnc = () => {} --> arrow function --> fat arrow function
let func1 = () => {};

function temp_cart(){
    console.log("Adding Product");
}
temp_cart();
temp_cart();
temp_cart();

// parameters vs arguments
// parameters are the names listed in the function definition (params --> () ni ander lakheli values)
// arguments are the real values passed to the function (args --> function call karti () ni ander lakheli(pass) kareli values)

// function cartBtn(product) {
//     //product e parametres che
//     console.log("adding", product, "to cart");
// }
// cartBtn("apple");//apple e argument che
// cartBtn("mango");
// cartBtn("cheery");

// function cartBtn1(product,price) {
//     //product and price e parametres che
//     console.log("adding", product, "to cart","and ", "price",price);
// }
// cartBtn1("apple",100);//apple e argument che and 100 "price"  e biju argument che
// cartBtn1("mango",150);
// cartBtn1("cheery",200);                              

// convert  into function expression
//  let cartBtn = function(){}
// function cartBtn(product) {
//     //product e parametres che
//     console.log("adding", product, "to cart");
// }
// cartBtn("apple");//apple e argument che
// cartBtn("mango");
// cartBtn("cheery");

//2.product and price
//  let cartBtn1 = function(){}
// function cartBtn1(product,price) {
//     function cartBtn1(product,price) {
//     //product and price e parametres che
//     console.log("adding", product, "to cart","and ", "price",price);
// }
// cartBtn1("apple",100);//apple e argument che and 100 "price"  e biju argument che
// cartBtn1("mango",150);
// cartBtn1("cheery",200); 
// }

 // convert into arrow function
// let cartbtn = () => {}   
// function cartBtn(product) {
//     //product e parametres che
//     console.log("adding", product, "to cart");
// }
// cartBtn("apple");//apple e argument che
// cartBtn("mango");
// cartBtn("cheery");

// //price and product
// let cartbtn1 = () => {}   
// function cartBtn1(product,price) {
//     //product and price e parametres che
//     console.log("adding", product, "to cart","and ", "price",price);
// }
// cartBtn1("apple",100);//apple e argument che and 100 "price"  e biju argument che
// cartBtn1("mango",150);
// cartBtn1("cheery",200);

// Default, rest and spread parameters in function
// default
function abc(v1, v2){
console.log(v1, v2);
}
abc(20, 21);
function cart3(product = "product", price = "price"){
console.log(product, price)
}
cart3();

//1.....
//rest -> Jayre function ma multiple arguments pass karva to vadhare params banava
//pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest -->...
//jo funtion na parameter ni anadar lakhvama aave chhe)
// function abcd (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
// console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// function cart4 (product) {
// console.log(product);
// }
// cart4("p1", "p2", "p3", "p4", "p5");

// function abcd1(...numbers) {
// console.log(numbers);
// }
// abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments
// function abcd2 (v1, v2, ...numbers) {
// console.log(v1, v2, numbers);
// }


// 2....
// rest -> Jayre function ma multiple arguments pass karva to vadhare params banava
//pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye (rest-> jo funtion na parameter ni anadar lakhvama aave chhe) ...
function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}
abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function abcd1(...numbers) {
console.log(numbers);
}
abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments
function abcd2(v1, v2, ...numbers) {
console.log(v1, v2, numbers);
}
abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//return or early return
//return-->
// retrun or early return
// retrun --> function mathi value bahar mokalva mate

function getValue (value) {
if (value < 25) return "Value is less than 25";
else if (value < 50) return "Value is less than 50";
else if (value < 75) return "Value is less than 75";
else if (value < 100) return "Value is less than 100";
return "Value is 100 or more";
}
let result = getValue(120);
console.log(result);
