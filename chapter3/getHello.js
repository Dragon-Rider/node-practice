var Hello = require('./modules/hello'),   /*注意这里的路径一定要有 ./ 否者会报错*/
	hello = new Hello();

hello.setName('Eragon');
hello.sayHello();