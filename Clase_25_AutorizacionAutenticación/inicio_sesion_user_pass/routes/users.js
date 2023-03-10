const router = require('express').Router();
const loginUser = require('../middlewares/auth');
const { login, registerUser, getUser } = require('../controllers/controller');

router.get('/', (req, res) => res.render('login.handlebars'));
router.get('/datos', (req, res) => res.render('datos.handlebars', { user }));
router.get('/register', (req, res) => res.render('register.handlebars'));
router.post('/register', (req, res) => res.redirect('/register'));
router.post('/registerUser', (req, res) => {
	const user = registerUser(req.body);
	req.session.name = user.name;
	res.render('datos.handlebars', { user });
});
router.post('/login', (req, res) => {
	res.render('/datos', { user });
});
router.post('/logout', (req, res) => {
	try {
		req.session.destroy();
		res.redirect('/');
	} catch (error) {
		res.status(500).send("Err: ", err);
	}
});

module.exports = router;