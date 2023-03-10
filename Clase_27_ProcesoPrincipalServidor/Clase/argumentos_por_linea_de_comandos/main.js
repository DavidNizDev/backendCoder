const parseArgs = require('minimist');

const args = parseArgs(process.argv.slice(2));

console.log({
	modo: args.m,
	puerto: args.p,
	debug: args.d,
	otros: args._,
});

const args2 = process.argv.slice(2);
const options = { default: { modo: 'prod', puerto: 0, debug: false } };
const parse = parseArgs(args2, options);

console.log({
	modo: parse.modo,
	puerto: parse.puerto,
	debug: parse.debug,
	otros: parse._,
});
