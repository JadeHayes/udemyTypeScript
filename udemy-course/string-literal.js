// string literal is setting a type to an exact string
// let x: 'Hello';
// x = 'Hello';
// Will error bc its expecting hello
// x = 'Hello World';
// will pass
// x = undefined;
// x = null;
var x;
x = 'Hello World!';
console.log(x);
var thisAdd = function (x, y) {
    if (typeof x == 'string') {
        x = parseInt(x, 10);
    }
    if (typeof y == 'string') {
        y = parseInt(y, 10);
    }
    return x + y;
};
console.log(5, '4');
var move = function (distance, direction) {
    console.log('Moving ' + distance + ' miles ' + direction);
};
move(15, 'North');
