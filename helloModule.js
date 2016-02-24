var hello = function(){
	var name;
	
	this.setName = function(theName){
		name = theName;
	}

	this.getName = function(){
		console.log('hello ' + name);
	}
}

module.exports = hello;