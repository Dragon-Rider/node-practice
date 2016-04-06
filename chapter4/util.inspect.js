var util = require('util');

var Person = function() {
	this.name = 'Eragon';

	this.toString = function() {
		return this.name;
	}
}

var person = new Person();

console.log(util.inspect(person));
console.log(util.inspect(person, true));
