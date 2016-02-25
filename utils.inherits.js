var utils = require('util');

function Base() {
	this.name = 'base';
	this.attr = '1991';

	this.sayHello = function(){
		console.log("Hello" + this.name);
	}
};

Base.prototype.showAttr = function(){
	console.log(this.attr);
}

function Sub(){
	this.name = 'Sub';
	this.attr = '2016';
}

utils.inherits(Sub, Base);

var objBase = new Base();
objBase.sayHello();
objBase.showAttr();
console.log(objBase);

var objSub = new Sub();
objSub.showAttr();
//objSub.sayHello();
console.log(objSub);