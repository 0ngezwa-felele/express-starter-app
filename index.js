const express = require('express');
const exphbs  = require('express-handlebars');
const pizzaAdd = require('./pizza');
let small 
let medium 
let large 
let grandTotal = 0
let size 
let price = 0

const app = express();
const adding = pizzaAdd
// const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var smallTotal = 0
var mediumTotal = 0
var largeTotal = 0
var Total = 0

app.get('/', function (req, res) {
	res.render('index',{
	pizzaSmall: smallTotal,
	pizzaMedium: mediumTotal,
	pizzaLarge: largeTotal,
	pizzaTotal: Total,

})
})
app.post('/small', function (req, res) {
	smallTotal += 33.99
	Total+= 33.00
	res.redirect('/');

})
 
app.post('/medium', function (req, res) {
	mediumTotal += 65.00
	Total+= 65.00
	res.redirect('/');

})

app.post('/large', function (req, res) {
	largeTotal += 85.00
	Total+= 85.00
	res.redirect('/');

})

app.get('/Total', function (req, res) {
	
	res.render('/');

})


app.post('/count', function (req, res) {

	res.redirect('/');

})



// start  the server and start listening for HTTP request on the PORT number specified...
const PORT = process.env.PORT || 7002;
app.listen(PORT, function () {
	console.log('started');
})