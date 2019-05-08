class Person {
    constructor(name, favSport, favBackStreetBoy) {
        this.name = name;
        this.favSport = favSport;
        this.favBackStreetBoy = favBackStreetBoy;
    }

    playSport() {
        console.log(`${this.name} is playing ${this.favSport}`)
    }
}

// let khoa = new Person('khoa', 'soccer', 'JT');
// khoa.playSport();

class SuperHero extends Person {
    constructor(name, favSport, favBackStreetBoy, superHeroName, superPowers) {
        super(name, favSport, favBackStreetBoy)
        this.superHeroName = superHeroName;
        this.superPowers = superPowers
    }

    doRanMove() {
        let rand = Math.floor(Math.random() * this.superPowers.length)
        console.log(`${this.superHeroName} used${this.superPowers[rand]}!`)
    }
}

let superKhoa = new SuperHero('khoa', 'soccer', 'JT', 'SuperKhoala', ['Fly', 'Laser Beam', 'Super Punch', 'Lighthing Blade']);
superKhoa.playSport();
superKhoa.doRanMove();