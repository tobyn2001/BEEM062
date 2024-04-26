
//Generate 100 finanical terminologies using Chatgpt.
const words = [
    "Arbitrage", "Bear", "Bull", "Buyback", "Call", "Capital", "Cash", "Collateralized", "Credit", "Day",
    "Debt", "Dividend", "Exchange", "Fiduciary", "Fiscal", "Gross", "Initial", "Insider", "Leverage", "Liquidity",
    "Market", "Maturity", "Merger", "Net", "Over", "Payout", "Penny", "Pricetoearnings", "Put", "Recession", "Return",
    "Risk", "Short", "Spread", "Stock", "Subprime", "Supply", "Technical", "Treasury", "Underwriting", "Volatility",
    "Yield", "Asset", "Beta", "Brokerage", "Commodities", "Corporate", "Currency", "Derivative", "Equity", "Federal",
    "Financial", "Foreign", "Futures", "Hedge", "Inflation", "Investment", "Junk", "Municipal", "Naked", "Portfolio",
    "Price", "Profit", "Real", "Estate", "Retirement", "Securities", "Speculation", "Tax", "Time", "Trust", "Underlying",
    "Venture", "Blue", "Contingent", "Default", "Earnings", "Institution", "Interest", "Leveraged", "Nominal", "Open",
    "Preferred", "Quantitative", "Regulatory", "Shareholder", "Trading", "Working"
];

let chosenWord;
let attempts = 0;

function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
    document.getElementById("gameContainer").style.display = "block";
    document.getElementById("guessInput").value = "";
    document.getElementById("attemptCounter").innerText = "0";
    attempts = 0;
    renderLetterBoxes();
}

function renderLetterBoxes() {
    const letterBoxesContainer = document.getElementById("letterBoxes");
    letterBoxesContainer.innerHTML = "";
    chosenWord.split("").forEach(() => {
        const letterBox = document.createElement("div");
        letterBox.classList.add("letter-box");
        letterBoxesContainer.appendChild(letterBox);
    });
}

function placeWord() {
    const guessInput = document.getElementById("guessInput").value.toLowerCase();
    if (guessInput.length !== chosenWord.length || guessInput.length === 0) {
        toastr.error("Please enter a word with " + chosenWord.length + " letters.");
        return;
    }
    updateLetterBoxes(guessInput);
}

function updateLetterBoxes(guess) {
    const letters = document.getElementsByClassName('letter-box');
    for (let i = 0; i < letters.length; i++) {
        letters[i].innerText = guess[i];
        if (guess[i] === chosenWord[i]) {
            letters[i].classList.add("green");
        } else if (chosenWord.includes(guess[i])) {
            letters[i].classList.add("yellow");
        } else {
            letters[i].classList.add("red");
        }
    }
    attempts++;
    document.getElementById("attemptCounter").innerText = attempts;
    if (guess === chosenWord) {
        toastr.success("Congratulations! You guessed the word correctly.");
        setTimeout(startGame, 2000); 
    }
}

