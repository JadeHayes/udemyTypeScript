// named function 
//  named parameters as : number
// function as :number expecting function to return a number
function add(x:number, y:number):number {
  return x + y;
}
console.log(add(5, 5));

let myAdd = function(x:any, y:any):number{
  if (typeof x == 'string') {
    x = parseInt(x, 10);
  }
  if (typeof y == 'string') {
    y = parseInt(y, 10);
  }
  return x + y
};

console.log(myAdd('4', 4));

// Rest parameters when you don't know how many params will be passed in
function getFullName (firstname:string, ...restOfName:string[]) {
  return firstname + ' ' + restOfName.join(' ');
}
console.log(getFullName('John','Doe', 'williams', 'puppies'));