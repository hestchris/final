var Nightmare = require('nightmare')
var express = require('express')
var bodyParser = require('body-parser')
var cheerio = require('cheerio')
var app = express()

//deploy
var HTTP = require('http')
var HTTPS = require('https')
var fs = require('fs')


app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res) {
	res.sendFile('./public/index.html', {root:'./'})
})



app.get('./', function(req, res) {
	res.sendFile('./public/style.css', {root:'./'})
})


// Setting up the Nightmare browser to search multiple pages at once
app.post('/search', function(req, res) {

	// var nb0 = Nightmare({ show: true})  //bringatrailer.com
	var nb1 = Nightmare({ show: false})  //hemmings.com
	// var nb2 = Nightmare({ show: false})  //oldcaronline.com
	// var nb3 = Nightmare({ show: false})  //fossilcars.com

// Having multiple 'nightmareBrowser' allows you to scrap more sites
// 'show:false' won't open the electron browser, good to run if you are testing but not in practice (slows down production)

	// nb0
	// 	.goto('http://bringatrailer.com')
	// 	.wait('#header-search-open')
	// 	.wait('a.header-logo.close-modal[href="https://bringatrailer.com/"]')
	// 	.wait(500)
	// 	.click('#header-search-open')
	// 	.wait(500)
	// 	.type('#header-search-terms', req.body.searchTerm)
	// 	.click('#header-search-submit')
	// 	.wait(5000)
	// 	.evaluate(function() {
	// 		return {link: document.querySelector('#a.column.search-results').href}
	// 	})
	// 	.evaluate(() => true)
	// 	.end()
	// 	.then(console.log)
	// 	.catch((error) => {
	// 		console.error('Search failed:', error);
	// });
	let r1, r2, r3;

	r1 =  nb1
		.goto('https://www.hemmings.com/classifieds/cars-for-sale') 
		.type('#q', req.body.searchTerm)
		.click('#header_search_go')
		.wait(1000)
		.evaluate(function() {
			return document.querySelector('#resultdata').innerHTML
		})
		.end()
		.then((res) => {
			// console.log(res)
			return res;
		})
		.catch((error) => {
			console.error('Search failed:', error)
		})

	// r2 =  nb2
	// 	.goto('http://www.allcollectorcars.com/')
	// 	.wait(1000)
	// 	.type('#smartsearch', req.body.searchTerm)
	// 	.click('.search-btn.btn.btn-default')
	// 	.wait(1000)
	// 	.evaluate(function() {
	// 		return document.querySelector('#listings-rows').innerHTML
	// 	})
	// 	.end()
	// 	.then((res) => {
	// 		console.log(res)
	// 		return res;

	// 	})
	// 	.catch((error) => {
	// 		console.error('Search failed:', error)
	// 	})

	// r3 =  nb3
	// 	.goto('https://www.barrett-jackson.com/')
	// 	.click('.icon-reorder.icon-white')
	// 	.type('.search-form', req.body.searchTerm)
	// 	.click('.icon-search')
	// 	.wait(5000)
	// 	.evaluate(function() {
	// 		return document.querySelector('#results').innerHTML
	// 	})
	// 	.end()
	// 	.then((res) => {
	// 		console.log(res)
	// 		return res;

	// 	})
	// 	.catch((error) => {
	// 		console.error('Search failed:', error)
	// 	})

	Promise.all([r1]).then(function(resolveValues){
		// var $ = cheerio.load(resolveValues[0])
		// console.log($($('.result-block').children()['0']).text().replace(/\s+/g, ' '))
		res.send(resolveValues)

	})


})	



try {
	var httpsConfig = {
		key: fs.readFileSync('/etc/letsencrypt/live/2tornadoes.com/privkey.pem'),
		cert: fs.readFileSync('/etc/letsencript/live/2tornadoes.com/cert/pem'),
	}

	var httpsServer = HTTPS.createServer(httpsConfig, app)
	httpsServer.listen(443)
	console.log(httpsServer)
	var httpApp = express()
	httpApp.use(function(req, res, next) {
		res.redirect('https://2tornadoes.com' + req.url)
	})
	httpApp.listen(80)

}

catch(e) {
	console.log(e)
	console.log('could not start HTTPS server')
	var httpServer = HTTP.createServer(app)
	httpServer.listen(80)
}

// app.listen(80, function() {
// 	console.log('This party is kickin on port 4100')
// })

		