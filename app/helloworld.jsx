"use strict";

// react bootstrap
var RB = ReactBootstrap;

// FLUX 
var Dispatcher = require("dispatcher")
  , Actions = require("actions")
 ;

var Navigation = require('navigation')
  , Icon = require("utils/icon");

let HelloWorld = {};

HelloWorld.Init = function() {
	React.render(<HelloWorldComponent />, document.getElementById("content"));
};

class HelloWorldComponent extends React.Component {
	render() {
		return (
			<div>
				<Navigation />

				<RB.Grid fluid>
					<RB.Row>
						<RB.Col md={8} className="content">
							<div>
								<RB.PageHeader>Hello World</RB.PageHeader>
							</div>
						</RB.Col>
					</RB.Row>
				</RB.Grid>
			</div>
		);
	}
}

module.exports = HelloWorld;
