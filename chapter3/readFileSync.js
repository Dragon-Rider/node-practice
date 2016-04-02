var fs   = require('fs');
	data = fs.readFileSync('data/file.txt', 'utf-8');

console.log(data);
console.log('end');