const parseArgs = require('minimist');
const yargs = require('yargs/yargs')(process.argv.slice(2));
const argsYargs = yargs.argv;

const args = parseArgs(process.argv.slice(2));
console.log('-->> args', args);

for (let i = 0; i < process.argv.length; i++) {
	console.log(i + ' --> ' + process.argv[i]);
}

const options = { default: { nombre: 'pepe', apellido: 'copado' } };

console.log(
	parseArgs(
		['-a', '1', '-b', '2', 'un-valor-suelto', '--nombre', 'juanita'],
		options
	)
);

const options2 = { alias: { a: 'campoA', b: 'campoB' } };

console.log(parseArgs(['-a', '1', '-b', '2'], options2));
