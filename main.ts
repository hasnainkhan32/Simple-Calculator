#! usr/bin/env node

import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
const answer = await inquirer.prompt([
  {
    message: " Please select Operation:",
    type: "list",
    name: "operator",
    choices: ["Multiplication", "Devision", "Addition", "Subtraction"],
  },

  { message: "Please Enter 1 Number", type: "number", name: "firstnum" },
  { message: "Please Enter 2 Number", type: "number", name: "secnum" },
]);

if (answer.operator === "Multiplication") {
  console.log(+answer.firstnum * answer.secnum);
} else if (answer.operator === "Devision") {
  console.log(+answer.firstnum / answer.secnum);
} else if (answer.operator === "Addition") {
  console.log((+answer.firstnum) + (answer.secnum));
} else if (answer.operator === "Subtraction") {
  console.log(+answer.firstnum - answer.secnum);
}
