let data = [
    {
        Q: "Who is the Current P.M of Pakistan?",
        a: "Zordari",
        b: "Imran Khan",
        c: "Showbaz Sharif",
        d: "Billo Rani",
        ans: "ans3",
    },
    {
        Q: "JS is used for?",
        a: "Frontend",
        b: "Animation",
        c: "Dynamic update Content",
        d: "Backend",
        ans: "ans3",
    },
    {
        Q: "Fullform of JS?",
        a: "JavaScript",
        b: "JavaScience",
        c: "JavaS",
        d: "JavaStyle",
        ans: "ans1",
    },
    {
        Q: "What is the capital of Pakistan?",
        a: "Karachi",
        b: "Lahore",
        c: "Islamabad",
        d: "Sindh",
        ans: "ans3",
    }
];

let question = document.getElementById("qns");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");
let result = document.getElementById("result");
let scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = data.length;

function loadQuestion() {
    let currentQuestion = data[currentQuestionIndex];
    question.innerHTML = currentQuestion.Q;
    option1.innerHTML = currentQuestion.a;
    option2.innerHTML = currentQuestion.b;
    option3.innerHTML = currentQuestion.c;
    option4.innerHTML = currentQuestion.d;
    result.innerHTML = ""; 
}

function getSelectedAnswer() {
    let options = document.querySelectorAll(".options");
    let selectedAnswer;
    options.forEach((option, index) => {
        if (option.checked) {
            selectedAnswer = "ans" + (index + 1); 
        }
    });
    return selectedAnswer;
}

function next() {
    let selectedAnswer = getSelectedAnswer();

    if (!selectedAnswer) {
        result.innerHTML = "Please select an answer!";
        return;
    }

    if (selectedAnswer === data[currentQuestionIndex].ans) {
        score++;
        result.innerHTML = "Correct!";
        result.className = "result correct";
    } else {
        result.innerHTML = "Incorrect!";
        result.className = "result incorrect";
    }

    currentQuestionIndex++; 

    if (currentQuestionIndex < totalQuestions) {
        setTimeout(() => {
            loadQuestion(); 
            document.querySelectorAll(".options").forEach((option) => (option.checked = false));
        }, 1000); 
    } else {
        setTimeout(() => {
            displayScore();
        }, 1000);
    }
}

function displayScore() {
    let percentage = (score / totalQuestions) * 100;
    scoreDisplay.innerHTML = `Your Score: ${score}/${totalQuestions} (${percentage.toFixed(2)}%)`;
}

loadQuestion();
