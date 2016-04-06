var util = require('util');

function Base() {
	this.name = 'base';

	this.sayHello = function() {
		console.log('Hello ' + this.name);
	}
}

Base.prototype.sayName = function() {
	this.age = '123';
	console.log(this.name);
}

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base);

var base = new Base(),
	sub  = new Sub();

//util.inherits仅仅继承原型中定义的属性和方法
//console.log会打印构造函数的属性和方法，以及原型的属性，但不打印原型的方法
base.sayHello();
base.sayName();
console.log(base);

console.log("\n");
sub.sayName();
console.log(sub);

