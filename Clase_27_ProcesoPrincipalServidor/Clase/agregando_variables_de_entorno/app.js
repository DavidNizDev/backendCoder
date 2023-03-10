const config = require('./config');

console.log({
	modo: config.MODO || 'prod',
	puerto: config.PUERTO || 0,
	debug: config.DEBUG || false,
});
