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
        question: "How many bones are there in the adult human body?",
        answers: [
            {text: "198", correct: false},
            {text: "206", correct: true},
            {text: "215", correct: false},
            {text: "222", correct: false},
        ]
    },
    {
        question: "What is the currency used in the United Kingdom?",
        answers: [
            {text: "Euro", correct: false},
            {text: "Dollar", correct: false},
            {text: "Pound Sterling", correct: true},
            {text: "Yen", correct: false},
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
        question: "Who invented the telephone?",
        answers: [
            {text: "Thomas Edison", correct: false},
            {text: "Alexander Graham Bell", correct: true},
            {text: "Nikola Tesla", correct: false},
            {text: "Samuel Morse", correct: false},
        ]
    },
    {
        question: "What year did World War II end?",
        answers: [
            {text: "1943", correct: false},
            {text: "1944", correct: false},
            {text: "1945", correct: true},
            {text: "1946", correct: false},
        ]
    },
    {
        question: "What is the largest island in the world?",
        answers: [
            {text: "Greenland", correct: true},
            {text: "Iceland", correct: false},
            {text: "Madagascar", correct: false},
            {text: "Borneo", correct: false},
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
       question: "Who won the 2022 FIFA World Cup?",
       answers: [
            {text: "France", correct: false},
            {text: "Croatia", correct: false},
            {text: "Argentina", correct: true},
            {text: "Brazil", correct: false},
       ]
    },
    {
        question: "What is the square root of 841?",
        answers: [
            {text: "22", correct: false},
            {text: "29", correct: true},
            {text: "28.3", correct: false},
            {text: "144", correct: false},
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            {text: "Beijing", correct: false},
            {text: "Seoul", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Bangkok", correct: false},
        ]
    },
    {
        question: "What is the longest river in the world?",
        answers: [
            {text: "Amazon River", correct: false},
            {text: "Mississippi River", correct: false},
            {text: "Nile River", correct: true},
            {text: "Yangtze River", correct: false},
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
        question: "Which country is the origin of the Olympic Games?",
        answers: [
            {text: "Italy", correct: false},
            {text: "Greece", correct: true},
            {text: "Egypt", correct: false},
            {text: "France", correct: false},
        ]
    },
    {
        question: "Which ocean is the deepest in the world",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Arctic Ocean", correct: false},
            {text: "Pacific Ocean ", correct: true},
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
        question: "Which planet is known as the Red Planet?",
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
        question: "Which animal is known for its slothful movement and long lifespan?",
        answers: [
            {text: "Tortoise", correct: true},
            {text: "Elephant", correct: false},
            {text: "Snail", correct: false},
            {text: "Frog", correct: false},
        ]
    },
    {
        question: "What is the tallest building in the world?",
        answers: [
            {text: "Shanghai Tower", correct: false},
            {text: "Burj Khalifa", correct: true},
            {text: "One World Trade Center", correct: false},
            {text: "Eiffel Tower", correct: false},
        ]
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        answers: [
            {text: "Vietnam", correct: false},
            {text: "Ethiopia", correct: false},
            {text: "Colombia", correct: false},
            {text: "Brazil", correct: true},
        ]
    }
];




// Default the console 
console.log = function() {};
Object.defineProperty(window, 'console', { get: function() { return { log: function() {} }; } });

// Disable context menu on right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });

// Shuffle the questions array
questions.sort(() => Math.random() - 0.5);

// Shuffle the answers array for each question
questions.forEach(question => {
    question.answers.sort(() => Math.random() - 0.5);
});

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0; // Counter for questions answered
let timerElement = document.getElementById('timer');
let timeLeft;
let timerInterval;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0; // Reset counter
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer(); // Start or restart the timer
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    // Shuffle the answers before displaying them
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
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
       if(button.dataset.correct === "true"){
            button.classList.add("correct");
       }
       button.disabled = true;
    });
    nextButton.style.display = "block";

    // Increment the questions answered counter
    questionsAnswered++;
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! You answered ${questionsAnswered} questions.`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

function startTimer() {
    timeLeft = 15 * 60; // 15 minutes in seconds
    timerInterval = setInterval(updateTimer, 400); // Update timer every second
}

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;  // Format seconds

    timerElement.textContent = `${minutes}:${seconds}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endQuiz();
    }

    timeLeft--;
}

function endQuiz() {
    // Disable all buttons
    const buttons = document.querySelectorAll('.btn, #next-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Display a message in the timer area
    timerElement.textContent = "Time's up!";

    // Create a replay button
    let replayButton = document.createElement('button');
    replayButton.textContent = 'Replay';
    replayButton.id = 'replay-btn';
    replayButton.style.marginTop = '20px';
    
    // Add styling for the replay button
    replayButton.style.background = '#001e4d';
    replayButton.style.color = '#fff';
    replayButton.style.border = 'none';
    replayButton.style.padding = '10px 20px';
    replayButton.style.borderRadius = '5px';
    replayButton.style.cursor = 'pointer';
    
    // Add the button to the DOM
    document.querySelector('.app').appendChild(replayButton);

    // Add replay functionality
    replayButton.addEventListener('click', () => {
        // Reset quiz and timer when replay button is clicked
        startQuiz();  // Calls startQuiz to reset everything, including the timer
    });

    // Display score and number of questions answered
    questionElement.innerHTML = `Time's up! You scored ${score} out of ${questions.length}. You answered ${questionsAnswered} questions.`;
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
