console.log('Hello world!')

console.log("%cHello World,", "color: yellow, font-size: 40px" );

//Variables

//Task 1: 
var petDog = "Rex";
var petCat = "Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);

//Task 2:
var catSound = "purr"
var dogSound = "woof"
console.log(catSound)
console.log(dogSound)
console.log(petDog, "says" , dogSound)
console.log(petCat, "says", catSound)

catSound = "meow"
console.log(petCat, "now says", catSound)


//Data types
/*seven types:- 
1. Number: numerical values
- limited

123 =      number
123.456 =  decimal
2 + 4 =    addition
2-5 =      subtraction
4*5 =      multiplication
20/5 =     division
4**2 =     exponential calc (power of)
9 % 8 =    Modulus/ remainder after division
2*(4+8)=   parenthisis (sets the order of operation)

2. String:  text values. 
- charcters must be enclosed in single or double quotes
- collection of char enclosed by single or double quotes

'' or " " =   empty string
'hello there!'
'hello there!123'

DELIMETERS - characters when using single or double quotes to surround string values. this is because they're used to delimit a given string value from the rest of the code.


3. Boolean: 
- has only 2 values: True or False
e.g 1>2 =       FALSE
1 < 2 =         TRUE
1 == 2 =        FALSE
100 == "100" =  TRUE (only checks for value)
100 === "100" = FALSE (checks for both the value and data type) *STRICT EQUALITY OPERATOR
1 != 1 =        FALSE
1 !== '1' =     true (*STRICT INEQUALITY OPERATOR) **Checks for both data type and value


4. Bigint: 
- like a Xlarge box that can accomodate a greater range of numbers.

5. Null: 
- represents absence of a value

6. Undefined: 
-represents a variable not assigned a value

7. Symbol:
- used as a unique identifier

*/




//Operators - (Assignment and logical operators)
/*
1. ASSIGNMENT OPPERATORS

- Arithmetic operators:
Addition: +
Subtraction: -
Division: /
Multiply: *

- Comparison operators

> :  greater than
< :  less than
== : equal to
!= : is not equal to 
*/

console.log(2 + 2);
console.log(1 + 2 + 3 + 4 + 5);
console.log(20 - 10);
console.log(2 * 3);
console.log(8/1);
console.log(3 > 2);
console.log(2 > 3);
console.log(10 == 10);


/* ORDER OF PRECEDENCE AND ASSOCIATIVITY

- Presidence = set of rules that determines which operator to be evaluated first.
- Operator Associativity = determines how the precedence works when the code uses operators with the same precedence.
       are two kinds: 
          1. left-to-right associativity = greater than opperator
             e.g 5 > 4 > 3;

             -the 5 > 4 is evaluated first (to `true`), 
             then true > 3 is evaluated to `false`, 
             because the `true` value is coerced to `1`

             */

             console.log(5 > 4 > 3);
             

          
        
         /* 2. right-to-left associativity = assignment operator
             e.g var num = 10;
             - the value on the right is assigned to 
             the variable name on the left

             */
              
             var num = 10
             console.log(num);
             //basically 10 gets assigned to var num
             


/* 2. LOGICAL OPERATORS

 used to check is something is true or false

 e.g a = 8

- && (AND) : checks for both (2 or more) conditions to be True
e.g a>5 && a<10
TRUE

console.log(true && true) will output: true 

console.log(true && false) will output: false 

console.log(false && true) will output: false 

console.log(false && false) will output: false

// Task 3: AND LOGICAL OPERATOR

/* Code that will check if the currentTime variable is between 9 a.m. and 5 p.m. 
The code needs to console.log true if currentTime > 9 and if currentTime < 17.
*/

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);



/* - || (OR) : checks for at least one of the condition to be True
e.g a>5 || a>10
TRUE



console.log(true || true) will output: true 

console.log(true || false) will output: true  

console.log(false || true) will output: true  

console.log(false || false) will output: false


//Task 4: OR LOGICAL OPERATOR

/* write a program in JavaScript which will return true 
if the value of the currentTime variable is not between 9 and 17. 
*/

currentTime = 7
console.log(currentTime < 9 || currentTime > 17);



/*- ! (NOT)  : returns FALSE if the result is TRUE
-flips the evaluated boolean value from true to false and from false to true.
e.g !(a>5)
FALSE

*/

//Task 5: NOT OPERATOR
/* assign the boolean value of true to the petHungry variable
console log the fact that the pet is no longer hungry 
by using the ! operator to flip the boolean value stored inside of the petHungry variable.
*/

var petHungry = true;
console.log("Pet is hungry: ", petHungry);
console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry); //the not (!) opperator example
console.log(petHungry);


/* N/B: 
could permanently change the value stored in the petHungry variable from true to false: 

*/
var petHungry = true;
petHungry = !petHungry;
console.log(petHungry);
console.log("Pet is hungry: ", petHungry);
console.log("Pet is hungry: ", !petHungry);




//USING THE ( + )  OPERATOR ON STRING AND NUMBERS

/*
CONCATENATION - when the + oprator joing string data type together
*/

console.log( "inter" + "net");
console.log("note" + "book");
 

/* When combining a string and a number using the + operator,
JavaScript tries to help by converting the numbers to strings, 
and then concatenating the number and the string together, 
ending up with a string value.
*/

// This is known as COERCION - js coerces a number value to a string value

console.log(12 + "months");
console.log(1 + "2");


//Additional Assignment Operator (+=)
/* used when one wants to accumulate the values stored in a variable.
*/

//TASK 5: Count he number of overtime hours worked in a week.

//console.log(mon + tue + wed + thu + fri); // 9;

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); 



//Concatenation Assignment Operator +=

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString);




//EXERCISE : Advanced use of operators

/*
Task 1: Using the logical && operator
You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

Create a variable named  score and set it to  8

Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator

The expected output in the console should be: "Mid-level skills: true".

*/

var score = 8
console.log("Mid-level skills: ", score > 0 && score < 10);



//ANOTHER WAY WITHOUT AND OPERATOR
var score = 8
console.log("Mid-level skills: " , 0 > score < 10 );



/*
Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.

You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:

Declare the variable timeRemaining, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.

Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0

Note that the expected output in the console should be: "Game over: true".

*/

var timeRemaining = 0
var energy = 10
console.log("Game over: ", timeRemaining == 0 || energy == 0 );


//Try changing the timeRemaining variable to anything above 0 and then see how it affects the result.

timeRemaining = 5
console.log("Game over: ", timeRemaining == 0 || energy == 0 );



/*
Task 3: Using the modulus operator, %, to test if a given number is odd
You need to code a small program that takes a number 
and determines if it's an even number (like 2, 4, 6, 8, 10).


*/

//TIPS
/* To achieve this task, you need to declare six variables, as follows:

The first variable, named num1,  should be assigned a number value of 2.

The second variable, named num2, should be assigned a number value of 5.

The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.

The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.

The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.

The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.

Run console log two times after you've set the variables:

The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1

The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2

Note: The output to the console should be as follows:

Is 2 an even number? true

Is 5 an even number? false

*/

var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2 
var result1 = test1 != 0
var result2 = test2 != 0

console.log("Is",  num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2 );

/*
Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.

Note: This task should be completed on a single line of code. The output in the console should be 15.

*/

console.log(5 + 10);



/* 
Task 5: Concatenate numbers and strings using the + operator
Code three variables:

The first variable should be a string with the following value: "Now in ". Name the variable now.

The second variable should be a number with the value: 3. Name the variable three.

The third variable should a string with the following value: "D!". Name the variable d.

Console log the following code: now + three + d.

Note: The expected output should be: "Now in 3D!".

*/


var now = "Now in "
var three = 3
var d = "D!"

console.log(now + three + d);



/* 
Task 6: Use the += operator to accumulate values in a variable
Code a new variable and name it counter, assigning it to the value of 0.

On the next line, use the += operator to increase the value of counter by 5.

On the next line, use the += operator to increase the value of counter by 3.

On the fourth line, console log the value of the counter variable.

Note: The output value should be 8.

*/

var counter = 0
counter += 5
counter += 3
console.log(counter);

