const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const passwordValidationText = document.getElementById(
  "password-validation-text"
);

submitButton.addEventListener("mouseover", (button) => {
  let password = passwordInput.value;
  let email = emailInput.value;

  let validate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/.test(password);

  if (!validate) {
    button.target.classList.toggle("move");
    submitButton.style.background = "red";
    passwordValidationText.textContent =
      "Please use letters and numbers to make your password stronger.";
  } else {
    button.target.classList.add("stop");
    submitButton.style.background = "green";
    passwordValidationText.textContent = ""; // Clear the validation text when the password is valid
  }
});
