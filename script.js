const quizData = [

    {
        question: "How old is Florin ?",
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: "what is the most used programming language in 2019 ?",
        a: 'java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: "who is the President of US? ",
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: "What does HTML stand for?",
        a: 'Hyper Text Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object',
        d: 'Helicopters Terminals Motorboats',
        correct: 'a'
    }
    ,
    {
        question: "What year was JavaScript launched?",
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }


];


const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answersEls = document.querySelectorAll(".answer");

const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;


function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz();


function getSelected() {


    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}



function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
// SubmitButton

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML =
            `
        <h2>You answered correctly ${score} / ${quizData.length} questions</h2> 
        <button onClick="location.reload()">Reload</button>
        `
    }

});