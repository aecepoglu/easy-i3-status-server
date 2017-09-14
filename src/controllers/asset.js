var route = require("express").Router();
var Asset = require("../model/asset");

route.get("/new", function(req, res, next) {
	res.render("asset/edit", {
		asset: {},
		isAssetListPage: true
	});
});

route.get("/:id", function(req, res, next) {
	Asset.findById(req.params.id).exec()
	.then(function(it) {
		res.render("asset/show", {
			asset: it,
			isAssetListPage: true
		});
	})
	.catch(next);
});

route.get("/", function(req, res, next) {
	Asset.find({}).exec()
	.then(function(assets) {
		res.render("asset/list", {
			assets: assets,
			isAssetListPage: true
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
		next(err);
	})
});

route.post("/:id/upvote", function(req, res, next) {
	Asset.findByIdAndUpdate(req.params.id, {
		$inc: {votes: +1}
	}, {
		new: true
	})
	.then(function(it) {
		res.send("" + it.votes);
	})
	.catch(function(err) {
		next(err);
	});
});

module.exports = route;
