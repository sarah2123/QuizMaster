// this javascript is temporary to allow for styling checks. it was generate by ai and has not been checked.
// this is a reminder not to use it without checking



// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Get references to all relevant elements
    const startScreen = document.getElementById("start-screen-container");
    const quizParametersScreen = document.getElementById("quiz-parameters-container");
    const quizQuestionScreen = document.getElementById("quiz-question-container");
    const resultsScreen = document.getElementById("results-container");

    const startButton = document.getElementById("start-button");
    const parameterStartButton = document.getElementById("parameter-start-button");
    const nextButton = document.getElementById("next-button");
    const playAgainButton = document.getElementById("play-again-button");

    // Initially hide all screens except the start screen
    quizParametersScreen.style.display = "none";
    quizQuestionScreen.style.display = "none";
    resultsScreen.style.display = "none";

    // Function to hide all screens
    function hideAllScreens() {
        startScreen.style.display = "none";
        quizParametersScreen.style.display = "none";
        quizQuestionScreen.style.display = "none";
        resultsScreen.style.display = "none";
    }

    // Show Quiz Parameters Screen when Start is clicked
    startButton.addEventListener("click", () => {
        hideAllScreens();
        quizParametersScreen.style.display = "flex"; 
    });

    // Show Quiz Question Screen when Start on Quiz Parameters is clicked
    parameterStartButton.addEventListener("click", () => {
        hideAllScreens();
        quizQuestionScreen.style.display = "flex"; 
    });

    // Show Results Screen when Next on Quiz Question is clicked
    nextButton.addEventListener("click", () => {
        hideAllScreens();
        resultsScreen.style.display = "flex"; 
    });

    // Go back to Start Screen when Play Again is clicked
    playAgainButton.addEventListener("click", () => {
        hideAllScreens();
        startScreen.style.display = "flex";
    });
});
