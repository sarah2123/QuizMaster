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