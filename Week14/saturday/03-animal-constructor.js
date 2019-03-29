const inquirer = require('inquirer');

function PetAttr(name, species, hasFur, canSwim, canFly){
    this.name = name,
    this.species = species,
    this.hasFur = hasFur,
    this. canSwim = canSwim,
    this.canFly = canFly
};

inquirer
    .prompt([
        {
            type:"input",
            message: 'What is your pet name?',
            name: 'petName'
        },
        {
            type:"input",
            message: 'What is the species?',
            name: 'petSpecies'
        },
        {
            type:"list",
            message: 'Does it have fur?',
            choices: ['true', 'false'],
            name: 'hasFur'
        },
        {
            type:"list",
            message: 'Can it swim?',
            choices: ['true', 'false'],
            name: 'canSwim'
        },
        {
            type:"list",
            message: 'Can it fly?',
            choices: ['true', 'false'],
            name: 'canfly'
        },
        {
            type:"confirm",
            message: 'Would you like to add another pet?',
            name: 'confirm',
            detault: false,
        },
    ])
        .then(function(inquirerResponse){
            const newPet = new PetAttr(inquirerResponse.petName,inquirerResponse.petSpecies,inquirerResponse.hasFur,inquirerResponse.canSwim,inquirerResponse.canFly)

            // if(inquirer.confirm){

            // }
            console.log(newPet)
        });