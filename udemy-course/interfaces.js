// let displayUser = (user: {firstName: string, lastName: string }) => {
//   console.log(user.firstName+ ' '+user.lastName);
// }
var displayUser = function (user) {
    if (user.email) {
        console.log(user.firstName + ' ' + user.lastName + ' email: ' + user.email);
    }
    else {
        console.log(user.firstName + ' ' + user.lastName);
    }
    if (user.type) {
        console.log(user.firstName + ' has a ' + user.type + ' membership.');
    }
};
var myUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    type: 'gold'
};
displayUser(myUser);
var getUser;
getUser = function (name, age) {
    return name + ' is ' + age + ' years old';
};
console.log(getUser('John', 30));
