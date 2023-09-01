const validate = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Picking fields
    let FirstName = document.registration.firstname;
    let LastName = document.registration.lastname;
    let DateOfBirth = document.registration.date; // Assuming the date input has the name "date"
    let dateOfBirthError = document.getElementById("date-error");

    let error = 0;

    // Validate date of birth
    if (DateOfBirth.value === "") {
        DateOfBirth.style.border = "2px solid red";
        dateOfBirthError.textContent = "Date of birth is required";
        dateOfBirthError.style = "color: red; font-size: 11px; font-family: Helvetica, Arial, sans-serif;";
        DateOfBirth.focus();
        error++;
    } else {
        const dateParts = DateOfBirth.value.split('/');
        if (dateParts.length === 3) {
            const year = parseInt(dateParts[0], 10);
            const month = parseInt(dateParts[1], 10);
            const day = parseInt(dateParts[2], 10);
            const today = new Date();
            const dob = new Date(year, month - 1, day); // Subtract 1 from month because months are 0-indexed in JavaScript

            if (
                !isNaN(year) &&
                !isNaN(month) &&
                !isNaN(day) &&
                dob.getFullYear() === year &&
                dob.getMonth() === month - 1 &&
                dob.getDate() === day &&
                dob < today &&
                today.getFullYear() - dob.getFullYear() >= 18
            ) {
                // Date of birth is valid and age is at least 18
                DateOfBirth.style.border = "1px solid green";
                dateOfBirthError.textContent = "";
            } else {
                DateOfBirth.style.border = "2px solid red";
                dateOfBirthError.textContent = "Invalid date of birth or age less than 18";
                dateOfBirthError.style = "color: red; font-size: 11px; font-family: Helvetica, Arial, sans-serif;";
                DateOfBirth.focus();
                error++;
            }
        } else {
            DateOfBirth.style.border = "2px solid red";
            dateOfBirthError.textContent = "Invalid date format (YY/MM/DD)";
            dateOfBirthError.style = "color: red; font-size: 11px; font-family: Helvetica, Arial, sans-serif;";
            DateOfBirth.focus();
            error++;
        }
    }

    // Rest of your validation code for other fields

    // If there are errors, don't submit the form
    if (error > 0) {
        return false;
    }

    // If no errors, you can optionally submit the form programmatically here
    // For example, if you want to submit it via JavaScript:
    // document.registration.submit();

    return true; // Allow the form submission to proceed
};
