const result = document.getElementById("result")
const guessInput = document.getElementById("input")
const guessed = document.getElementById("win")
const tryLink = document.getElementById("try2")
const clicked = document.getElementById("guessButton")

let pickedNum;
randomize();
var numGuess = 0;

function randomize(){
    result.innerHTML = ""
    result.style.color = "white"
    guessInput.value = ""
    guessed.style.display = "none"
    tryLink.style.display = "none"
    result.style.display = "none"

    pickedNum = Math.floor(Math.random() * 100 + 1);
    console.log(pickedNum);
    numGuess = 0;
}

clicked.addEventListener("click", guess)
function guess(){
    result.style.display = "block"
    console.log("hotdog")

    let guess = guessInput.value
    let outText = ""
    result.innerHTML = " "
    
    numGuess++
    switch(true){
        case guess>100 || guess < 0:
            outText = "Between 0 and 100 only"
            break;
        case guess<pickedNum: 
            outText = "Higher"; 
            if(pickedNum-guess<=10){
                outText = "A little higher"
            }
            break;
        case guess>pickedNum: 
            outText = "Lower";
            if(guess-pickedNum<=10){
                outText = "A little lower"
            } 
            break;
        case guess==pickedNum:
            result.style.color = "greenyellow"
            outText = "CORRECT"; 
            result.innerHTML = outText
            won();
            break;
        
        default: outText = "ENTER A NUMBER"
    }
    result.innerHTML = outText
}

var elem = guessInput;
window.onkeyup = function(e){
    if(e.keyCode == 13){
       guess();
    }
}

function won() {
    guessed.style.display = "block"
    tryLink.style.display = "block"
    guessed.innerHTML = `The number is ${pickedNum} and you got it after ${numGuess} guesses`
    guessInput.setAttribute(disabled,"")
}
