// --- QUIZ DATA (10 Questions) ---
const quizData = [
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> PayPaI Support &lt;support@paypaI.com&gt;\n<strong>Subject:</strong> URGENT: Yore Account is Locked!\n\nDear Customer,\n\nWe noticed unusual activity on yore account. Please click here to verify you're identity:\n<span class="suspicious-link" data-real-url="http://paypaI-login-security.com/verify">http://paypaI-login...</span>`, explanation: 'This is phishing. Note the misspelling in "PayPaI" (with a capital "i") and "yore". Hovering over the link reveals a non-official URL.' },
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> Amaz0n &lt;winner@giveaway-central.net&gt;\n<strong>Subject:</strong> Congratulations! You've Won a $1000 Gift Card!\n\nHello lucky winner,\n\nTo claim you're prize, just click the link below.\n<span class="suspicious-link" data-real-url="http://win.giftcard-ama.net/claim">Click here to claim your reward!</span>`, explanation: 'Classic phishing. The sender isn\'t from Amazon, and the "too good to be true" offer is a major red flag.' },
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> DHL Express &lt;dhl-track@delivery-notice.com&gt;\n<strong>Subject:</strong> Your package could not be delivered\n\nPlease pay the redelivery fee here: <span class="suspicious-link" data-real-url="http://dhl.pay-fee.online/redeliver">Pay Fee Now</span>`, explanation: 'Phishing. Reputable couriers rarely ask for redelivery fees via a generic email link. The sender address is not an official DHL domain.'},
    { level: 'Medium', isPhishing: false, emailContent: `<strong>From:</strong> Google &lt;no-reply@accounts.google.com&gt;\n<strong>Subject:</strong> Security alert: New sign-in\n\nWe detected a new sign-in to your Google Account on a Windows device in Colombo, Sri Lanka.\nIf this was you, you don't need to do anything.`, explanation: 'This is legitimate. The sender is from "@accounts.google.com", and it\'s a standard security alert that doesn\'t urgently demand a click.' },
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> LinkedIn &lt;notification@linkedin-careers.com&gt;\n<strong>Subject:</strong> You have a new connection request\n\nAn HR Manager from a leading tech company has sent you a connection request.\n<span class="suspicious-link" data-real-url="http://linkedin.auth-portal.com/login">View Request</span>`, explanation: 'This is phishing. The sender domain "linkedin-careers.com" is designed to look real but is fake.'},
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> Accounts Payable &lt;invoice@quickbooks-mail.com&gt;\n<strong>Subject:</strong> Overdue Invoice - Action Required\n\nPlease find attached your overdue invoice. Payment is due immediately to avoid service interruption.\n<span class="suspicious-link" data-real-url="http://quickbooks.secure-pay.net/inv7823">View Invoice</span>`, explanation: 'Phishing. The sense of urgency is a classic tactic, and the domain is not the official QuickBooks domain.'},
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> IT Service Desk &lt;help@it-support.chesmigroup.com&gt;\n<strong>Subject:</strong> Security Alert: Mandatory Password Update\n\nYour old password will expire in 6 hours.\n<span class="suspicious-link" data-real-url="http://sso.chesmigroup.pw-update.net/login">https://sso.chesmigroup.com/update-password</span>`, explanation: 'Tricky phishing. The link *text* looks real, but hovering reveals a completely different, malicious URL designed to steal credentials.' },
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> John Doe (CEO) &lt;j.doe@ceo-chesmigroup.com&gt;\n<strong>Subject:</strong> Urgent & Confidential Request\n\nI'm in a conference and need you to process an urgent wire transfer. Please let me know if you can handle this. It needs to be done in the next hour.`, explanation: 'This is CEO fraud. The attacker spoofs the CEO\'s name and creates extreme urgency to bypass normal procedures.'},
    { level: 'Hard', isPhishing: false, emailContent: `<strong>From:</strong> Asana &lt;no-reply@asana.com&gt;\n<strong>Subject:</strong> Jane Smith mentioned you in a task\n\nJane Smith mentioned you in the task "Finalize Q3 Marketing Budget". Comment: "@User, could you please review these figures by EOD?"`, explanation: 'This is legitimate. It is a standard notification from a third-party service (Asana). The sender address is correct and there are no typical red flags.' },
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> SharePoint Admin &lt;sharepoint@microsft.com&gt;\n<strong>Subject:</strong> A file was shared with you\n\n"2025_Salary_Review_Confidential.xlsx" has been shared. You must re-enter your Microsoft 365 password to view it.\n<span class="suspicious-link" data-real-url="http://sharepoint-online.security-access.io/auth">Open the document</span>`, explanation: 'Phishing. Note the typo in the sender ("microsft.com"). Legitimate services rarely ask you to re-enter your password directly from an email to view a file.'}
];

// --- PARTICLE CONFIGURATIONS for different states ---
const particleConfig = {
    secure: { particles: { number: { value: 60 }, color: { value: "#28a745" }, line_linked: { color: "#28a745", opacity: 0.2 }, move: { direction: "top", speed: 1 } } },
    warning: { particles: { number: { value: 80 }, color: { value: "#f7ca18" }, line_linked: { color: "#f7ca18", opacity: 0.3 }, move: { direction: "none", speed: 2 } } },
    danger: { particles: { number: { value: 100 }, color: { value: "#dc3545" }, line_linked: { color: "#dc3545", opacity: 0.4 }, move: { direction: "bottom", speed: 3 } } }
};
const baseParticleConfig = { particles: { shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, width: 1 }, move: { enable: true, random: true, out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" } } }, retina_detect: true };

// --- MAIN QUIZ LOGIC ---
const quiz = {
    // State
    currentQuestionIndex: 0,
    score: 0,
    securityLevel: 100, // Start at 100%
    userAnswers: [],

    // Initialization
    init() {
        // Route logic based on the current page
        const page = window.location.pathname.split("/").pop();
        if (page === 'quiz.html') this.startQuiz();
        if (page === 'results.html') this.showResults();
        if (page === 'index.html' || page === '') this.runParticles(particleConfig.secure);
    },

    // Quiz Page Logic
    startQuiz() {
        console.log("Starting quiz...");
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.securityLevel = 100;
        this.userAnswers = [];
        this.updateSecurityVisuals();
        this.loadQuestion();
    },

    loadQuestion() {
        const q = quizData[this.currentQuestionIndex];
        document.getElementById('questionCounter').textContent = `Question ${this.currentQuestionIndex + 1} of ${quizData.length}`;
        document.getElementById('progressBar').style.width = `${((this.currentQuestionIndex + 1) / quizData.length) * 100}%`;
        document.getElementById('emailPreview').innerHTML = q.emailContent;
        
        document.getElementById('feedback').style.display = 'none';
        document.querySelector('.answer-buttons').style.display = 'flex';
        
        this.setupInteractiveLinks();
    },

    checkAnswer(userIsPhishing) {
        const q = quizData[this.currentQuestionIndex];
        const isCorrect = userIsPhishing === q.isPhishing;

        if (isCorrect) {
            this.score++;
            this.securityLevel = Math.min(100, this.securityLevel + 10); // Increase security
            document.getElementById('feedback-title').innerHTML = `<i class="fas fa-check-circle"></i> Correct!`;
            document.getElementById('feedback').className = 'feedback correct';
        } else {
            this.securityLevel = Math.max(0, this.securityLevel - 25); // Decrease security
            document.getElementById('feedback-title').innerHTML = `<i class="fas fa-times-circle"></i> Incorrect.`;
            document.getElementById('feedback').className = 'feedback incorrect';
            document.body.classList.add('danger-flash');
            setTimeout(() => document.body.classList.remove('danger-flash'), 600);
        }
        
        console.log(`Question ${this.currentQuestionIndex + 1}: Correct? ${isCorrect}. Current Score: ${this.score}`);
        
        this.updateSecurityVisuals();
        
        document.getElementById('feedback-text').innerHTML = q.explanation;
        this.userAnswers.push({ questionIndex: this.currentQuestionIndex, isCorrect: isCorrect });
        
        document.querySelector('.answer-buttons').style.display = 'none';
        document.getElementById('feedback').style.display = 'block';

        const nextButton = document.getElementById('nextButton');
        if (this.currentQuestionIndex === quizData.length - 1) {
            nextButton.textContent = 'Finish & See Results';
            nextButton.onclick = () => this.finishQuiz();
        } else {
            nextButton.textContent = 'Next Question';
            nextButton.onclick = () => { this.currentQuestionIndex++; this.loadQuestion(); };
        }
    },

    finishQuiz() {
        console.log("Finishing quiz. Final score:", this.score);
        localStorage.setItem('chesmiQuizScoreV2', this.score);
        localStorage.setItem('chesmiUserAnswersV2', JSON.stringify(this.userAnswers));
        window.location.href = 'results.html';
    },

    // Results Page Logic
    showResults() {
        this.runParticles(particleConfig.warning);
        const score = localStorage.getItem('chesmiQuizScoreV2');
        if (score === null) {
            window.location.href = 'index.html';
            return;
        }
        console.log("Showing results. Score from storage:", score);
        document.getElementById('finalScore').textContent = `${score} / ${quizData.length}`;
        let scoreMessage = "There's room for improvement. Reviewing these examples is a great first step! 💪";
        if (score >= 9) scoreMessage = "Excellent work! You're a phishing detection expert. 🏆";
        else if (score >= 7) scoreMessage = "Great job! You have a strong eye for suspicious emails. 👍";
        else if (score >= 5) scoreMessage = "Good effort. Review the explanations to sharpen your skills. 👀";
        document.getElementById('scoreMessage').textContent = scoreMessage;
    },
    
    // Visuals & Interactivity
    updateSecurityVisuals() {
        const statusBar = document.getElementById('securityStatusBar');
        const statusText = document.getElementById('securityStatusText');
        statusBar.style.width = `${this.securityLevel}%`;
        
        let stateClass = 'state-secure';
        let stateText = 'STATUS: SECURE';
        let config = particleConfig.secure;

        if (this.securityLevel < 70) {
            stateClass = 'state-warning';
            stateText = 'STATUS: AT RISK';
            config = particleConfig.warning;
        }
        if (this.securityLevel < 40) {
            stateClass = 'state-danger';
            stateText = 'STATUS: COMPROMISED';
            config = particleConfig.danger;
        }
        
        document.body.className = stateClass;
        statusText.textContent = stateText;
        this.runParticles(config);
    },

    runParticles(config) {
        if(window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }
        const mergedConfig = { ...baseParticleConfig, ...config };
        if(document.getElementById('particles-js')) {
            particlesJS('particles-js', mergedConfig);
        }
    },

    setupInteractiveLinks() {
        document.querySelectorAll('.suspicious-link').forEach(link => {
            if(link.querySelector('.link-tooltip')) return; // Avoid re-adding tooltips
            const realUrl = link.getAttribute('data-real-url');
            if (realUrl) {
                const tooltip = document.createElement('span');
                tooltip.className = 'link-tooltip';
                tooltip.textContent = `⚠️ Destination: ${realUrl}`;
                link.appendChild(tooltip);
            }
            link.addEventListener('click', e => e.preventDefault());
        });
    }
};

document.addEventListener('DOMContentLoaded', () => quiz.init());
