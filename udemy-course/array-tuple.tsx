let x: number[];
let y: string[];
let c: boolean[];

c = [true, false, true]
y = ["array", "of", "strings"]
x = [1,2,3]

console.log(x);
console.log(y);
console.log(c);

// generic array type
let g: Array<number>;
let j: Array<string>;
let k: Array<boolean>;


g = [1,3,4];
j = ["string", "in", "yay"];
k = [true, false, true];
console.log(g);
console.log(j);
console.log(k);

// Tuple, we can have different types of elements
let tupExample: [string, number];

// Anything out of scope is not an error
tupExample = ["Hey there", 5]
console.log(tupExample);
