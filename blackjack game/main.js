
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let messageEl = document.querySelector(".message-el")
let cardsEl = document.querySelector(".cards-el")
let sumEl = document.querySelector(".sum-el")
let message = ""
let hasBlackJack = false
let isAlive = true

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*11)
    if(randomCard === 1){
        return 11
    }else if(randomCard === 11){
        return 10
    }else{
        return randomCard
    }
}

function startGame(){

    cardsEl.textContent = "Cards: "
    for(let i = 0; i< cards.length; i++){
        cardsEl.textContent+= cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 20){
        message = "You have gotten a blackjack"
        hasBlackJack = true
    }else{
        message = "You are out of the game"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        cards.push(card)
        sum+= card
        startGame()
    }
}