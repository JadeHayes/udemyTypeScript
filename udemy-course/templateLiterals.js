var greet = 'Hello World';
var num1 = 5;
var num2 = 3;
var total = function (num1, num2) { return num1 + num2; };
var template = "this is my template in typescript.\n                If this line is long, we will need a template \n                literal by replacing the string quotes with a backtick";
// can insert variables with template literals
var templateLiteralGreet = greet + ", this is my template. " + num1 + " + " + num2 + " = " + total(num1, num2);
console.log(template);
console.log(template.startsWith('this'));
console.log(template.endsWith('should be false'));
// Checks to see if string is within the template
console.log(template.includes('we'));
console.log(templateLiteralGreet);
console.log(total(1, 2));
