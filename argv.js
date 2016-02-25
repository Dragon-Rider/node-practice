/*process.argv*/
//console.log(process.argv)

/*process.stdin和process.stdout*/
/*process.stdin.resume();

process.stdin.on("data", function(data){
	process.stdout.write('read from console:' + data.toString());
})*/

/*process.nextTick*/
function doSomething (argv, callback){
	console.log(argv);
	//process.nextTick(callback);

}

doSomething(function onEnd(){
	console.log("firstly");
})