// Start Screen
const startScreen = document.getElementById("start-screen-container");
const startButton = document.getElementById("start-button");

// Quiz Parameters Screen
const quizParametersScreen = document.getElementById("quiz-parameters-container");
const numberOfQuestionsSelect = quizParametersScreen.querySelector("[aria-label='select number of questions']");
const categorySelect = quizParametersScreen.querySelector("[aria-label='select category of questions']");
const difficultySelect = quizParametersScreen.querySelector("[aria-label='select difficulty of questions']");
const timerSelect = quizParametersScreen.querySelector("[aria-label='select timer for each question']");
const parameterStartButton = document.getElementById("parameter-start-button");

// Quiz Question Screen
const quizQuestionScreen = document.getElementById("quiz-question-container");
const progressTracker = document.getElementById("progress-tracker");
const timerContainer = document.getElementById("timer-container");
const timer = document.getElementById("timer");
const questionText = document.getElementById("question");
const answerButtonA = document.getElementById("answer-a");
const answerButtonB = document.getElementById("answer-b");
const answerButtonC = document.getElementById("answer-c");
const answerButtonD = document.getElementById("answer-d");
const nextButton = document.getElementById("next-button");

// Results Screen
const resultsScreen = document.getElementById("results-container");
const scoreDisplay = document.getElementById("score");
const totalQuestionsDisplay = document.getElementById("total-questions");
const scorePercentageDisplay = document.getElementById("score-percentage");
const playAgainButton = document.getElementById("play-again-button");

 // Hide all screens except the start screen
function showStartScreen() {
    startScreen.style.display = "flex";
    quizParametersScreen.style.display = "none";
    quizQuestionScreen.style.display = "none";
    resultsScreen.style.display = "none";
}

// Call the function to initialize
showStartScreen();

// Attach event listener to the Start button
startButton.addEventListener("click", showQuizParametersScreen);

// Function to show the Quiz Parameters screen when the start button is clicked
function showQuizParametersScreen() {
    // Hide the start screen and other screens
    startScreen.style.display = "none";
    quizQuestionScreen.style.display = "none";
    resultsScreen.style.display = "none";

    // Show the quiz parameters screen
    quizParametersScreen.style.display = "flex";
}

// Initialize by hiding the button
parameterStartButton.style.display = "none";

// Function to check dropdown selections
function checkDropdownSelections() {
    // Check if all dropdowns have a selected value that is not the default
    const isNumberSelected = numberOfQuestionsSelect.value !== "Select Number";
    const isCategorySelected = categorySelect.value !== "Select Category";
    const isDifficultySelected = difficultySelect.value !== "Select Difficulty";
    const isTimerSelected = timerSelect.value !== "Select Timer";

    // Enable or disable the button based on selections
    if (isNumberSelected && isCategorySelected && isDifficultySelected && isTimerSelected) {
        parameterStartButton.style.display = "block"; // Show the button
    } else {
        parameterStartButton.style.display = "none"; // Hide the button
    }
}

// Attach event listeners to all dropdowns
const dropdowns = quizParametersScreen.querySelectorAll("select");

// Attach change event listener to each dropdown
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("change", checkDropdownSelections);
});

// Attach event listener to the Parameters Start button
parameterStartButton.addEventListener("click", showQuizQuestionScreen);

// Function to show the Quiz Questions screen
function showQuizQuestionScreen() {
    // Hide other screens
    startScreen.style.display = "none";
    quizParametersScreen.style.display = "none";
    resultsScreen.style.display = "none";

    // Show the Questions screen
    quizQuestionScreen.style.display = "flex";
}

// Initially hide the Next button when the page loads
hideNextButton();

// Function to hide the Next button (called when the question is reset or before answering)
function hideNextButton() {
    nextButton.style.display = "none";  // Hide the next button
}

// Function to show the Next button when an answer is clicked
function showNextButton() {
    nextButton.style.display = "block";  // Show the next button
}

const answerButtons = document.querySelectorAll("#button-container button");

answerButtons.forEach((button) => {
    button.addEventListener("click", function() {
        // Disable all answer buttons
        disableAnswerButtons();
        
        // Show the next button once an answer is selected
        showNextButton();
        
        // Optionally, apply the color change to show correct/incorrect answer
        highlightSelectedAnswer(button);
    });
});

// Function to disable all answer buttons
function disableAnswerButtons() {
    answerButtons.forEach((btn) => {
        btn.disabled = true;  // Disable all answer buttons
        btn.style.pointerEvents = "none";  // Ensure no interaction after selection
    });
}
