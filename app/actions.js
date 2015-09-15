var Dispatcher = require ("dispatcher");

// actions
var Actions = {
	EXAMPLE_ACTION: "EXAMPLE_ACTION",

	example: function(payload) {
		Dispatcher.dispatch({
			type: Actions.EXAMPLE_ACTIONS,
			payload: payload
		});
	}
};

module.exports = Actions;
