var ob = {
	nam: 'Rob',

}

function updateObject(num, anotherNum){
	console.log('this', 'on line 7', this);
	console.log('num', num);
	console.log('num', anotherNum);
	this.hat = true;
}

updateObject.call(ob, 5, 6); //in this scenario this is the object named ob

updateObject(5,6); //in this scenario, this is the window

console.log(ob)


