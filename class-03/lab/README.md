For this lab we will be adding a few things to the work we've done so far. Use the User Stories and the Technical Requirements to make a plan for how to proceed. Assume that all user stories from the previous lab carry over, except for the ones that are modified or are superseded here.

### User Stories (MVP... what you must do as a minimum)

- As a developer, to keep my work organized, I want to make a new Git branch for the development work for each new question I create. I can then merge these branches into the master branch on GitHub as each question is finished.
- As a developer, I want to use thoughtful and descriptive console.log() throughout my code to help test my work and assist with debugging.
- As a developer, I want to convert some of my appropriate biographical elements into unordered lists, such as my education summary and/or my work experience.
- As a prospective job seeker, I want to make myself more personable by adding a Top Ten list to the bottom of my About Me page with an ordered list in HTML, for instance, my Top Ten Favorite Movies or my Top Ten Places I Want to Visit, or something along those lines.
- As a developer, I want to add a sixth question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer (you will probably want to use a while loop). I will use the isNan() function to ensure that the user is providing valid numeric input.
- As a developer, I want to add a seventh question to my guessing game that accepts multiple possible correct answers that are stored in an array, for instance, "Can you guess a state that I have lived in besides Washington?"
- As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell them how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."
- As a developer, I want to use CSS to add some color to my About Me page, by changing the background color of the page to something besides white, then making all the header elements one color, the paragraph elements a different color, and lists yet a different color.
- As a prospective jobseeker, I want to use a tasteful color scheme that demonstrates my sensibility toward design plus provides readable contrast between the text and the background.
- 
### User Stories

- As a developer, I want the question to my guessing game that takes numeric input, and indicates to the user whether the guess is 'too high' or 'too low', and gives the user multiple opportunities to get the correct answer.
- As a developer, I want to add a seventh question that accepts multiple possible correct answers that are stored in an array.
- As a developer, I want to refactor my JS code to make it more D.R.Y.
- As a developer, I want to keep a tally of correct answers given by the user, and at the end of the game, tell them how well they did, e.g. "You got 4 out of 5 questions correct! Good job!"

### User Stories (Stretch goals... these are not required)

- As a developer, I want to make my code more DRY by putting all of the questions, answers, and responses to my guessing game into arrays (or even one huge multidimensional array), and modifying the game logic such that a 'for' loop will control the flow from question to question. (This will take some planning... here's a hint on how to approach it!)
```javascript
for (var i = 0; i < numberOfQuestions; i++) {
  var answer = prompt(questions[i]);
  if (answer === correctAns[i]) {
    alert(response[i][0] + userName + response[i][1]);
  } else...
```

### Submitting Your Assignment

- Submit the link to your GitHub repo for this project
- Add a comment to this Canvas submission with answers to the following questions.
- How did this go, overall?
- What observations or questions do you have about what you've learned so far?
