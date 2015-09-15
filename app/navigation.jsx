"use strict";

var Navbar = ReactBootstrap.Navbar,
	CollapsibleNav = ReactBootstrap.CollapsibleNav,
	Nav = ReactBootstrap.Nav,
	NavItem = ReactBootstrap.NavItem,
	DropdownButton = ReactBootstrap.DropdownButton,
	MenuItem = ReactBootstrap.MenuItem;

var Navigation = React.createClass({
	getInitialState: function() {
		return { };
	},

	render: function() {
		return(
			<Navbar fluid brand='Your Brand'>
			    <CollapsibleNav eventKey={0}> {/* This is the eventKey referenced */}
					<Nav navbar>
						<NavItem eventKey={1} href='/index.html'>Other Stuff</NavItem>
						{this.props.children}
					</Nav>
					<Nav navbar right>
						goes on the right	
					</Nav>
				</CollapsibleNav>
			</Navbar>
		);
	}
});

module.exports = Navigation;