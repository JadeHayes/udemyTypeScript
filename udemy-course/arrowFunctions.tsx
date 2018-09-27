// these two are the same
let getUser = function():string{
  return 'John Doe';
}
let arrowgetUser = (name:string) => name;
console.log(arrowgetUser('woo hoo'))

// these two are the same
let add = function(num1: number, num2: number):number{
  return num1 + num2;
}

let arrowAdd = (num1: number, num2:number) => num1+ num2;
console.log(3+6);

var User = {
  name: 'John Doe',
  age: 25,
  startAging: function(){
      setInterval(() => {
      this.age++;
      console.log(this.age);
    }, 1000)
  }
}

// create an object from the user we declared above
var john = Object.create(User);
// call the user to start aging
john.startAging();