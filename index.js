let cards = [] 

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById('message-el')

let sumEl = document.querySelector('#sum-el')

let cardsEl = document.querySelector('#cards-el')

let player = {
  name: "Per",
  chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips




function getRandomCard(){

  let randomNumber = Math.floor(Math.random()*13) + 1
  if(randomNumber === 1) {return 1} 
  else if( randomNumber > 10) {return 10}
  else{return randomNumber}
}

function startGame(){
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = cards [0] + cards [1]
  renderGame()
}

function renderGame()
{
  if (sum<=20){
    message = "Do you want to draw a new card? "
  } else if( sum === 21){
    message = "Wohoo! You've got BlackJack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game! :("
    isAlive = false
  }
  
  messageEl.textContent = message
  sumEl.textContent = "Sum: " + sum

  // render of 1st and second card
  cardsEl.textContent = "Cards: "

//create a for loop that renders out all the cards instead of just two

for (let i = 0; i < cards.length; i++){

  cardsEl.textContent += cards[i] + " "
}

}


function newCard()
{
  if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    console.log(cards.length)
    renderGame()
  
  }

}




















// var maroun = document.getElementById('maroun').style

// function hide()
// {
//   maroun.display = "none"
//   console.log(maroun.display)

//   console.log('hi')

//   if(maroun.display === "block"){
//     maroun.display = "none"
//   }
//   else if(maroun.display==="none"){
//     maroun.display = "block"
//   }

// }



