// Logic JS

//  QUESTIONS AND ANSWERS ARRAY *** NEEDS LINKING TO questions.js


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
const finalScore = document.querySelector("#final-score")
const submitBtn = document.querySelector('#submit')
const initials = document.querySelector('#initials')

// Changeable Variables
let questionIndex = 0;
let timeLeft = 99
let intervalId = null
let score = 0;
let highScoresArray = []

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

// changes the display based on what question we are on
const displayQuestion = () => {
    console.log("Question index:" + questionIndex )
    // if we've finished quiz
    if (questionIndex >= questionsArray.length){
        console.log("reached")
        questionsScreen.classList.toggle("hide");
        endScreen.classList.toggle("hide")
        finalScore.textContent = score;
        clearInterval(intervalId)

    // else if - btns already exist i.e not question 1
    } else if (choicesDiv.childElementCount > 0){
        questionTitle.textContent = questionsArray[questionIndex].question
        for (let i = 0; i < choicesDiv.childElementCount; i++){
            choicesDiv.children[i].innerHTML = questionsArray[questionIndex].options[i];
            } 
    }

    // create buttons
    else { 
    questionTitle.textContent = questionsArray[questionIndex].question
    
    const btn = []
    // create a new button for each option
    for (let i = 0; i < questionsArray[questionIndex].options.length; i++){
    
        // if no elements, create them
        if(choicesDiv.childElementCount < 4){
            btn[i] = document.createElement("button");
            btn[i].innerText = questionsArray[questionIndex].options[i];
            choicesDiv.appendChild(btn[i]);
        } else {
            btn[i].textContent = questionsArray[questionIndex].options[i];
        }

        // create click event for each button
        btn[i].addEventListener("click", function (e){

            // if correct
            if (e.target.innerText === answersArray[questionIndex]){
                score ++;
                questionIndex ++;

                
            // if incorrect
            } else {
                questionIndex ++;
                timeLeft -= 10;
                
            }
            
            displayQuestion()
            })
    }}

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

submitBtn.addEventListener("click", function(event){
    let tempScores = JSON.parse(localStorage.getItem("score"))
    console.log(tempScores)
    event.preventDefault()
    let saveObj = {
        initials: initials.value,
        score: score
    }
    

    // init pulled scores
    let pulledScores = []


    // if no scores
        // log this high score
    if (localStorage.getItem("score") === null){
        localStorage.setItem("score", JSON.stringify(saveObj) )
    }


    // if the pulled data is an array of objects, 
    // iterate through each object before pushing 
    else if (tempScores.length > 1) {
        tempScores.forEach(element => {
            return pulledScores.push(element);
        })
        pulledScores.push(saveObj);
        console.log(pulledScores)
        localStorage.setItem("score", JSON.stringify(pulledScores))
        
    }
    
    // if the pulled data is a single object
    // i.e if it's the second score  
    // turn into an array of length 2 
  
        
    else {
        console.log("reached1")
        pulledScores.push(tempScores)
        pulledScores.push(saveObj)
        localStorage.setItem("score", JSON.stringify(pulledScores))
    }




    
})


