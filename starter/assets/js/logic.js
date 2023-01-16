// Logic JS

//  QUESTIONS AND ANSWERS ARRAY *** NEEDS LINKING TO questions.js

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
const answersArray = []
answersArray[0] = questionsArray[0].options[2];
answersArray[1] = questionsArray[1].options[2];
answersArray[2] = questionsArray[2].options[3];
answersArray[3] = questionsArray[3].options[2];
answersArray[4] = questionsArray[4].options[3];


// DOM Elements
const startBtn = document.querySelector('#start');
const startScreen = document.querySelector('#start-screen')
const questionsScreen = document.querySelector('#questions')
const questionTitle = document.querySelector("#question-title")
const choicesDiv = document.querySelector("#choices")



// Changeable Variables
let questionIndex = 0;

// FUNCTIONS 

const displayQuestion = (num) => {
    questionTitle.textContent = questionsArray[num].question
    choicesDiv.textContent = questionsArray[num].
}


// EVENTS 

startBtn.addEventListener('click', function() {
    // Hide start section
    startScreen.classList.toggle("hide")

    // show question section
    questionsScreen.classList.toggle("hide")
    displayQuestion(questionIndex)
    
})



