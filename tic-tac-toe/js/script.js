let btns = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBtns();
  msgContainer.classList.add("hide");
};

const enableBtns = () => {
  for (let btn of btns) {
    btn.disabled = false;
    btn.innerHTML = "";
  }
};

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnO) {
      btn.innerHTML = "O";
      turnO = false;
    } else {
      btn.innerHTML = "X";
      turnO = true;
    }
    btn.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let position1 = btns[pattern[0]].innerHTML;
    let position2 = btns[pattern[1]].innerHTML;
    let position3 = btns[pattern[2]].innerHTML;

    if (position1 != "" && position2 != "" && position3 != "") {
      if (position1 === position2 && position2 === position3) {
        showWinner(position1);
      }
    }
  }
};

const showWinner = (winner) => {
  msgContainer.classList.remove("hide");
  msg.innerHTML = `Congratulation Winner is ${winner}`;
  disableBtns();
};

const disableBtns = () => {
  for (let btn of btns) {
    btn.disabled = true;
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
