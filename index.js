const express = require('express');
const exphbs  = require('express-handlebars');
let small 
let medium 
let large 
let grandTotal
let size 

const app = express();
// const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {

	res.render('index', {
	
	});
});

app.post('/small', function (req, res) {
	if(size == 'small'){
		small == 33
	}

	res.redirect('/');

})
 
app.post('/medium', function (req, res) {

	res.redirect('/');

})

app.post('/large', function (req, res) {

	res.redirect('/');

})

app.post('/count', function (req, res) {

	res.redirect('/');

})



// start  the server and start listening for HTTP request on the PORT number specified...
const PORT = process.env.PORT || 7002;
app.listen(PORT, function () {
	console.log('started');
})