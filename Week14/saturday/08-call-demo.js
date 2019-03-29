var ob = {
    name : 'Michael'
}

function updateObject(){
    console.log('this','on line 7', this);
    this.hat = true;
}

updateObject.call(ob)
console.log(ob)