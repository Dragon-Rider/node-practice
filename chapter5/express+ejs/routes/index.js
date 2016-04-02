exports.index = function(req, res) {
	res.render('index', {'title':'Eragon'});
};

exports.hello = function(req, res) {
	res.send('The time is ' + new Date().toString());
};

exports.list = function(req, res) {
	res.render('list', {
		title: 'list-Eragon',
		itmes: ['Eragon', '1991', '01', '02']
	});
}

exports.headers = function(req, res) {
	res.render('headers', {
		title: "helper-headers"
	})
}