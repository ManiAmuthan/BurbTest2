var backBone = require('backbone');
var getRequests = require('./Routes').get;

module.exports = {
	bind: bindGet
};

function bindGet(app) {
	for(var i = 0; i < getRequests.length; i++) {
		app.get(getRequests[i].route, require(getRequests[i].controller));
	}
}