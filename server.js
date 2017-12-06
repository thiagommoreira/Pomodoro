const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('hbs');
const port = 3000;
const _ = require('lodash');
// const http = require('http');
// const session = require('./lib/core').session;

let {mongoose} = require('./db/mongoose.js');

let app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine', 'hbs');
app.use(cookieParser());

app.get('/', (req, res) => {

	let cookie = req.cookies;
	if(_.isEmpty(cookie)) {
		let random = Math.random().toString();

		res.cookie('tomatoCookie', random, {
			maxAge: 2678400
		});
		console.log('Cookie created', random);

	} else {
		console.log(cookie);
	}
	//console.log(req.cookies);
	//console.log(typeof req.cookies);
	
	res.render('index.hbs');
});

app.get('/remove', (req, res) => {
	res.clearCookie('firstCookie');
	res.clearCookie('tomatoCookie');
	res.end();
});

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
	console.log('Listening', port);
});