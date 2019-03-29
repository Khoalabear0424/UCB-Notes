// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
        type: 'input',
        message: 'What is your favorite color?',
        name: 'color',
    },
    {
        type: 'password',
        message: 'Choose a password',
        name: 'password',
    },
    {
        type: 'list',
        message: 'What is the best fruit?',
        choices: ['pear', 'apple', 'orange'],
        name: 'favFruit',
    },
    {
        type: 'checkbox',
        message: 'Check yes',
        choices: ['yes','no'],
        name: 'checked',
    },
    {
        type: 'confirm',
        message: 'Are you done?',
        name: 'confirm',
        default: 'true',
    },
    {
        type: 'password',
        message: 'Please enter the password previously set',
        name: 'passwordCheck',
        default: 'false',
    },
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm && inquirerResponse.passwordCheck == inquirerResponse.password) {
      console.log("\nYour favorite color is " + inquirerResponse.color);
      console.log("\nYou think the best fruit is " + inquirerResponse.favFruit);
      console.log("\nYou checked " + inquirerResponse.checked);
    }
    else {
      console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    }
  });
