function getVar(x) {
	return process.env[x];
}

module.exports = {
	mongoUrl: getVar("MONGO_URL") || "mongodb://localhost/easyi3status",
	port: getVar("PORT") || 3000
};
