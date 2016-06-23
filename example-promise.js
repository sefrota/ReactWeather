/**function getTemplCallback(location, callback) {
  callback(undefined, 78);
  callback('City not found');
}


getTemplCallback('Philadelphia', function (err, temp){
	if(err){
		console.log('error', err);
	}else{
		console.log('success', temp);
	}
});

function getTempPromise(location){
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(78);
			reject('City not found');
		}, 1000);	
	});
}

getTempPromise('Philadelphia').then(
	function(temp){//first is the success function
		console.log('promise success', temp);
}, 	function(err){
		console.log('promise failed', err)
});**/

function addPromise (a, b) {
	return new Promise(function(resolve, reject){
		if(typeof (a + b) === 'number'){
			resolve(a + b);
		}else{
			reject('a and b must be numbers');
		}
	});
}

addPromise(1, 4).then(
	function(sum){
		console.log('The sum of the numbers is ', sum);
	},
	function(err){
		console.log(err);
	}
);