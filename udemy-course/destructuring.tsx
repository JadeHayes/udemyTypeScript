const user = {
  first: 'Jane',
  last: 'Dee'
}

const {first, last} = user;
console.log(first+' '+last);

const users = ['jessica', 'Zin', 'Val'];

const [user1, user2, user3] = users;
console.log(user3);

// pattern matching
const [a, b] = ['x', 'y'];
console.log(a);

const obj = {a: [{foo: 123, bar: 'abc'}, {}], c: true};
// unpacking the object that only had a: [{bar}] 
// value ==> 'abc' which is getting extracted from bar ^^
const {a: [{bar: c}]} = obj;
console.log(c);

// error y does not exist on type any
// const {x: x} = {x: 12, y: 22};
// console.log(x);

// If there is no match you'll get undefinded
// const [x] = [];
// console.log(x); => undefinded 

// Default value
const [x = 5] = [];
const {prop: y= 6} = {};
console.log(y);