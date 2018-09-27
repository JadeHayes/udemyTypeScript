// not very generic b/c it always needs to take in a number
var myStrictFunc = function (arg) {
    return arg;
};
// One something is passed in we can no longer track it, we lose information on what it is
var myAnyFunc = function (arg) {
    return arg;
};
// Generics give us a way to capture the type of an argument and demote the way it's being returned
// linter didn't like the <T> with the arrow functions
function MyGeneric(arg) {
    return arg;
}
var helloWorld = MyGeneric('Hello World');
var numberTime = MyGeneric(88);
// if you want to use arrow functions with generucs, use extends to let the compiler
// know it's a generic
var arrowGeneric = function (x) { return x; };
console.log(helloWorld);
console.log(numberTime);
// If we want multiple args
// can have multiple arguments and multiple types
function myGeneric2(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
// multiple types args
var multipleArgs = myGeneric2('Hello', 11);
console.log(multipleArgs);
// Generics and arrays
function myGenericArray(arg) {
    console.log(arg.length);
    return arg;
}
var genArray = myGenericArray([1, 2, 3, 4, 5]);
console.log(genArray);
// W/o this interface we werror b/c the computer is looking for this
function typeGenericFunc(arg) {
    return arg;
}
var genFunc = typeGenericFunc;
console.log(genFunc('Hey Hey there'));
