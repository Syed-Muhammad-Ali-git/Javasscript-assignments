// div target by id
const container = document.getElementById("container");

// set initial coins
let coins = 1000;

// create elements
const showCoins = document.createElement("h1");
const randomNumber = document.createElement("h1");
const enterCoinsInputEl = document.createElement("input");
const enterBidAmountInputEl = document.createElement("input");
const goBtn = document.createElement("button");
const goBtnText = document.createTextNode("Go");

showCoins.innerText = `Coins: ${coins}`;

// set attributes for elements
const enterCoinsInputPlaceholder = enterCoinsInputEl.setAttribute(
  "placeholder",
  "Enter coins you Bid"
);
const enterBidAmountInputPlaceholder = enterBidAmountInputEl.setAttribute(
  "placeholder",
  "Enter Bid Number 1 to 6"
);
const enterCoinsInputType = enterCoinsInputEl.setAttribute("type", "number");
const enterBidAmountInputType = enterBidAmountInputEl.setAttribute(
  "type",
  "number"
);
randomNumber.className = "random-number";
randomNumber.innerText = "🎲 Dice: -";

// onclick event for go button
goBtn.onclick = getRandomNumber;

// append elements to the container
container.appendChild(showCoins);
container.appendChild(randomNumber);
container.appendChild(enterCoinsInputEl);
container.appendChild(enterBidAmountInputEl);
container.appendChild(goBtn);
goBtn.appendChild(goBtnText);

// focus on the coins input field
enterCoinsInputEl.focus();

// function to generate a random number between 1 and 6
function getRandomNumber() {
  const bidCoins = Number(enterCoinsInputEl.value);
  const bidNumber = Number(enterBidAmountInputEl.value);

  const diceNumber = Math.floor(Math.random() * 6) + 1;
  randomNumber.innerText = diceNumber;

  if (coins <= 0) {
    alert("You have no coins left. Please refresh the page to start over.");
    return;
  }
  if (bidCoins <= 0 || bidCoins > coins) {
    alert("Enter coins amount between 1 to 1000.");
    return;
  }

  if (bidNumber < 1 || bidNumber > 6) {
    alert("Enter bid number between 1 and 6.");
    return;
  }

  // console.log(diceNumber);
  // alert(`Dice Number: ${diceNumber}`);

  if (diceNumber === bidNumber) {
    coins += bidCoins;
    alert(`You Won!`);
  } else {
    coins -= bidCoins;
    alert(`You Loss!`);
  }

  showCoins.innerText = `Coins: ${coins}`;
  enterCoinsInputEl.value = "";
  enterBidAmountInputEl.value = "";
}
