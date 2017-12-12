var Nightmare = require('nightmare')
var express = require('express')
// var bodyParser = require('body-parser')

var app = express()

// app.use(express.static('./'))
// app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', function(req, res) {
// 	res.sendFile('/index.html', {root:'./'})
// })

// Setting up the Nightmare browser to search multiple pages at once
// app.get('/search', function(req, res) {

	// var nb0 = Nightmare({ show: true})  //bringatrailer.com
	// var nb1 = Nightmare({ show: true})  //hemmings.com
	// var nb2 = Nightmare({ show: true})  //oldcaronline.com
	var nb3 = Nightmare({ show: true})
	// var nb4 = Nightmare({ show: true})
	// var nb5 = Nightmare({ show: true})
	// var nb6 = Nightmare({ show: true})
// })

// Having multiple 'nightmareBrowser' allows you to scrap more sites
//'show:false' won't open the electron browser, good to run if you are testing but not in practice (slows down production)

	// nb0
	// 	.goto('http://bringatrailer.com')
	// 	.wait('#header-search-open')
	// 	.wait('a.header-logo.close-modal[href="https://bringatrailer.com/"]')
	// 	.wait(500)
	// 	.click('#header-search-open')
	// 	.wait(500)
	// 	.type('#header-search-terms', 'f100')
	// 	.click('#header-search-submit')
	// 	.wait(5000)
	// 	.evaluate(function() {
	// 		return {link: document.querySelector('#a.column.search-results').innerHTML}
	// 	})
	// 	.evaluate(() => true)
	// 	.end()
	// 	.then(console.log)
	// 	.catch((error) => {
	// 		console.error('Search failed:', error);
	// });
// })

	// nb1
	// 	.goto('https://www.hemmings.com/classifieds/cars-for-sale') 
	// 	.type('#q', 'ford f100')
	// 	.click('#header_search_go')
	// 	.wait(1000)
	// 	.evaluate(() => true)
	// 	.end()
	// 	.then(console.log)
	// 	.catch((error) => {
	// 		console.error('Search failed:', error)
	// 	})

	// nb2
	// 	.goto('https://oldcaronline.com')
	// 	.wait(500)
	// 	.click('.top-srch')
	// 	.type('#top-keyword-search', 'Ford f100')
	// 	.click('#top-keyword-search-button')
	// 	.wait(1000)
	// 	.evaluate(() => true)
	// 	.end()
	// 	.then(console.log)
	// 	.catch((error) => {
	// 		console.error('Search failed:', error)
	// 	})

	nb3
		.goto('http://www.worldwidevintageautos.com/')
		.wait(500)
		.type('#SearchString', 'Ford f100')
		.wait(500)
		.evaluate(() => true)
		.end()
		.then(console.log)
		.catch((error) => {
			console.error('Search failed:', error)
		})









// app.listen(4100, function() {
// 	console.log('This party is kickin on port 4100')
// })

		