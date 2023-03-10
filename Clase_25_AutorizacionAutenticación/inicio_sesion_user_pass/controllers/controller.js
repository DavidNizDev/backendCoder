let users = [];

const login = (req, res, next) => {
	if (req.session?.nombre) next();
	else {
		const { name, password } = req.body;
		const user = get(name);
		if (user && user.name === name && user.password === password) {
			req.session.nombre = name;
			next();
		} else res.render('pages/indexLogin.ejs', { message: "not authorized" });
	}
}

const registerUser = (dataUser) => {
	const { name, password, address } = dataUser;
	const userExists = getUser(name);
	// if (userExists) throw new Error;
	const user = { name, password, address };
	users.push(user);
	return user;
};

const getUser = name => users.find(user => user.name === name);

module.exports = { login, registerUser, getUser };