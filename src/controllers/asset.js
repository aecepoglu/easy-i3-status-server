var route = require("express").Router();
var service = require("../services/asset");

route.get("/", function(req, res) {
	service.list()
	.then(function(assets) {
		res.render("asset/list", {
			assets: assets
		});
	});
});

module.exports = route;

