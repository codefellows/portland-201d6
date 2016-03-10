Today will be your first exercise in pair programming. You will be assigned to work with a partner, and the two of you will work on and extend each other's About Me guessing game projects. Be sure to READ and follow these instructions very carefully.
Since you have 4 hours in which to edit two projects, you'll need to work efficiently and limit your work to two hours on a single person's project. Time management is critical.

### Pair Programming Basics

- In pair programming there are two developers working on a single body of code on a single computer. One member of the pair is the driver, and this person will be the one doing all of the typing actual work on the laptop. The other member of the pair is the navigator, and this person will work with only their voice and their thoughts.

- The navigator does not touch the keyboard, nor does the navigator work on their laptop "on the side." The navigator is fully engaged with the work that the pair is doing, typically using at most a piece of scratch paper to sketch diagrams, take notes, or list ideas. Again, the navigator does not touch the keyboard, nor does the navigator work on their laptop "on the side" except to perhaps to keep a copy of this assignment document open or to look up something needed to write the code, such as a reference page. Under no circumstances does the navigator work on any code on their laptop: for the pair programming process to be effective, both parties must be fully engaged on the code they're working on together.

### General Workflow for this Assignment

- Your pair will extend and refine each other's projects today. The person whose game is currently being worked on will be in the navigator role, and the other person will be the driver. Once starting work in lab, plan to spend an hour or two on one person's game, and then swap roles.

### How To Get Code Ready For Work

Be sure to follow these instructions VERY carefully.

Note: Before starting these steps, make sure that both of your repositories are 'clean': in other words, everything is merged and pulled so that both the remote and local versions of your projects are in sync. This will prevent potential problems later.

- Decide whose code you will work on first. The owner of that code (who will be the navigator) provides the link to their GitHub repo to the other member of the pair (who will be the driver).

- The driver follows the link to that repo and creates a fork of the repo.

- The driver then goes to their fork of the repo (the URL should have the driver's GitHub name in it) and copies the HTTPS link to that repo (the link should end in .git).

- Inside of the driver's main work directory on their laptop, make a directory with your partner’s name and then move (cd) into it. From there, enter the command 'git clone the-https-link-you-copied'. That will create a local version of the forked repo on the driver's laptop.

- 'cd' into that directory and enter 'subl .' in the terminal to open all of the files in Sublime Text.

- Start working on the code!

### Extend and Refine

- You'll be doing the following things to each other's games. After each bit of work is completed, be sure to do an add-commit-push cycle to place the code on GitHub and preserve a versioned history of your work.

- DON'T FORGET TO DO YOUR WORK ON BRANCHES!

- There are some code examples here in our class repo: https://github.com/codefellows/seattle-201d6/tree/master/week-1/class-05

- Move the guessing game into a separate HTML document: Let's separate the guessing game from the profile page by putting them into interlinked HTML files. You'll see why in the next step. For now, just make the basic HTML shell of a guessing-game.html page (empty <body> and <head> inside of a <html> tag), and put in its body a link back to the profile page: <a href="index.html">My Profile Page (or whatever text you want)</a>. a-c-p

- Move logic into functions: Note: depending on the progress made toward stretch goals this week, this may or may not be easily workable. As an instructor or TA for guidance if you are not sure. Yesterday, we learned about functions, and today we'll move the logic for the individual questions into separate functions, and call those functions to initiate the game. In its most basic sense, this is pretty straightforward: 'wrap' the logic and variables for a given question with function someFuncNameYouChoose() { at the beginning and a closing curly brace } at the end. To make the function execute, just call it afterwards: someFuncNameYouChoose(); Take a look at the sample in the repo. After completing this step the game should behave exactly as it did before. a-c-p

-Your questions and answers should be pushed to respective arrays to keep record of them. For example, you could keep an array of successful answers in order to count the game's score. 

- Move the alerts into the DOM: Using the code from class repo as a model, move the alert feedback to the came player into <p> tags that display in the browser window of your new guessing-game.html. a-c-p

- Update the README file: In the README file, add in the names of the driver and navigator and indicate that the code was worked on together. This is basic record-keeping so that you can keep up with how the code has been edited in a user-friendly format. a-c-p


### Push to GitHub; Make a Pull Request

- Once everything is finished, and the driver has done the last edits and pushed them to GitHub, it's time to send the edited code to the owner (who has been in the navigator role the whole time, of course). We do this with a GitHub feature called a pull request.

- From the driver's repo that is a fork of the navigator's repo, hit the green button that says 'Create pull request'

- Follow the remaining steps as described onscreen and as shown here: https://help.github.com/articles/using-pull-requests. These instructions are deliberately vague, to give you practice in reading through instructions and getting guidance from documentation.

- The owner of the code (the navigator) then goes to their GitHub repo for the project and accepts the pull request. After that, in terminal on their laptop, while in the game directory, enter the command 'git pull origin master' to retrieve the modified code from GitHub. Now you're ready to deploy your project!
 
### Deploy: Time to put your project on the intartubez! When everything is finished and ready and synced and you're done, create a new branch in terminal called gh-pages (from the master branch, natch). Then, look in the Settings of your repo on GitHub and scroll down to get the deployment link. You're live!

### *Remember to submit this link on canvas so that your work can be graded*
