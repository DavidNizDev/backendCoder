const mongoose = require('mongoose');
const usuarios = require('./models/usuarios.js');

const users = [
	{ nombre: 'Lucas', apellido: 'Blanco', dni: '30355874' },
	{ nombre: 'María', apellido: 'García', dni: '29575148' },
	{ nombre: 'Tomas', apellido: 'Sierra', dni: '38654790' },
	{ nombre: 'Carlos', apellido: 'Fernández', dni: '26935670' }
];

const mon = async () => {
	const CS = 'mongodb+srv://coder:1f33l-C0d3r@cluster0.uswi7.mongodb.net/ecommerce?retryWrites=true&w=majority';
	try {
		await mongoose.connect(CS);
		// const response = await usuarios.insertMany(users);
		// console.log(response);
		const response = await usuarios.updateOne({ dni: 26935670 }, { $set: { nombre: 'Juan Carlos' } });
		console.log(response);
	} catch (err) {
		console.log(err);
	}
}

mon();