// interactive elements
const highScoresList = document.querySelector('#highscores');
const clearBtn = document.querySelector('#clear');



// call scores from recent storage
let savedScoreArray = JSON.parse(localStorage.getItem("score"))
console.log(savedScoreArray[0].initials)

// Display Score
savedScoreArray.forEach(element => {

    // Create list item
    let li = document.createElement("li");

    // Populate
    li.textContent = `${element.initials} with a score of ${element.score}`

    // 
    highScoresList.appendChild(li)
});


// Event Listener

clearBtn.addEventListener("click", function (){
    localStorage.clear()
    savedScoreArray.forEach(element => element.remove())


})

