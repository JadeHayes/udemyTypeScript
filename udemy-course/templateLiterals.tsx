let greet = 'Hello World'
let num1 = 5;
let num2 = 3;

let total = (num1:number, num2:number):number => num1 + num2;

let template:any = `this is my template in typescript.
                If this line is long, we will need a template 
                literal by replacing the string quotes with a backtick`;

// can insert variables with template literals
let templateLiteralGreet = `${greet}, this is my template. ${num1} + ${num2} = ${total(num1, num2)}`;

console.log(template);

console.log(template.startsWith('this'));
console.log(template.endsWith('should be false'));
// Checks to see if string is within the template
console.log(template.includes('we'));

console.log(templateLiteralGreet)
console.log(total(1,2))

