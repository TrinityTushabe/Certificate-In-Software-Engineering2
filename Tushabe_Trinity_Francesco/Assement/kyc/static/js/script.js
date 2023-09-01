$(document).ready(function () {
    // Check if the success alert element exists
    var successAlert = document.getElementById('success-alert');
    if (successAlert) {
        // Show the alert with a fade-in effect
        $(successAlert).fadeIn();
        // After 3 seconds (adjust the time as needed), hide the alert and redirect
        setTimeout(function () {
            $(successAlert).fadeOut();
            // Redirect to the success page
            window.location.href = '/registration_success'; // Replace with your actual URL
        }, 3000); // 3000 milliseconds (3 seconds)
    }
});