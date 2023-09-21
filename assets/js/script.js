let questions = [
    {
        question: "Which American rock band, formed in 1990, released the hit song 'Under the Bridge'?",
        A: "Foo Fighters",
        B:"Weezer",
        C: "Red Hot Chili Peppers",
        D: "Blink-182",
        answer: 'C'
    },

    {
        question: "What computer game, released in 1991, challenged players to guide a group of green-haired creatures through various obstacles?",
        A: "Lemurs",
        B: "Monkeys",
        C:"Frogger",
        D: "Lemmings",
        answer: 'D'
    },

    {
        question: "Who played the title character in the 1990s TV show “Buffy the Vampire Slayer”?",
        A: "Sarah Michelle Gellar",
        B: "Jennifer Love Hewitt",
        C: "Alicia Silverstone",
        D: "Melissa Joan Hart",
        answer: 'A'
    },

    {
        question: "What was the highest-grossing film of the 1990s?",
        A: "Shawshank Redemption",
        B: "Titanic",
        C: "The Bodyguard",
        D: "Braveheart",
        answer: 'B'
    },

    {
        question: "Which 1990s computer game challenged players to lead a tribe of people through various historical eras by researching technologies, expanding territories, and engaging in diplomacy and warfare?",
        A: "Age of Empires",
        B: "SimCity",
        C: "Myst",
        D: "Civilization",
        answer: 'D'
    }
]

const questionContent = document.getElementById('question');
const answerA = document.getElementById('A');
const answerB= document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');
const nextButton = document.getElementById('next');
let currentQuestionNumber = 0;
let userScore = 0;


function showRules() {

}

function startQuiz() {

}

function setTimer() {

}

function displayQuestion() {
    let questionText = questions[currentQuestionNumber];
    questionContent.innerHTML = questionText.question;
    answerA.innerHTML = questionText.answerA;
    answerB.innerHTML = questionText.answerB;
    answerC.innerHTML = questionText.answerC;
    answerD.innerHTML = questionText.answerD;

}

function nextQuestion() {

}

function checkAnswer() {

}

function addToScore() {

}