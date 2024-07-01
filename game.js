const questions = [
    {
        question: "Which is the largest mammal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text: "Vatcan City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: true},
            {text: "Antarctica", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "Who built the Great Pyramid of Giza?",
        answers: [
            {text: "Pharaoh Khufu", correct: true},
            {text: "Napoleon Bonaparte", correct: false},
            {text: "Albert Einstein", correct: false},
            {text: "Leonardo da Vinci", correct: false},
        ]
    },
    {
        question: "The Treaty of Versailles was signed in which year?",
        answers: [
            {text: "1969", correct: false},
            {text: "1945", correct: false},
            {text: "1865", correct: false},
            {text: "1919", correct: true},
        ]
    },
    {
         question: "Who was the first person to walk on the moon?",
         answers: [
            {text: "Neil Armstrong", correct: true},
            {text: "Buzz Aldrin", correct: false},
            {text: "John Glenn", correct: false},
            {text: "Sally Ride", correct: false},
         ]
    },
    {
        question: "Which element is the lightest in the periodic table?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Helium", correct: false},
            {text: "Hydrogen", correct: true},
            {text: "Nitrogen", correct: false},
        ]
    },
    {
        question: "What is the largest living thing on Earth?",
        answers: [
            {text: "Blue Whale", correct: false},
            {text: "Great Barrier Reef", correct: true},
            {text: "Amazon Rainforest", correct: false},
            {text: "Grand Canyon", correct: false},
        ]
    },
    {
        question: "Which animal is known for its unique ability to change its body color to blend in with its surroundings?",
        answers: [
            {text: "Chameleon", correct: true},
            {text: "Squid", correct: false},
            {text: "Octopus", correct: false},
            {text: "Cuttlefish", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            {text: "Saturn", correct: false},
            {text: "Uranus", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Neptune", correct: false},
        ]
    },
    {
       question: "Who won the 2018 FIFA World Cup?",
       answers: [
            {text: "France", correct: true},
            {text: "Croatia", correct: false},
            {text: "Germany", correct: false},
            {text: "Brazil", correct: false},
       ]
    },
    {
        question: "Who founded the company Microsoft?",
        answers: [
            {text: "Micheal Jackson", correct: false},
            {text: "Bill Gates", correct: true},
            {text: "Steve Jobs", correct: false},
            {text: "Mark Zuckerberg", correct: false},
        ]
    },
    {
        question: "What is the process by which water moves through a plant, from the roots to the leaves?",
        answers: [
            {text: "Respiration", correct: false},
            {text: "Photosynthesis", correct: false},
            {text: "Transpiration", correct: true},
            {text: "Evaporation", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            {text: "Ag", correct: false},
            {text: "Au", correct: true},
            {text: "Hg", correct: false},
            {text: "Pb", correct: false},
        ]
    },
    {
        question: "What is the largest living species of lizard?",
        answers: [
            {text: "Black mamba", correct: false},
            {text: "Saltwater crocodile", correct: false},
            {text: "Komodo dragon", correct: true},
            {text: "Green anaconda", correct: false},
        ]
    },
    {
        question: "Who was the first person to walk in space?",
        answers: [
            {text: "Neil Armstrong", correct: false},
            {text: "Buzz Aldrin", correct: false},
            {text: "Alexei Leonov", correct: true},
            {text: "Yuri Gagarin", correct: false},
        ]
    },
    {
        question: "Who developed the first web browser?",
        answers: [
            {text: "Tim Berners-Lee", correct: true},
            {text: "Steve Jobs", correct: false},
            {text: "Bill Gates", correct: false},
            {text: "Larry Page", correct: false},
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            {text: "Brain", correct: false},
            {text: "Heart", correct: false},
            {text: "Skin", correct: true},
            {text: "Liver", correct: false},
        ]
    },
    {
        question: "The highest waterfall in the world by height is located in which country?",
        answers: [
            {text: "Zambia", correct: false},
            {text: "Venezuela", correct: true},
            {text: "South Africa", correct: false},
            {text: "Brazil", correct: false},
        ]
    },
    {
        question: "Which river is the longest in Africa?",
        answers: [
            {text: "Nile", correct: true},
            {text: "Congo", correct: false},
            {text: "Niger", correct: false},
            {text: "Zambezi", correct: false},
        ]
    },
    {
        question: "Which African country has the most languages spoken?",
        answers: [
            {text: "South Africa", correct: false},
            {text: "Nigeria", correct: true},
            {text: "Ethiopia", correct: false},
            {text: "Cameroon", correct: false},
        ]
    },
    {
        question: " Which African country is the largest by population?",
        answers: [
            {text: "Nigeria", correct: true},
            {text: "Egypt", correct: false},
            {text: "South Africa", correct: false},
            {text: "Kenya", correct: false},
        ]
    },
    {
       question: " Which African country is known for its pyramids?",
       answers: [
            {text: "Egypt", correct: true},
            {text: "Nigeria", correct: false},
            {text: "South Africa", correct: false},
            {text: "Kenya", correct: false},
       ]
    },
    {
        question: " Which planet in our solar system is known for being red?",
        answers: [
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false},
            {text: "Uranus", correct: false},
        ]
    },
    {
        question: "Which element is the most abundant in the Earth's atmosphere?",
        answers: [
            {text: "Oxygen", correct: false},
            {text: "Helium", correct: false},
            {text: "Carbon dioxide", correct: false},
            {text: "Nitrogen", correct: true},
        ]
    },
    {
        question: "Which planet in our solar system is known for being the hottest?",
        answers: [
            {text: "Mecury", correct: false},
            {text: "Mars", correct:  false},
            {text: "Venus", correct: true},
            {text: "Jupiter", correct: false},
        ]
    },
    {
        question: "Which animal is known for its slow movement and long lifespan?",
        answers: [
            {text: "Tortoise", correct: true},
            {text: "Elephant", correct: false},
            {text: "Snail", correct: false},
            {text: "Frog", correct: false},
        ]
    },
    {
        question: "Which animal has the longest gestation period?",
        answers: [
            {text: "Elephant", correct: true},
            {text: "Giraffe", correct: false},
            {text: "Hippopotamus", correct: false},
            {text: "Whale", correct: false},
        ]
    },
    {
        question: "Which animal is known for its agility and ability to climb trees?",
        answers: [
            {text: "Monkey", correct: true},
            {text: "Lion", correct: false},
            {text: "Tiger", correct: false},
            {text: "Bear", correct: false},
        ]
    }
];


// shuffle the questions array
questions.sort(() => Math.random() - 0.5);


// shuffle the answers array for each question
questions.forEach(question => {
    question.answers.sort(() => Math.random() - 0.5);
});


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML =  "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    // shuffle the answers before displaying them
  const shuffledAnswers = currentQuestion.answers.slice();
  shuffledAnswers.sort(() => Math.random() - 0.5);


  shuffledAnswers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
       if(button.dataset.correct === "true"){
        button.classList.add("correct");
       }
       button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
     if(currentQuestionIndex < questions.length){
        handleNextButton();
     }else{
        startQuiz();
     }
});

startQuiz();