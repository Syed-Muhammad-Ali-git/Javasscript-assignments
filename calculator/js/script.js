const inputField = document.getElementById("inputField");
const resetBtn = document.getElementById("reset_btn");
const delBtn = document.getElementById("del_btn");
const numberBtn = document.querySelectorAll(".number");

//  keyboard btns allow only numbers and operators

inputField.addEventListener("keydown", function (event) {
  if (event.ctrlKey || event.metaKey) {
    return;
  }

  if (
    (event.key >= "0" && event.key <= "9") ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/" ||
    event.key === "%" ||
    event.key === "." ||
    event.key === "Backspace" ||
    event.key === "Delete" ||
    event.key === "ArrowLeft" ||
    event.key === "ArrowRight" ||
    event.key === "Tab" ||
    event.key === "F12" ||
    event.key === "Escape" ||
    event.key === "Enter"
  ) {
    return;
  }

  event.preventDefault();
});

// functions starts here ___________________________________________________________

//  feedback btn function open form in next page on mouse click

function openFeedbackForm() {
  window.open("../form.html", "_blank");
}

//  equals to function on mouse click

function calculate() {
  try {
    let expression = inputField.value;

    // percentage handling: e.g. "100-10%" → "100-(100*10/100)"
    expression = expression.replace(
      /(\d+)([+\-])(\d+)%/,
      (match, base, operator, percent) => {
        return `${base}${operator}(${base}*${percent}/100)`;
      }
    );

    inputField.value = eval(expression);
    inputField.focus();
  } catch (error) {
    console.log("Invalid expression:", error);
    inputField.value = "Error!";
    inputField.focus();
  }
}

//  equals to function on Enter key

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    try {
      let expression = inputField.value;

      // percentage handling: e.g. "100-10%" → "100-(100*10/100)"
      expression = expression.replace(
        /(\d+)([+\-])(\d+)%/,
        (match, base, operator, percent) => {
          return `${base}${operator}(${base}*${percent}/100)`;
        }
      );

      inputField.value = eval(expression);
      inputField.focus();
    } catch (error) {
      console.log("Invalid expression:", error);
      inputField.value = "Error!";
      inputField.focus();
    }
  }
});

//  number btns function on mouse click

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputField.value += btn.innerText;
    inputField.focus();
  });
});

// reset functions ac btn on mouse click

resetBtn.addEventListener("click", () => {
  inputField.value = "";
  inputField.focus();
});

// reset functions escape key

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    inputField.value = "";
  }
});

// delete functions x img btn on mouse click

delBtn.addEventListener("click", () => {
  inputField.value = inputField.value.slice(0, -1);
  inputField.focus();
});

// delete functions backspace or delete btns key

document.addEventListener("keydown", (event) => {
  if (event.key === "Backspace" || event.key === "Delete") {
    inputField.value = inputField.value.slice(0, -1);
  }
});

// plus function

function plus() {
  inputField.value += "+";

  inputField.focus();
}
// minus function

function minus() {
  inputField.value += "-";

  inputField.focus();
}
// multiply function

function multiply() {
  inputField.value += "*";

  inputField.focus();
}
// divide function

function divide() {
  inputField.value += "/";

  inputField.focus();
}
// percentage function

function percentage() {
  inputField.value += "%";

  inputField.focus();
}

//  check is mobile or not _______________

function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
    navigator.userAgent
  );
}

if (isMobileDevice()) {
  inputField.setAttribute("readonly", true); // mobile par readonly
} else {
  inputField.removeAttribute("readonly"); // desktop par typing allow
}
