var request = require('request');

	// 1. node looks for request in the node library
		// IT DOESN'T FIND IT
	// 2. node looks for request.js in the current folder of this file 
		// IT DOESN'T FIND IT
	// 3. node looks for a folder named request in the node_modules folder of this file's current directory
		//IT FINDS IT 

request('https://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=trilogy', function (error, response, b) {
		//the response that we get back is in b
		
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  console.log(JSON.parse(b).Title);

});










