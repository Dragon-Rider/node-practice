var fs = require('fs');

fs.readFile('data/file.txt', 'utf-8', function(err, res) {
	if (err) {
		console.log(err)
	} else {
		console.log(res);
	}
})

console.log('end');