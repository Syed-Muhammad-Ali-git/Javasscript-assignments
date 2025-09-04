const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
let count = document.getElementById("h1");
let msg = document.getElementById("alertmsg");
count.innerHTML = 0;

// increment
incrementBtn.addEventListener("click", () => {
  count.innerHTML = parseInt(count.innerHTML) + 1;
//   msg.hidden = true;
});

// decrement
decrementBtn.addEventListener("click", () => {
  if (count.innerHTML > 0) {
    count.innerHTML = parseInt(count.innerHTML) - 1;
  }
  //   else {
  //     msg.innerHTML = "Count cannot be negative";
  //     msg.hidden = false;
  //   }
});

// reset
resetBtn.addEventListener("click", () => {
  count.innerHTML = 0;
  msg.hidden = true;
});
