var config = require("./config");

require("./app").then(function(app) {
	var server = app.listen(config.port, "0.0.0.0", function() {
		console.log("Server ran at " + server.address().address + ":" + server.address().port);
	});
});
