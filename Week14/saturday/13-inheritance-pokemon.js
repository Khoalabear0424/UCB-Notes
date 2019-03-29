function Pokemon(n, hp, attack) {
    this.name = n;
    this.hp = hp;
    this.attacks = attack;
}

Pokemon.prototype.attack = function () {
    var ranindex = Math.floor(Math.random() * this.attacks.length);
    console.log(this.attacks[ranindex]);
}

var p = new Pokemon('Pikachu', 100, ['Electric shock', 'thunderbolt', 'tabkle', 'scratch']);

var s = new Pokemon('Squirtle', 120, ['Water gun', 'bubble', 'ice beam', 'tabkle']);

var c = new Pokemon('Charmamnder', 150, ['fire gun', 'ember', 'fire shit', 'sup hot']);

s.friendly = true;

console.log(p, s, c);

p.attack();
s.attack();
c.attack();