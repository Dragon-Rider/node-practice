var routes = function() {
	this.index = function(req, res) {
		res.render('index', {
			'title': 'Eragon'
		});
	};
	this.hello = function(req, res) {
		res.send('The time is ' + new Date().toString());
	};
	this.list = function(req, res) {
		res.render('list', {
			title: 'list-Eragon',
			itmes: ['Eragon', '1991', '01', '02']
		});
	}
	this.headers = function(req, res) {
		res.render('headers', {
			title: "helper-headers"
		})
	}
}

module.exports = routes;