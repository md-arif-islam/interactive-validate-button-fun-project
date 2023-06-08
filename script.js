$(document).ready(function () {
  const passwordInput = $("#password");
  const submitButton = $("#submit");
  const passwordValidationText = $("#password-validation-text");

  let password = passwordInput.val();
  let validate = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/.test(password);

  passwordInput.on("input", function () {
    if (!validate) {
      submitButton.css("background", "red");
      passwordValidationText.text(
        "Please use letters and numbers to make your password stronger."
      );
    } else {
      submitButton.css("background", "green");
      passwordValidationText.text("Awesome");
    }
  });

  submitButton.on("mouseover", function () {
    if (!validate) {
      submitButton.toggleClass("move");
      submitButton.css("background", "red");
    } else {
      submitButton.addClass("stop");
      submitButton.css("background", "green");
    }
  });
});
