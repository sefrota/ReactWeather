var React = require('react');

var WForm = React.createClass({

	onFormSubmit: function(e){
		e.preventDefault();
		var location = this.refs.location.value;

		if(location.length > 0){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}

	},
	render: function(){

		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" placeholder="Enter the city here" ref="location"/>
				<button type="submit">Click here to know the weather</button>
			</form>
		);
	}

});

module.exports = WForm;