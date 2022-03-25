const password = document.getElementById("password");
const message = document.getElementById("message");
const afterResult = document.getElementById("after-result");

password.addEventListener("input", () => {
  if (password.value.length > 0) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
  if (password.value.length < 4) {
    afterResult.innerHTML = "Weak";
    password.style.borderColor = "red";
    message.style.color = "red";
  } else if (password.value.length >= 4 && password.value.length <= 8) {
    afterResult.innerHTML = "Medium";
    password.style.borderColor = "Yellow";
    message.style.color = "Yellow";
  } else if (password.value.length > 8) {
    afterResult.innerHTML = "Strong";
    password.style.borderColor = "Green";
    message.style.color = "Green";
  }
});
