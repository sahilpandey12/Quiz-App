const quizData = [
    {
        question: "Vivaan Kapoor is related to which sport?",
        a: "Boxing",
        b: "Rifle Shooting",
        c: "Kabaddi",
        d: "Kho-Kho",
        correct: "b",
    },
    {
        question: "By whom was the 1982 Asian Games hosted?",
        a: "Pakistan",
        b: "South Korea",
        c: "India",
        d: "Sri Lanka",
        correct: "c",
    },
    {
        question: "Galvanized iron has a thin coating of?",
        a: "Copper",
        b: "Tin",
        c: "Zinc",
        d: "Aluminium",
        correct: "c",
    },
    {
        question: "Duralumin is an alloy of copper and",
        a: "Lead",
        b: "Zinc",
        c: "Tin",
        d: "Aluminium",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
