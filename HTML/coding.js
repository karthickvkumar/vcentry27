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
// syntax 
// function function_name(){
//   code logic
// }

// function_name - Name of the block (Allowed character for function name a-z, A-Z, _ , $)

function welcomeMessage(){
  var message = "Hello! Good Day";
  console.log(message);
  alert(message);
}