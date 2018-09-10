// named function 
//  named parameters as : number
// function as :number expecting function to return a number
function add(x, y) {
    return x + y;
}
console.log(add(5, 5));
var myAdd = function (x, y) {
    if (typeof x == 'string') {
        x = parseInt(x, 10);
    }
    if (typeof y == 'string') {
        y = parseInt(y, 10);
    }
    return x + y;
};
console.log(myAdd('4', 4));
// Rest parameters when you don't know how many params will be passed in
function getFullName(firstname) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstname + ' ' + restOfName.join(' ');
}
console.log(getFullName('John', 'Doe', 'williams', 'puppies'));
