const h1 = document.getElementById("h1");

let counter = 0;
let timeStart = null;
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
function start() {
  if (timeStart) return;

  timeStart = setInterval(() => {
    counter++;
    let countMin = Math.floor(counter / 6000);
    let countSec = Math.floor((counter % 6000) / 100);
    let countMs = counter % 100;
    let timer = `${countMin.toString().padStart(2, "0")}:${countSec
      .toString()
      .padStart(2, "0")}:${countMs.toString().padStart(2, "0")}`;
    h1.innerHTML = timer;
  }, 10);
}
stopBtn.addEventListener("click", () => {
  clearInterval(timeStart);
  timeStart = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timeStart);
  timeStart = null;
  counter = 0;
  h1.innerHTML = "00:00:00";
});
