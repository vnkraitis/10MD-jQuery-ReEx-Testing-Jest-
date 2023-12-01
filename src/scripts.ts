import $ from "jquery";
import { validateUserName } from "./utils/user-name-Validate/validateUserName";
import { validateEmail } from "./utils/e-mailValidate/e-mailValidate";
import { validatePassword } from "./utils/pasword-validate/validatePassword";

$(document).ready(() => {
  // Helper function to display validation errors
  function displayValidationError(
    selector: string,
    isValid: boolean,
    errorMessage: string,
  ) {
    const errorElement = $(selector).next(".error-message");
    if (!isValid) {
      errorElement.text(errorMessage).show();
    } else {
      errorElement.hide();
    }
  }

  // Event listener for form submission
  $("#registration-form").on("submit", (e) => {
    e.preventDefault();

    // Get the values from the form inputs
    const userName = $("#user-name").val() as string;
    const email = $("#email").val() as string;
    const password = $("#password").val() as string;

    // Use the imported validation functions
    const userNameValidation = validateUserName(userName);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);

    // Check if all validations pass
    if (
      userNameValidation.valid
      && emailValidation.valid
      && passwordValidation.valid
    ) {
      // fake alert
      alert(
        "All fields are correctly filled out. Validation passed successfully!"
      );
    } else {
      // Form is invalid - handle errors
      displayValidationError(
        "#user-name",
        userNameValidation.valid,
        userNameValidation.message,
      );
      displayValidationError(
        "#email",
        emailValidation.valid,
        emailValidation.message,
      );
      displayValidationError(
        "#password",
        passwordValidation.valid,
        passwordValidation.message,
      );
    }
  });
});
