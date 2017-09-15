function getVar(x) {
	return process.env[x];
}

module.exports = {
	dbUrl: getVar("DB_URL") || "postgres://postgres:pass123@localhost:5432/postgres",
	port: getVar("PORT") || 3000
};
