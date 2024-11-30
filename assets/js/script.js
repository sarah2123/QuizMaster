// Start Screen
const startScreen = document.getElementById("start-screen-container");
const startButton = document.getElementById("start-button");

// Quiz Parameters Screen
const quizParametersScreen = document.getElementById("quiz-parameters-container");
const numberOfQuestionsSelect = document.getElementById("number-of-questions");
const categorySelect = document.getElementById("category-of-questions");
const difficultySelect = document.getElementById("difficulty-of-questions");
const timerSelect = document.getElementById("timer-for-questions");
const parameterStartButton = document.getElementById("parameter-start-button");
const errorMessage = document.getElementById("error");

// Quiz Question Screen
const quizQuestionScreen = document.getElementById("quiz-question-container");
const progressTracker = document.getElementById("progress-tracker");
const timerContainer = document.getElementById("timer-container");
const timerElement = document.getElementById("timer");
const questionText = document.getElementById("question");
const answerButtons = document.querySelectorAll("#button-container .btn");
const nextButton = document.getElementById("next-button");
const homeButton = document.getElementById("home-button");

// Results Screen
const resultsScreen = document.getElementById("results-container");
const scoreDisplay = document.getElementById("score");
const totalQuestionsDisplay = document.getElementById("total-questions");
const scorePercentageDisplay = document.getElementById("score-percentage");
const playAgainButton = document.getElementById("play-again-button");

// Declare variables
let numberOfQuestions = null;
let category = null;
let difficulty = null;
let timer = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Function to update selected value
function updateParameterValue(selectElement, parameterName) {
  const selectedValue = selectElement.value;
  if (parameterName === 'numberOfQuestions') {
      numberOfQuestions = selectedValue !== 'Select Number' ? selectedValue : null;
  } else if (parameterName === 'category') {
      category = selectedValue !== 'Select Category' ? selectedValue : null;
  } else if (parameterName === 'difficulty') {
      difficulty = selectedValue !== 'Select Difficulty' ? selectedValue : null;
  } else if (parameterName === 'timer') {
      timer = selectedValue !== 'Select Timer' ? selectedValue : null;
  }
}

// Listen for changes and update the values when the user selects a new option
numberOfQuestionsSelect.addEventListener('change', function () {
  updateParameterValue(numberOfQuestionsSelect, 'numberOfQuestions');
});
categorySelect.addEventListener('change', function () {
  updateParameterValue(categorySelect, 'category');
});
difficultySelect.addEventListener('change', function () {
  updateParameterValue(difficultySelect, 'difficulty');
});
timerSelect.addEventListener('change', function () {
  updateParameterValue(timerSelect, 'timer');
});

// Hide all screens except the start screen
function showStartScreen() {
  startScreen.style.display = "flex";
  quizParametersScreen.style.display = "none";
  quizQuestionScreen.style.display = "none";
  resultsScreen.style.display = "none";
}

showStartScreen();

// Show the quiz parameters screen after selecting start button.
function showQuizParametersScreen() {
  startScreen.style.display = "none";
  resultsScreen.style.display = 'none';
  quizQuestionScreen.style.display = "none";
  quizParametersScreen.style.display = "flex";
}

startButton.addEventListener("click", showQuizParametersScreen);

// Show start button when all parameters are selected
function checkDropdowns() {
  const isNumberSelected = numberOfQuestionsSelect.value !== "Select Number";
  const isCategorySelected = categorySelect.value !== "Select Category";
  const isDifficultySelected = difficultySelect.value !== "Select Difficulty";
  const isTimerSelected = timerSelect.value !== "Select Timer";

  if (isNumberSelected && isCategorySelected && isDifficultySelected && isTimerSelected) {
      parameterStartButton.style.display = "block";
  } else {
      parameterStartButton.style.display = "none";
  }
}

numberOfQuestionsSelect.addEventListener("change", checkDropdowns);
categorySelect.addEventListener("change", checkDropdowns);
difficultySelect.addEventListener("change", checkDropdowns);
timerSelect.addEventListener("change", checkDropdowns);

checkDropdowns();