function logData() {
    console.log('Here is some data');
    // cannot return anything because the type is void
    // return "Some data";
}
logData();
// these two won't error out
// let x: void = null;
// let x: void = undefined;
// let n: null = null;
// never type: similar to void
// we don't want our function to return anything
// Similar to void
// Never type is used as the return type of funcitons that never return
// 
// function error(message:string): never {
//   throw new Error(message);
// }
// error('Something Happened');
