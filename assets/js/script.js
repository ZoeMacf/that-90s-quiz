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
        answer: 0
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
let currentQuestion = 0;
let userScore = 0;


function showRules() {

}

function startQuiz() {
    currentQuestion = 0;
    userScore = 0;
    displayQuestion();

}

function setTimer() {

}

function displayQuestion() {
    let questionText = questionsArray[currentQuestion];
    questionContainer.innerHTML = questionText.question;

}

function nextQuestion() {
    currentQuestion++;
    if(currentQuestion < questions.length){
        displayQuestion();
    } else {
        alert('No more questions!');
    }
    

}

function checkAnswer() {

}

function addToScore() {

}

document.addEventListener('DOMContentLoaded', startQuiz);
nextButton.addEventListener('click', nextQuestion);