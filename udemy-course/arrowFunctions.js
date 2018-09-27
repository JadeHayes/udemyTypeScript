// these two are the same
var getUser = function () {
    return 'John Doe';
};
var arrowgetUser = function (name) { return name; };
console.log(arrowgetUser('woo hoo'));
// these two are the same
var add = function (num1, num2) {
    return num1 + num2;
};
var arrowAdd = function (num1, num2) { return num1 + num2; };
console.log(3 + 6);
var User = {
    name: 'John Doe',
    age: 25,
    startAging: function () {
        var _this = this;
        setInterval(function () {
            _this.age++;
            console.log(_this.age);
        }, 1000);
    }
};
// create an object from the user we declared above
var john = Object.create(User);
// call the user to start aging
john.startAging();
