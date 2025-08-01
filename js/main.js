// --- QUIZ DATA REPOSITORY ---
const allQuizData = {
    phishing: {
        title: "Phishing Quiz",
        questions: [
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> PayPaI Support &lt;support@paypaI.com&gt;\n<strong>Subject:</strong> URGENT: Yore Account is Locked!\n\nDear Customer,\n\nWe noticed unusual activity on yore account. Please click here to verify you're identity:\n<span class="suspicious-link" data-real-url="http://paypaI-login-security.com/verify">http://paypaI-login...</span>`, explanation: 'This is phishing. Note the misspelling in "PayPaI" (with a capital "i") and "yore".' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Amaz0n &lt;winner@giveaway-central.net&gt;\n<strong>Subject:</strong> Congratulations! You've Won a $1000 Gift Card!\n\nHello lucky winner,\n\nTo claim you're prize, just click the link below.\n<span class="suspicious-link" data-real-url="http://win.giftcard-ama.net/claim">Click here to claim your reward!</span>`, explanation: 'Classic phishing. The sender isn\'t from Amazon, and the "too good to be true" offer is a major red flag.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> DHL Express &lt;dhl-track@delivery-notice.com&gt;\n<strong>Subject:</strong> Your package could not be delivered\n\nPlease pay the redelivery fee here: <span class="suspicious-link" data-real-url="http://dhl.pay-fee.online/redeliver">Pay Fee Now</span>`, explanation: 'Phishing. Reputable couriers rarely ask for redelivery fees via a generic email link. The sender address is not an official DHL domain.'},
            { type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Google &lt;no-reply@accounts.google.com&gt;\n<strong>Subject:</strong> Security alert: New sign-in\n\nWe detected a new sign-in to your Google Account on a Windows device in Colombo, Sri Lanka.\nIf this was you, you don't need to do anything.`, explanation: 'This is legitimate. The sender is from "@accounts.google.com", and it\'s a standard security alert that doesn\'t urgently demand a click.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> LinkedIn &lt;notification@linkedin-careers.com&gt;\n<strong>Subject:</strong> You have a new connection request\n\nAn HR Manager from a leading tech company has sent you a connection request.\n<span class="suspicious-link" data-real-url="http://linkedin.auth-portal.com/login">View Request</span>`, explanation: 'This is phishing. The sender domain "linkedin-careers.com" is designed to look real but is fake.'},
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Accounts Payable &lt;invoice@quickbooks-mail.com&gt;\n<strong>Subject:</strong> Overdue Invoice - Action Required\n\nPlease find attached your overdue invoice. Payment is due immediately to avoid service interruption.\n<span class="suspicious-link" data-real-url="http://quickbooks.secure-pay.net/inv7823">View Invoice</span>`, explanation: 'Phishing. The sense of urgency and threat of service interruption are classic tactics. The domain is not the official QuickBooks domain.'},
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> IT Service Desk &lt;help@it-support.chesmigroup.com&gt;\n<strong>Subject:</strong> Security Alert: Mandatory Password Update\n\nYour old password will expire in 6 hours.\n<span class="suspicious-link" data-real-url="http://sso.chesmigroup.pw-update.net/login">https://sso.chesmigroup.com/update-password</span>`, explanation: 'Tricky phishing. The link *text* looks real, but hovering reveals a completely different, malicious URL designed to steal company credentials.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> John Doe (CEO) &lt;j.doe@ceo-chesmigroup.com&gt;\n<strong>Subject:</strong> Urgent & Confidential Request\n\nI'm in a conference and need you to process an urgent wire transfer. I can't take calls right now. Please let me know if you can handle this, and I will send the details. It needs to be done in the next hour.\n\nThanks,\nJohn`, explanation: 'This is CEO fraud, a form of spear phishing. The attacker spoofs the CEO\'s name, creates a sense of urgency and an unusual request, and insists on email-only communication.'},
            { type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Asana &lt;no-reply@asana.com&gt;\n<strong>Subject:</strong> Jane Smith mentioned you in a task\n\nJane Smith mentioned you in the task "Finalize Q3 Marketing Budget".\n\nComment: "@User, could you please review these figures by EOD? Thanks!"\n\nGo to Asana to view the task.`, explanation: 'This is legitimate. It is a standard notification from a legitimate third-party service (Asana). The from address is correct, and there are no typical red flags.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> SharePoint Admin &lt;sharepoint@microsft.com&gt;\n<strong>Subject:</strong> A file was shared with you\n\n"2025_Salary_Review_Confidential.xlsx" has been shared with you.\n\nThis is a secure document. You must re-enter your Microsoft 365 password to view it.\n<span class="suspicious-link" data-real-url="http://sharepoint-online.security-access.io/auth">Open the document</span>`, explanation: 'Phishing. The sender has a typo ("microsft.com"). Legitimate services rarely ask you to re-enter your password directly from an email link to view a standard file.'}
        ]
    },
    password: {
        title: "Password Security Quiz",
        questions: [
            { type: 'mcq', text: "What is the most important factor for a strong password?", options: ["Using your pet's name", "Length and complexity", "Changing it every day", "Making it easy to remember"], answer: 1, explanation: "Length is the single most critical factor. A long, complex password with a mix of characters is exponentially harder to crack than a short one." },
            { type: 'mcq', text: "What does 'MFA' stand for in cybersecurity?", options: ["Maximum Firewall Action", "Multi-Factor Authentication", "Malware-Free Application", "My First Account"], answer: 1, explanation: "Multi-Factor Authentication (MFA) adds a crucial second layer of security, like a code from your phone, to prove it's really you." },
            { type: 'mcq', text: "Why is reusing the same password across multiple websites a huge risk?", options: ["It's hard to remember which site uses it", "It's not a risk", "If one site is breached, attackers can access all your accounts", "It slows down your computer"], answer: 2, explanation: "This is called credential stuffing. If an attacker steals your password from one insecure site, they will try it on your email, bank, and social media accounts." },
            { type: 'mcq', text: "What is the primary function of a password manager?", options: ["To automatically change your passwords", "To securely store and generate unique, complex passwords", "To sell your passwords to advertisers", "To block websites that require passwords"], answer: 1, explanation: "Password managers securely store all your unique passwords, allowing you to use very complex ones without needing to memorize them." }
        ]
    },
    ai: {
        title: "AI Security Quiz",
        questions: [
            { type: 'mcq', text: "What is the biggest risk of pasting confidential company data into a public AI chatbot?", options: ["The AI might get confused", "It's perfectly safe", "The AI company might use your data for training or it could be exposed in a breach", "It uses too much internet bandwidth"], answer: 2, explanation: "Public AI tools may use your inputs to train their models, and that sensitive data could be part of a future data leak, exposing company secrets." },
            { type: 'mcq', text: "A 'prompt injection' attack is when someone...", options: ["Injects a virus into the AI's code", "Tricks an AI with clever text to bypass its safety rules or reveal hidden info", "Spills coffee on the AI server", "Asks the AI too many questions"], answer: 1, explanation: "Prompt injection is like a social engineering attack against an AI, manipulating it to perform unintended actions or reveal its original programming." },
            { type: 'mcq', text: "What is 'AI data poisoning'?", options: ["When an AI gives a wrong answer", "Intentionally feeding an AI bad or malicious data during training to corrupt its results", "The process of cleaning AI data", "A type of AI-powered antivirus"], answer: 1, explanation: "Data poisoning is a serious attack where an adversary corrupts the training data to make the AI unreliable, biased, or vulnerable." },
            { type: 'mcq', text: "A 'deepfake' refers to:", options: ["A very deep and insightful thought from an AI", "A fake social media profile", "AI-generated video or audio that realistically fakes someone's appearance or voice", "A fundamental error in an AI's logic"], answer: 2, explanation: "Deepfakes can be used for misinformation or to create fake videos of executives authorizing fraudulent transactions, posing a major security risk." }
        ]
    }
};

const particleConfig = {
    secure: { particles: { number: { value: 60 }, color: { value: "#28a745" }, line_linked: { color: "#28a745", opacity: 0.2 }, move: { direction: "top", speed: 1 } } },
    warning: { particles: { number: { value: 80 }, color: { value: "#f7ca18" }, line_linked: { color: "#f7ca18", opacity: 0.3 }, move: { direction: "none", speed: 2 } } },
    danger: { particles: { number: { value: 100 }, color: { value: "#dc3545" }, line_linked: { color: "#dc3545", opacity: 0.4 }, move: { direction: "bottom", speed: 3 } } }
};
const baseParticleConfig = { particles: { shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, width: 1 }, move: { enable: true, random: true, out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" } } }, retina_detect: true };

const quizController = {
    quizType: null, quizData: [], currentQuestionIndex: 0, score: 0, securityLevel: 100,
    init() {
        const bodyEl = document.body;
        const pageType = bodyEl.getAttribute('data-quiz-type') || (window.location.pathname.includes('results.html') ? 'results' : 'hub');
        this.quizType = pageType;
        if (pageType === 'hub') this.runParticles(particleConfig.secure);
        else if (pageType === 'results') this.showResults();
        else {
            this.quizData = allQuizData[this.quizType];
            if (this.quizData) this.startQuiz();
        }
    },
    startQuiz() {
        document.title = `${this.quizData.title} - Chesmi Group`;
        document.getElementById('quizTitle').innerText = this.quizData.title;
        this.currentQuestionIndex = 0; this.score = 0; this.securityLevel = 100;
        this.updateSecurityVisuals(); this.loadQuestion();
    },
    loadQuestion() {
        const q = this.quizData.questions[this.currentQuestionIndex];
        document.getElementById('questionCounter').innerText = `Question ${this.currentQuestionIndex + 1} of ${this.quizData.questions.length}`;
        document.getElementById('progressBar').style.width = `${((this.currentQuestionIndex + 1) / this.quizData.questions.length) * 100}%`;
        document.getElementById('feedback').style.display = 'none';
        if (q.type === 'phishing-email') this.renderPhishingQuestion(q);
        else if (q.type === 'mcq') this.renderMCQ(q);
    },
    renderPhishingQuestion(q) {
        document.getElementById('questionArea').innerHTML = `<div class="email-preview">${q.emailContent}</div><p>Is this email Legit or Phishing?</p>`;
        document.querySelector('.answer-buttons').innerHTML = `<button class="btn" onclick="quizController.checkAnswer(false)">✅ Legit</button><button class="btn" onclick="quizController.checkAnswer(true)">🚫 Phishing</button>`;
        this.setupInteractiveLinks();
    },
    renderMCQ(q) {
        document.getElementById('questionArea').innerHTML = `<p>${q.text}</p>`;
        const buttonsContainer = document.querySelector('.answer-buttons');
        buttonsContainer.innerHTML = '';
        q.options.forEach((option, index) => {
            buttonsContainer.innerHTML += `<button class="mcq-option" onclick="quizController.checkAnswer(${index})">${option}</button>`;
        });
    },
    checkAnswer(userAnswer) {
        const q = this.quizData.questions[this.currentQuestionIndex];
        let isCorrect = false;
        if (q.type === 'phishing-email') isCorrect = (userAnswer === q.isPhishing);
        else if (q.type === 'mcq') isCorrect = (userAnswer === q.answer);
        if (isCorrect) {
            this.score++; this.securityLevel = Math.min(100, this.securityLevel + 10);
            document.getElementById('feedback-title').innerHTML = `<i class="fas fa-check-circle"></i> Correct!`;
            document.getElementById('feedback').className = 'feedback correct';
        } else {
            this.securityLevel = Math.max(0, this.securityLevel - 25);
            document.getElementById('feedback-title').innerHTML = `<i class="fas fa-times-circle"></i> Incorrect.`;
            document.getElementById('feedback').className = 'feedback incorrect';
            document.body.classList.add('danger-flash');
            setTimeout(() => document.body.classList.remove('danger-flash'), 600);
        }
        this.updateSecurityVisuals();
        document.getElementById('feedback-text').innerText = q.explanation;
        document.querySelector('.answer-buttons').innerHTML = '';
        document.getElementById('feedback').style.display = 'block';
        const nextButton = document.getElementById('nextButton');
        if (this.currentQuestionIndex === this.quizData.questions.length - 1) {
            nextButton.textContent = 'Finish & See Results';
            nextButton.onclick = () => this.finishQuiz();
        } else {
            nextButton.textContent = 'Next Question';
            nextButton.onclick = () => { this.currentQuestionIndex++; this.loadQuestion(); };
        }
    },
    finishQuiz() {
        localStorage.setItem('lastQuizType', this.quizType);
        localStorage.setItem('lastQuizScore', this.score);
        localStorage.setItem('lastQuizTotal', this.quizData.questions.length);
        window.location.href = 'results.html';
    },
    showResults() {
        const quizType = localStorage.getItem('lastQuizType');
        const score = localStorage.getItem('lastQuizScore');
        const total = localStorage.getItem('lastQuizTotal');
        if (!quizType || score === null) { window.location.href = 'index.html'; return; }
        const quizTitle = allQuizData[quizType].title;
        document.getElementById('resultsTitle').innerText = `${quizTitle} Results`;
        document.getElementById('finalScore').innerText = `${score} / ${total}`;
        document.getElementById('retakeQuizBtn').href = `${quizType}_quiz.html`;
        let scoreMessage = "There's room for improvement. Keep learning!";
        if ((score / total) >= 0.9) scoreMessage = "Excellent work! You're a security expert! 🏆";
        else if ((score / total) >= 0.7) scoreMessage = "Great job! You have a strong security awareness. 👍";
        document.getElementById('scoreMessage').innerText = scoreMessage;
        this.runParticles(particleConfig.warning);
    },
    updateSecurityVisuals() {
        if (!document.getElementById('securityStatusBar')) return;
        document.getElementById('securityStatusBar').style.width = `${this.securityLevel}%`;
        let stateClass = 'state-secure', stateText = 'STATUS: SECURE', config = particleConfig.secure;
        if (this.securityLevel < 70) { stateClass = 'state-warning'; stateText = 'STATUS: AT RISK'; config = particleConfig.warning; }
        if (this.securityLevel < 40) { stateClass = 'state-danger'; stateText = 'STATUS: COMPROMISED'; config = particleConfig.danger; }
        document.body.className = stateClass;
        document.getElementById('securityStatusText').textContent = stateText;
        this.runParticles(config);
    },
    runParticles(config) {
        if(window.pJSDom && window.pJSDom[0]) { window.pJSDom[0].pJS.fn.vendors.destroypJS(); window.pJSDom = []; }
        if(document.getElementById('particles-js')) { particlesJS('particles-js', { ...baseParticleConfig, ...config }); }
    },
    setupInteractiveLinks() {
        document.querySelectorAll('.suspicious-link').forEach(link => {
            if(link.querySelector('.link-tooltip')) return;
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
document.addEventListener('DOMContentLoaded', () => quizController.init());
