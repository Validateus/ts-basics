//Переменные
var str = 'Hello, world!';
var num = 42;
var isActive = false;
var strArray = ['H', 'e', 'l'];
var numArray = [1, 1, 2, 3];
//Функции
function logInfo(name, age) {
    console.log("Info: " + name + ", " + age);
}
logInfo('Paul', 25);
function calc(a, b) {
    return a + b;
}
console.log(calc(2, 5));
//Классы
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0.3';
    return Server;
}());
var server = new Server('AWS', 1234);
var user = {
    name: 'Paul',
    age: 25,
    logInfo: function () {
        console.log(this.name + ' ' + this.age);
    }
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + ' Hello!');
    };
    return User;
}());
