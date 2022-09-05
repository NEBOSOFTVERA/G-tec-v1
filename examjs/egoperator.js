        
const quizData = [
    {
        question: "Starting with Microsoft Office 2003, Photo Editor was renamed to :",
        a: "Photo Manager",
        b: "Picture Editor",
        c: " Picture Manager ",
        d: " Paint Editor ",
        correct: "b",
    },
    {
        question: "A feature of MS Office that saves the document automatically after certain interval is called ____",
        a: " SaveB ",
        b: " Save As ",
        c: " Auto Save ",
        d: " Backup ",
        correct: "c",
    },
    {
        question: " sWhat was the HTML editor that was part of Microsoft Office until 2003?",
        a: "Web Page",
        b: "Explorer",
        c: "FrontPage",
        d: "DreamWeaver",
        correct: "c",
    },
    {
        question: " soWhich feature is used to make selected sentence to All Captital Letters or All Small Letters ?",
        a: "Change Letter",
        b: "Change Sentence",
        c: "Change Case",
        d: "Change Word",
        correct: "c",
    },
    {
        question: "Which of these software applications was not part of the first version of Microsoft Office? ",
        a: "Paint",
        b: "PowerPoint",
        c: "Outlook",
        d: "MS Word",
        correct: "c",
    },
    {
        question: "To go to a specific location in a document we use :",
        a: "Table of Contents",
        b: "HyperText",
        c: "Macro",
        d: "Bookmark",
        correct: "d",
    },
    {
        question: "Office 365 is now the most popular cloud application in the world. But when did it debut?",
        a: "2008",
        b: "2011",
        c: "2010",
        d: "2014",
        correct: "b",
    },
    {
        question: "Which one is the most suitable reason to use Macro in MS Office (Word, Excel, PPT, etc) ?",
        a: "To Record Sound",
        b: "To automate repetative tasks",
        c: "To Record Mouse Move",
        d: "To Record Keystroke",
        correct: "b",
    },
    {
        question: "Superscript, subscript, strikethrough are known as ? ",
        a: "Font Face",
        b: "Font Style",
        c: "Font Effects",
        d: "Font Format",
        correct: "c",
    },
    {
        question: "We can start MS Word by typing ________ in the Run Dialog box.",
        a: "winword.exe",
        b: "word.exe",
        c: "msword.exe",
        d: "docx.exe",
        correct: "a",
    },
    {
        question: "A Microsoft Office user who has been certified by Microsoft is called MOS. What is the full form of MOS ?",
        a: "Microsoft Office Special",
        b: "Microsoft Office Superior",
        c: "Microsoft Office Specialist",
        d: "Microsoft Office eSpecial",
        correct: "c",
    },
    {
        question: "Name the application under MS Office software bundle, that we use to create audio visual presentation.",
        a: "MS Word",
        b: "MS Excel",
        c: "MS PowerPoint",
        d: "MS Access",
        correct: "c",
    },

    {
        question: "Which one is the the spreadsheet application that comes with MS Office software group?",
        a: "MS Word",
        b: "MS Excel",
        c: "MS PowerPoint",
        d: "MS Access",
        correct: "b",
    },
    {
        question: "We can apply border to _________ ",
        a: "Cell",
        b: "Paragraph",
        c: "Table",
        d: "All of These",
        correct: "d",
    },
    {
        question: "What is the shortcut key to open the Open dialog box?",
        a: "F12",
        b: "Shift F12",
        c: "Alt + F12",
        d: "Ctrl + F12",
        correct: "c",
    },
    {
        question: "By default Footers are printed on :",
        a: "First Page",
        b: "Last Page",
        c: "All Pages",
        d: "Even Pages",
        correct: "c",
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