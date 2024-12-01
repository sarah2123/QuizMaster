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

// Quiz Question Screen
const quizQuestionScreen = document.getElementById("quiz-question-container");
const progressTracker = document.getElementById("progress-tracker");
const timerElement = document.getElementById("timer");
const answerButtons = document.querySelectorAll("#button-container .btn");
const nextButton = document.getElementById("next-button");
const homeButton = document.getElementById("home-button");
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

// Results Screen
const resultsScreen = document.getElementById("results-container");
const scoreDisplay = document.getElementById("score");
const totalQuestionsDisplay = document.getElementById("total-questions");
const scorePercentageDisplay = document.getElementById("score-percentage");
const playAgainButton = document.getElementById("play-again-button");
const completeSound = document.getElementById("complete-sound");

// Declare variables
let numberOfQuestions = null;
let category = null;
let difficulty = null;
let timer = null;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;

let countdown;
let timeRemaining;

// Function to update selected value
function updateParameterValue(selectElement, parameterName) {
    const selectedValue = selectElement.value;
    if (parameterName === 'numberOfQuestions') {
        numberOfQuestions = (
            selectedValue !== 'Select Number'
            ? selectedValue
            : null
        );
    } else if (parameterName === 'category') {
        category = (
            selectedValue !== 'Select Category'
            ? selectedValue
            : null
        );
    } else if (parameterName === 'difficulty') {
        difficulty = (
            selectedValue !== 'Select Difficulty'
            ? selectedValue
            : null
        );
    } else if (parameterName === 'timer') {
        timer = (
            selectedValue !== 'Select Timer'
            ? selectedValue
            : null
        );
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
    currentQuestionIndex = 0;
    score = 0;
    numberOfQuestionsSelect.value = "Select Number";
    categorySelect.value = "Select Category";
    difficultySelect.value = "Select Difficulty";
    timerSelect.value = "Select Timer";
    checkDropdowns();
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

// Home button to return to the start screen and reset quiz variables and parameters
homeButton.addEventListener("click", showStartScreen);

// Play again button to return to parameters screen and reset variables and parameters.
playAgainButton.addEventListener("click", function () {
    completeSound.pause();
    completeSound.currentTime = 0;
    showStartScreen();
});

// Fetch questions from API
function fetchAndDisplayQuestions() {
    const apiURL = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}`;

    fetch(apiURL).then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch questions from the API");
        }
        return response.json();
    }).then(function (data) {
        if (data.results && data.results.length > 0) {
            questions = data.results;
            quizParametersScreen.style.display = 'none';
            quizQuestionScreen.style.display = 'flex';
            displayQuestion(currentQuestionIndex);
        } else {
            throw new Error("Not enough questions available! Please adjust your parameters.");
        }
    }).catch(function (error) {
        console.error("Error fetching quiz questions:", error);
        const errorToastMessage = document.getElementById("errorToastMessage");
        errorToastMessage.textContent = error.message || "An error occurred while fetching questions.";
        const errorToast = new bootstrap.Toast(document.getElementById("errorToast"));
        errorToast.show();
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
    shuffledAnswers.forEach(function (answer) {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = decodeHtmlEntities(answer);
        button.addEventListener("click", function () {
            clearInterval(countdown);
            const allButtons = buttonContainer.querySelectorAll(".btn");
            allButtons.forEach(function (btn) {
                btn.disabled = true;
            });
            if (answer === questionData.correct_answer) {
                button.style.backgroundColor = "#B8D8BE";
                score += 1;
                correctSound.play();
            } else {
                button.style.backgroundColor = "#ff9e99";
                incorrectSound.play();
            }
            allButtons.forEach(function (btn) {
                if (btn.textContent === decodeHtmlEntities(questionData.correct_answer)) {
                    btn.style.backgroundColor = "#B8D8BE";
                }
            });
            nextButton.style.display = "inline-block";
        });
        buttonContainer.appendChild(button);
    });
    startTimer(parseInt(timer, 10));
}

// Call the fetchAndDisplayQuestions function when the parameter start button is clicked
parameterStartButton.addEventListener("click", fetchAndDisplayQuestions);
parameterStartButton.addEventListener("click", updateProgressTracker);

// Initially, hide the Next button
nextButton.style.display = "none";

// Add event listeners to all answer buttons
answerButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        nextButton.style.display = "inline-block";
        answerButtons.forEach(function (button) {
            button.disabled = true;
        });
    });
});

// Function to update progress tracker
function updateProgressTracker() {
    progressTracker.textContent = `Question ${currentQuestionIndex + 1}/${numberOfQuestions}`;
}

// Add event listener to the Next button
nextButton.addEventListener("click", goToNextQuestion);

// Function to move to the next question
function goToNextQuestion() {
    clearInterval(countdown);
    currentQuestionIndex += 1;
    correctSound.pause();
    correctSound.currentTime = 0;
    incorrectSound.pause();
    incorrectSound.currentTime = 0;
    updateProgressTracker();
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
        nextButton.style.display = "none";
    } else {
        displayResults();
    }
}

// Function to display the results
function displayResults() {
    completeSound.play();
    const scorePercentage = Math.round((score / numberOfQuestions) * 100);
    scoreDisplay.textContent = score;
    totalQuestionsDisplay.textContent = numberOfQuestions;
    scorePercentageDisplay.textContent = scorePercentage;
    quizQuestionScreen.style.display = "none";
    resultsScreen.style.display = "flex";
    launchConfetti();
}

// Function to start the timer
function startTimer(duration) {
    timeRemaining = duration;
    timerElement.textContent = `${timeRemaining}s`;
    if (countdown) {
        clearInterval(countdown);
    }
    countdown = setInterval(function () {
        timeRemaining -= 1;
        timerElement.textContent = `${timeRemaining}`;
        if (timeRemaining <= 0) {
            clearInterval(countdown);
            handleTimeout();
        }
    }, 1000);
}

// Function to handle timeout
function handleTimeout() {
    const allButtons = document.querySelectorAll("#button-container .btn");
    allButtons.forEach(function (button) {
        button.disabled = true;
        if (button.textContent === decodeHtmlEntities(questions[currentQuestionIndex].correct_answer)) {
            button.style.backgroundColor = "#B8D8BE";
        }
    });
    nextButton.style.display = "inline-block";
}

function launchConfetti() {
    const duration = 1 * 1000;
    const end = Date.now() + duration;

    function frame() {
        confetti({
            angle: Math.random() * 360,
            origin: {x: Math.random(), y: Math.random() - 0.2},
            particleCount: 15,
            scalar: 1,
            shapes: ['circle'],
            spread: 55
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }

    frame();
}