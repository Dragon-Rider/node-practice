var fs = require('fs');

fs.open('data/data-fsWrite-1.txt', 'w+', function(err, fd) {
	if (err) {
		console.log(err);
		return;
	};

	var buf = new Buffer(8);

	fs.write(fd, buf, 0, 8, 0, function(err, byteWritten, buffer) {
		if (err) {
			console.log(err);
			return;
		}

		console.log('byteWritten: ' + byteWritten);
		console.log(buffer);	
	})
})

fs.open('data/data-fsWrite-2.txt', 'w+', function(err, fd) {
	if (err) {
		console.log(err);
		return;
	};

	var data = 'Hello Eragon!';

	fs.write(fd, data, 0, 'utf-8', function(err, written, string) {
		if (err) {
			console.log(err);
			return;
		}

		console.log('byteWritten: ' + written);
		console.log(string);	
	})
})

fs.writeFile('data/data-fs-writeFile.txt', 'Hello Nodejs!', function(err) {
	if (!err) {
		console.log('写入成功！');
	}
})