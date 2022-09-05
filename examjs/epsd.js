        
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question:"What is the maximum possible length of an identifier?",
        a:"16",
        b:"32",
        c:"64",
        d:"None of these above",
        correct:"d",
    },
    {
        question: "Who developed the Python language?",
        a: "Zim Den",
        b: "Guido van Rossum",
        c: "Niene Stom",
        d: "Wick van Rossum",
        correct: "b",
    },
    {
        
        question: " In which year was the Python language developed?",
        a: "1995",
        b: "1972",
        c: "1981",
        d: "1989",
        correct: "d",
    },
    {
        question: "In which language is Python written?",
        a: "English",
        b: "PHP",
        c: "C",
        d: "All of the above",
        correct: "C",
    },
    {
        question: "Which one of the following is the correct extension of the Python file?",
        a: ".py",
        b: ".python",
        c: ".p",
        d: "None of these",
        correct: "a",
    },
    {
        question: "In which year was the Python 3.0 version developed?",
        a: "2008",
        b: "2000",
        c: "2010",
        d: "2005",
        correct: "a",
    },
    {
        
        question: "What do we use to define a block of code in Python language?",
        a: "Key",
        b: "Brackets",
        c: "Indentation",
        d: "None of these",
        correct: "c",
    },
    {
        question: "Which character is used in Python to make a single line comment?",
        a: "/",
        b: "//",
        c: "#",
        d: "!",
        correct: "c",
    },
    {
        question: "Which of the following statements is correct regarding the object-oriented programming concept in Python?",
        a: "Classes are real-world entities while objects are not real",
        b: "Objects are real-world entities while classes are not real",
        c: "Both objects and classes are real-world entities",
        d: "All of the above",
        correct: "b",
    },
    {
        question: "Which of the following words cannot be a variable in python language?",
        a: "_val",
        b: "val",
        c: "try",
        d: "_try_",
        correct: "c",
    },
    {
        question: "Which of the following statements is correct for variable names in Python language?",
        a: "All variable names must begin with an underscore.",
        b: "Unlimited length",
        c: "The variable name length is a maximum of 2.",
        d: "All of the above",
        correct: "b",

    },
    {
        question: "Which of the following is not a keyword in Python language?",
        a: "val",
        b: "raise",
        c: "try",
        d: "with",
        correct: "a",
    },
    {
        question: "Why does the name of local variables start with an underscore discouraged?",
        a: "To identify the variable",
        b: "It confuses the interpreter",
        c: "It indicates a private variable of a class",
        d: "None of these",
        correct: "c",
    },
    {
        question: "Which of the following declarations is incorrect?",
        a: "_x = 2",
        b: "__x = 3",
        c: "__xyz__ = 5",
        d: "None of these",
        correct: "d",

    },
    {
        question: "What is the method inside the class in python language?",
        a: "Object",
        b: "Function",
        c: "Attribute",
        d: "Argument",
        correct: "b",

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