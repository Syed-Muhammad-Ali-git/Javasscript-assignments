const divel = document.querySelectorAll(".cardDiv");

let firstCard = null;
let secondCard = null;
let lockBoard = false;

divel.forEach((element) => {
  const fruit = element.querySelector(".fruits");
  const mark = element.querySelector(".mark");

  element.addEventListener("click", () => {
    if (lockBoard || element.classList.contains("flipped")) return;

    // flip card
    mark.hidden = true;
    fruit.hidden = false;
    element.classList.add("flipped");

    if (!firstCard) {
      firstCard = element;
    } else {
      secondCard = element;
      checkMatch();
    }
  });
});

function checkMatch() {
  lockBoard = true;
  const firstFruit = firstCard.querySelector(".fruits").textContent;
  const secondFruit = secondCard.querySelector(".fruits").textContent;

  if (firstFruit === secondFruit) {
    // ✅ same -> keep open
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    resetBoard();
  } else {
    // ❌ different -> close after 1s
    setTimeout(() => {
      firstCard.querySelector(".fruits").hidden = true;
      firstCard.querySelector(".mark").hidden = false;
      firstCard.classList.remove("flipped");

      secondCard.querySelector(".fruits").hidden = true;
      secondCard.querySelector(".mark").hidden = false;
      secondCard.classList.remove("flipped");

      resetBoard();
    }, 1000);
  }
}

function resetBoard() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}
