var request = require('request');

// node 06-five-solution.js jaws

//normal
	var movie = process.argv[2];
	movie = movie.trim(); //takes off leading and trailing spaces
	console.log('Movie: ' + movie);

	var url = 'https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';
	console.log(url);

	request(url, function (error, response, b) {

	  console.log(JSON.parse(b).Released);

	});

// node 06-five-solution.js the matrix reloaded

//difficult
	// var movie = process.argv.slice(2).join('+');
	// movie = movie.trim(); //takes off leading and trailing spaces
	// console.log('Movie: ' + movie);

	// var url = 'https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';
	// console.log(url);

	// request(url, function (error, response, b) {

	//   console.log(JSON.parse(b).Released);

	// });







