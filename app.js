var Nightmare = require('nightmare')
var express = require('express')
var bodyParser = require('body-parser')
// var request = require('request')
// var cheerio = require('cheerio')

var app = express()

app.use(express.static('./'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
	res.sendFile('./index.html', {root:'/'})
})

app.post('/search', function(req, res) {
	var nightmareBrowser0 = Nightmare({ show: false})  //rockauto.com
	// var nightmareBrowser1 = Nightmare({ show: false})  //
	// var nightmareBrowser2 = Nightmare({ show: false})
	// var nightmareBrowser3 = Nightmare({ show: false})
	// var nightmareBrowser4 = Nightmare({ show: false})
	// var nightmareBrowser5 = Nightmare({ show: false})
	// var nightmareBrowser6 = Nightmare({ show: false})
})
// Having multiple 'nightmareBrowser' allows you to scrap more sites
//'show:false' won't open the electron browser, good to run if you are testing but not in practice (slows down production)

	nightmareBrowser0
		.goto('http://partsgeek.com')
		.type('', req.body.searchTerm)
		.click('#btntabsearch')
		.wait('#main')

		.evaluate(function() {
			return {

			}
		})







app.listen(4218, function() {
	console.log('app is turning on port 4128')
})