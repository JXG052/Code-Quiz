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
const timeEl = document.querySelector("#time")
const endScreen = document.querySelector('#end-screen')



// Changeable Variables
let questionIndex = 0;
let timeLeft = 99
let intervalId = null
let score = 0;

// FUNCTIONS 


const countDown = () => {

    // if no time left, finish the game
    if (timeLeft === 0){
        clearInterval(intervalId)
        quizFinished()
        

    // else, keep running
    } else {
        timeLeft --
        timeEl.textContent = timeLeft;
    }

}

// *****NOT FINISHED
const displayQuestion = (num) => {

    // if we've ran out of questions
    if (num >= questionsArray.length){
        endScreen.classList.toggle("hide")

    // else if - btns already exist
    } else if (choicesDiv.childElementCount > 0){
        
        for (let i = 0; i < choicesDiv.childElementCount; i++){
            choicesDiv.children[i].innerHTML = "test"
        }

    } 
    else { 
    questionTitle.textContent = questionsArray[num].question
    let options = questionsArray[num].options
    console.log(options)
    const btn = []
    // create a new button for each option
    for (let i = 0; i < questionsArray[num].options.length; i++){
    
        // if no elements, create them
        if(choicesDiv.childElementCount < 4){
            btn[i] = document.createElement("button");
            btn[i].innerText = questionsArray[num].options[i];
            choicesDiv.appendChild(btn[i]);
        } else {
            btn[i].textContent = questionsArray[num].options[i];
        }

        
            // when button clicked
            btn[i].addEventListener("click", function (e){
                if (e.target.innerText === answersArray[num]){
                    score ++;
                    questionIndex ++
                    displayQuestion(questionIndex)
                } else {
                    questionIndex ++
                    displayQuestion(questionIndex)
                }
                
                })
        } 
        
       
            

        }
    
    }


const quizFinished = () => {
    endScreen.classList.toggle("hide")
    questionsScreen.classList.toggle("hide")
}


// EVENTS 

startBtn.addEventListener('click', function() {
    //reset timer to 99
    timeLeft = 99;

    // start timer
    intervalId = setInterval(countDown, 1000)

    // Hide start section
    startScreen.classList.toggle("hide")

    // show question section
    questionsScreen.classList.toggle("hide")
    displayQuestion(questionIndex)

})


