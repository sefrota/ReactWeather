var React = require('react');

/*var WMessage = React.createClass({

	render: function(){
		var {location, temp} = this.props;
		return (
			<h3>It's {temp} degrees in {location}</h3>
		);
	}
});*/

var WMessage = ({location, temp}) => {
	return (
			<h3 className="text-center">It's {temp} degrees in {location}</h3>
	);
}

module.exports = WMessage;