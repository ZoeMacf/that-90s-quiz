let questionsArray = [
    {
        question: "Which American rock band, formed in 1990, released the hit song 'Under the Bridge'?",
        answers: ["Foo Fighters","Weezer","Red Hot Chili Peppers","Blink-182"],
        correct: 2
    },

    {
        question: "What computer game, released in 1991, challenged players to guide a group of green-haired creatures through various obstacles?",
        answers: ["Lemurs","Monkeys","Frogger","Lemmings"],
        correct: 3
    },

    {
        question: "Who played the title character in the 1990s TV show “Buffy the Vampire Slayer”?",
        answers: ["Sarah Michelle Gellar","Jennifer Love Hewitt","Alicia Silverstone","Melissa Joan Hart"],
        correct: 0
    },

    {
        question: "What was the highest-grossing film of the 1990s?",
        answers: ['shawshank', 'titanic', 'bodyguard', 'braveheart'],
        correct: 1
    },

    {
        question: "Which 1990s computer game challenged players to lead a tribe of people through various historical eras by researching technologies, expanding territories, and engaging in diplomacy and warfare?",
        answers: ["Age of Empires", "SimCity", "Myst", "Civilization"],
        correct: 3
    }
]

const questionContainer = document.getElementById('question');
const nextButton = document.getElementById('next');
const answerContainer = document.getElementById('answer-container');
let currentQuestion = 0;
let userScore = 0;


function showRules() {

}
/**
 * Sets currentQuestion and userScore to 0 and will then display the question. 
 */
function startQuiz() {
    currentQuestion = 0;
    userScore = 0;
    displayQuestion();

}

function setTimer() {

}
/**
 * Sets the value questionText to be equal to questionsArray with the index set to currentQuestion value.
 * The questionContainer.innerHTML is set to equal the question at that index value. 
 * To get the answers the function will then iterate through the array of answers, create a button for each one
 * and append to the answer-container div.
 */
function displayQuestion() {
    let questionText = questionsArray[currentQuestion];
    questionContainer.innerHTML = questionText.question;
    let answers = questionsArray[currentQuestion].answers;
    answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerHTML = answer;
        answerContainer.appendChild(button);
    })
    }
/**This function will check to see if the answerContainer has a firstChild appended
 * if this is the case it will remove it and then run the displayQuestion function. 
 */
function restState() {
    while(answerContainer.firstChild){
        answerContainer.removeChild(answerContainer.firstChild);
    }
    displayQuestion();
}

/**This function will increment currentQuestion by 1 then check to see if it is less than the length
 * of questionArray, if this is the case it will display the next question then call resetState.
 */
function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < questionsArray.length){
        displayQuestion();
    } else {
        alert('No more questions!');
    }
    restState();
    

}

function checkAnswer() {

}

function addToScore() {

}

document.addEventListener('DOMContentLoaded', startQuiz);
nextButton.addEventListener('click', nextQuestion);