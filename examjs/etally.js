        
const quizData = [
    {
        question: "What is Tally?",
        a: " a windows-based Enterprise Resource Planning software",
        b: " Enterprise Resource Planning hardware",
        c: " Both A and B ",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What is TAN?",
        a: "Tax Absorb Number",
        b: "Tax Assign Number",
        c: "Tax Account Number",
        d: "Tax Assessment Number",
        correct: "d",
    },
    {
        question: "How many formats are available while Exporting?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        correct: "b",
    },
    {
        question: "How many types of Measurement Units we can create in Tally?",
        a: "5",
        b: "4",
        c: "3",
        d: "2",
        correct: "d",
    },
    {
        question: "Tally package is developed by",
        a: " Microsoft",
        b: "Apple Software",
        c: "Adobe Software",
        d: " Tally Solutions",
        correct: "d",
    },
    {
        question: "Online voucher creation from Day Book report by pressing",
        a: " Alt + A",
        b: "Shift + A",
        c: "Shift + B",
        d: "Ctrl + A",
        correct: "a",
    },
    {
        question: "What is the full of TCS? ",
        a: "Tax Collected from Sales",
        b: "Tax Collected by Staff",
        c: "Tax Consumption at Source",
        d: "Tax Collected at Source",
        correct: "d",
    },
    {
        question: "Income Tax number of the company will appear in which report?",
        a: "Proft and Loss Account",
        b: "Payment voucher",
        c: "Reminder Letter",
        d: " Cash/Bank Book",
        correct: "b",
    },
    {
        question: "Predefined Billing terms can be maintained through",
        a: " Voucher Class",
        b: "Cost Center",
        c: "Stock Categories",
        d: "Maintain Multiple Godowns",
        correct: "a",
    },
    {
        question: "The shortcut key to quit from Tally is",
        a: "Ctrl + P",
        b: "Ctrl + Q",
        c: "Ctrl + M",
        d: "Ctrl + L",
        correct: "b",
    },
    {
        question: "Manufacturing Journal creates based on",
        a: "Journal",
        b: "Purchase Quotation",
        c: "Stock Journal",
        d: "Receipt Note",
        correct: "c",
    },
    {
        question: "	We can create multiple users in Tally activating",
        a: "Maintain VAT",
        b: "Tally Audit",
        c: "Use Security Control",
        d: "Both a and b",
        correct: "c",
    },
    {
        question: "Data Folder of a Company consists of",
        a: "3 digits",
        b: " 4 digits",
        c: "6 digits",
        d: "5 digits",
        correct: "d",
    },
    {
        question: "How many inbuilt Accounts group are in Tally by default?",
        a: "29",
        b: "31",
        c: "25",
        d: "34",
        correct: "d",
    },
    {
        question: "Sales Tax Ledger falls under which Group?",
        a: "Sales",
        b: "Purchases",
        c: "Duties and Taxes",
        d: " Indirect Expenses",
        correct: "c",
    },
    {
        question: "Single Entry mode is applicable for",
        a: "Receipt Voucher",
        b: " Payment Voucher",
        c: "Contra Voucher",
        d: "All of these",
        correct: "d",
    },
    {
        question: "To change Current Date from Gateway of Tally press the key",
        a: "F1",
        b: "F2",
        c: "F5",
        d: " F9",
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