<template>
    <div class="main">
        <h2>Dealer: <span id="dealer-sum"></span></h2>
        <div class="cards-container">
            <div id="dealer-cards">
            </div>
            <img id="hidden" src="/cardback/CardBack.jpg">
        </div>

        <h2>You: <span id="your-sum"></span></h2>
        <div id="your-cards"></div>

        <br>
        <div class="buttons-container">
            <button id="hit">Hit</button>
            <button id="stay">Stay</button>
            <button id="play-again" @click="resetGame">Play Again</button>
            <button id="add-money" @click="addMoneyPrompt">Add Money</button>
        </div>
        <p id="results"></p>

        <h3>Money: ${{ money }}</h3>
    </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------- -->

<script>
export default {
    data() {
        return {
            dealerSum: 0,
            yourSum: 0,
            dealerAceCount: 0,
            yourAceCount: 0,
            canHit: true,
            hidden: null,
            deck: [],
            money: 10,
            gameInitialized: false,
        };
    },
    mounted() {
        this.resetGame();
    },
    methods: {
        buildDeck() {
            let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            let types = ["C", "D", "H", "S"];
            this.deck = [];

            for (let i = 0; i < types.length; i++) {
                for (let j = 0; j < values.length; j++) { // Fixed typo: changed "i" to "j"
                    this.deck.push(values[j] + "-" + types[i]); //A-C --> K-C, A-D --> K-D
                }
            }
        },
        addMoneyPrompt() {
            const amount = prompt("Enter the amount of money you want to add:");
            if (amount !== null) {
                const parsedAmount = parseInt(amount);
                if (!isNaN(parsedAmount) && parsedAmount > 0) {
                    this.money += parsedAmount;
                    localStorage.setItem('money', this.money);
                } else {
                    alert("Please enter a valid amount.");
                }
            }
        },
        shuffleDeck() {
            for (let i = 0; i < this.deck.length; i++) {
                let j = Math.floor(Math.random() * this.deck.length);
                let temp = this.deck[i];
                this.deck[i] = this.deck[j];
                this.deck[j] = temp;
            }
        },
        startGame() {
            this.hidden = this.deck.pop();
            this.dealerSum += this.getValue(this.hidden);
            this.dealerAceCount += this.checkAce(this.hidden);

            while (this.dealerSum < 17) {
                let cardImg = document.createElement("img");
                let card = this.deck.pop();
                cardImg.src = "/cards/" + card + ".jpg";
                this.dealerSum += this.getValue(card);
                this.dealerAceCount += this.checkAce(card);
                document.getElementById("dealer-cards").append(cardImg);
            }

            for (let i = 0; i < 2; i++) {
                let cardImg = document.createElement("img");
                let card = this.deck.pop();
                cardImg.src = "/cards/" + card + ".jpg";
                this.yourSum += this.getValue(card);
                this.yourAceCount += this.checkAce(card);
                document.getElementById("your-cards").append(cardImg);
            }

            document.getElementById("hit").addEventListener("click", this.hit);
            document.getElementById("stay").addEventListener("click", this.stay);
        },
        hit() {
            if (!this.canHit) {
                return;
            }
            let cardImg = document.createElement("img");
            let card = this.deck.pop();
            cardImg.src = "/cards/" + card + ".jpg";
            this.yourSum += this.getValue(card);
            this.yourAceCount += this.checkAce(card);
            document.getElementById("your-cards").append(cardImg);

            if (this.reduceAce(this.yourSum, this.yourAceCount) > 21) { //A, J, 8 --> 11 + 10 + 8
                this.canHit = false;
            }
        },
        stay() {
            this.dealerSum = this.reduceAce(this.dealerSum, this.dealerAceCount);
            this.yourSum = this.reduceAce(this.yourSum, this.yourAceCount);

            this.canHit = false;

            // Check if the "hidden" element exists before setting its source
            let hiddenImg = document.getElementById("hidden");
            if (hiddenImg) {
                hiddenImg.src = "/cards/" + this.hidden + ".jpg";
            }

            let message = "";
            if (this.yourSum > 21) {
                message = "You Lose!";
                this.money -= 2;
            } else if (this.dealerSum > 21) {
                message = "You Win!";
                this.money += 2;
            }
            //both you and dealer <= 21
            else if (this.yourSum == this.dealerSum) {
                message = "Tie!";
            } else if (this.yourSum > this.dealerSum) {
                message = "You Win!";
                this.money += 2;
            } else if (this.yourSum < this.dealerSum) {
                message = "You Lose!";
                this.money -= 2;
            }

            localStorage.setItem('money', this.money)

            document.getElementById("dealer-sum").innerText = this.dealerSum;
            document.getElementById("your-sum").innerText = this.yourSum;
            document.getElementById("results").innerText = message;
        },

        resetGame() {
            document.getElementById("dealer-cards").innerHTML = "";
            document.getElementById("your-cards").innerHTML = "";
            document.getElementById("results").innerText = "";

            this.dealerSum = 0;
            this.yourSum = 0;
            this.dealerAceCount = 0;
            this.yourAceCount = 0;
            this.canHit = true;
            this.deck = [];

            this.hidden = this.deck.pop(); // Get a new hidden card
            let hiddenImg = document.getElementById("hidden");
            if (hiddenImg) {
                hiddenImg.src = "/cardback/CardBack.jpg"; // Set source to cardback
            }

            document.getElementById("dealer-sum").innerText = this.dealerSum;
            document.getElementById("your-sum").innerText = this.yourSum;

            this.buildDeck();
            this.shuffleDeck();
            this.startGame();
        },
        getValue(card) {
            let data = card.split("-"); // "4-C" --> ["4", "C"]
            let value = data[0];

            if (isNaN(value)) { //A J Q K
                if (value == "A") {
                    return 11;
                }
                return 10;
            }
            return parseInt(value);
        },
        checkAce(card) {
            if (card[0] == "A") {
                return 1;
            }
        },
        reduceAce(playerSum, playerAceCount) {
            while (playerSum > 21 && playerAceCount > 0) {
                playerSum -= 10;
                playerAceCount -= 1;
            }
            return playerSum;
        }
    }
};
</script>

<!-- ------------------------------------------------------------------------------------------------------------- -->

<style>
body {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    background: linear-gradient(to right, #00C9FF, #92FE9D);
}

#dealer-cards img {
    height: 175px;
    width: 125px;
    margin: 1px;
}

#your-cards img {
    height: 175px;
    width: 125px;
    margin: 1px;
}

#hit {
    width: 100px;
    height: 50px;
    font-size: 20px;
}

#hidden {
    width: 125px;
    height: 175px;
    margin: 1px;
}

#stay {
    width: 100px;
    height: 50px;
    font-size: 20px;
}

#play-again {
    width: 100px;
    height: 50px;
    font-size: 15px;
}

.buttons-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.cards-container {
    display: flex;
    justify-content: center;
}

.main {
    margin-top: 50px;
}
</style>