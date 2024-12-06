# QuizMaster
![Homepage banner](/assets/media/banner.png)
<p align="center">
    <a href="https://sarah2123.github.io/QuizMaster/" target="_blank">Deployed Project Link</a>
</p>

## Project Overview
### Introduction / Rationale
Welcome to **QuizMaster**, a dynamic and engaging quiz platform designed to entertain, educate, and challenge users of all ages. Many online quizzes lack visual appeal, often featuring outdated layouts and uninspired designs. QuizMaster breaks the mold with a modern, sleek interface that captivates users from the moment they arrive. QuizMaster allows users to customize their quiz experience by selecting the number of questions, categories like general knowledge or geography, difficulty levels, and time limits, making it versatile for both casual users and avid quiz enthusiasts.

This platform aims to provide an enjoyable way to test and expand knowledge while catering to diverse interests and learning preferences. By offering immediate feedback on answers, tracking progress, and displaying results, QuizMaster serves as both an educational tool and a source of entertainment. Whether you're looking to learn something new, practice for a trivia night, or just have fun, QuizMaster is the ideal companion. With a clean, responsive design powered by Bootstrap and dynamic question content from an API, this quiz application ensures a seamless and enriching experience for everyone.
### Site Goals
- Provide an interactive and customizable quiz platform for users to test their knowledge.
- Enable users to select quiz parameters such as the number of questions, category, difficulty, and time limits.
- Display real-time feedback to enhance learning and engagement.
- Ensure the application is responsive and works seamlessly across mobile, tablet, and desktop devices.
- Incorporate accessibility features to make the platform usable for a wide audience.
- Use dynamic data from an API to deliver fresh and varied quiz content.
### Mobile / Tablet / Desktop View
![Responsive Mockup](/assets/media/responsive.png)

## Features
### Existing Features
**Start Screen**

  ![Start Screen](/assets/media/StartScreen.png)
- **Title of the Quiz and Brief Tagline**
  - **Feature Description:** The quiz title and a brief tagline provide a clear introduction to the theme and purpose of the quiz, setting expectations for users before they begin.
  - **Responsiveness:** Both elements are styled to adapt seamlessly to different screen sizes, ensuring readability on mobile, tablet, and desktop devices.
  - **Value to User:** These elements create an inviting first impression, giving users confidence and clarity about the content they are engaging with.
  
- **How to Play Button and Modal with Instructions on How to Play**
  - **Feature Description:** A prominently placed "How to Play" button opens a modal with clear and concise instructions on using the platform, answering common questions users might have. The button has a hover effect and the modal closes when the user clicks anywhere on the screen or clicks the close button.
  - **Responsiveness:** The button and modal are designed to scale and center correctly on all devices, with legible text and intuitive touch/click functionality. 
  - **Value to User:** This feature removes potential confusion, ensuring users of all experience levels can navigate and enjoy the quiz without frustration.

**Quiz Parameters Screen**
  
  ![Quiz Parameters Screen](/assets/media/QuizParametersScreen.png)
- **Amount of Questions Dropdown Menu**
  - **Feature Description:** Users can choose the number of quiz questions from a dropdown menu, customizing the length of their quiz session. They can choose either 5, 10, 15 or 20 questions.
  - **Responsiveness:** The dropdown menu is accessible on all device types, ensuring smooth functionality and intuitive navigation.
  - **Value to User:** Provides flexibility, allowing users to tailor their quiz experience to the time they have available or their preferred challenge level.

- **Quiz Category Dropdown Menu**
  -  **Feature Description:** Users can choose the category of the quiz from a dropdown menu, tailoring the content to their interests or expertise. They can choose from many topics including General Knowledge, Geography and Entertainment.
  - **Responsiveness:** The dropdown menu is accessible on all device types, ensuring smooth functionality and intuitive navigation.
  - **Value to User:** Makes the quiz engaging and personalized, enhancing user satisfaction by focusing on their preferred topics.

- **Difficulty Level Dropdown Menu**
  - **Feature Description:**  Users can select the difficulty of their quiz, ensuring an appropriate challenge for beginners, intermediates, or experts. They can choose from Easy, Medium or Hard.
  - **Responsiveness:** The dropdown menu is accessible on all device types, ensuring smooth functionality and intuitive navigation.
  - **Value to User:** Increases accessibility and enjoyment by accommodating varying levels of expertise and challenge preferences.

- **Timer Dropdown Menu**
  - **Feature Description:**  Users can select a time limit for each question from a dropdown menu, choosing between 10, 15, 20 or 30 seconds.
  - **Responsiveness:** The dropdown menu is accessible on all device types, ensuring smooth functionality and intuitive navigation.
  - **Value to User:** Adds customization to the quiz experience, allowing users to tailor the level of time-based challenge to their preferences or skill level.

- **Start Button**
  - **Feature Description:** The "Start" button remains disabled until all required quiz parameters are chosen, preventing incomplete setups. There is a hover effect on the start button.
  - **Responsiveness:** The button is in the middle on larger screens and to the right on smaller screens so it's easier to access.
  - **Value to user:** Avoids user frustration by ensuring the quiz starts only with valid settings, improving usability and reducing errors.

**Quiz Question Screen**

 ![Quiz Question Screen](/assets/media/QuizQuestionScreen.png)
- **Progress Tracker**
  - **Feature Description:**  A progress tracker displays the current question number relative to the total, helping users gauge their progress through the quiz. 
  - **Responsiveness:** The tracker is visible across all device types.
  - **Value to user:** Keeps users informed about their progress, maintaining motivation and reducing the likelihood of disengagement.

- **Timer Tracker**
  - **Feature Description:** : A visual timer bar at the top of the screen decreases in length as the selected time runs out, offering a graphical representation of remaining time.
  - **Responsiveness:**  The bar dynamically adjusts its width and placement to fit various screen sizes while maintaining visibility and smooth animation.
  - **Value to user:**  Provides a clear time constraint, adding urgency and ensuring users stay focused and engaged throughout the quiz.

- **Quiz Question with Four Options**
  - **Feature Description:**  Each question is accompanied by four clickable answer options, providing a clear and standardized format. The options turn green when right and red when wrong. The correct answer is displayed in green if answered incorrectly. The options have a hover effect.
  - **Responsiveness:** Options are styled as buttons that resize and remain easily tappable or clickable on any device.
  - **Value to user:** Ensures clarity and ease of interaction, providing a straightforward way to select answers, check answers and proceed through the quiz.

- **Next Button**
  - **Feature Description:** The "Next" button allows users to move to the next question, but it only becomes active after selecting an answer. On the last question, it directs users to the results screen. The button has a hover effect.
  - **Responsiveness:** The button is in the middle on larger screens and to the right on smaller screens so it's easier to access.
  - **Value to user:**  Encourages thoughtful interaction by requiring users to select an answer before moving on, enhancing the overall learning experience.

**Results Screen**

  ![Result Screen](/assets/media/ResultsScreen.png)
- **Display Final Score**
  - **Feature Description:** The final screen displays the user’s total score, summarizing their performance in a clear and visually prominent way.
  - **Responsiveness:** The score display adapts to various screen sizes, ensuring readability and aesthetic appeal on any device.
  - **Value to user:** Provides users with immediate feedback on their overall performance, offering a sense of accomplishment and closure to the experience.

- **Play Again Button**
  - **Feature Description:** A "Play Again" button allows users to reset the quiz and return to the start screen. The button has a hover effect.
  - **Responsiveness:** The button is styled to be easily clickable or tappable, adjusting appropriately for all screen sizes.
  - **Value to user:** Encourages replayability, giving users the opportunity to improve their score or try different quiz settings without refreshing the page.

### Added Features
- Home button to allow users to exit whilst in a quiz.
- Toast notification when there's an error fetching questions or there's no questions matching selected parameters.
- True/False questions to ensure there's enough questions for each category.
- Extended number of categories.
- Added sound effects depending on if answer is correct or incorrect.
- Added sound effects and confetti to results screen.
- Added a quickplay feature that generates 10 random questions with a 20 second time limit.
- Added a loading screen.
- Added a UI element progress bar for the timer as opposed to text.

### Future Features
- Allow users to review their answers after the quiz.
- A leaderboard to show top scores.
- Allow users to save their progress and resume later.
- Allow users to share their results.
- Reward users with bonus points for streaks or quick answers.
- Add badges or achievements.
- Add new timer modes for variety (e.g. Sudden Death: One incorrect answer ends the quiz.).
- Allow user to enter name and use throughout quiz to make it more personalised.
- Add a contact form for users to report bugs.

## Project Planning - UX/UI
### User Stories
- As a user, I want to access instructions so that I can understand the rules.
- As a user, I want to select the number of questions, category, and difficulty level so that I can customise the quiz to suit my preferences and interests.
- As a user, I want to choose the timer duration so that i can adjust the challenge.
- As a user, I want to see my progress so that i can understand how far I’ve gone in the quiz.
- As a user, I want to see a countdown timer so that i can track the remaining time for each question.
- As a user, I want to see a clear question and options so that I can interact with the quiz.
- As a user, I want to know if my answer is correct or incorrect immediately so that i know what the correct answer is.
- As a user, I want to see my final score so that i can understand my performance.
- As a user with assistive needs, I want the quiz to be accessible with screen readers so that i can also play.
- As a user, I want the quiz to look good and work on any device so that i can play on any device.
### Strategy
**Site Objectives:**
- Provide an engaging and interactive way to test users’ knowledge.
- Offer customizable quizzes to cater to varied interests and skill levels.
- Support learning and entertainment with accessibility and responsiveness in mind.

**User Needs:**
- Clear, easy-to-use navigation and interaction.
- Variety in content (categories, difficulties, timers).
- Instant feedback on answers for improved learning.
- Progress tracking to motivate continued participation.
- Accessibility for users with disabilities.
### Scope
**Features:**
- Ability for users to select the number of questions, category, difficulty level, and timer length.
- Each question includes four clickable answer options.
- Visual display showing the user’s progress (e.g., “Question 3 of 10”).
- A visible countdown timer for each question.
- Highlighting the selected answer in green for correct and red for incorrect, with the correct answer shown if the user gets it wrong.
- Calculation and display of the user’s final score at the end of the quiz.
- Ensures the quiz works on mobile, tablet, and desktop, with accessibility features for users with disabilities.

**Functions:**
- Ensures users select all quiz parameters before starting the quiz.
- Fetches questions, answers, and other data dynamically from the API based on user-selected parameters.
- Determines if a user’s selected answer is correct and adjusts the score accordingly.
- Provides immediate feedback by highlighting the correct/incorrect answers and locking further interaction after an answer is chosen.
- Starts and stops a countdown timer for each question, resetting it for the next question.
- Updates the progress tracker after each question is completed.
- Tallies the user’s correct answers and calculates the final score at the end of the quiz.
- Resets parameters and questions when the user opts to play again.

**Content:**
- The content for the quiz will come from an API: <a href="https://opentdb.com/api_config.php" target="_blank">Open Trivia Database</a>
- The API will need to handle, display  and interact with the following:
  - Text-based questions and four possible answer options for each.
  - Correct answer identifier.
  - List of quiz categories (e.g., general knowledge, animals, geography, music).
### Structure
**Interaction Design:**
- User starts at the "Start Screen".
  - They can select the how to play button and a modal with instructions pops up.
  - They can close the modal by clicking the close button or anywhere outside of the modal.
  - The start button takes them to the Quiz Parameters Screen.
- They then proceed to "Quiz Parameters Screen".
  - The can click the dropdown menus to choose the number of questions, difficulty level, category, and timer on the quiz.
  - The start button is available once all parameters are selected and leads them to the Quiz Question Screen.
- Once at the "Quiz Question Screen" they remain here until all questions have been answered.
  - The user can select the correct answer from 4 options.
  - Once an answer has been selected it turns green if correct or red if incorrect.
  - The next button is available once an answer is selected, it leads to the next question, if the quiz is finished it leads to the Results Screen.
- Finally they arrive at the "Results Screen" and decide to play again or exit.
  - The play again button takes them straight to the Quiz Parameters Screen.

**Information Achitecture:**
- Start Screen
  - Centralized layout with a title, tagline, and buttons for “Start” and “How to Play.”
  - Modal popup for instructions when “How to Play” is clicked.
- Quiz Parameters Screen
  - Form layout with dropdowns for all quiz parameters.
  - Disabled “Start Quiz” button until all parameters are filled.
- Quiz Question Screen
  - Header: Progress tracker and timer.
  - Main Area: Question text and answer options.
  - Footer: “Next” button.
- Results Screen:
  - Score display at the center.
  - “Play Again” button below the score.
### Skeleton
**Desktop Wireframes**
![Desktop Wireframe](/assets/media/desktop.png)

**Tablet Wireframes**
![Tablet Wireframe](/assets/media/tablet.png)

**Mobile Wireframes**
![Mobile Wireframe](/assets/media/mobile.png)
### Surface
**Visual Design**

Many online quizzes lack visual appeal, often featuring outdated layouts and uninspired designs. QuizMaster breaks the mold with a modern, sleek interface that captivates users from the moment they arrive. By incorporating the playful yet professional Parkinsan font and a vibrant blue color scheme, the platform ensures an engaging and enjoyable experience. The responsive design adapts seamlessly to all devices, with intuitive layouts and bold, contrasting elements that enhance readability and accessibility. QuizMaster combines aesthetics with functionality, creating a quiz platform that's not only fun to play but a pleasure to look at.

**Typography**

![Parkinsan Font](/assets/media/parkinsanFont.png)

**Colour Scheme**

![Colour Scheme](/assets/media/Colors.png)

## Agile Development
- We completed all tasks on the project board.
- 60% of the tasks were must haves.
- We had time left to add additional features.

![Kanban Board](/assets/media/projectBoard.png)

## Technologies Used
- <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">HTML5</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS3</a> 
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a> - Programming Language
- <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a> - CSS Framework
- <a href="https://git-scm.com/" target="_blank">Git</a> - Version Control
- <a href="https://github.com/" target="_blank">Github</a> - Repository and Deployment
- <a href="https://www.gitpod.io/" target="_blank">Gitpod</a> - Cloud IDE
- <a href="https://fontawesome.com/" target="_blank">Font Awesome</a> - Icons
- <a href="https://balsamiq.com/" target="_blank">Balsamiq</a> - Wireframes
- <a href="https://favicon.io/" target="_blank">favicon.io</a> - Favicon
- <a href="https://coolors.co/" target="_blank">Coolors</a> - Colour Palette
- <a href="https://developer.chrome.com/docs/devtools" target="_blank">Chrome DevTools</a> - Check for Bugs
- <a href="https://validator.w3.org/" target="_blank">W3C HTML Validator</a> - Validate HTML
- <a href="https://jigsaw.w3.org/css-validator/validator" target="_blank">Jigsaw CSS Validator</a> - Validate CSS
- <a href="https://www.jslint.com/" target="_blank">JSLint Javascript Validator</a> - Validate JavaScript
- <a href="https://jshint.com/" target="_blank">JSHint Javascript Validator</a> - Validate Javascript
- <a href="https://developer.chrome.com/docs/lighthouse/overview" target="_blank">Chrome Lighthouse</a>
- <a href="https://webaim.org/" target="_blank">WebAim</a> - WCAG Contrast Checker / WAVE Accessibility Checker
- <a href="https://ui.dev/amiresponsive?" target="_blank">Am I Responsive?</a> - Responsive Mockup
- <a href="https://www.browserling.com/" target="_blank">Browserling</a> - Browser Testing
- <a href="https://fonts.google.com/" target="_blank">Google Fonts</a> - Fonts
- <a href="https://mixkit.co/free-sound-effects/" target="_blank">mixkit</a> - Sound Effects
- <a href="https://cloudconvert.com/" target="_blank">CloudConvert</a> - File Converter
- <a href="https://github.com/catdad/canvas-confetti#api" target="_blank">Canvas Confetti</a> - Canvas Confetti
- <a href="https://pixabay.com/sound-effects/" target="_blank">pixabay</a> - Sound Effects

## Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - Login to github and access your repository.
  - In your GitHub repository, navigate to the settings tab.
  - From the settings tab navigate to the option 'Pages'.
  - From the source section drop-down menu, select 'deploy from a branch'.
  - From the branch section, use the dropdown menu to select the 'main' branch.
  - From the next drop-down menu select 'root', then  click save.
  - Wait a few minutes and refresh your page and the deployed link should be available.
- The live link can be found here - https://sarah2123.github.io/QuizMaster/

## Testing
### HTML

![HTML Validation](/assets/media/html.png)
### CSS

![CSS Validation](/assets/media/css.png)
### JavaScript

![JS Validation](/assets/media/jslint.png)
![JS Validation](/assets/media/jshint.png)
### Lighthouse 

![Lighthouse Validation](/assets/media/lighthouse.png)
### WCAG Contrast Checker

![Contrast Check](/assets/media/contrast.png)
### Wave Accessibility Checker

![Accessibility Check](/assets/media/accessibility.png)

### Browser Testing
- Chrome
- Firefox
- Safari 
- Edge
### Responsiveness Testing
- Responsive on screens from 320px to 1920px
### Known Bugs
**Solved Bugs**
  - **Problem:** Quiz Questions from API having random characters.
    - **Solution:** Use Javascript to decode html entities before displaying questions.
  - **Problem:** Timer element not stopping once answer selected.
    - **Solution:** Clear interval when answer is selected so it can no longer count down.
  - **Problem:** Error fetching questions when there was not enough questions within given parameters.
    - **Solution:** Allow true/false questions and display toast when error occurs asking user to change parameters.
  - **Problem:** Sound not playing when consecutive questions answered too fast.
    - **Solution:** Sound continued playing after clicking next, so ended and restarted sound when clicking next.
  - **Problem:** Questions counting up in 2.
    - **Solution:** Same function was being called twice so removed one.
  - **Problem:** If you entered the quickplay then exited and entered again, it would throw an error "failed to fetch questions from API".
    - **Solution:** This was because the previous API fetch was still occuring so added a loading screen to wait for that one to end and the new fetch to occur.
  - **Problem:** Next button displaying on first question.
    - **Solution:**  This was because the next button displayed before the function to check if it should be displayed after answering questions. So set the default to the next button not being displayed.
## Credits
### Content
- Open Trivia Database
### Media
- pixabay
- mixkit
## AI Usage
This project heavily relied on ChatGPT to streamline various stages of development. 
- Project Planning
  - Assisted in outlining the project scope and breaking down the functionality into smaller, actionable tasks.
  - Generated a high-level roadmap, including user stories and feature prioritization.
  - Assisted in ideas for features to implement.
- Development
  - Helped write boilerplate code for various components, such as dynamic screen navigation and event listeners for user interaction.
  - Suggested improvements in JavaScript for handling asynchronous operations (e.g., API calls).
  - Provided broken down logic on how to implement a feature.
- Debugging
  - Troubleshot bugs during the development process.
  - Found errors in the code that led to bugs.
  - Helped fix errors that showed up on JS lint.
- Documentation
  - API helped with most the documentation particularly the UX essentials.