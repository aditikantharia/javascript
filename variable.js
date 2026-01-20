//variable

//there are 3 way to defined the variable into javascript file.......
//  var, let , const
//we cam not use the keywords..
//they gives you the error whe we used the keywords
//variable are casde sensitive we use the "a" and at the end output time we used the "A" that gives you the error
var a = "aditi";
var _a123 = "aditi";
var  $a = "aditi";
const temp_const = "hello aditi..!!";

//declaration and initialization
//declare
var d;

//initialization
var temp_d = 426;

//var add value into window
//var is function scoped
//var can be replaced and reassigned
var name = "username";
let name1 = "username";

//Reassignment , redeclartion
var temp =12;
temp ="number";//Reassignment
var temp ="text";//redeclartion
//let temp_a  =24;
//var temp_a = 34;//you can't redeclare let variable
const temp_b ="name";
//temp_b = "username"; //you can't ressign const variable

//scope(global,block,functional)
var e = 26;
console.log("global scope" + e);
{
    var e = 27;
    console.log("block scope" + e);
}
function abc(){
    var e = 28;
    console.log("functional scope" + e);
}
abc()
console.log("OUTSIDE" + e);

//when we used the let variable

let f = 26;
console.log("global scope" + f);
{
    let f = 27;
    console.log("block scope" + f);
}
function abc(){
    let f = 28;
    console.log("functional scope" + f);
}
abc()
console.log("OUTSIDE" + f);

//differnce between the var vs let
//var is give the outside answer is from BLOCK scope
//let is give the outside answer is from GLOBAL scope
// Temporal Dead Zone (TDZ)
console.log(h);
var h = 24;

// console.log(g);

//console.log(j);
//let j = 12;
//VAR ma pela defined kare toh error nathi aavti jyare let ma error aave che

//Hoisting Imapact
// Hoisting --> when your create a vaiable into js that braek into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you


//excerise
console.log(nm);
let nm = "name";