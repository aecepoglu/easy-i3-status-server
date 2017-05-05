var route = require("express").Router();
var Asset = require("../model/asset");

route.get("/new", function(req, res, next) {
	res.render("asset/show", {asset: {}});
});

route.get("/:id", function(req, res, next) {
	Asset.findById(req.params.id).exec()
	.then(function(it) {
		res.render("asset/show", {asset: it});
	})
	.catch(next);
});

route.get("/", function(req, res, next) {
	Asset.find({}).exec()
	.then(function(assets) {
		res.render("asset/list", {
			assets: assets
		});
	})
	.catch(next);
});

route.post("/", function(req, res, next) {
	var asset = new Asset(req.body);

	asset.save()
	.then(function(it) {
		res.redirect(it.id);
	})
	.catch(function(err) {
		console.log(err);
		console.log("errored");
		res.render(err);
	});
});

module.exports = route;

