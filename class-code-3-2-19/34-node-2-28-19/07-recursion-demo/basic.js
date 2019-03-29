// Load the NPM Package inquirer
var inquirer = require("inquirer");

var users = [];

function createAndAddUser(){
  // Create a "Prompt" with a series of questions.
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "What is your name?",
        name: "username"
      },
      // Here we give the user a list to choose from.
      {
        type: "list",
        message: "Which Pokemon do you choose?",
        choices: ["Bulbasaur", "Squirtle", "Charmander"],
        name: "pokemon"
      },
      // Here we ask the user to confirm.
      {
        type: "confirm",
        message: "do you want to add another user?",
        name: "conf",
        default: true
      }
    ])
    .then(function(u) {
      users.push({username : u.username, pokemon : u.pokemon});
      console.log(users);

      if (u.conf){
        createAndAddUser();
      }
    });
}


createAndAddUser();



