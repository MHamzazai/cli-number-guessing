#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computrt will generate a random number;
// 2) User input for guessing numer;
// 3) Compare user input with computer generated number and show result;
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To the Cli Based  Number Guessing Game");
const answers = await inquirer.prompt([
    {
        message: "please guess a number between 1-6 = ",
        type: "number",
        name: "yourGuessedNumber",
    },
]);
if (answers.yourGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log(`Oh! you guessed a wrong number."TRY AGAIN!"`);
}
