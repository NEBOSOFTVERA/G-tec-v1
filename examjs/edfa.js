        
const quizData = [
    {
        question: "How many languages are over the alphabet R?",
        a: "countably infinite",
        b: " countably finite",
        c: "uncountable finite",
        d: "uncountable infinite",
        correct: "d",
    },
    {
        question: "For a DFA accepting binary numbers whose decimal equivalent is divisible by 4, what are all the possible remainders?",
        a: "0",
        b: "0,2",
        c: "ε may not belong to A",
        d: "abca ₵ A",
        correct: "b",
    },
    {
        question: "For a DFA accepting binary numbers whose decimal equivalent is divisible by 4, what are all the possible remainders?",
        a: "0",
        b: "0,2",
        c: "0,2,4",
        d: "0,1,2,3",
        correct: "d",
    },
    {
        question: "The sum of minimum and maximum number of final states for a DFA n states is equal to:",
        a: "n+1",
        b: " n",
        c: "n-1",
        d: "n+2",
        correct: "a",
    },
    {
        question: " The maximum number of transition which can be performed over a state in a DFA?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "c",
    },
    {
        question: "The maximum sum of in degree and out degree over a state in a DFA can be determined as:",
        a: "4+4",
        b: "4+16",
        c: "4+0",
        d: "depends on the language",
        correct: "d",
    },
   
];
 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
 
let currentQuiz = 0
let score = 0
 
loadQuiz()
 
function loadQuiz() {
    deselectAnswers()
 
    const currentQuizData = quizData[currentQuiz]
 
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
 
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
 
function getSelected() {
    let answer
 
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
 
    return answer
}
 
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
 
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
 
        currentQuiz++
 
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})