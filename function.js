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

