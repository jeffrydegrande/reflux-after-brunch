var Icon = React.createClass({
	render: function() {
		var classes = "glyphicon glyphicon-" + this.props.icon;

		var txt = null;
		if (this.props.text) {
			txt = <span>&nbsp;{this.props.text}</span>;
		}

		return (
			<span {...this.props}>
				<span className={classes} ariaHidden='true'></span>
				{txt}
			</span>
		);
	},
	_eoo: true
});

module.exports = Icon;
