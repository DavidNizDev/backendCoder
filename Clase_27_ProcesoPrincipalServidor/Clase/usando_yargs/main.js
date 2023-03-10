const yargs = require('yargs/yargs')(process.argv.slice(2));
const args = yargs.argv;
const args2 = yargs.default({ modo: 'prod', puerto: 0, debug: 'false' }).argv;

// node main.js 1 2 3 -m dev -p 8080 -d
console.log({
	modo: args.m,
	puerto: args.p,
	debug: args.d,
	otros: args._,
});

// node main.js 1 2 3
console.log({
	modo: args2.modo,
	puerto: args2.puerto,
	debug: args2.debug,
	otros: args2._,
});
