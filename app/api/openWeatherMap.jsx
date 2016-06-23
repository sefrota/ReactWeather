var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8eeb612618aebcb9fc76fd84a83e9ef3&units=metric';
//8eeb612618aebcb9fc76fd84a83e9ef3


module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(
			function(res){//success
				if(res.data.cod && res.data.message){
					throw new Error(res.data.message);
				}else{
					return res.data.main.temp;
				}
			},
			function(res){//failure
				throw new Error(res.data.message);
			}
		)
	}
};