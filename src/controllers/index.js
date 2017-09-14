var router = require("express").Router();

router.get("/", function(req, res) {
	res.render("home");
});

router.use("/assets", require("./asset"));

module.exports = router;
