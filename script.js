// --- CONFIGURATION: EDIT THIS SECTION ---

// 1. Chapters in the exact order provided
const assignedChapters = [
    "5.3", "5.4", "6.1", "6.2", "6.4", "5.5", 
    "7.1", "7.2", "7.3", "7.4", "7.8", "7.5", "7.7",
    "11.1", "11.2", "11.4", "11.5", "11.6", "11.7", "11.8", "11.9", "11.10", "11.11",
    "9.1", "9.2", "9.3",
    "10.1", "10.3"
];

// Helper function to generate odd numbers in a range
const getOdds = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) { if (i % 2 !== 0) arr.push(i); }
    return arr;
};

// 2. Specific questions for each chapter
const assignedQuestions = {
    "5.3": [7, 11, 15, 29, 41, 51, 63],
    "5.4": [9, 13, 15, 21, 29, 35, 45, 49, 59, 69, 81],
    "5.5": [...getOdds(1, 54), ...getOdds(59, 80)],
    "6.1": [1, 2, 3, 4, 5, 7, 9, 18, 22, 31, 58, 61],
    "6.2": [1, 2, 3, 5, 8, 41, 44, 49, 51, 54, 59],
    "6.4": [3, 4, 5, 7, 9, 13, 16],
    "7.1": [1, 3, 5, 11, 13, 15, 19, 29, 37, 39, 43, 47, 35, 75, 77],
    "7.2": [1, 3, 5, 7, 13, 15, 21, 23, 27, 29, 33, 35, 46, 47, 49, 51, 64, 65],
    "7.3": [1, 3, 5, 7, 9, 11, 15, 17, 19, 23, 29, 33, 40, 43],
    "7.4": [7, 9, 11, 13, 41, 70],
    "7.5": [1, 3, 7, 9, 11, 13, 15, 17, 19, 21, 25, 27, 39],
    "7.7": [1, 3, "5a", "7a", "7b", 19, "29a", "29b", 31, 45],
    "7.8": [1, 3, 5, 7, 9, 13, 19, 21, 23, 27, 25, 35, 39, 44, 47, 65, 77, 83, 91],
    "9.1": [4, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
    "9.2": [1, 3, 5, 7, 9, 11, 13],
    "9.3": [1, 3, 5, 9, 11, 13, 17, 23, 31, 33, 35],
    "10.1": [1, 3, 7, 9, 11, 15, 19, 21, 23, 27, 31, 33, 39, 41, 45, 57],
    "10.3": [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 37, 41],
    "11.1": [3, 5, 9, 15, 19, 22, 29, 35, 37, 38, 41, 47, 48],
    "11.2": [3, 4, 15, 17, 19, 21, 23, 26, 27, 29, 33, 35, 39, 59, 63, 71, 75],
    "11.4": [3, 5, 7, 9, 11, 19, 27],
    "11.5": [3, 5, 7, 13, 15, 23, 25, 27, 29],
    "11.6": [3, 5, 7, 9, 13, 21, 23, 29, 33, 35],
    "11.7": [1, 3, 5, 11, 13, 17, 23, 35],
    "11.8": [3, 5, 7, 11, 13, 19, 23, 35],
    "11.9": [7, 9, 13, 15, 17, 27],
    "11.10": [1, 3, 5, 7, 9, 11, 17, 21, 23, 27, 35, 37, 39, 43, 49, 55, 79, 81, 83, 85],
    "11.11": [1, 3, 5, 7, 9, 13, 15, 21, 23, 27, 33, 37]
};

// 3. Solution Data (Add your real answers here)
const questionData = {
    "5.3-7": { answer: "42", unit: "", solutionImg: "https://via.placeholder.com/600x400?text=Ch5.3+Q7" },
};

// --- END CONFIGURATION ---

const urlParams = new URLSearchParams(window.location.search);
let currentCh = urlParams.get('ch') || "5.3"; 
let currentQ = urlParams.get('q') || ""; 

document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split("/").pop();
    
    if (page === 'index.html' || page === '') {
        generateChapterGrid();
    } else if (page === 'chapter.html') {
        generateQuestionGrid();
    } else if (page === 'question.html') {
        if (!currentQ && assignedQuestions[currentCh]) {
            currentQ = assignedQuestions[currentCh][0].toString();
        }
        updateUI();
        generateSidebar();
        document.getElementById('backToChapterBtn').onclick = () => {
            window.location.href = `chapter.html?ch=${currentCh}`;
        };
    }
});

function generateChapterGrid() {
    const grid = document.getElementById('chapterGrid');
    if (!grid) return;
    assignedChapters.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'chapter-btn';
        btn.innerText = `Chapter ${ch}`;
        btn.onclick = () => window.location.href = `chapter.html?ch=${ch}`;
        grid.appendChild(btn);
    });
}

function generateQuestionGrid() {
    const grid = document.getElementById('questionGrid');
    if (!grid) return;
    document.getElementById('chapterTitle').innerText = `Chapter ${currentCh} Questions`;
    const questions = assignedQuestions[currentCh] || [];
    questions.forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.innerText = `Question ${q}`;
        btn.onclick = () => window.location.href = `question.html?ch=${currentCh}&q=${q}`;
        grid.appendChild(btn);
    });
}

function updateUI() {
    document.getElementById('questionTitle').innerText = `Question ${currentQ}`;
    document.title = `Ch ${currentCh} - Q ${currentQ}`;
    
    const key = `${currentCh}-${currentQ}`;
    const solImgElement = document.getElementById('solImg');
    if (questionData[key]) {
        solImgElement.src = questionData[key].solutionImg;
    } else {
        solImgElement.src = `https://via.placeholder.com/600x400?text=Solution+Ch${currentCh}+Q${currentQ}`;
    }

    const questions = (assignedQuestions[currentCh] || []).map(q => q.toString());
    const currentIndex = questions.indexOf(currentQ.toString());
    
    document.getElementById('prevBtn').style.visibility = currentIndex <= 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').style.visibility = (currentIndex === -1 || currentIndex === questions.length - 1) ? 'hidden' : 'visible';
}

function generateSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    sidebar.innerHTML = '<h3>Questions</h3>';
    
    const completed = JSON.parse(localStorage.getItem('completed_questions') || "[]");
    const questions = assignedQuestions[currentCh] || [];

    questions.forEach(q => {
        const itemKey = `${currentCh}-${q}`;
        const isFinished = completed.includes(itemKey);
        
        const item = document.createElement('div');
        item.className = `sidebar-item ${q.toString() === currentQ.toString() ? 'active' : ''}`;
        item.innerHTML = `Question ${q} ${isFinished ? '<span class="tick">✓</span>' : ''}`;
        item.onclick = () => {
            window.location.href = `question.html?ch=${currentCh}&q=${q}`;
        };
        sidebar.appendChild(item);
    });
}

function showInteraction() {
    document.getElementById('tryItZone').classList.remove('hidden');
    document.getElementById('initialButtons').classList.add('hidden');
}

function checkAnswer() {
    const userAns = document.getElementById('answerIn').value.trim();
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');
    
    const key = `${currentCh}-${currentQ}`;
    const targetAnswer = questionData[key] ? questionData[key].answer : "42";

    if (userAns === targetAnswer) {
        feedback.innerHTML = `<p class="success-text">Successful attempt!</p>`;
        saveProgress(key);
        generateSidebar();
        showSolution(true);
    } else {
        feedback.innerHTML = `
            <p class="error-text">Incorrect</p>
            <button onclick="showSolution()">See Solution Instead</button>
            <button onclick="goToResources()">See Additional Resources</button>
        `;
    }
}

function saveProgress(key) {
    let completed = JSON.parse(localStorage.getItem('completed_questions') || "[]");
    if (!completed.includes(key)) {
        completed.push(key);
        localStorage.setItem('completed_questions', JSON.stringify(completed));
    }
}

function showSolution(isCorrect = false) {
    document.getElementById('tryItZone').classList.add('hidden');
    document.getElementById('initialButtons').classList.add('hidden');
    document.getElementById('solutionZone').classList.remove('hidden');
    
    const status = document.getElementById('solutionStatus');
    status.innerHTML = isCorrect ? `<h3 class="success-text">Correct! Here is the solution:</h3>` : `<h3>Solution:</h3>`;
}

function goToResources() {
    window.location.href = `chapter.html?ch=${currentCh}#resources`;
}

function changeQuestion(delta) {
    const questions = (assignedQuestions[currentCh] || []).map(q => q.toString());
    const currentIndex = questions.indexOf(currentQ.toString());
    const nextQ = questions[currentIndex + delta];
    if (nextQ !== undefined) {
        window.location.href = `question.html?ch=${currentCh}&q=${nextQ}`;
    }
}
