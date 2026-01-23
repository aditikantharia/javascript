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
<p>Answer or Error: number </p>
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

<!--day-3-->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer or Error: Both are greater than 5  </p>
<p>Why : both conditions are true then give a first statement </p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer or Error: Acess granted </p>
<p>Why : OR needs only one true vaaule</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer or Error: Pleasant day </p>
<p>Why : there are 35 is grater number but there are grater but ! sign means answer consider as second </p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer or Error: Falsy value </p>
<p>Why : statement A MEANS 0 so its consider false so take the second statement   </p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer or Error: c </p>
<p>Why : there are 78 grater than equals to 70 so condition true then it prints c </p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer or Error:  Gold</p>
<p>Why : there are first condition true beacause there are grater than 120 so </p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn1 = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn1 && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer or Error:deny  </p>
<p>Why : there are one false in && so give a second statement </p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer or Error: 6 </p>
<p>Why : a++ in console log mandatory beacuse after we write that print 6, a++ so 5+1 = 6 that's reason  </p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer or Error: 9  </p>
<p>Why : ++a in console log not mandatory beacuse after we write that print 9, ++a so 8+1 = 9 that's reason  </p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer or Error: 5 4  </p>
<p>Why : when there are in b we only declared the (postincrement) b++ but when we do the console that time that value print 5 and c have value 4 </p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer or Error: 5 5 </p>
<p>Why :  when there are in b we only declared the preincrement ++b so b = 5 and c=5 beacuse it's consider without console log</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer or Error: m-- = 10 , m=9 </p>
<p>Why : it's post decrement,so it's 1st show original value when it drecrese and then print 9 </p>
</div>

<div>
<h1>Example 13:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer or Error:12  </p>
<p>Why :  it addition the post increment and pre incrment</p>
</div>

<div>
<h1>Example 14:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer or Error:error  </p>
<p>Why : function doesnt return anything, likes++ increase to 101 </p>
</div>

<div>
<h1>Example 15:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer or Error: Matched </p>
<p>Why :  </p>
</div>

<div>

<!--day-4-->
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: two  three </p>
<p>Why : it's simple print message </p>
<div>



<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer or Error: A+ </p>
<p>Why : when we write input value 95 its consider a+  </p>
<div>



<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer or Error:  Rock scissors ne tori nakhe che (rock wins)
                    Paper rock ne cover kare che (paper wins)
                    Scissors paper ne kaapi nakhe che (scissors wins)</p>
<p>Why :  </p>
<div>