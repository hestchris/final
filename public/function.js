$(document).ready(function(){

	$('#submit').on('click', function() {
		// pulls in data from html search field
		$.post('/search', {searchTerm:$('#vehicle').val()}, function(dataFromServer) {
			console.log(dataFromServer)
			// returns data from web scrape for display
			$('#results').html(dataFromServer[0]);
			$('#results').append(dataFromServer[1]);
			$('#results').append(dataFromServer[2]);
		})
	})
})



