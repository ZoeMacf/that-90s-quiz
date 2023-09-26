let questionsArray = [
  {
    question:
      "Which American rock band, formed in 1990, released the hit song 'Under the Bridge'?",
    answers: ["Foo Fighters", "Weezer", "Red Hot Chili Peppers", "Blink-182"],
    correct: "Red Hot Chili Peppers",
  },

  {
    question:
      "What computer game, released in 1991, challenged players to guide a group of green-haired creatures through various obstacles?",
    answers: ["Lemurs", "Monkeys", "Frogger", "Lemmings"],
    correct: "Lemmings",
  },

  {
    question:
      "Who played the title character in the 1990s TV show “Buffy the Vampire Slayer”?",
    answers: [
      "Sarah Michelle Gellar",
      "Jennifer Love Hewitt",
      "Alicia Silverstone",
      "Melissa Joan Hart",
    ],
    correct: "Sarah Michelle Gellar",
  },

  {
    question: "What was the highest-grossing film of the 1990s?",
    answers: ["Shawshank", "Titanic", "Bodyguard", "Braveheart"],
    correct: "Titanic",
  },

  {
    question:
      "Which 1990s computer game challenged players to lead a tribe of people through various historical eras by researching technologies, expanding territories, and engaging in diplomacy and warfare?",
    answers: ["Age of Empires", "SimCity", "Myst", "Civilization"],
    correct: "Civilization",
  },
];

const startQuizContainer = document.getElementById("quiz-start");
const gameContainer = document.getElementById("game-content");
const questionContainer = document.getElementById("question-container");
const questionContent = document.getElementById("question-content");
const startButton = document.getElementById("start-btn");
const answerContainer = document.getElementById("answer-container");
const countdownContainer = document.getElementById("timer");
const finalScore = document.getElementById("final-score");
const rulesButton = document.getElementById('rules-btn');

let currentQuestion = 0;
let userScore = 0;
let nextButton = document.createElement("button");
nextButton.classList.add("btn");
nextButton.innerHTML = "Next Question";
questionContainer.append(nextButton);

document.addEventListener("DOMContentLoaded", function () {
  questionContainer.classList.add("hide");
  startButton.addEventListener("click", startQuiz);
  showRules();
});

function showRules() {
  let rulesModal = document.getElementById('rules');
  let closeButton = document.getElementsByClassName("close-btn")[0];
  rulesButton.addEventListener('click', function() {
    rulesModal.style.display = 'block';
  });
  closeButton.addEventListener('click', function(){
    rulesModal.style.display = 'none';
  });

  window.addEventListener('click', function(event){
    if(event.target == rulesModal) {
      rulesModal.style.display = 'none';
    }
  });
}

/**
 * Sets currentQuestion and userScore to 0 and will then display the question.
 */
function startQuiz() {
  questionContainer.classList.remove("hide");
  startQuizContainer.classList.add("hide");
  currentQuestion = 0;
  userScore = 0;
  displayQuestion();
}

/**
 * Sets the value questionText to be equal to questionsArray with the index set to currentQuestion value.
 * The questionContainer.innerHTML is set to equal the question at that index value.
 * To get the answers the function will then iterate through the array of answers, create a button for each one
 * and append to the answer-container div.
 */
function displayQuestion() {
  rulesButton.classList.add('hide');
  countdownTimer();
  let questionText = questionsArray[currentQuestion];
  questionContent.innerHTML = questionText.question;
  let answers = questionsArray[currentQuestion].answers;
  answers.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("answer-btn");
    answerContainer.appendChild(button);
  });
}
/**This function will check to see if the answerContainer has a firstChild appended
 * if this is the case it will remove it and then run the displayQuestion function.
 */
function resetState() {
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
  displayQuestion();
}

function countdownTimer() {
  let timer = 16;
  let countDown = setInterval(function () {
    timer--
    if(timer <= 0){
      clearInterval(countDown);
      disableButtons();
    }
    countdownContainer.innerHTML = `${timer}`;
  }, 1000);
  }

/**This function will increment currentQuestion by 1 then check to see if it is less than the length
 * of questionArray, if this is the case it will display the next question then call resetState.
 */
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questionsArray.length) {
    displayQuestion();
    resetState();
  } else {
    nextButton.classList.add("hide");
    showFinalScore();
  }
}

/**
 * This function will create a button element with the content 'Finish Quiz', it will then wait for the user to click
 * the finish button, once this has been done it will hide the questions and answers content and display
 * the user's final score and display a button to restart quiz.
 */
function showFinalScore() {
  let finishButton = document.createElement("button");
  finishButton.innerText = "Finish Quiz";
  finishButton.classList.add("btn");
  questionContainer.append(finishButton);

  finishButton.addEventListener("click", function () {
    questionContainer.classList.add("hide");
    let scoreHeading = document.createElement("h2");

    scoreHeading.innerText = `You answered ${userScore} out of ${currentQuestion} correct!`;
    finalScore.classList.remove("hide");

    finalScore.classList.add("show-final-score");
    finalScore.append(scoreHeading);

    let restartQuizbtn = document.createElement("button");
    restartQuizbtn.innerHTML = "Restart Quiz";
    finalScore.append(restartQuizbtn);
    restartQuizbtn.classList.add("btn");
    restartQuizbtn.addEventListener("click", restartQuiz);
  });
}
//Code used to check user button input was found here https://stackoverflow.com/questions/66193592/how-i-know-which-button-been-clicked-in-class-of-buttons
/**
 * Function contains an event listener to check which of the answer buttons are clicked, if it is correct it will add to the score
 * and highlight the answer as being correct, if incorrect score is not affected and answer will be highlighted to show incorrect.
 */
function checkAnswer() {
  answerContainer.addEventListener("click", function (evt) {
    let userInput = evt.target;
    let correctAnswers = questionsArray[currentQuestion].correct;
    if (userInput.textContent === correctAnswers) {
      userScore++;
      disableButtons();
      userInput.classList.add("correct-answer");
    } else {
      userInput.classList.add("wrong-answer");
      disableButtons();
    }
  });
}

function disableButtons() {
  let answerButtons = document.getElementsByClassName("answer-btn");
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
  }
}

function restartQuiz() {
  location.reload();
}

nextButton.addEventListener("click", nextQuestion);
checkAnswer();
