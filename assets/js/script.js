let questionsArray = [{
	question: "Which American rock band, formed in 1990, released the hit song 'Under the Bridge'?",
	answers: ["Foo Fighters", "Weezer", "Red Hot Chili Peppers", "Blink-182"],
	correct: "Red Hot Chili Peppers",
}, {
	question: "What computer game, released in 1991, challenged players to guide a group of green-haired creatures through various obstacles?",
	answers: ["Lemurs", "Monkeys", "Frogger", "Lemmings"],
	correct: "Lemmings",
}, {
	question: "Who played the title character in the 1990s TV show “Buffy the Vampire Slayer”?",
	answers: ["Sarah Michelle Gellar", "Jennifer Love Hewitt", "Alicia Silverstone", "Melissa Joan Hart", ],
	correct: "Sarah Michelle Gellar",
}, {
	question: "What was the highest-grossing film of the 1990s?",
	answers: ["Shawshank", "Titanic", "Bodyguard", "Braveheart"],
	correct: "Titanic",
}, {
	question: "Which country hosted the 1994 World Cup Finals?",
	answers: ["France", "Turkey", "Australia", "USA"],
	correct: "USA",
}, {
	question: "Who is the “Sesame Street” star who was tickled with laughter and became the Christmas 1996 must-have toy?",
	answers: ["Big Bird", "Bert", "Oscar", "Elmo"],
	correct: "Elmo",
}, {
	question: "In the television series “The Fresh Prince of Bel-Air,” what was the name of the family butler?",
	answers: ["Jeeves", "Geoffrey", "George", "Richard"],
	correct: "Geoffrey",
}, {
	question: "Who made rockers sad with the somber song 'Creep'?",
	answers: ["Nirvana", "The Smashing Pumpkins", "Alice in Chains", "Radiohead", ],
	correct: "Radiohead",
}, {
	question: "What was the name of the haircut inspired by the popular 1990s TV show Friends?",
	answers: ["The Bing", "The How You Doin?", "The Rachel", "The Janice"],
	correct: "The Rachel",
}, {
	question: "When did the Google search engine launch?",
	answers: ["1997", "1994", "1998", "1999"],
	correct: "1998",
}, ];
const startQuizContainer = document.getElementById("quiz-start");
const gameContainer = document.getElementById("game-content");
const questionContainer = document.getElementById("question-container");
const questionContent = document.getElementById("question-content");
const answerContainer = document.getElementById("answer-container");
const countdownContainer = document.getElementById("timer");
const finalScore = document.getElementById("final-score");
const rulesButton = document.getElementById("rules-btn");
let currentQuestion = 0;
let userScore = 0;
let startButton;
let timer;
let countdown;
let nextButtonClick;
let nextButton = document.createElement("button");
nextButton.classList.add("next-finish-btn");
nextButton.innerHTML = "Next Question";
nextButton.addEventListener("click", nextQuestion);
questionContainer.append(nextButton);
document.addEventListener("DOMContentLoaded", function() {
	questionContainer.classList.add("hide");
	startButton = document.createElement('button');
	startButton.classList.add('btn');
	startButton.innerHTML = 'Start Quiz';
	startQuizContainer.append(startButton);
	startButton.addEventListener("click", startQuiz);
	showRules();
});
/**
 * Displays the modal when the user clicks on the rules button, modal will close if the user either clicks the close
 * button or clicks outside of the modal box.
 */
function showRules() {
	let rulesModal = document.getElementById("rules");
	let closeButton = document.getElementsByClassName("close-btn")[0];
	rulesButton.addEventListener("click", function() {
		rulesModal.style.display = "flex";
	});
	closeButton.addEventListener("click", function() {
		rulesModal.style.display = "none";
	});
	window.addEventListener("click", function(event) {
		if(event.target == rulesModal) {
			rulesModal.style.display = "none";
		}
	});
}
/**
 * Hides the question container and shows the start quiz container, then sets currentQuestion and userScore to 0
 * and will then display the question and timer - modal was made with the help of https://www.w3schools.com/howto/howto_css_modals.asp
 */
function startQuiz() {
	questionContainer.classList.remove("hide");
	startQuizContainer.classList.add("hide");
	currentQuestion = 0;
	userScore = 0;
	displayQuestion();
	startTimer();
}
/**
 * Sets the timer to 15 seconds and creates an event listener for the next button. A set interval function is set to
 * minus the value of timer by 1. Once the timer is less than 1 the buttons are disabled and the timer is cleared. If the next
 * button is clicked the timer is cleared.
 */
function startTimer() {
	timer = 10;
	countdownContainer.innerText = `${timer}`;
	nextButtonClick;
	nextButton.addEventListener("click", function(evt) {
		nextButtonClick = evt.target;
	});
	countdown = setInterval(() => {
		timer--;
		countdownContainer.innerText = `${timer}`;
		if(timer < 1) {
			disableButtons();
			clearInterval(countdown);
		} else if(nextButtonClick) {
			clearInterval(countdown);
		}
	}, 2000);
}
/**
 * Sets the value questionText to be equal to questionsArray with the index set to currentQuestion value.
 * The questionContainer.innerHTML is set to equal the question at that index value.
 * To get the answers the function will then iterate through the array of answers, create a button for each one
 * and append to the answer-container div.
 */
function displayQuestion() {
	rulesButton.classList.add("hide");
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
	while(answerContainer.firstChild) {
		answerContainer.removeChild(answerContainer.firstChild);
	}
	displayQuestion();
}
/**This function will increment currentQuestion by 1 then check to see if it is less than the length
 * of questionArray, if this is the case it will display the next question then call resetState.
 */
function nextQuestion() {
	currentQuestion++;
	if(currentQuestion < questionsArray.length) {
		displayQuestion();
		resetState();
		clearInterval(countdown);
		startTimer();
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
	finishButton.classList.add("next-finish-btn");
	questionContainer.append(finishButton);
	finishButton.addEventListener("click", function() {
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
	answerContainer.addEventListener("click", function(evt) {
		let userInput = evt.target;
		let correctAnswers = questionsArray[currentQuestion].correct;
		if(userInput.textContent === correctAnswers) {
			userScore++;
			disableButtons();
			userInput.classList.add("correct-answer");
		} else {
			userInput.classList.add("wrong-answer");
			disableButtons();
		}
	});
}
checkAnswer();
/**
 * Obtains the answer buttons by their class name and for each button will give it a disabled property set to true.
 */
function disableButtons() {
	let answerButtons = document.getElementsByClassName("answer-btn");
	for(let i = 0; i < answerButtons.length; i++) {
		answerButtons[i].disabled = true;
	}
}
/**
 * When this function is called it will reload the page.
 */
function restartQuiz() {
	location.reload();
}