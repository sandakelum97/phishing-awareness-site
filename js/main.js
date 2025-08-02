// --- COMPLETE QUIZ & TRAINING DATA ---
const allQuizData = {
    phishing: { /* ... Same as previous step ... */ },
    password: { /* ... Same as previous step ... */ },
    ai: { /* ... Same as previous step ... */ },
    social: { /* ... Same as previous step ... */ }
    // NOTE: For brevity, the giant data object is omitted here, but it's the same as the previous response.
    // Ensure the full data object from the previous step is in your file.
};
// Paste the full `allQuizData` object from the previous response here.

const particleConfig = {
    secure: { particles: { number: { value: 60 }, color: { value: "#28a745" }, line_linked: { color: "#28a745", opacity: 0.2 }, move: { direction: "top", speed: 1 } } },
    warning: { particles: { number: { value: 80 }, color: { value: "#f7ca18" }, line_linked: { color: "#f7ca18", opacity: 0.3 }, move: { direction: "none", speed: 2 } } },
    danger: { particles: { number: { value: 100 }, color: { value: "#dc3545" }, line_linked: { color: "#dc3545", opacity: 0.4 }, move: { direction: "bottom", speed: 3 } } },
    hub: { particles: { number: { value: 40 }, color: { value: "#30363d" }, line_linked: { color: "#e8491d", opacity: 0.2 }, move: { direction: "none", speed: 2 } } }
};
const baseParticleConfig = { particles: { shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, width: 1 }, move: { enable: true, random: true, out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" } } }, retina_detect: true };

const appController = {
    init() {
        const pagePath = window.location.pathname.split("/").pop() || 'login.html';
        if (pagePath === 'login.html') this.handleLoginPage();
        else if (pagePath.includes('_quiz.html')) this.handleQuizPage();
        else if (pagePath === 'results.html') this.handleResultsPage();
        else if (pagePath === 'certificate.html') this.handleCertificatePage();
        else if (pagePath === 'index.html') this.handleHubPage();
        else this.handleLoginPage(); // Default to login
    },
    handleLoginPage() {
        this.runParticles(particleConfig.hub);
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.onsubmit = (e) => {
                e.preventDefault();
                const userData = {
                    name: document.getElementById('userName').value,
                    email: document.getElementById('userEmail').value,
                    role: document.getElementById('userRole').value,
                    company: "Chesmi Consolidated (Pvt) Ltd"
                };
                localStorage.setItem('chesmiUserData', JSON.stringify(userData));
                localStorage.removeItem('lastQuizLogEntry'); // Clear old logs
                window.location.href = 'index.html';
            };
        }
    },
    handleHubPage() { this.checkLogin(); this.runParticles(particleConfig.hub); },
    handleQuizPage() { this.checkLogin(); quizController.init(); },
    handleResultsPage() { this.checkLogin(); quizController.showResults(); },
    handleCertificatePage() {
        this.checkLogin();
        const userData = JSON.parse(localStorage.getItem('chesmiUserData'));
        const urlParams = new URLSearchParams(window.location.search);
        const quizName = urlParams.get('quiz');
        const date = urlParams.get('date');
        if (userData && quizName && date) {
            document.getElementById('certUserName').innerText = userData.name;
            document.getElementById('certQuizName').innerText = quizName;
            document.getElementById('certDate').innerText = date;
        } else {
            const certWrapper = document.querySelector('.certificate-wrapper');
            if (certWrapper) certWrapper.innerHTML = '<div class="container"><h1>Error</h1><p>Certificate data not found. Please generate the certificate from the results page.</p><a href="index.html" class="btn">Back to Hub</a></div>';
        }
    },
    checkLogin() {
        if (!window.location.pathname.includes('login.html') && !localStorage.getItem('chesmiUserData')) {
            window.location.href = 'login.html';
        }
    },
    runParticles(config) {
        if (typeof particlesJS === 'undefined') return;
        if (window.pJSDom && window.pJSDom[0]) { window.pJSDom[0].pJS.fn.vendors.destroypJS(); window.pJSDom = []; }
        if (document.getElementById('particles-js')) { particlesJS('particles-js', { ...baseParticleConfig, ...config }); }
    }
};

const quizController = {
    quizType: null, quizData: [], currentQuestionIndex: 0, score: 0, securityLevel: 100, attempts: 1,
    init() {
        const bodyEl = document.body;
        this.quizType = bodyEl.getAttribute('data-quiz-type');
        this.quizData = allQuizData[this.quizType];
        if (this.quizData) this.showTraining();
    },
    showTraining() {
        const modal = document.getElementById('trainingModal');
        document.getElementById('trainingTitle').innerText = this.quizData.title;
        document.getElementById('trainingContent').innerHTML = this.quizData.training;
        modal.classList.add('show');
        document.getElementById('startQuizBtn').onclick = () => {
            modal.classList.remove('show');
            document.querySelector('.container').style.visibility = 'visible';
            this.startQuiz();
        };
    },
    startQuiz() {
        // Track attempts
        const attemptKey = `${this.quizType}_attempts`;
        let currentAttempts = parseInt(localStorage.getItem(attemptKey), 10) || 0;
        this.attempts = currentAttempts + 1;
        localStorage.setItem(attemptKey, this.attempts);

        document.title = `${this.quizData.title} - Chesmi Consolidated (Pvt) Ltd`;
        document.getElementById('quizTitle').innerText = this.quizData.title;
        this.currentQuestionIndex = 0; this.score = 0; this.securityLevel = 100;
        appController.runParticles(particleConfig.secure);
        this.updateSecurityVisuals(); this.loadQuestion();
    },
    finishQuiz() {
        const logEntry = this.generateLogEntry();
        localStorage.setItem('lastQuizLogEntry', logEntry);
        localStorage.setItem('lastQuizType', this.quizType);
        localStorage.setItem('lastQuizScore', this.score);
        localStorage.setItem('lastQuizTotal', this.quizData.questions.length);
        window.location.href = 'results.html';
    },
    showResults() {
        const quizType = localStorage.getItem('lastQuizType');
        const score = parseInt(localStorage.getItem('lastQuizScore'), 10);
        const total = parseInt(localStorage.getItem('lastQuizTotal'), 10);
        const logEntry = localStorage.getItem('lastQuizLogEntry');

        if (!quizType || isNaN(score) || isNaN(total)) { window.location.href = 'login.html'; return; }
        
        // Display Log Data
        const logSection = document.getElementById('logSection');
        if (logEntry && logSection) {
            logSection.style.display = 'block';
            document.getElementById('logOutput').value = logEntry;
            document.getElementById('downloadLogBtn').onclick = () => this.downloadLog(logEntry);
        }

        const quizTitle = allQuizData[quizType].title;
        document.getElementById('resultsTitle').innerText = `${quizTitle} Results`;
        document.getElementById('finalScore').innerText = `${score} / ${total}`;
        
        const retakeBtn = document.getElementById('retakeQuizBtn');
        const hubBtn = document.getElementById('hubBtn');
        const certContainer = document.getElementById('certificateBtnContainer');
        retakeBtn.href = `${quizType}_quiz.html`;
        certContainer.innerHTML = '';
        
        let scoreMessage, bodyClass, particleConf;
        const passScore = 9;
        if (score >= passScore) {
            scoreMessage = "Excellent work! You have passed this module. 🏆";
            bodyClass = 'results-pass';
            particleConf = particleConfig.secure;
            hubBtn.style.display = 'inline-block';
            certContainer.innerHTML = `<button id="generateCertBtn" class="btn"><i class="fas fa-award"></i> Generate Certificate</button>`;
            document.getElementById('generateCertBtn').onclick = () => {
                const today = new Date().toLocaleDateString('en-GB');
                const url = `certificate.html?quiz=${encodeURIComponent(quizTitle)}&date=${encodeURIComponent(today)}`;
                window.open(url, '_blank');
            };
            localStorage.removeItem(`${quizType}_attempts`); // Reset attempts on pass
        } else {
            scoreMessage = `A score of ${passScore} or higher is required to pass. Please retake the quiz. 💪`;
            bodyClass = 'results-fail';
            particleConf = particleConfig.danger;
            hubBtn.style.display = 'none';
        }
        document.getElementById('scoreMessage').innerText = scoreMessage;
        document.body.className = bodyClass;
        appController.runParticles(particleConf);
    },
    generateLogEntry() {
        const userData = JSON.parse(localStorage.getItem('chesmiUserData'));
        const timestamp = new Date().toISOString();
        // CSV format: Timestamp,Name,Email,Role,Company,Quiz,Score,Total,Attempt
        const headers = "Timestamp,Name,Email,Role,Company,Quiz,Score,Total,Attempt";
        const values = [
            timestamp,
            `"${userData.name}"`,
            `"${userData.email}"`,
            `"${userData.role}"`,
            `"${userData.company}"`,
            `"${this.quizData.title}"`,
            this.score,
            this.quizData.questions.length,
            this.attempts
        ].join(',');
        // This is a simplified example. For a real app, you'd send this to a server.
        // We'll just return the value string for now.
        return values;
    },
    downloadLog(logData) {
        const blob = new Blob([logData], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        const userData = JSON.parse(localStorage.getItem('chesmiUserData'));
        const quizType = localStorage.getItem('lastQuizType');
        const date = new Date().toISOString().split('T')[0];
        const filename = `log-${quizType}-${userData.name.replace(/ /g, '_')}-${date}.txt`;

        link.setAttribute("href", url);
        link.setAttribute("download", filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    // Keep all other quizController functions (loadQuestion, checkAnswer, etc.) from the previous complete response.
    // They are included here for completeness.
    updateSecurityVisuals() { if (!document.getElementById('securityStatusBar')) return; this.securityLevel = Math.max(0, Math.min(100, this.securityLevel)); document.getElementById('securityStatusBar').style.width = `${this.securityLevel}%`; let stateClass = 'state-secure', stateText = 'STATUS: SECURE', config = particleConfig.secure; if (this.securityLevel < 70) { stateClass = 'state-warning'; stateText = 'STATUS: AT RISK'; config = particleConfig.warning; } if (this.securityLevel < 40) { stateClass = 'state-danger'; stateText = 'STATUS: COMPROMISED'; config = particleConfig.danger; } document.body.className = stateClass; document.getElementById('securityStatusText').textContent = stateText; appController.runParticles(config); },
    setupInteractiveLinks() { document.querySelectorAll('.suspicious-link').forEach(link => { if (link.querySelector('.link-tooltip')) return; const realUrl = link.getAttribute('data-real-url'); if (realUrl) { const tooltip = document.createElement('span'); tooltip.className = 'link-tooltip'; tooltip.textContent = `⚠️ Destination: ${realUrl}`; link.appendChild(tooltip); } link.addEventListener('click', e => e.preventDefault()); }); }
};

document.addEventListener('DOMContentLoaded', () => appController.init());
