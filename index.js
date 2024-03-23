#! /usr/bin/env node 
import chalk from "chalk";
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(chalk.blue `Welcome to number guessing game!`);
const input = await inquirer.prompt([
    { name: "guessnumbergame",
        type: "number",
        message: "Kindly guess your number betweeen 1 to 6 !",
    }
]);
if (input.guessnumbergame === randomNumber) {
    console.log(chalk.green `Congratulation! your guess is correct.`);
}
else {
    console.log(chalk.red `oops, your guess is wrong.`);
}
