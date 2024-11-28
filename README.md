# QuizMaster
![Homepage banner](/media/banner.png)
<p align="center">
    <a href="" target="_blank">Deployed Project Link</a>
</p>

## Project Overview
### Introduction
Welcome to **QuizMaster**, a dynamic and engaging quiz platform designed to entertain, educate, and challenge users of all ages. QuizMaster allows users to customize their quiz experience by selecting the number of questions, categories like general knowledge or geography, difficulty levels, and time limits, making it versatile for both casual users and avid quiz enthusiasts.

This platform aims to provide an enjoyable way to test and expand knowledge while catering to diverse interests and learning preferences. By offering immediate feedback on answers, tracking progress, and displaying results, QuizMaster serves as both an educational tool and a source of entertainment. Whether you're looking to learn something new, practice for a trivia night, or just have fun, QuizMaster is the ideal companion. With a clean, responsive design powered by Bootstrap and dynamic question content from an API, this quiz application ensures a seamless and enriching experience for everyone.
### Site Goals
- Provide an interactive and customizable quiz platform for users to test their knowledge.
- Enable users to select quiz parameters such as the number of questions, category, difficulty, and time limits.
- Display real-time feedback to enhance learning and engagement.
- Ensure the application is responsive and works seamlessly across mobile, tablet, and desktop devices.
- Incorporate accessibility features to make the platform usable for a wide audience.
- Use dynamic data from an API to deliver fresh and varied quiz content.
### Mobile / Tablet / Desktop View
![Responsive Mockup](/media/responsive-mockup.png)

## Features
### Existing Features
**Start Screen**
- **Title of the Quiz and Brief Tagline**
  - **Feature Description:** The quiz title and a brief tagline provide a clear introduction to the theme and purpose of the quiz, setting expectations for users before they begin.
  - **Responsiveness:** Both elements are styled to adapt seamlessly to different screen sizes, ensuring readability on mobile, tablet, and desktop devices.
  - **Value to User:** These elements create an inviting first impression, giving users confidence and clarity about the content they are engaging with.
  
- **How to Play Button and Modal with Instructions on How to Play**
  - **Feature Description:** A prominently placed "How to Play" button opens a modal with clear and concise instructions on using the platform, answering common questions users might have. The button has a hover effect and the modal closes when the user clicks anywhere on the screen or clicks the close button.
  - **Responsiveness:** The button and modal are designed to scale and center correctly on all devices, with legible text and intuitive touch/click functionality. 
  - **Value to User:** This feature removes potential confusion, ensuring users of all experience levels can navigate and enjoy the quiz without frustration.

**Quiz Parameters Screen**
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
  - **Feature Description:**  Users can select a time limit for each question from a dropdown menu, choosing between 10, 15, or 20 seconds.
  - **Responsiveness:** The dropdown menu is accessible on all device types, ensuring smooth functionality and intuitive navigation.
  - **Value to User:** Adds customization to the quiz experience, allowing users to tailor the level of time-based challenge to their preferences or skill level.

- **Start Button**
  - **Feature Description:** The "Start" button remains disabled until all required quiz parameters are chosen, preventing incomplete setups. There is a hover effect on the start button.
  - **Responsiveness:** The button is in the middle on larger screens and to the right on smaller screens so it's easier to access.
  - **Value to user:** Avoids user frustration by ensuring the quiz starts only with valid settings, improving usability and reducing errors.

**Quiz Question Screen**
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

**Result Screen**
- **Display Final Score**
  - **Feature Description:** The final screen displays the user’s total score, summarizing their performance in a clear and visually prominent way.
  - **Responsiveness:** The score display adapts to various screen sizes, ensuring readability and aesthetic appeal on any device.
  - **Value to user:** Provides users with immediate feedback on their overall performance, offering a sense of accomplishment and closure to the experience.

- **Play Again Button**
  - **Feature Description:** A "Play Again" button allows users to reset the quiz and return to the parameter selection screen. The button has a hover effect.
  - **Responsiveness:** The button is styled to be easily clickable or tappable, adjusting appropriately for all screen sizes.
  - **Value to user:** Encourages replayability, giving users the opportunity to improve their score or try different quiz settings without refreshing the page.