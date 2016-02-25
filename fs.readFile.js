var fs = require('fs');

fs.readFile("memos.txt", 'utf-8', function(err, data){
	if (err) {
		console.log(err);
	} else {
		console.log(data);
	}
})