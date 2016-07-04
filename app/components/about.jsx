var React = require('react');
var {Link} = require('react-router');
/*var About = React.createClass({
	render: function(){
		return (
			<h3>About Component</h3>
		);
	}

});*/

var About = (props) => {
	return (
	<div>
		<h1 className ='text-center'>About</h1>
		<p>This app was created to provide people the ability to know about the weather anywhere in the world.</p>
		<p>For more info visit the following links:</p>
		<ol>
			<li>
				<a href="https://github.com/sefrota/ReactWeather">ReactWeather@github</a>
			</li>
			<li>
				<a href="http://foundation.zurb.com/">@Foundation</a>
			</li>
			<li>
				<a href="https://facebook.github.io/react/">@React</a>
			</li>
		</ol>
	</div>
	);
}

module.exports = About;