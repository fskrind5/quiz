#!/usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "questions_1",
        type: "list",
        message: "Q1. Who developed and designed TypeScript?",
        choices: [
            "Microsoft",
            "Mozilla",
            "Google",
            "Apple"
        ]
    },
    {
        name: "questions_2",
        type: "list",
        message: "Q2. When was the first time TypeScript was made public?",
        choices: [
            "December 2012",
            "October 2012",
            "October 2013",
            "November 2012",
        ]
    },
    {
        name: "questions_3",
        type: "list",
        message: "Q3. Which of the following characters are commonly allowed as variable name in TypeScript?",
        choices: [
            "$",
            "@",
            "#",
            "&",
        ]
    },
    {
        name: "questions_4",
        type: "list",
        message: "Q4. Which operator is commonly used for string concatenation in TypeScript?",
        choices: [
            "+",
            "-",
            "*",
            "/",
        ]
    },
    {
        name: "questions_5",
        type: "list",
        message: "Q5. What is the difference between “==” and “===” in TypeScript?",
        choices: [
            "There is no difference between == and === in TypeScript",
            "== Check for equality without checking the type, and === check for equality with checking the type",
            "== Check for equality with checking the type, and === check for equality without checking the type",
            "== and === both checks for equality without checking the type",
        ]
    }
]);
let score = 0;
switch (quiz.questions_1) {
    case "Microsoft":
        score++;
        console.log("1. Correct answer");
        break;
    default:
        console.log("1. Incorrect answer");
}
switch (quiz.questions_2) {
    case "October 2012":
        score++;
        console.log("2. Correct answer");
        break;
    default:
        console.log("2. Incorrect answer");
}
switch (quiz.questions_3) {
    case "$":
        score++;
        console.log("3. Correct answer");
        break;
    default:
        console.log("3. Incorrect answer");
}
switch (quiz.questions_4) {
    case "+":
        score++;
        console.log("4. Correct answer");
        break;
    default:
        console.log("4. Incorrect answer");
}
switch (quiz.questions_5) {
    case "== Check for equality without checking the type, and === check for equality with checking the type":
        score++;
        console.log("5. Correct answer");
        break;
    default:
        console.log("5. Incorrect answer");
}
console.log("Your score is " + score + "/5");
