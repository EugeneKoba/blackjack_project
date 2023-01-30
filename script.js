let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let sumArray = [firstCard, secondCard]
let blackjack = false
let isAlive = false
let message = ("")
let clickCount = 0


playerProfile = {
firstName: "Eugene",
lastName: "Annan",
winRecord: 10
}

let cardsEl = document.querySelector("#cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.querySelector("#message-el")
let newEl = document.querySelector("#new-el")
let blackjackBtn = document.querySelector(".blackjack-button")
let cardImg = document.querySelector(".card-img").style.display = "none"


let messageArray = ["Hello! ", "Welcome to ", "The Blackjack Game! ", "Do you have what it takes?"]
let messageArrayLength = messageArray.length
let greetingEl = document.getElementById("greeting-el")

for (i=0; i<messageArray.length; i++) {
greetingEl.textContent += messageArray[i]
}


blackjackBtn.addEventListener("click", function () {
clickCount += 1
console.log(clickCount)

if (clickCount > 0) {
   blackjackBtn.textContent = "START NEW GAME"
   let cardImg = document.querySelector(".card-img").style.display = "flex"
}
if (clickCount > 1) {
   messageEl.textContent = "Click on 'New Card' to continue the game!"
   console.log("Click on 'New Card' to continue the game!")
   location.reload()
   isAlive = true
}

})

function getRandomCard() {

let randomCard = Math.floor(Math.random() * 13) + 1   // 1 - 13
let randomNumber = ""

// console.log("Original Card: " + randomCard)

if (randomCard == 1) {

    let cardImg = document.querySelector(".card-img")
    cardImg.innerHTML += "<div class='card-inner'><img src='../blackjack_project/blackjack_cards/ace_of_clubs.png'></div>"
    randomNumber = 11

}

else if (randomCard > 10 ) {
    // inner.HTML to add a Jack/Queen/King in the container
    let cardImg = document.querySelector(".card-img")
    if (randomCard == 11) {
        cardImg.innerHTML += `<div class='card-inner'><img src='../blackjack_project/blackjack_cards/jack_of_clubs2.png'></div>`
        randomNumber = 10
    }
    else if (randomCard == 12) {
        cardImg.innerHTML += `<div class='card-inner'><img src='../blackjack_project/blackjack_cards/queen_of_clubs2.png'></div>`
        randomNumber = 10
    }
    else if (randomCard == 13) {
        cardImg.innerHTML += `<div class='card-inner'><img src='../blackjack_project/blackjack_cards/king_of_clubs2.png'></div>`
        randomNumber = 10
    }
}

else  {
    // inner.HTML to add a numbered card in the container
    let cardImg = document.querySelector(".card-img")
    cardImg.innerHTML += `<div class='card-inner'><img src='../blackjack_project/blackjack_cards/${randomCard}_of_clubs.png'></div>`
    randomNumber = randomCard

} 

return randomNumber

}

function startGame() {

newEl.textContent = "Game Starting..."
isAlive = true
playGame()


}


function playGame() {


if (sum < 21) {
  message = "Nice! Do you want another card?"
  isAlive = true
}

else if (sum === 21) {
  message = "Congratulations! You won!"
  newEl.textContent = "Click 'Start New Game' to start a new game!"
  blackjack = true
  isAlive = false
}
else {
  message = "Bust! You're out!"
  newEl.textContent = "Click 'Start New Game' to try again!"
  isAlive = false
}




messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: " + sumArray[0] + " " + sumArray[1]


}

function newCard() {

console.log(isAlive)

if (isAlive === true && blackjack === false) {

    newEl.textContent = "Drawing a new Card..."

    let thirdCard = getRandomCard()

    sum = sum + thirdCard
    sumArray.push(thirdCard)
    console.log(sumArray[2])

    playGame()
    
    messageEl.textContent = message

    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "Cards: "

    for (i=0; i<sumArray.length; i++) {

        cardsEl.textContent += sumArray[i] + ", "

    }
}	 

else if (isAlive === false && blackjack === false) {

    newEl.textContent = "The game isn't active! click 'Start New Game' to begin game!"

}

else if (sum > 21)

   return;

}
