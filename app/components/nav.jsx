var React = require('react');
var {Link, IndexLink} = require('react-router');
/*var Nav = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Navigation Component</h2>
				<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>
				<Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
				<Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
			</div>
		);
	}
});*/

var Nav = React.createClass({
	onSearch: function(e){
		e.preventDefault();
		alert('Not yet wired up');
	},
	render: function(){
		return (
			<div className = "top-bar">
				<div className = "top-bar-left">
					<ul className = "menu">
						<li class="menu-text">
							WeatherMix
						</li>
						<li>
							<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink>		
						</li>
						<li>
							<Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>				
						</li>
						<li>
							<Link to="examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>			
						</li>
					</ul>
				</div>
				<div className = "top-bar-right">
					<form onSubmit={this.onSearch}>
						<ul className = "menu">
							<li>
								<input type="search" placeholder="Search weather"/>
							</li>
							<li>
								<input type="submit" className="button" value="Get Weather"/>
							</li>
						</ul>

					</form>
				</div>
			</div>
		);	
	}
});

module.exports = Nav;
