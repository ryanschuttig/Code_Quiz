var questions = [
    {
        title: "Example Question 1:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3"
    },
    {
        title: "Example Question 2:",
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        answer: "Choice 3" 
    }
];


// Hook container element
var containerEl = document.querySelector(".container");
// Hook timer element
var timerDisplay = document.querySelector(".timer");

// Create dynamic elements
// Create h1 heading
var startText = document.createElement("h1");
// Create button to start quiz
var startBtn = document.createElement("button");
// Create <p> tag to display question
var questionText = document.createElement("p");

// Declare globals
// Variable to store timer
var timer = 60;
// Variable to store current index
var i = 0;

// Functions
// Function that loads content when page loads
function openingPage() {
    startText.textContent = "Welcome to Code Quiz";
    startBtn.textContent = "Start Quiz";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

function startQuiz() {

    showTimer();

    nextQuestion();
}

function showTimer() {
    // Display timer
    timerDisplay.textContent = timer;
    // Create setInterval and store to variable
    var timeInterval = setInterval(function() {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)
}

function nextQuestion() {
    // Declare variable to store current question
    var currentQuestion = questions[i];
    // Empty container
    containerEl.textContent = "";
    // Add current question title to display
    questionText.textContent = currentQuestion.title;
    // Append question display variable to container
    containerEl.appendChild(questionText);
    // Create div to wrap choices
    var answersDiv = document.createElement("div");
    // Create for loop
    // Create button for each choice
    // Add class to each button for event listener
    // Add text to each button
    // Append buttons to div element to wrap choices

    for (let i = 0; i < currentQuestion.choices.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.classList.add("choiceBtn");
        answerBtn.textContent = currentQuestion.choices[i];
        answersDiv.appendChild(answerBtn);
    }
// Append div element to container
    containerEl.appendChild(answersDiv);
}

function checkAnswer(event) {
    
    // if event.target.matches(--choice button class--)
    if (event.target.matches(".choiceBtn")) {
    // Logic to check for answer
    index++;
    nextQuestion()


    }
    




}
// Function that shows question when timer starts
// Function that handles timer
// Function that handles display next question
// Function that checks answer and displays following question

startBtn.addEventListener("click", startQuiz);
// Add event listener for choice button
document.addEventListener("click", checkAnswer);
// Call function to show opening page
openingPage();