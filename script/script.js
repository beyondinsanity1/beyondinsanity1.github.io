document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? "block" : "none";
        });
    }

    function handleNext() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function handleBack() {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }

    function handleSubmit() {
        // Implement code to collect and process survey data here
        alert("Survey submitted!");
    }

    document.getElementById("nextButton1").addEventListener("click", handleNext);
    document.getElementById("backButton2").addEventListener("click", handleBack);
    document.getElementById("submitButton").addEventListener("click", handleSubmit);
});
