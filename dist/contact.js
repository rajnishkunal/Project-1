document.getElementById("myForm").addEventListener("submit", function (event) {
    let isValid = true;

    function showError(inputId, errorId) {
        const input = document.getElementById(inputId);
        const error = document.getElementById(errorId);

        if (!input.checkValidity() || input.value.trim() === "") {
            error.classList.remove("hidden");
            isValid = false;
        } else {
            error.classList.add("hidden");
        }
    }

    showError("fullName", "fullNameError");
    showError("email", "emailError");
    showError("phone", "phoneError");
    showError("dob", "dobError");
    showError("gender", "genderError");
    showError("city", "cityError");
    showError("state", "stateError");
    showError("country", "countryError");
    showError("address", "addressError");
    showError("message", "messageError");
    showError("resume", "resumeError");

    const terms = document.getElementById("terms");
    const termsError = document.getElementById("termsError");
    if (!terms.checked) {
        termsError.classList.remove("hidden");
        isValid = false;
    } else {
        termsError.classList.add("hidden");
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        alert("Submitted successfully!");
    }
});
