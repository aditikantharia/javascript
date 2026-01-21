<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: Uncaught ReferenceError: Cannot access 'nm' before initialization
(anonymous) @ variable.js:86Understand this error </p>
<p>Why : beacuse in let we have to defiend at the first that not correct way so give the error</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: undefined </p>
<p>Why : beacause there are defined before the variable declared </p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error:2 </p>
<p>Why : var is give the outside answer is from BLOCK scope</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:Inside: 20
                  :Outside: 10 </p>
<p>Why : beacuse we use let variable so they print GLOBAL variable in OUTSIDE  & in INSIDE variable print their BLOCK variable</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "aditi"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: user</p>
<p>Why : it gives you the const value user beacuse const value can not be changed , property change thay pan variable  ma e pan person nu e change nai thay pan property change thay sake em </p>
</div>

<!--day-2-->
<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: 1 </p>
<p>Why : beacuse that consider true means 1 and false means 0 so its sum of didgit is 1 </p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: 1 </p>
<p>Why : it's consider null means 0 so goive the actual value of the second value</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error:1212 </p>
<p>Why : beacuse it's combine string or number</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: false</p>
<p>Why : when there are !undefined that gives you true then there are two !! that refers that assign the not so its give you the false answer</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: 11</p>
<p>Why : it's gives you subtraction of 12 -1 so 11</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: </p>
<p>Why :NaN is a failed number oprations that why that type isnumber</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: 1.undefined 2.null </p>
<p>Why : 1. don't store any value so it return undefined, 2.it consider null value so return null </p>
</div>
