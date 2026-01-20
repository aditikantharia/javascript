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
<p>Why : it gives you the const value user beacuse const value can not be changed , property change thay pan variable person nu e change nai thay </p>
</div>