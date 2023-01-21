# Pseudocode:

## High level/ first thoughts:

1. click start button
    * hide main page, display question(1)
    * start Timer
    

1. Answer Question
    * if answer correct
        * correctCount ++
    * else 
        * timeLeft - 5;
    * questionNumber ++   
    * displayQuestion(2)
    * repeat until the end 


1. When Quiz Finished 
    * return final score
    * input for initials
    * save option

1. High Scores displays initals entered and finalscore

## Things that might be useful 

* Function for Timer()
    * reduce timeLeft -- 
    * update timeLeftEl.text.content = `${timeLeft} seconds`

*  let intervalId = setInterval(timer, 1000) - This will need to go after the start quiz button


## Potential Variables and Functions

| Name  | Type  | Explanation   |
|-----  |-------|-------------  |
| correctCount| number | Keeps track of how many the user has got right |
| questionNumber | Number | Keeps track of what number we are on |
| displayQuestion() | function | updates css and html to display for question|
| timeLeft | Number | time left in seconds |
| timer() | function | runs until timeLeft = 0  then triggers end of game |

## Research

* How do I link High Scores? set local storage?

* Add and remove Classes

* Edit text of HTML

* How do I add the questions as button elements?
    * start by trying to add one and then loop
        * 
        const btn = document.createElement("button");
        btn.innerText = questionsArray[0].options[i];
        document.choices.appendChild(btn);

* 






