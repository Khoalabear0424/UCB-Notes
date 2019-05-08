class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greeting() {
        console.log(`Hi my name is ${this.name}`)
    }
}

let p = new Person('khoa', 5.6);
console.log(p.height);
p.greeting();



class Dancer extends Person {
    constructor(name, height, move, stamina) {
        // Call person constructor function and pass these to it
        super(name, height);

        this.move = move;
        this.stamina = stamina;
    }

    dance() {
        console.log(`The ${this.move} is my favorite move`)
    }
}

let d = new Dancer('kelly', 60, 'dab', 100)
console.log(d.move);
d.dance();