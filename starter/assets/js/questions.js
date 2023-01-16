// Questions JS this will be an array of objects

const questionsArray = [
    {
        num: 1,
        question: "Commonly used data types DO NOT include:",
        options: [
            "strings", 
            "booleans", 
            "alerts",
            "numbers"
        ]
    },
    {
        num: 2, 
        question: "The condition within an if statement is enclosed within ______",
        options: [
            "quotes",
            "curly brackets",
            "parenthesis", 
            "sqare brackets"
        ]
    },
    {
        num: 3, 
        question: "Arrays in JavaScript can be used to store _____",
        options: [
            "numbers and strings",
            "other arrays",
            "booleans", 
            "all of the above"
        ]
    },
    {
        num: 4, 
        question: "String values must be enclosed within ______ when being assigned to variables",
        options: [
            "commas",
            "curly braces",
            "quotes", 
            "parenthesis"
        ]
    },
    {
        num: 5, 
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "JavaScript",
            "terminal/bash",
            "for loops", 
            "console.log"
        ]
    }
]

console.log(questionsArray[0].options[2])