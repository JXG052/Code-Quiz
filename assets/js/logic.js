// Logic JS

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
const saved = document.querySelector(".saved");
const error = document.querySelector(".error");
const toggleSoundBtn = document.querySelector("#toggleSound")

// AUDIO
let soundOn = true;
const  correctSound = new Audio ('./assets/sfx/correct.wav');
const incorrectSound = new Audio ('./assets/sfx/incorrect.wav')

// TOGGLE AUDIO
toggleSoundBtn.addEventListener("click", function (){
    if (soundOn){
        toggleSoundBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>'
        soundOn = false;
    }
    else {
        toggleSoundBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>'
        soundOn = true;
    }

})

// Changeable Variables
let questionIndex = 0;
let timeLeft = 20
let intervalId = null
let score = 0;
let highScoresArray = []

// FUNCTIONS 
const countDown = () => {

    // if no time left, finish the game
    if (timeLeft <= 0){
        clearInterval(intervalId)
        questionsScreen.classList.toggle("hide");
        endScreen.classList.toggle("hide")
        finalScore.textContent = score;
        timeEl.textContent = `0`;
        timeEl.style.color = "red";

    // else, keep running
    } else {
        timeLeft --
        timeEl.textContent = timeLeft;
    }
}

// Displays Next Question based on the questionIndex
const displayQuestion = () => {

    // if we've finished quiz
    if (questionIndex >= questionsArray.length){
        questionsScreen.classList.toggle("hide");
        endScreen.classList.toggle("hide")
        finalScore.textContent = score;
        clearInterval(intervalId)

    // if btns already exist i.e not question 1
    } else if (choicesDiv.childElementCount > 0){
        questionTitle.textContent = questionsArray[questionIndex].question
        for (let i = 0; i < choicesDiv.childElementCount; i++){
            choicesDiv.children[i].innerHTML = questionsArray[questionIndex].options[i];
        } 
    }

    // Question 1 loop. Buttons created here
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

                // click event for each button
                btn[i].addEventListener("click", function (e){

                    // if correct
                    if (e.target.innerText === answersArray[questionIndex]){
                        if (soundOn) {
                            correctSound.play()
                            
                        }
                        score ++;
                        questionIndex ++;

                    // if incorrect
                    } else {
                        if (soundOn){
                            incorrectSound.play()
                        }
                        
                        questionIndex ++;
                        timeLeft -= 10;
                    }
                    // next question
                    displayQuestion()
                })
            }   
    }
} 

// EVENTS 
startBtn.addEventListener('click', function() {
    
    //reset timer to 20
    timeLeft = 20;

    // start timer
    intervalId = setInterval(countDown, 1000)

    // Hide start section
    startScreen.classList.toggle("hide")

    // show question section and call a function that will now toggle questions
    questionsScreen.classList.toggle("hide")
    displayQuestion()

})

// if 

// Button that adds initials and highscore to local storage
submitBtn.addEventListener("click", function(event){

    event.preventDefault()
    // stop multiple clicks
    submitBtn.disabled = true;

    // validate input
    
    let string = initials.value
    let regex = /^[A-Za-z]+$/i;
    console.log(string.match(regex));

    if ( !string.match(regex)){
        error.style.display = "block";
        error.style.color = "red";
        return;
    }
    else {
    


        // store current high scores
        let tempScores = JSON.parse(localStorage.getItem("score"))
        
        // variable for this highscore
        let saveObj = {
            initials: initials.value,
            score: score
        }
        // reset initials
        initials.value = ""

        // confirm save
        saved.style.display = "inline";

        // this will store the pulled data in the correct format
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
            pulledScores.push(tempScores)
            pulledScores.push(saveObj)
            localStorage.setItem("score", JSON.stringify(pulledScores))
        }
    } 
})


