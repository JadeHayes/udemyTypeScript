var user = {
    first: 'Jane',
    last: 'Dee'
};
var first = user.first, last = user.last;
console.log(first + ' ' + last);
var users = ['jessica', 'Zin', 'Val'];
var user1 = users[0], user2 = users[1], user3 = users[2];
console.log(user3);
// pattern matching
var _a = ['x', 'y'], a = _a[0], b = _a[1];
console.log(a);
var obj = { a: [{ foo: 123, bar: 'abc' }, {}], c: true };
// unpacking the object that only had a: [{bar}] 
// value ==> 'abc' which is getting extracted from bar ^^
var c = obj.a[0].bar;
console.log(c);
// error y does not exist on type any
// const {x: x} = {x: 12, y: 22};
// console.log(x);
// If there is no match you'll get undefinded
// const [x] = [];
// console.log(x); => undefinded 
// Default value
var _b = [][0], x = _b === void 0 ? 5 : _b;
var _c = {}.prop, y = _c === void 0 ? 6 : _c;
console.log(y);
