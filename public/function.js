$(document).ready(function(){

    $('#searchButton').on('click', function(){
        $.post('/search', {searchTerm: $('#searchInput').val()}, function(dataFromServer){
            console.log(dataFromServer)
      		$('a').html(dataFromServer.text).attr('href', dataFromServer.link)
            
        })
    })
})


$(document).ready(function() {
	console.log('ready to find your parts!')


	var year = function() {
		$('.year').text(Year)
	}

	var make = function() {
		$('.make').text(Make)
	}

	var model = function () {
		$('.model').text(Model)
	}
})

