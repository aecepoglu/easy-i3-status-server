var router = require("express").Router();

router.use("/assets", require("./asset"));

module.exports = router;
