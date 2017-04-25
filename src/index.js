var app = require("./app");
var config = require("./config");

var server = app.listen(config.port, "0.0.0.0", function() {
	console.log("Server ran at " + server.address().address + ":" + server.address().port);
});
