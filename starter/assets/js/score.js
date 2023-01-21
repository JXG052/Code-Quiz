// interactive elements
const highScoresList = document.querySelector('#highscores');
const clearBtn = document.querySelector('#clear');


// call scores from recent storage
let savedScoreArray = JSON.parse(localStorage.getItem("score"))

// sort by score 

// still use . sort 
// reference a and b 
console.log(savedScoreArray)
savedScoreArray.sort((a, b) => {
    return b.score - a.score
})

// Display Score
savedScoreArray.forEach( (el) => {
    let newLi = document.createElement('li')
    newLi.textContent = `${el.initials} with ${el.score} points`
    highScoresList.appendChild(newLi)
})

// Event Listener

clearBtn.addEventListener("click", function (){
    localStorage.clear()
    savedScoreArray.forEach(element => element.remove())
})

