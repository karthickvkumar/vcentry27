/*syntax - Variable definition or creation (To pass value to javascript)
var variable_name = value;

var - Keyword (Resered word with some action)
variable_name - Temp storage (Allowed character for Variable name a-z, A-Z, _ , $)
value - Primitive / Object type */

// Number - Any Numberical Value from the range of Positive, Negative, Decimal, Fractional

var rollnumber = 14668;

// String - Any Text Content (content should be enclosed inside single or double quoutes)

var emailid = "karthick@gmail.com";

// Boolean - true or false

var result = true;

// Null - Non Exist data 

// undefined - A variable will be defined but its value will not be definied.

var futureValue;

// Object - It is a collection of key and value pair (collection of properties)
// syntax
// var variable_name = {
//   key : value,
//   key : value,
//   key : value
// }; 

// key - similar to variable name 
// value -  Primitive or Object type of data

var firstName = "mr.abc";
var lastName = "yzx";
var rollNumber = 414552;
var standard = "XI";
var contactNumber = 4152556;


var studentInfomation = {
  firstName : "mr.abc",
  lastName : "yzx",
  rollNumber : 414552,
  standard : "XI",
  contactNumber : 4152556
}

// Array - It is List of Data, it should have similar data type 
// syntax 
// var variable_name = [value1, value2, ... , valueN];
// value - Primitive or Object type of data

var studentList = [
  {
    firstName : "mr.abc",
    lastName : "yzx",
    rollNumber : 414552,
    standard : "XI",
    contactNumber : 4152556
  },
  {
    firstName : "mr.abc",
    lastName : "yzx",
    rollNumber : 414552,
    standard : "XI",
    contactNumber : 4152556
  },
  {
    firstName : "mr.abc",
    lastName : "yzx",
    rollNumber : 414552,
    standard : "XI",
    contactNumber : 4152556
  },
  {
    firstName : "mr.abc",
    lastName : "yzx",
    rollNumber : 414552,
    standard : "XI",
    contactNumber : 4152556
  }
];

// Function - It is a block of code 
// syntax - Function Definition  (via JS File)
// function function_name(){
//   code logic
// }

// function_name - Name of the block (Allowed character for function name a-z, A-Z, _ , $)

function welcomeMessage(){
  var message = prompt("Enter your Message");
  console.log(message);
  alert(message);
};

// Syntax - Function Execution 
// eventHandleName="functionName();" (via HTML)
// common event handler - onclick 

// Operators 
// 1. Arithmetic Operator +, -, *, / , %, ++, --
// 2. Assingnemnt Operator =
// 3. Comparaions Operator < (less than), <= , > (greater than), >=, == , !=, ===, !== 
// 4. Logical Operator && (AND), || (OR), ! (NOT)

// && AND 
// true && true = true
// true && false = false 
// false && true = false 
// false && false = false

// || OR 
// true || true = true
// true || false = true 
// false || true = true
// false || false = false 

// ! NOT 
// ! true = false 
// ! false = true

// IF Else Condition 
// if(condition){
//   -- if block
// }
// else{
//   -- else block 
// }

// Problem - Find whether a given user age is eligible to Vote 
// Pseudocode
// 1. Pass Number as Program input 
// 2. If number is greater or equal to 18 -> The user is eligible for Voting 
// 3. If number is less than  18 -> The use is NOT eligible for Voting

function votingEligiblity(){
  var age = prompt("Enter your Age");
  if(age >= 18){
    alert("The user is eligible for Voting");
  }
  else{
    alert("The use is NOT eligible for Voting");
  }
}

// Mutlipe IF Else Condition 
// if(condition){
//   -- if block
// }
// else if(condition){
  
// }
// else{
//   -- else block 
// }

// Problem - To find Ticker Price amount for Person based on age
// 1. If age less than 5 -> Free Ticket 
// 2. If age greater than or equal to 5 and less then 50 -> Full Ticket Price
// 3. If age is greater then or equal to 50 -> 25% Off in Ticker Price 

function tickerPrice(){
  var age = prompt("Enter your Age");
  if(age < 5){
    alert("Free Ticket");
  }
  else if(age >= 5 &&  age < 50){
    alert("Full Ticket Price");
  }
  else{
    alert("25% Off in Ticker Price ");
  }
}

// Loop - for 
// syntax 
// for(initialization; condition; increment/decreament){
//   coding logic
// }

// initialization - Loop starting point 
// condition - Loop ending point basing on false
// increment/decreament - Loop movemnt control 

for(var i = 1; i <= 10; i++ ){  
  console.log("The loop is running", i);
}

// Problem - To find all even number for the given number of limit
// 1. we need to give a number input (last number)
// 2. To use loop for moving the count from 1 to given last number 
// 3. Logic for even number - Number % 2 == 0 -- Even number  

function findEvenNumber(){
  var lastNumber = prompt("Enter your last number");
  for(var startCount = 1; startCount <= lastNumber; startCount++){
    if(startCount % 2 === 0){
      console.log(startCount, "is a Even number");
    }
  }
}

// Map - Only specific for Array, Use to iterate Array value
// syntax
// Need a variable which has Array value 

// array_varaible_name.map(function(value, index){
//   print value one by one
// });

studentList.map(function(value, index){
  console.log(value);
  return value;
});

// Switch - Flow Control 
// syntax 
// switch(expression){  whole value
//   case value :
//     code logic
//     break;
//   case value :
//     code logic
//     break;

//   default:
//     code logic
// }

// Problem - To perform basic Arithmetic operator 
// Input - Number 1, Number 2, Arithmetic Operator 

function calculator(){
  var number1 = prompt("Enter your first Value");
  var number2 = prompt("Enter your second number");
  var opertor = prompt("Enter any one Operator (+, - , * , /)");
  var result;
  switch(opertor){
    case "+":
      result = parseInt(number1) + parseInt(number2);
      alert(result);
      break;
    case "-":
      result = number1 - number2;
      alert(result);
      break;
    case "*":
      result = number1 * number2;
      alert(result);
      break;
    case "/":
      result = number1 / number2;
      alert(result);
      break;
    default:
      alert("Invalid Operator");
  }
}

// Error - bug 
// 1. Syntax Error - Incorrect coding synatx (red output in console)
// 2. Reference Error - Using Undeclared vaiable name or Function name (red output in console) 
// 3. Logical Error - Invalid or unexpected output (No red output in console) (only solution is Debugging)

// Scope - Used to set Accessibility for variable
// 1. Local Scope - (Creating vairable inside Function) Variable can be accessed inside Function not Outside Function
// 2. Global Scope - (Creating vairable outside Function) Variable can be accessed anywhere 

var textGolbal = "Welcome All! -- Global";

function printMessage(){
  var text = "Welcome All!";
  console.log(text);
  console.log(textGolbal);
};

function showMessage(){
  console.log(text);
  console.log(textGolbal);
}

// Timers 
// setTimeout - Code will run after the given time duration
// clearTimeout - It will stop the setTimeout
// sytnax 
// setTimeout(function(){
//   code logic 
// }, timeduration);

// timeduration - millisecond, 1 second - 1000 ms 

function TimeDelay(){
  alert("TimeDelay function working")
  var timer = setTimeout(function(){
    alert("Inside SetTimeout code")
  }, 5000);

  //clearTimeout(timer);
}

// setInterval - Code will run repeat mode for given time duration 
// clearInterval - It will stop the repeat mode of set interval 
// setInterval(function(){
//  code logic 
// }, timeduration)

function RepeatMode(){
  alert("RepeatMode function working");
  var interval = setInterval(function(){
    alert("Inside setInterval code");
  }, 5000);

  //clearInterval(interval);
}