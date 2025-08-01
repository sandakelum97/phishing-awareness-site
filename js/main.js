// --- FULL 10-QUESTION QUIZ DATA ---
const quizData = [
    // --- EASY ---
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> PayPaI Support &lt;support@paypaI.com&gt;\n<strong>Subject:</strong> URGENT: Yore Account is Locked!\n\nDear Customer,\n\nWe noticed unusual activity on yore account. Please click here to verify you're identity:\n<span class="suspicious-link" data-real-url="http://paypaI-login-security.com/verify">http://paypaI-login...</span>`, explanation: 'This is phishing. Note the misspelling in "PayPaI" (with a capital "i") and "yore". Hovering over the link reveals a non-official URL.' },
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> Amaz0n &lt;winner@giveaway-central.net&gt;\n<strong>Subject:</strong> Congratulations! You've Won a $1000 Gift Card!\n\nHello lucky winner,\n\nTo claim you're prize, just click the link below.\n<span class="suspicious-link" data-real-url="http://win.giftcard-ama.net/claim">Click here to claim your reward!</span>`, explanation: 'Classic phishing. The sender isn\'t from Amazon, and the "too good to be true" offer is a major red flag. The link destination is also suspicious.' },
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> DHL Express &lt;dhl-track@delivery-notice.com&gt;\n<strong>Subject:</strong> Your package could not be delivered\n\nDear Customer,\n\nWe attempted to deliver your package today but you were not home. A redelivery fee is required.\n\nPlease pay the fee here: <span class="suspicious-link" data-real-url="http://dhl.pay-fee.online/redeliver">Pay Fee Now</span>`, explanation: 'Phishing. Reputable couriers rarely ask for redelivery fees via a generic email link. The sender address is not an official DHL domain.'},
    // --- MEDIUM ---
    { level: 'Medium', isPhishing: false, emailContent: `<strong>From:</strong> Google &lt;no-reply@accounts.google.com&gt;\n<strong>Subject:</strong> Security alert\n\nHi User,\n\nWe detected a new sign-in to your Google Account on a Windows device in Colombo, Sri Lanka.\nIf this was you, you don't need to do anything. If not, we'll help you secure your account.`, explanation: 'This is legitimate. The sender is from "@accounts.google.com", and the information is typical of a standard security alert. It doesn\'t ask you to click a link urgently.' },
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> LinkedIn &lt;notification@linkedin-careers.com&gt;\n<strong>Subject:</strong> You have a new connection request\n\nHi User,\n\nAn HR Manager from a leading tech company has sent you a connection request on LinkedIn.\n\n<span class="suspicious-link" data-real-url="http://linkedin.auth-portal.com/login">View Request</span>`, explanation: 'This is phishing. The sender domain "linkedin-careers.com" is designed to look real but is fake. The link would lead to a credential-stealing page.'},
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> Accounts Payable &lt;invoice@quickbooks-mail.com&gt;\n<strong>Subject:</strong> Overdue Invoice - Action Required\n\nDear Partner,\n\nPlease find attached your overdue invoice for last month's services.\nPayment is due immediately to avoid service interruption. Click below to view and pay the invoice.\n<span class="suspicious-link" data-real-url="http://quickbooks.secure-pay.net/inv7823">View Invoice</span>`, explanation: 'Phishing. The sense of urgency and threat of service interruption are classic tactics. The domain is not the official QuickBooks domain.'},
    // --- HARD ---
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> IT Service Desk &lt;help@it-support.chesmigroup.com&gt;\n<strong>Subject:</strong> Security Alert: Mandatory Password Update\n\nDear Employee,\n\nAs part of our new security protocol, all employees must update their passwords immediately. Your old password will expire in 6 hours.\n<span class="suspicious-link" data-real-url="http://sso.chesmigroup.pw-update.net/login">https://sso.chesmigroup.com/update-password</span>`, explanation: 'Tricky phishing. The link *text* looks real, but hovering reveals a completely different, malicious URL designed to steal company credentials.' },
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> John Doe (CEO) &lt;j.doe@ceo-chesmigroup.com&gt;\n<strong>Subject:</strong> Urgent & Confidential Request\n\nHi,\n\nI'm in a conference and need you to process an urgent wire transfer for a vendor. I can't take calls right now. Please let me know if you can handle this, and I will send the details. It needs to be done in the next hour.\n\nThanks,\nJohn`, explanation: 'This is CEO fraud, a form of spear phishing. The attacker spoofs the CEO\'s name, creates a sense of urgency and an unusual request, and insists on email-only communication.'},
    { level: 'Hard', isPhishing: false, emailContent: `<strong>From:</strong> Asana &lt;no-reply@asana.com&gt;\n<strong>Subject:</strong> Jane Smith mentioned you in a task\n\nHi User,\n\nJane Smith mentioned you in the task "Finalize Q3 Marketing Budget".\n\nComment: "@User, could you please review these figures by EOD? Thanks!"\n\nGo to Asana to view the task.`, explanation: 'This is legitimate. It is a standard notification from a legitimate third-party service (Asana). The from address is correct, and there are no typical red flags.' },
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> SharePoint Admin &lt;sharepoint@microsft.com&gt;\n<strong>Subject:</strong> A file was shared with you\n\n"2025_Salary_Review_Confidential.xlsx" has been shared with you.\n\nThis is a secure document. You must re-enter your Microsoft 365 password to view it.\n<span class="suspicious-link" data-real-url="http://sharepoint-online.security-access.io/auth">Open the document</span>`, explanation: 'Phishing. The sender has a typo ("microsft.com"). Legitimate services rarely ask you to re-enter your password directly from an email link to view a standard file.'}
];

const quiz = {
    currentQuestionIndex: 0, score: 0, userAnswers: [],
    init: function() {
        this.runParticles();
        if (document.getElementById('quiz-container')) { this.resetQuizState(); this.loadQuestion(); }
        if (document.getElementById('results-content')) { this.loadResults(); }
    },
    resetQuizState: function() { this.currentQuestionIndex = 0; this.score = 0; this.userAnswers = []; },
    loadQuestion: function() {
        const emailPreview = document.getElementById('emailPreview');
        emailPreview.classList.remove('shake-anim', 'glow-anim');
        const q = quizData[this.currentQuestionIndex];
        document.getElementById('questionCounter').textContent = `Question ${this.currentQuestionIndex + 1} of ${quizData.length}`;
        document.getElementById('progressBar').style.width = `${((this.currentQuestionIndex + 1) / quizData.length) * 100}%`;
        emailPreview.innerHTML = q.emailContent;
        document.getElementById('feedback').style.display = 'none';
        document.querySelector('.answer-buttons').style.display = 'flex';
        this.setupInteractiveLinks();
    },
    setupInteractiveLinks: function() {
        document.querySelectorAll('.suspicious-link').forEach(link => {
            const realUrl = link.getAttribute('data-real-url');
            if (realUrl) {
                const tooltip = document.createElement('span');
                tooltip.className = 'link-tooltip';
                tooltip.textContent = `⚠️ Destination: ${realUrl}`;
                link.appendChild(tooltip);
            }
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const modal = document.getElementById('linkWarningModal');
                if(modal) modal.style.display = 'block';
            });
        });
        const modal = document.getElementById('linkWarningModal');
        if (modal) {
          modal.querySelector('.close-button').onclick = () => modal.style.display = 'none';
          window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
        }
    },
    checkAnswer: function(userIsPhishing) {
        const q = quizData[this.currentQuestionIndex];
        const isCorrect = userIsPhishing === q.isPhishing;
        const feedbackEl = document.getElementById('feedback');
        const emailPreview = document.getElementById('emailPreview');
        if (isCorrect) {
            this.score++;
            feedbackEl.className = 'feedback correct';
            document.getElementById('feedback-title').innerHTML = `<i class="fas fa-check-circle"></i> Correct!`;
            emailPreview.classList.add('glow-anim');
        } else {
            feedbackEl.className = 'feedback incorrect';
            document.getElementById('feedback-title').innerHTML = `<i class="fas fa-times-circle"></i> Incorrect.`;
            emailPreview.classList.add('shake-anim');
        }
        document.getElementById('feedback-text').innerHTML = q.explanation;
        this.userAnswers.push({ questionIndex: this.currentQuestionIndex, userChoice: userIsPhishing ? 'Phishing' : 'Legit', correctChoice: q.isPhishing ? 'Phishing' : 'Legit', isCorrect: isCorrect });
        document.querySelector('.answer-buttons').style.display = 'none';
        feedbackEl.style.display = 'block';
        const nextButton = document.getElementById('nextButton');
        if (this.currentQuestionIndex === quizData.length - 1) {
            nextButton.textContent = 'Finish Quiz';
            nextButton.onclick = () => this.finishQuiz();
        } else {
            nextButton.textContent = 'Next Question';
            nextButton.onclick = () => { this.currentQuestionIndex++; this.loadQuestion(); };
        }
    },
    finishQuiz: function() {
        localStorage.setItem('chesmiQuizScore', this.score);
        localStorage.setItem('chesmiUserAnswers', JSON.stringify(this.userAnswers));
        window.location.href = 'results.html';
    },
    loadResults: function() {
        const score = localStorage.getItem('chesmiQuizScore');
        const userAnswers = JSON.parse(localStorage.getItem('chesmiUserAnswers'));
        if (score === null || !userAnswers) { window.location.href = 'index.html'; return; }
        document.getElementById('finalScore').textContent = `${score} / ${quizData.length}`;
        let scoreMessage = "There's room for improvement. Reviewing these examples is a great first step! 💪";
        if (score >= 9) scoreMessage = "Excellent work! You're a phishing detection expert. 🏆";
        else if (score >= 7) scoreMessage = "Great job! You have a strong eye for suspicious emails. 👍";
        else if (score >= 5) scoreMessage = "Good effort. Review the explanations to sharpen your skills. 👀";
        document.getElementById('scoreMessage').textContent = scoreMessage;
        const reviewContainer = document.getElementById('questionReviewContainer');
        reviewContainer.innerHTML = '';
        userAnswers.forEach(ans => {
            const q = quizData[ans.questionIndex];
            const resultIcon = ans.isCorrect ? '<span class="review-answer-correct"><i class="fas fa-check"></i> Correct</span>' : '<span class="review-answer-incorrect"><i class="fas fa-times"></i> Incorrect</span>';
            reviewContainer.innerHTML += `<div class="review-item"><h4>Question ${ans.questionIndex + 1} (${q.level})</h4><div class="email-content">${q.emailContent.replace(/<span class="link-tooltip">.*?<\/span>/, '')}</div><p>Your answer: <strong>${ans.userChoice}</strong>. Correct answer: <strong>${ans.correctChoice}</strong>. ${resultIcon}</p><p><strong>Explanation:</strong> ${q.explanation}</p></div>`;
        });
    },
    runParticles: function() {
        if(document.getElementById('particles-js')) {
            particlesJS("particles-js", {
                particles: { number: { value: 60, density: { enable: true, value_area: 800 } }, color: { value: "#30363d" }, shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, color: "#e8491d", opacity: 0.2, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" } },
                interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } }, modes: { grab: { distance: 140, line_opacity: 0.5 }, push: { particles_nb: 4 } } },
                retina_detect: true,
            });
        }
    }
};
document.addEventListener('DOMContentLoaded', () => quiz.init());
