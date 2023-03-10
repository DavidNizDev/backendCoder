const args = process.argv.slice(2);

const nums = [];
for (let i = 0; i < args.length; i++)
	if (!isNaN(args[i])) nums.push(Number(args[i]));

const error = args.some(arg => isNaN(arg));
if (error)
	console.log({
		error: {
			descripcion: 'error de tipo',
			numeros: args,
			tipos: args.map(arg => typeof arg),
		},
	});

console.log({
	datos: {
		numeros: nums,
		promedio: nums.reduce((p, c) => p + c) / nums.length,
		max: Math.max(...nums),
		min: Math.min(...nums),
		ejecutable: process.title,
		pid: process.pid,
	},
});
