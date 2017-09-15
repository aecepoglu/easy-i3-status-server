var bodyParser = require("body-parser");
var config = require("./config");
var express = require("express");
var handlebars = require("express-handlebars");
var Sequelize = require("sequelize");

module.exports = require("./util/sequelize").init(config.dbUrl)
.then(function() {
	var app = express();
	
	app.engine("handlebars", handlebars({
		defaultLayout: "index",
		layoutsDir: __dirname + "/views/layouts"
	}));
	app.set("view engine", "handlebars");
	app.set("views", __dirname + "/views");
	
	
	app.use("/",
		bodyParser.urlencoded({extended: false}),
		require("./controllers"),
		function(err, req, res, next) {
			console.warn(err);
			res.status(400).send(err);
		}
	);

	return app;
});
