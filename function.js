// function
// what --> function is a block of code that performs a specific task.
// why --> to avoid code repetition and to make code modular and reusable.
// how --> function keywork, name, parameters, body, return statement

// type of functions
                                              
// function name(params) {} --> function declaration
// function abc(){}
// //let fnc = function (){} --> function expression
// let fnc = function (){};
// // let fnc = () => {} --> arrow function --> fat arrow function
// let func1 = () => {};

// function temp_cart(){
//     console.log("Adding Product");
// }
// temp_cart();
// temp_cart();
// temp_cart();

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
// function abc(v1, v2){
// console.log(v1, v2);
// }
// abc(20, 21);
// function cart3(product = "product", price = "price"){
// console.log(product, price)
// }
// cart3();

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
// function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
// console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
// }
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// function abcd1(...numbers) {
// console.log(numbers);
// }
// abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments
// function abcd2(v1, v2, ...numbers) {
// console.log(v1, v2, numbers);
// }
// abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//return or early return
//return-->
// retrun or early return
// retrun --> function mathi value bahar mokalva mate

// function getValue (value) {
// if (value < 25) return "Value is less than 25";
// else if (value < 50) return "Value is less than 50";
// else if (value < 75) return "Value is less than 75";
// else if (value < 100) return "Value is less than 100";
// return "Value is 100 or more";
// }
// let result = getValue(120);
// console.log(result);

// first class function:
// function can be treated as variables
// let fnc1 = function () {} - function expression
// let fun2 = () => {} - arrow function

// let buyNow1 = function (product, price){
// console.log(product, price)
// }
// buyNow1 ("S24 FE", 50500);

// let buyNow2 = function (product,price){
//     console.log(product,price)
// }
// buyNow2 ("S426",20000)

// //convert into arrow

// let buyNow3 =  (product,price)=>{
//     console.log(product,price)
// }
// buyNow3 ("S425",5000000)

// function can be passed as arguments to other functions
// let fnc = function(){}
// fnc(function(){}
// function abc1(v1, v2) {
// console.log(v2);
// return v1();
// }
// abc1(function(){
// console.log("first class function")
// }, "Hello")
// function abc2(v1, v2){
//     console.log(v2);
// return v1();

// }
// abc2(function(){
// console.log("second class function");                   
// }, "Hello")

// function abcd (val){val(); } --> abcd(function(){console
// function abcd() { return function(){} } --> abcd()()
// function can be returned from other function
// function abc(){
// return function (){
// console.log("function within function");
// }
// }
// abc()();

// function abc2(){
// return () => {
// console.log("arrow function within function");
// }
// }
// abc2()();

// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava acpect kare ek function params ma)
// function abcd(val){val();
//--> abcd(function(){console.log("hello")})
// function abcd(val){} --> higher order function
// function abcd() { return function(){} } abcd()() --> higher order

// pure vs impure function
// pure function --> function je same input par same output aapse ane 
// koi bahar na state ne modify na kare (pure function -->
//  je function bahar na state ne modify na kare )

// let a101 = 20;
// function change_a() {
// return "a not change (pure fonction " + a101;
// } //pure function
// console.log(change_a());

// impure function --> function je same input par different output aapse athava bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare )
// function change_a1(){
// a101++;
// return "a change (impure function)" + a101;
// }
// console.log(change_a1());
// //addition of 22
// function change_a2(){
// a101+=2;
// return "a change (impure function)" + a101;
// }
// console.log(change_a2());

// closure function
// function je potana parent function na variables ne access kari
//shake (return thava valo function use karshe parent function na koi
//variable) (function within function)
// function outer(){
// let outer_var = "Outer Function, Variable";
// function inner() {
// console.log(outer_var);
// }
// inner();
// }
// outer();

//lexical scope --> nested function can access variables declared in their outer scope
// function outer1() {
// let outer_var = "Outer Function Variable";
//     function inner1() {
//     console.log(outer_var);
//     let inner_var = "Inner Function Variable";
//         function most_inner() { 
//             console.log(outer_var);
//             console.log(inner_var);

//     }
//     most_inner();
//     }
// inner1();
// }
// outer1();

function outer1() {
let outer_var = "Outer Function Variable";
    function inner1() {
    console.log(outer_var);
    let inner_var = "Inner Function Variable";
        function most_inner() { 
            console.log(outer_var);
            console.log(inner_var);
        let most_inner = "MORE function variable";
        function more_inner(){
            console.log(outer_var);
            console.log(inner_var);
            console.log(most_inner);
        }
        more_inner();
    }
    most_inner();
    }
inner1();
}
outer1();

// IIFE - Immediately Invoked Function Expression
(
function () {})(); // function je declare karta j call thai jaye
(function() {
console.log("IIFE executed");
})();


// Hoisting in function
// use case --> show project structure
temp_fnc();
function temp_fnc(){
console.log("hoisting in function")
}
 
