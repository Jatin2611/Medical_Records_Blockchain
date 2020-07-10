//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(express.static('public'));

app.get('/', function (req, res) {
	res.render('home');
});
mongoose
	.connect('mongodb://localhost/medicalrecords')
	.then(() => console.log('Connected to MongoDB...'))
	.catch((err) => console.error('Could not connect to MongoDB...'));

const userAuthSchema = new mongoose.Schema({
	userName: String,
	email: String,
	password: String,
	post: String,
	licenseNo: Number,
});

const Auth = mongoose.model('Auth', userAuthSchema);

app.post('/register', async (req, res) => {
	//let user = await Auth.findOne({ email: req.body.email });
	//if (user) return res.status(400).send('User already registered.');

	user = new Auth({
		userName: req.body.username,
		email: req.body.email,
		password: req.body.password,
		post: req.body.role,
		licenseNo: req.body.License_no,
	});

	await user.save();

	console.log(req.body.username);
	console.log(req.body.email);
	console.log(req.body.password);
	console.log(req.body.role);
	console.log(req.body.License_no);
	res.send('Successfully submitted..!');
});

app.get('/register', function (req, res) {
	res.render('register');
});

app.get('/upload-history', function (req, res) {
	res.render('upload-history');
});

app.listen(3000, function () {
	console.log('Server started on port 3000');
});
