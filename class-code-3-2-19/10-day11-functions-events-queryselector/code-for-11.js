
var pTags = document.querySelectorAll('p');

//one way
	//add penguin into the first paragraph
	pTags[0].innerText = 'penguin';

	//add bear into the second paragraph
	pTags[1].innerText = 'bear';

	//add falcon into the third paragraph
	pTags[2].innerText = 'falcon';

	//add skunk to the fourth paragraph
	pTags[3].innerText = 'skunk';

//another way
	var animals = ['penguin', 'bear', 'falcon', 'skunk'];
	
	for (var i=0; i<pTags.length; i++){
		pTags[i].innerText = animals[i];
	}