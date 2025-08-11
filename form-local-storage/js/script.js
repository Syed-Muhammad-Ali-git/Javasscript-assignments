var form = document.getElementById("dataForm");
var userName = document.getElementById("userName");
var email = document.getElementById("email");
var password = document.getElementById("password");

function dataSubmit() {
  localStorage.setItem("userName", JSON.stringify(userName.value));
  localStorage.setItem("email", JSON.stringify(email.value));
  localStorage.setItem("password", JSON.stringify(password.value));
  window.location.href = "./form2.html";
}
