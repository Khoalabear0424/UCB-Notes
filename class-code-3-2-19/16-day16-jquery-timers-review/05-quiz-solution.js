// 1. write a function that takes two numbers and returns true if they are both greater than five

// 	example: 
// 		6, 8 should return true
// 		4, 9 should return false

// do not hard code values
	// var a = 3;
	// var b = 5;

//do not put numbers as argument names
function greaterThanFive(a, b){
	if (a > 5 && b > 5) return true;
	else return false;
}

function greaterThanFive(a, b){
	return (a > 5 && b > 5);
}

//wrong
	// 8, 3 -> true
	// after return happens, the function ends
	// function greaterThanFive(a, b){
	// 	if (a > 5) return true
	// 	else return false

	// 	if (b > 5) return true
	// 	else return false
	// }


// 2. write a function that takes an image url and returns an image 

// 	example: world.jpg should return 

// 		<img src="world.jpg">

//wrong because the image will be this
// <img src=s>
	// function createImageTag(s){
	// 	return "<img src=s>"
	// }

function createImageTag(s){
	return "<img src='" + s "'>"
}

function createImageTag(s){
	return '<img src=\'' + s '\'>'
}

function createImageTag(s){
	return `<img src="${s}">`
}

function createImageTag(s){
	return $('<img>').attr('src', s);
}

function createImageTag(s){
	var im = document.createElement('img');
	im.setAttribute('src', s);

	return im;
}







