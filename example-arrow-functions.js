var names = ['John', 'Kenny', 'Louis'];

/*names.forEach(function(name){
	console.log(name);
});

names.forEach((name) => {
	console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));*/

/*var returnMe = (name) => name + '!';
console.log(returnMe('Sergio'));*/

/*var person = {
	name: 'Sergio',
	greet: function(){
		names.forEach((name) => console.log(this.name + ' says hi to '+ name))
	}
}


person.greet();*/


var addStatement = (a,b) => {
	return a+b;
}

var addStatementExp = (a,b) => a + b;

console.log(addStatement(1, 2));
console.log(addStatementExp(2, 5));
