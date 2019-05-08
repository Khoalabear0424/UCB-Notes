class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }

    greeting() {
        console.log(`Hi my name is ${this.name}`)
    }
}

var p = new Person('khoa', 5.6);
console.log(p.height);
p.greeting();