// interactive elements
const highScoresList = document.querySelector('#highscores');
const clearBtn = document.querySelector('#clear');

// create list item
let liScore = document.createElement("li");

// call scores from recent storage
let savedScore = JSON.parse(localStorage.getItem("score"))

// Display Score
liScore.textContent = `${savedScore.initials} with a score of ${savedScore.score}`
highScoresList.appendChild(liScore)

// Event Listener

clearBtn.addEventListener("click", function (){
    localStorage.clear()
    liScore.remove()
})

