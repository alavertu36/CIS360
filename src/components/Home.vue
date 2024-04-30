<template>
    <!-- CONTENT SECTION -->
    <div class="my-container-outer">
        <div class="my-container-row">
            <div class="my-item">
                <!-- 1st article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Download The Code That Made The Website!</h2>
                    <p><b>Github:</b><a href="https://github.com/gilmores/CIS360-Team-5.git" target="_blank">
                            https://github.com/gilmores/CIS360-Team-5.git</a>
                    </p>
                </div>
                <!-- 2nd article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Edge Cases</h2>
                    <p></p>
                </div>
                <!-- 3rd article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Adding Money Prompt:
                    </h2>
                    <li>Entering a negative amount or zero
                    </li>
                    <li>Entering non-numeric characters
                    </li>
                    <li>Cancelling the prompt
                    </li>
                    <img class="edgeCases" src="/edgeCases/addMoneyPrompt.png">
                </div>
                <!-- 4th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Starting the game:
                    </h2>
                    <li>Dealer's sum exceeding 21
                    </li>
                    <li>Dealer receiving a natural 21 (Blackjack)
                    </li>
                    <li>Player's sum exceeding 21
                    </li>
                    <li>Player receiving a natural 21 (Blackjack)
                    </li>
                    <li>No cards left in the deck
                    </li>
                    <img class="edgeCases" src="/edgeCases/startGame.png">
                </div>
                <!-- 5th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Hitting:
                    </h2>
                    <li>No cards left in the deck
                    </li>
                    <li>Player's sum exceeding 21
                    </li>
                    <li>Player receiving a natural 21 (Blackjack)
                    </li>
                    <img class="edgeCases" src="/edgeCases/hitting.png">
                </div>
                <!-- 6th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Staying:
                    </h2>
                    <li>Dealer's sum exceeding 21.
                    </li>
                    <li>Dealer receiving a natural 21 (Blackjack).
                    </li>
                    <li>Player's sum exceeding 21.
                    </li>
                    <li>Player receiving a natural 21 (Blackjack).
                    </li>
                    <img class="edgeCases" src="/edgeCases/staying.png">
                </div>
                <div class="side-article" id="headline-title-container">
                    <h2>Get Card Value:
                    </h2>
                    <li>Incorrect card format (e.g., "13-C").
                    </li>
                    <img class="edgeCases" src="/edgeCases/getCardValue.png">
                </div>
                <!-- 7th article block -->
                <div class="side-article" id="headline-title-container">
                    <h2>Handle Ace:
                    </h2>
                    <li>Player's sum not exceeding 21 but having Ace cards.
                    </li>
                    <li>Player's sum exceeding 21 with Ace cards.
                    </li>
                    <img class="edgeCases" src="/edgeCases/handleAce.png">
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
<style>
/* Now, style my CSS classes */
.my-container-outer {
    /* border: 3px dashed yellow; */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.my-container-row {
    /* border: 3px solid red; */
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.edgeCases {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    margin-top: 20px;
    /* Adjust spacing as needed */
}


.my-item {
    /* border: 3px dotted green; */
    /* Expand by 1 / Shrink by 1 / Original size is 300px */
    flex: 1 1 300px;
    padding: 20px;
}

.hero {
    padding: 50px 10px;
}

.my-item-center-horizontal {
    display: flex;
    justify-content: center;
}

.side-article {
    margin-top: 30px;
    margin-bottom: 20px;

    h5,
    h3,
    p {
        margin: 10px 0px;
    }
}

#headline-title-container {
    box-shadow: 0px 0px 30px rgba(0, 0, .3);
    padding: 30px 30px 30px 40px;
    max-width: 1000px;
    text-align: center;
    margin-left: auto;
}
</style>