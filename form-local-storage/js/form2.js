var divEl = document.getElementById("container");
var h1El = document.createElement("h1");

var nameEl = JSON.parse(localStorage.getItem("userName"));
var emailEl = JSON.parse(localStorage.getItem("email"));

var h1T = document.createTextNode(
  "Welcome " + nameEl + "!" + " Your email is " + emailEl + "."
);

divEl.appendChild(h1El);
h1El.appendChild(h1T);
h1El.appendChild(nameEl);
