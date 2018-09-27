// not very generic b/c it always needs to take in a number
let myStrictFunc = (arg: number):number => {
  return arg;
}

// One something is passed in we can no longer track it, we lose information on what it is
let myAnyFunc = (arg: any): any => {
  return arg;
};

// Generics give us a way to capture the type of an argument and demote the way it's being returned
// linter didn't like the <T> with the arrow functions
function MyGeneric<T>(arg: T): T {
  return arg;
}

let helloWorld = MyGeneric<string>('Hello World');
let numberTime = MyGeneric<number>(88);

// if you want to use arrow functions with generucs, use extends to let the compiler
// know it's a generic
let arrowGeneric = <T extends {}>(x: T) => x;

console.log(helloWorld);
console.log(numberTime);

// If we want multiple args
// can have multiple arguments and multiple types
function myGeneric2<T1, T2>(arg1: T1, arg2: T2){
  let str = arg1 + ' ' + arg2;
  return str;
}
// multiple types args
let multipleArgs = myGeneric2('Hello', 11);
console.log(multipleArgs);

// Generics and arrays
function myGenericArray<T>(arg: T[]):T[]{
  console.log(arg.length);
  return arg;
}

let genArray = myGenericArray([1,2,3,4,5]);
console.log(genArray);

// Interfaces
interface MyGenericInterface{
  <T>(arg:T):T;
}
// W/o this interface we werror b/c the computer is looking for this
function typeGenericFunc<T>(arg:T):T{
  return arg;
}

let genFunc: MyGenericInterface = typeGenericFunc;
console.log(genFunc('Hey Hey there'));