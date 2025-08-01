// Data for the 10 quiz questions (Easy -> Medium -> Hard)
const quizData = [
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> PayPaI Support &lt;support@paypaI.com&gt;\n<strong>Subject:</strong> URGENT: Yore Account is Locked!\n\nDear Customer,\n\nWe noticed some unusual activity on yore account. For your safety, we have temporarilly locked it.\n\nPlease click here to verify you're identity and unlock your account: \n<span class="suspicious-link" data-link="true">http://paypaI-login-security-check.com/verify</span>`, explanation: 'This email is phishing. Notice the misspelling in the sender ("PayPaI" with a capital "i") and body ("yore"). The link also goes to a non-official domain.' },
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> Amaz0n &lt;winner@giveaway-central.net&gt;\n<strong>Subject:</strong> Congratulations! You've Won a $1000 Gift Card!\n\nHello lucky winner,\n\nYou have been selected to receive a FREE $1000 Amazon Gift Card! To claim you're prize, just click the link below.\n<span class="suspicious-link" data-link="true">Click here to claim your reward!</span>`, explanation: 'This is a classic phishing scam. The sender\'s address is not from Amazon, and the "too good to be true" offer is a major red flag.' },
    { level: 'Easy', isPhishing: true, emailContent: `<strong>From:</strong> Your Bank &lt;security.alert@123-finances.org&gt;\n<strong>Subject:</strong> Password Reset Request\n\nDear account holder,\n\nSomeone requested to reset your password. If it WAS you, click here:\n<span class="suspicious-link" data-link="true">http://your-bank.reset-pw.com/new</span>`, explanation: 'Phishing. The generic greeting and the suspicious sender address are key giveaways. The sense of urgency is meant to make you act without thinking.' },
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> Dropbox &lt;no-reply@dropboxmail.com&gt;\n<strong>Subject:</strong> John Doe has shared a file with you\n\nHi,\n\nJohn Doe has shared "Q3_Financial_Report.pdf" with you.\n\n<span class="suspicious-link" data-link="true">View File</span>\n\nThanks,\nThe Dropbox Team`, explanation: 'This is phishing. While the email looks convincing, the link would lead to a malicious site, not dropbox.com. Always hover to verify links.' },
    { level: 'Medium', isPhishing: false, emailContent: `<strong>From:</strong> Netflix &lt;info@netflix.com&gt;\n<strong>Subject:</strong> New sign-in to your account\n\nHi User,\n\nWe detected a new sign-in to your Netflix account from a new device (Chrome on Windows).\n\nIf this was you, you can ignore this email. If this wasn't you, please <a href="https://netflix.com/password" target="_blank" rel="noopener noreferrer">change your password</a>.\n\nThanks,\nThe Netflix Team`, explanation: 'This email is legitimate. The sender is from the official "@netflix.com" domain, and the link points to the real Netflix website. This is a standard security notification.' },
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> Microsoft 365 Admin &lt;no-reply@microsoft-security.online&gt;\n<strong>Subject:</strong> Action Required: Your mailbox storage is almost full\n\nYour mailbox is 98% full. To avoid service disruption, please click below to increase your quota.\n\n<span class="suspicious-link" data-link="true">Increase Mailbox Storage</span>\n\nFailure to do so will result in suspension of your email account.`, explanation: 'This is phishing. The sender domain "@microsoft-security.online" is not an official Microsoft domain. The threat of account suspension is a common pressure tactic.' },
    { level: 'Medium', isPhishing: true, emailContent: `<strong>From:</strong> Apple Support &lt;support@apple-id.co&gt;\n<strong>Subject:</strong> Your Apple ID has been locked for security reasons\n\nDear Customer,\n\nYour Apple ID has been locked. Please verify your identity to unlock it.\n<span class="suspicious-link" data-link="true">Verify your account now</span>\n\nIf you do not verify within 24 hours, your account will be permanently disabled.`, explanation: 'Phishing attempt. The sender domain "@apple-id.co" is designed to look real but is not official. The threat of permanent disabling is a strong pressure tactic.' },
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> Human Resources &lt;hr@your-company-intranet.com&gt;\n<strong>Subject:</strong> Important Update: Annual Bonus Policy\n\nTeam,\n\nThere has been an update to the annual bonus policy. All employees must review and acknowledge the document on our SharePoint.\n\n<span class="suspicious-link" data-link="true">Access Policy Document Here</span>\n\nThis must be completed by EOD Friday.`, explanation: 'This is spear phishing. It uses internal-sounding language and mimics a corporate process. The domain is fake, and the link would lead to a fake login page to steal credentials.' },
    { level: 'Hard', isPhishing: true, emailContent: `<strong>From:</strong> IT Service Desk &lt;help@it-support.your-company.com&gt;\n<strong>Subject:</strong> Security Alert: Mandatory Password Update\n\nDear Employee,\n\nWe are requiring all employees to update their passwords. This is mandatory. Your old password will expire in 6 hours.\n\n<span class="suspicious-link" data-link="true">https://sso.your-company.com/update-password</span>\n\nThank you,\nIT Service Desk`, explanation: 'This is a tricky phish. The link text itself looks legitimate, but the actual hyperlink would point to a malicious domain. Always inspect a link\'s true destination.' },
    { level: 'Hard', isPhishing: false, emailContent: `<strong>From:</strong> LinkedIn &lt;jobs-noreply@linkedin.com&gt;\n<strong>Subject:</strong> You appeared in 3 searches this week\n\nHi User,\n\nHere's your weekly update:\n- 3 profile views\n- 1 new follower\n\nJobs you may be interested in:\n- Senior Developer at TechCorp\n\n<a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Go to your feed</a>`, explanation: 'This email is legitimate. The sender domain, content, and links are all authentic. It\'s important to recognize real emails to avoid over-caution.' }
];

const quiz = {
    currentQuestionIndex: 0, score: 0, userAnswers: [],

    init: function() {
        if (document.getElementById('quiz-container')) { this.resetQuiz(); this.loadQuestion(); this.setupModal(); }
        if (document.getElementById('results-content')) { this.loadResults(); }
    },
    resetQuiz: function() { this.currentQuestionIndex = 0; this.score = 0; this.userAnswers = []; localStorage.clear(); },
    loadQuestion: function() {
        const q = quizData[this.currentQuestionIndex];
        document.getElementById('questionCounter').textContent = `Question ${this.currentQuestionIndex + 1} of ${quizData.length}`;
        document.getElementById('emailPreview').innerHTML = q.emailContent;
        document.getElementById('progressBar').style.width = `${((this.currentQuestionIndex + 1) / quizData.length) * 100}%`;
        document.getElementById('feedback').style.display = 'none';
        document.querySelector('.answer-buttons').style.display = 'flex';
        document.querySelectorAll('.suspicious-link').forEach(link => link.addEventListener('click', (e) => { e.preventDefault(); this.showLinkWarning(); }));
    },
    checkAnswer: function(userIsPhishing) {
        const q = quizData[this.currentQuestionIndex];
        const isCorrect = userIsPhishing === q.isPhishing;
        const feedbackEl = document.getElementById('feedback');
        if (isCorrect) { this.score++; feedbackEl.className = 'feedback correct'; document.getElementById('feedback-title').innerHTML = `<i class="fas fa-check-circle"></i> Correct!`; }
        else { feedbackEl.className = 'feedback incorrect'; document.getElementById('feedback-title').innerHTML = `<i class="fas fa-times-circle"></i> Incorrect.`; }
        document.getElementById('feedback-text').innerHTML = q.explanation;
        this.userAnswers.push({ questionIndex: this.currentQuestionIndex, userChoice: userIsPhishing ? 'Phishing' : 'Legit', correctChoice: q.isPhishing ? 'Phishing' : 'Legit', isCorrect: isCorrect });
        document.querySelector('.answer-buttons').style.display = 'none';
        feedbackEl.style.display = 'block';
        const nextButton = document.getElementById('nextButton');
        if (this.currentQuestionIndex === quizData.length - 1) { nextButton.textContent = 'Finish Quiz'; nextButton.onclick = () => this.finishQuiz(); }
        else { nextButton.textContent = 'Next Question'; nextButton.onclick = () => this.nextQuestion(); }
    },
    nextQuestion: function() { this.currentQuestionIndex++; this.loadQuestion(); },
    finishQuiz: function() { localStorage.setItem('quizScore', this.score); localStorage.setItem('userAnswers', JSON.stringify(this.userAnswers)); window.location.href = 'results.html'; },
    setupModal: function() {
        const modal = document.getElementById('linkWarningModal');
        document.querySelector('.close-button').onclick = () => modal.style.display = 'none';
        window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
    },
    showLinkWarning: function() { document.getElementById('linkWarningModal').style.display = 'block'; },
    loadResults: function() {
        const score = localStorage.getItem('quizScore'), userAnswers = JSON.parse(localStorage.getItem('userAnswers'));
        if (score === null || !userAnswers) { window.location.href = 'index.html'; return; }
        document.getElementById('finalScore').textContent = `${score} / ${quizData.length}`;
        let scoreMessage = "There's room for improvement. Reviewing these examples is a great first step! 💪";
        if (score >= 9) scoreMessage = "Excellent work! You're a phishing detection expert. 🏆";
        else if (score >= 7) scoreMessage = "Great job! You have a good eye for suspicious emails. 👍";
        else if (score >= 5) scoreMessage = "Good effort. Review the explanations to sharpen your skills. 👀";
        document.getElementById('scoreMessage').textContent = scoreMessage;
        const reviewContainer = document.getElementById('questionReviewContainer');
        reviewContainer.innerHTML = '';
        userAnswers.forEach(ans => {
            const q = quizData[ans.questionIndex];
            const resultIcon = ans.isCorrect ? '<span class="review-answer-correct"><i class="fas fa-check"></i> Correct</span>' : '<span class="review-answer-incorrect"><i class="fas fa-times"></i> Incorrect</span>';
            reviewContainer.innerHTML += `<div class="review-item"><h4>Question ${ans.questionIndex + 1} (${q.level})</h4><div class="email-content">${q.emailContent}</div><p>Your answer: <strong>${ans.userChoice}</strong>. Correct answer: <strong>${q.correctChoice}</strong>. ${resultIcon}</p><p><strong>Explanation:</strong> ${q.explanation}</p></div>`;
        });
    }
};
document.addEventListener('DOMContentLoaded', () => quiz.init());
