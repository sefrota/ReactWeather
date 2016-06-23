var React = require('react');
var WMessage = require('WMessage');
var WForm = require('WForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false
		}
	},
	handleSearch: function(location){
		var that = this;

		this.setState({
			isLoading: true
		});
		openWeatherMap.getTemp(location).then(
			function(temp){
				that.setState({
					location: location,
					temp:temp,
					isLoading: false
				});
			},
			function(errorMessage){
				that.setState({
					isLoading: false
				});
				alert(errorMessage);
			}

		)

	},
	render: function(){
		var {isLoading, location, temp} = this.state;

		function renderMessage(){
			if(isLoading){
				return (
					<h3>Fetching weather...</h3>
				);
			} else if (temp && location) {
				return (
					<WMessage temp={temp} location={location}/>
				);
			}
		}
		return (
			<div>
				<h3>Weather Component</h3>
				<WForm onSearch={this.handleSearch}/>
				{renderMessage()}
		 	</div>
		);
	}

});

module.exports = Weather;