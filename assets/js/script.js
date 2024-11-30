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

// Play again button to return to parameters screen and reset variables and parameters.
playAgainButton.addEventListener("click", () => {
  showStartScreen();
  currentQuestionIndex = 0;
  score = 0;
  numberOfQuestionsSelect.value = "Select Number";
  categorySelect.value = "Select Category";
  difficultySelect.value = "Select Difficulty";
  timerSelect.value = "Select Timer";
  checkDropdowns();
});

// Home button to return to the start screen and reset quiz variables
homeButton.addEventListener("click", () => {
  showStartScreen();
  currentQuestionIndex = 0;
  score = 0;
  numberOfQuestionsSelect.value = "Select Number";
  categorySelect.value = "Select Category";
  difficultySelect.value = "Select Difficulty";
  timerSelect.value = "Select Timer";
  checkDropdowns();
});

// Show quiz question when start button is clicked.
parameterStartButton.addEventListener('click', () => {
  updateProgressTracker();
});

// Initially, hide the Next button
nextButton.style.display = "none";

// Add event listeners to all answer buttons
answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    nextButton.style.display = "inline-block";
    answerButtons.forEach(button => {
      button.disabled = true;
    });
  });
});

function updateProgressTracker() {
  progressTracker.textContent = `Question ${currentQuestionIndex + 1}/${numberOfQuestions}`;
}

function fetchAndDisplayQuestions() {
  const apiURL = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch questions from the API");
      }
      return response.json();
    })
    .then(data => {
      if (data.results && data.results.length > 0) {
        questions = data.results;
        quizParametersScreen.style.display = 'none';
        quizQuestionScreen.style.display = 'flex';
        displayQuestion(currentQuestionIndex);
      } else {
        throw new Error("No questions found! Please adjust your parameters.");
      }
    })
    .catch(error => {
      console.error("Error fetching quiz questions:", error);
      alert(error.message || "An error occurred while fetching questions. Please try again.");
      quizParametersScreen.style.display = 'flex';
      quizQuestionScreen.style.display = 'none';
    });
}

// Function to decode HTML entities
function decodeHtmlEntities(text) {
  const parser = new DOMParser();
  return parser.parseFromString(text, "text/html").documentElement.textContent;
}


// Function to display the current question
function displayQuestion(index) {
  const questionElement = document.getElementById("question");
  const buttonContainer = document.getElementById("button-container");

  const questionData = questions[index];

  questionElement.textContent = decodeHtmlEntities(questionData.question);

  const allAnswers = [questionData.correct_answer, ...questionData.incorrect_answers];
  const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

  buttonContainer.innerHTML = "";

  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = decodeHtmlEntities(answer);

    button.addEventListener("click", () => {
      const allButtons = buttonContainer.querySelectorAll(".btn");
      allButtons.forEach(btn => btn.disabled = true);

      if (answer === questionData.correct_answer) {
        button.style.backgroundColor = "#B8D8BE";
        score++;
      } else {
        button.style.backgroundColor = "#ff9e99";
      }

      allButtons.forEach(btn => {
        if (btn.textContent === decodeHtmlEntities(questionData.correct_answer)) {
          btn.style.backgroundColor = "#B8D8BE";
        }
      });

      nextButton.style.display = "inline-block";
    });

    buttonContainer.appendChild(button);
  });

  console.log(`Question ${index + 1}:`, decodeHtmlEntities(questionData.question));
}

// Function to move to the next question
function goToNextQuestion() {
  currentQuestionIndex++;

  updateProgressTracker();

  if (currentQuestionIndex < questions.length) {
    displayQuestion(currentQuestionIndex);
    nextButton.style.display = "none";
  } else {
    displayResults();
  }
}

// Call the fetchAndDisplayQuestions function when the parameter start button is clicked
parameterStartButton.addEventListener("click", fetchAndDisplayQuestions);

// Add event listener to the Next button
nextButton.addEventListener("click", goToNextQuestion);

// Function to display the results
function displayResults() {
  const scorePercentage = Math.round((score / numberOfQuestions) * 100);
  scoreDisplay.textContent = score;
  totalQuestionsDisplay.textContent = numberOfQuestions;
  scorePercentageDisplay.textContent = scorePercentage;
  quizQuestionScreen.style.display = "none";
  resultsScreen.style.display = "flex";
}

