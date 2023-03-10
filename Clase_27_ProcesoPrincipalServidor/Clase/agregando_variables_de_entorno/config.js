process.env.MODO = 'dev';
process.env.PUERTO = 8080;
process.env.DEBUG = true;

module.exports = {
	MODO: process.env.MODO || 'prod',
	PUERTO: process.env.PUERTO || 0,
	DEBUG: process.env.DEBUG || false,
};
