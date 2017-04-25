var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/view");

app.get("/", function(req, res) {
	res.render("index.ejs");
});

module.exports = app;
