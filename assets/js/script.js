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

// Function to show the Quiz Parameters screen when the start button is clicked
function showQuizParametersScreen() {
    // Hide the start screen and other screens
    startScreen.style.display = "none";
    quizQuestionScreen.style.display = "none";
    resultsScreen.style.display = "none";

    // Show the quiz parameters screen
    quizParametersScreen.style.display = "flex";
}

// Attach event listener to the Start button
startButton.addEventListener("click", showQuizParametersScreen);


