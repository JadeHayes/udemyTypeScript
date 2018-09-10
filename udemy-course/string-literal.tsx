// string literal is setting a type to an exact string
// let x: 'Hello';

// x = 'Hello';
// Will error bc its expecting hello
// x = 'Hello World';

// will pass
// x = undefined;
// x = null;

let x: 'Hello' | 'Hello World!';

x = 'Hello World!';


console.log(x)

let thisAdd = function(x:string | number, y:string | number):number{
  if (typeof x == 'string') {
    x = parseInt(x, 10);
  }
  if (typeof y == 'string') {
    y = parseInt(y, 10);
  }
  return x + y
};

console.log(5, '4');

type CardinalDirection = "North" | "East" | "South" | "West";

let move = (distance: number, direction: CardinalDirection) => { 
  console.log('Moving ' + distance + ' miles ' + direction)
}

move(15, 'North')