// interactive elements
const highScoresList = document.querySelector('#highscores');
const clearBtn = document.querySelector('#clear');


// call scores from recent storage
let savedScoreArray = JSON.parse(localStorage.getItem("score"))

// sort by score if multiple scores 

// still use . sort 
// reference a and b 
console.log(savedScoreArray)


// if multiple scores, sort first
if (savedScoreArray.length > 1) {
savedScoreArray.sort((a, b) => {
    return b.score - a.score
})
    savedScoreArray.forEach( (el) => {
        let newLi = document.createElement('li')
        newLi.textContent = `${el.initials} with ${el.score} points`
        highScoresList.appendChild(newLi)
    })
// if SavedScoreArray is a asingle object
} else {
    let newLi = document.createElement('li')
    newLi.textContent = `${savedScoreArray.initials} with ${savedScoreArray.score} points`
    highScoresList.appendChild(newLi)
}

// Display Score


// Event Listener

clearBtn.addEventListener("click", function (){
    localStorage.clear()
    highScoresList.remove()
})

