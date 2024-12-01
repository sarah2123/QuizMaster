const quickPlayButton = document.getElementById("quick-play-button");

numberOfQuestions = 10;
timer = 20;

quickPlayButton.addEventListener("click", startQuickPlay);
quickPlayButton.addEventListener("click", updateProgressTracker);

function startQuickPlay() {
    startScreen.style.display = "none";
    loadingScreen.style.display = "flex";
    const apiURL = `https://opentdb.com/api.php?amount=10`;

    fetch(apiURL).then(function (response) {
        if (!response.ok) {
            throw new Error("Failed to fetch questions from the API, please try again.");
        }
        return response.json();
    }).then(function (data) {
        if (data.results && data.results.length > 0) {
            questions = data.results;
            loadingScreen.style.display = "none";
            startScreen.style.display = 'none';
            quizQuestionScreen.style.display = 'flex';
            displayQuestion(currentQuestionIndex);
        }
    }).catch(function (error) {
        console.error("Error fetching quiz questions:", error);
        const errorToastMessage = document.getElementById("errorToastMessage");
        errorToastMessage.textContent = error.message || "An error occurred while fetching questions.";
        const errorToast = new bootstrap.Toast(document.getElementById("errorToast"));
        errorToast.show();
        startScreen.style.display = 'flex';
        quizQuestionScreen.style.display = 'none';
    });
}

