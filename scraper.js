var Nightmare = require('nightmare')



// app.post('/search', function(req, res) {

	// var nb0 = Nightmare({ show: true})  //partsgeek.com
	// var nb1 = Nightmare({ show: true})  //1aauto.com
	var nb2 = Nightmare({ show: true})  //autoanything.com
	// var nb3 = Nightmare({ show: true})
	// var nb4 = Nightmare({ show: true})
	// var nb5 = Nightmare({ show: true})
	// var nb6 = Nightmare({ show: true})
// })

// Having multiple 'nightmareBrowser' allows you to scrap more sites
//'show:false' won't open the electron browser, good to run if you are testing but not in practice (slows down production)

	// nb0
	// 	.goto('http://partsgeek.com')
	// 	.select('#pg_year3', '2002')
	// 	.wait(500)
	// 	.select('#pg_make3', 'Ford')
	// 	.wait(500)
	// 	.select('#pg_model3', 'Excursion')
	// 	.wait('.pcount')
	// .evaluate(() => true)
	// .end()
	// .then(console.log)
	// .catch((error) => {
	// 	console.error('Search failed:', error);
	// });

	// nb1
	// 	.goto('http://1aauto.com')
	// 	.wait(1000)
	// 	.click('#x-mark-icon')
	// 	.wait(500)
	// 	.select('.dropdown-toggle', '2002')
	// 	.wait(500)
	// 	.select('#vehicle-picker-make', 'Ford')
	// 	.wait(500)
	// 	.select('#vehicle-picker-model', 'Excursion')
	// 	.wait('.pcount')
	// .evaluate(() => true)
	// .end()
	// .then(console.log)
	// .catch((error) => {
	// 	console.error('Search failed:', error);
	// });

	nb2
		.goto('http://autoanything.com')
		.wait(1000)
		.click('.autoanythingModalCloseButton')
		.wait(1000)
		.select('#vehicleYear', '2002')
		.wait(1000)
		.select('#vehicleMake', 'Ford')
		.wait(1000)
		.select('#vehicleModel', 'Excursion')
		// .wait('.pcount')
	.evaluate(() => true)
	.end()
	.then(console.log)
	.catch((error) => {
		console.error('Search failed:', error);
	});


		