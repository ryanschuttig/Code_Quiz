var questions = [
    {
        title: "Which of the following statements will show a message and ask the user for an input?",
        choices: ["confirm()", "message()", "prompt()", "alert()"],
        answer: "prompt()"
    },
    {
        title: "Which of the following is an event listener in Javascript?",
        choices: ["onclick", "listen", "event", "click()"],
        answer: "onclick"
    },
    {
        title: "Which method is used to round a number down to the nearest whole integer?",
        choices: ["Math.ceil", "Math.floor", "Round.down", "Round.whole"],
        answer: "Math.floor"
    },
    {
        title: "JavaScript has a file extension of:",
        choices: [".javascript", ".java", ".js", ".css"],
        answer: ".js"
    },
    {
        title: "Inside which HTML tag should a JavaScript link be placed?",
        choices: ["<head>", "<meta>", "<body>", "<script>"],
        answer: "<script>"
    },

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

var hr = document.createElement("hr");
document.body.appendChild(hr);

// Functions
// Function that loads content when page loads
function openingPage() {
    startText.textContent = "Welcome to Code Quiz";
    startBtn.textContent = "Start Quiz";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

function startQuiz() {
    // Function that shows question when timer starts
    showTimer();

    nextQuestion();

}

// Function that handles timer
function showTimer() {
    // Display timer
    timerDisplay.textContent = timer;
    // Create setInterval and store to variable
    var timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer;
        if (timer === 0) {
            clearInterval(timeInterval)
        }
    }, 1000)
}

// Function that handles display next question
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
    for (let i = 0; i < currentQuestion.choices.length; i++) {

        // Create button for each choice
        var answerBtn = document.createElement("button");
        
        // Add class to each button for event listener
        answerBtn.classList.add("choiceBtn");
        // Add text to each button
        answerBtn.textContent = currentQuestion.choices[i];
        // Append buttons to div element to wrap choices
        answersDiv.appendChild(answerBtn);
    }
    // Append div element to container
    containerEl.appendChild(answersDiv);
}

// Function that checks answer and displays following question
function checkAnswer(event) {

    // if event.target.matches(--choice button class--)
    if (event.target.matches(".choiceBtn")) {
        // Logic to check for answer

        i++;





        nextQuestion()


    }





}

startBtn.addEventListener("click", startQuiz);
// Add event listener for choice button
document.addEventListener("click", checkAnswer);
// Call function to show opening page
openingPage();