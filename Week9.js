//class for each card
class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}
//class for the whole deck
class Deck {
    constructor(cards) {
        this.cards = [];
        this.value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
        this.suit = ["Heart", "Spade", "Diamond", "Club"]
    }
    
}
//class for each player
class Player{
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.stack = [];
    }
}


//creating a new deck using for loops to add suits and values to the deck
function newDeck() {
    for (let i = 0; i < this.suit.length; i++) {        //iterate through each card suit
        for (let q = 0; q < this.value.length; q++) {   //iterate through each card value
            this.cards.push(new Card(this.suit[i], this.value[q])) //pushing cards into the card array
        }
    }
}
//shuffle them up!
function shuffle() {
    const shuffledDeck = [];
    for (let i = 0; i < 52; i++) {
        let randomCard = Math.floor((this.cards.length - 1) * Math.random());
        let randomOther = this.cards.splice(randomCard, 1);
        shuffledDeck.push(randomOther);
           
    }    
}
//deal cards to each player
function deal(players, shuffledDeck) {
    let deal1 = shuffledDeck.splice(0, 26);
    players[0].stack.push(deal1);
    let deal2 = shuffledDeck.splice(0, 26);
    players[1].stack.push(deal2);
} //

//let players = [];

//creating the game class to use the functions and actually play
class Game{
    constructor() {
        this.players = [];
        
    }
//cannot figure this out. every solution VSC suggests breaks it in a different spot
//everything i've tried just not a function or can't be read
    start() {
        this.players.push(new Player("Luffy"));
        this.players.push(new Player("Zoro"));

        let strawDeck = new Deck();
        strawDeck.newDeck;
        
        //let shuffledCards = strawDeck.shuffle();
        //strawDeck.deal(players, shuffle());
        
        this.playWar();

        this.endWar();
    }
//this should work, if i could get the cards dealt to each player
    playWar() {
        console.log("Fight to the death!");
        let player1 = this.players[0];
        let player2 = this.players[1];

        while (player1.stack.length !== 0 && player2.stack.length !== 0) {
            let player1Card = player1.stack.pop();
            let player2Card = player2.stack.pop();
            let turnWin = "";
            if (player1Card.value > player2Card.value) {
                turnWin = player1.name;
                player1.points += 1;
            } else if (player2Card.value > player1Card.value) {
                turnWin = player2.name;
                player2.points += 1;
            } else {
                console.log(`Tie! No points`);
            }
        }
    }

    endWar() {
        let winner = "";
        let player1 = this.players[0];
        let player2 = this.players[1];
        let winnerPoints = 0;

        if (player1.points > player2.points) {
            winner = player1.name;
            winnerPoints = player1.points;
            console.log(`Game over
            Winner: ${player1.name}
            Score: ${player1.points}`);
        } else if (player2.points > player1.points) {
            winner = player2.name;
            winnerPoints = player2.points;
            console.log(`Game over
            Winner: ${player2.name}
            Points: ${player2.points}`)
        }else {
            console.log(`Game Tie
            ${player1.name} : ${player1.points}
            ${player2.name} : ${player2.points}`)
        }
    }
}

let game = new Game();
game.start();