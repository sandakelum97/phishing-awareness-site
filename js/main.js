// --- COMPLETE QUIZ & TRAINING DATA ---
const allQuizData = {
    phishing: {
        title: "Phishing Quiz",
        training: `<h3>Spotting Phishing Attempts</h3><ul><li><strong>Check the Sender:</strong> Look for misspellings or unofficial domains (e.g., 'support@paypaI.com').</li><li><strong>Look for Errors:</strong> Professional companies proofread. Typos and bad grammar are major red flags.</li><li><strong>Hover, Don't Click:</strong> Always check a link's true destination by hovering over it before you click.</li><li><strong>Sense of Urgency:</strong> Attackers create fake emergencies to make you act without thinking.</li></ul>`,
        questions: [
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> PayPaI Support &lt;support@paypaI.com&gt;\n<strong>Subject:</strong> URGENT: Yore Account is Locked!\n\nWe noticed unusual activity on yore account. Please click to verify:\n<span class="suspicious-link" data-real-url="http://paypaI-login-security.com/verify">Verify Account</span>`, explanation: 'Phishing: Note the misspelling in "PayPaI" (a capital "i") and "yore".' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Amaz0n &lt;winner@giveaway-central.net&gt;\n<strong>Subject:</strong> Congratulations! You've Won a $1000 Gift Card!\n\n<span class="suspicious-link" data-real-url="http://win.giftcard-ama.net/claim">Click here to claim your reward!</span>`, explanation: 'Phishing: The sender isn\'t from Amazon, and the "too good to be true" offer is a classic red flag.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> DHL Express &lt;dhl-track@delivery-notice.com&gt;\n<strong>Subject:</strong> Your package could not be delivered\n\nPlease pay the redelivery fee: <span class="suspicious-link" data-real-url="http://dhl.pay-fee.online/redeliver">Pay Fee Now</span>`, explanation: 'Phishing: Reputable couriers rarely ask for redelivery fees via a generic email link.'},
            { type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Google &lt;no-reply@accounts.google.com&gt;\n<strong>Subject:</strong> Security alert: New sign-in\n\nWe detected a new sign-in to your Google Account on a Windows device. If this was you, you don't need to do anything.`, explanation: 'Legitimate: The sender is from "@accounts.google.com", and it\'s a standard security alert.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> LinkedIn &lt;notification@linkedin-careers.com&gt;\n<strong>Subject:</strong> You have a new connection request\n\nAn HR Manager has sent you a connection request.\n<span class="suspicious-link" data-real-url="http://linkedin.auth-portal.com/login">View Request</span>`, explanation: 'Phishing: The sender domain "linkedin-careers.com" is designed to look real but is fake.'},
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Accounts Payable &lt;invoice@quickbooks-mail.com&gt;\n<strong>Subject:</strong> Overdue Invoice\n\nPayment is due immediately to avoid service interruption.\n<span class="suspicious-link" data-real-url="http://quickbooks.secure-pay.net/inv7823">View Invoice</span>`, explanation: 'Phishing: The sense of urgency is a classic tactic, and the domain is not the official QuickBooks domain.'},
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> IT Service Desk &lt;help@it-support.chesmigroup.com&gt;\n<strong>Subject:</strong> Security Alert: Mandatory Password Update\n\nYour password expires in 6 hours.\n<span class="suspicious-link" data-real-url="http://sso.chesmigroup.pw-update.net/login">https://sso.chesmigroup.com/update-password</span>`, explanation: 'Phishing: The link *text* looks real, but hovering reveals a malicious URL.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> John Doe (CEO) &lt;j.doe@ceo-chesmigroup.com&gt;\n<strong>Subject:</strong> Urgent & Confidential Request\n\nI'm in a conference and need you to process an urgent wire transfer. Please let me know if you can handle this.`, explanation: 'Phishing: This is CEO fraud, using urgency and authority to bypass procedures.'},
            { type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Asana &lt;no-reply@asana.com&gt;\n<strong>Subject:</strong> Jane Smith mentioned you in a task\n\nJane Smith mentioned you in the task "Finalize Q3 Marketing Budget".`, explanation: 'Legitimate: A standard notification from a legitimate third-party service like Asana.' },
            { type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> SharePoint Admin &lt;sharepoint@microsft.com&gt;\n<strong>Subject:</strong> A file was shared with you\n\nYou must re-enter your Microsoft 365 password to view this secure document.\n<span class="suspicious-link" data-real-url="http://sharepoint-online.security-access.io/auth">Open</span>`, explanation: 'Phishing: Note the typo in the sender ("microsft.com"). Legitimate services rarely ask you to re-enter a password from an email link.'}
        ]
    },
    password: {
        title: "Password Security Quiz",
        training: `<h3>Creating a Digital Fortress</h3><ul><li><strong>Length Over All:</strong> A 15+ character password is far stronger than a short, complex one.</li><li><strong>Use a Passphrase:</strong> 'Correct-Horse-Battery-Staple' is easy to remember but very hard to crack.</li><li><strong>MFA is Your Best Friend:</strong> Always enable Multi-Factor Authentication (MFA/2FA). It's the single best way to secure an account.</li><li><strong>Unique for Every Site:</strong> Use a password manager to create and store unique, strong passwords for every single account.</li></ul>`,
        questions: [
            { type: 'mcq', text: "What is the MOST important factor for a strong password?", options: ["Using your pet's name", "Length and complexity", "Changing it every day", "Making it easy to remember"], answer: 1, explanation: "Length is the single most critical factor. A long password is exponentially harder to crack." },
            { type: 'mcq', text: "What does 'MFA' stand for in cybersecurity?", options: ["Maximum Firewall Action", "Multi-Factor Authentication", "Malware-Free Application", "My First Account"], answer: 1, explanation: "Multi-Factor Authentication (MFA) adds a crucial second layer of security, like a code from your phone." },
            { type: 'mcq', text: "Reusing passwords across multiple websites is a huge risk because of:", options: ["Credential Stuffing", "Malware", "Phishing", "It's not a risk"], answer: 0, explanation: "Credential stuffing is when attackers take a leaked password from one site and 'stuff' it into login forms on other major sites (like your bank) to see if it works." },
            { type: 'mcq', text: "What is the primary function of a password manager?", options: ["To sell your passwords", "To securely store and generate unique, complex passwords", "To block websites", "To change your passwords daily"], answer: 1, explanation: "Password managers securely store all your unique passwords, allowing you to use very complex ones without needing to memorize them." },
            { type: 'mcq', text: "Which of the following is the strongest password?", options: ["P@ssw0rd1", "July2025!", "My$on'sBday", "Blue-Ocean-Sleeps-Loudly-7!"], answer: 3, explanation: "Passphrases (multiple random words) are extremely long and hard to guess, making them very strong, especially with added complexity." },
            { type: 'mcq', text: "Someone calls and asks for your password to 'fix an urgent IT issue'. What should you do?", options: ["Give it to them, it's an emergency", "Ask for their name and call them back at the official IT helpdesk number", "Ask them to email you instead", "Tell them your password hint"], answer: 1, explanation: "Never give your password over the phone. A real IT professional will never ask for it. Always verify the person's identity through an official channel." },
            { type: 'mcq', text: "Is it safe to let your web browser (e.g., Chrome) save your passwords?", options: ["Yes, it's the most secure method", "It's convenient, but less secure than a dedicated password manager", "No, browsers never save passwords", "Only for unimportant sites"], answer: 1, explanation: "While convenient, browser password stores can be a target for malware. A dedicated, encrypted password manager is a more secure solution." },
            { type: 'mcq', text: "What is 'Shoulder Surfing'?", options: ["A new social media app", "Hacking into Wi-Fi networks", "Physically looking over someone's shoulder to see their password", "A type of advanced phishing"], answer: 2, explanation: "This is a low-tech but effective physical security risk. Always be aware of your surroundings when typing in passwords in public or in the office." },
            { type: 'mcq', text: "If a website forces you to change your password every 90 days, this practice is:", options: ["The best security practice", "An outdated practice that can lead to weaker passwords", "Required by international law", "A way to test your memory"], answer: 1, explanation: "Many security bodies, including NIST, now recommend against forced periodic password changes, as it often leads users to create simple, predictable patterns (e.g., 'Summer2025!', 'Fall2025!')." },
            { type: 'mcq', text: "What is a 'brute-force' attack?", options: ["An angry email", "An attacker trying every possible password combination until they find the right one", "Breaking a server with a hammer", "A type of phishing"], answer: 1, explanation: "A brute-force attack is like trying every key on a keychain. This is why password length and complexity are so important—they make the number of 'keys' astronomically large." }
        ]
    },
    ai: {
        title: "AI Security Quiz",
        training: `<h3>Navigating AI Safely</h3><ul><li><strong>Treat AI as Public:</strong> Never paste confidential, personal, or company-sensitive data into public AI chatbots like ChatGPT or Gemini.</li><li><strong>Verify, Verify, Verify:</strong> AI can 'hallucinate' and make up facts, or be used to create convincing fake content (deepfakes). Always verify critical information from a trusted source.</li><li><strong>Recognize AI Phishing:</strong> Attackers use AI to write flawless, highly convincing phishing emails at a massive scale. Be more vigilant than ever.</li><li><strong>Understand the Risks:</strong> Be aware of prompt injection (tricking the AI) and data poisoning (corrupting the AI).</li></ul>`,
        questions: [
            { type: 'mcq', text: "What is the biggest risk of pasting confidential company data into a public AI chatbot?", options: ["The AI might get confused", "It's perfectly safe", "The AI company might use your data for training or it could be exposed in a breach", "It uses too much internet bandwidth"], answer: 2, explanation: "Public AI tools may use your inputs to train their models. That sensitive data could then be part of a future data leak, exposing company secrets." },
            { type: 'mcq', text: "A 'prompt injection' attack is when someone...", options: ["Injects a virus into the AI's code", "Tricks an AI with clever text to bypass its safety rules or reveal hidden info", "Spills coffee on the AI server", "Asks the AI too many questions"], answer: 1, explanation: "Prompt injection is like a social engineering attack against an AI, manipulating it to perform unintended actions or reveal its original programming." },
            { type: 'mcq', text: "What is 'AI data poisoning'?", options: ["When an AI gives a wrong answer", "Intentionally feeding an AI bad or malicious data during training to corrupt its results", "The process of cleaning AI data", "A type of AI-powered antivirus"], answer: 1, explanation: "Data poisoning is a serious attack where an adversary corrupts the training data to make the AI unreliable, biased, or vulnerable." },
            { type: 'mcq', text: "A 'deepfake' refers to:", options: ["A very deep thought from an AI", "A fake social media profile", "AI-generated video or audio that realistically fakes someone's appearance or voice", "A fundamental error in an AI's logic"], answer: 2, explanation: "Deepfakes can be used for misinformation or to create fake videos of executives authorizing fraudulent transactions, posing a major security risk." },
            { type: 'mcq', text: "An AI 'hallucination' is when an AI:", options: ["Becomes self-aware", "Confidently states incorrect or fabricated information as if it were fact", "Processes images", "Refuses to answer a question"], answer: 1, explanation: "Hallucinations are a key weakness of current AIs. Never trust AI-generated information for critical decisions without verifying it from a primary source." },
            { type: 'mcq', text: "How can attackers use AI to enhance phishing attacks?", options: ["By making emails prettier", "By creating grammatically perfect, highly personalized emails at scale", "By slowing down email servers", "They cannot use AI for phishing"], answer: 1, explanation: "AI removes the classic red flag of bad grammar and allows attackers to create convincing, targeted emails in any language instantly, making them harder to spot." },
            { type: 'mcq', text: "What is an 'adversarial example' in the context of AI?", options: ["A good example for teaching", "A photo that has been slightly altered to trick an AI into misidentifying it", "An AI that argues with you", "An example of AI breaking the law"], answer: 1, explanation: "For example, changing a few pixels in a photo of a cat could make an AI confidently identify it as a car. This shows that AI perception is not like human perception." },
            { type: 'mcq', text: "Is it a good idea to use an AI tool to summarize a confidential internal report?", options: ["Yes, it's a great time-saver", "Only if the AI runs entirely on your own computer or a secure company server", "Yes, all AI tools are secure", "No, it's too slow"], answer: 1, explanation: "Using public AI tools for this is a data leak risk. However, if the company provides a secure, internal AI tool, it can be a safe and powerful productivity booster." },
            { type: 'mcq', text: "If you receive a voice message from your CEO asking for an urgent money transfer, what new AI-related risk should you consider?", options: ["That the CEO used AI to write the message", "That it might be an AI-generated voice clone (voice deepfake)", "That AI might intercept the message", "There are no new AI risks here"], answer: 1, explanation: "Voice cloning technology is now accessible enough for attackers to create realistic deepfake audio to impersonate executives or colleagues in vishing (voice phishing) attacks." },
            { type: 'mcq', text: "Bias in AI refers to:", options: ["The AI's preference for certain colors", "When an AI's results are systematically prejudiced due to flawed training data or algorithms", "The physical tilt of the AI server", "When an AI is politically opinionated"], answer: 1, explanation: "If an AI is only trained on data from one demographic, its decisions may be unfair or inaccurate for other demographics. This is a major ethical and operational risk." }
        ]
    },
    social: {
        title: "Social Engineering Quiz",
        training: `<h3>The Art of Deception</h3><p>Social engineering is the psychological manipulation of people into performing actions or divulging confidential information.</p><ul><li><strong>Pretexting:</strong> An attacker invents a scenario (a pretext) to gain your trust. E.g., "I'm from IT, I need your password for an urgent upgrade."</li><li><strong>Baiting:</strong> Luring you with a tempting offer, like a free movie download or a "found" USB drive, that contains malware.</li><li><strong>Vishing & Smishing:</strong> Phishing done via Voice calls (Vishing) or SMS text messages (Smishing).</li><li><strong>Tailgating:</strong> Following an authorized person into a secure area. Always ensure the door closes behind you.</li></ul>`,
        questions: [
            { type: 'mcq', text: "An attacker calls you pretending to be from the IT helpdesk, saying they need your password to fix an urgent error. This is an example of:", options: ["Tailgating", "Pretexting", "Baiting", "A normal IT procedure"], answer: 1, explanation: "Pretexting is creating a fabricated scenario or 'pretext' to manipulate a victim into giving up information they otherwise wouldn't." },
            { type: 'mcq', text: "You find a USB drive labeled 'Executive Salaries Q4' in the office parking lot. What should you do?", options: ["Plug it into your computer to see who it belongs to", "Ignore it", "Give it to the security or IT department immediately", "Plug it into a colleague's computer"], answer: 2, explanation: "This is a classic 'baiting' attack. The USB drive is likely loaded with malware that will infect the first computer it's plugged into. Never plug in unknown media." },
            { type: 'mcq', text: "You receive an SMS text message from your bank with a link to 'verify a recent transaction'. This is known as:", options: ["Vishing", "A bank transfer", "Smishing", "A friendly reminder"], answer: 2, explanation: "Smishing is simply phishing conducted over SMS. The same rules apply: be wary of urgent requests and suspicious links." },
            { type: 'mcq', text: "An attacker offers you a free software license in exchange for your network login credentials. This tactic is called:", options: ["Quid Pro Quo", "Baiting", "Tailgating", "A good deal"], answer: 0, explanation: "'Quid Pro Quo' means 'something for something'. The attacker offers a (usually fake) benefit in exchange for information or access." },
            { 'type': 'mcq', 'text': "A person without an ID badge holds a heavy box and asks you to hold the secure door open for them. This is an attempt at:", 'options': ["Being polite", "Tailgating", "A fire drill", "Quid Pro Quo"], 'answer': 1, 'explanation': "Tailgating (or piggybacking) is following an authorized person into a restricted area. You should always ensure only authorized personnel enter." },
            { 'type': 'mcq', 'text': "What is the primary goal of a social engineering attack?", 'options': ["To test security systems", "To make friends", "To build rapport with employees", "To manipulate a person into breaking security procedures"], 'answer': 3, 'explanation': "Social engineering bypasses technical defenses by targeting the 'human element'. It exploits trust, urgency, and fear to achieve its goal." },
            { 'type': 'mcq', 'text': "An attacker researches your company's public information and key employees to make their phishing email more believable. This is called:", 'options': ["Spear Phishing", "Generic Phishing", "Spam", "Marketing"], 'answer': 0, 'explanation': "Spear phishing is a highly targeted attack that uses specific information about the victim or their organization to appear much more legitimate." },
            { 'type': 'mcq', 'text': "You get a call from someone claiming to be from Microsoft, stating your computer is infected and they need remote access to fix it. This is:", 'options': ["Excellent customer service", "A common tech support scam (vishing)", "A standard Windows update", "A legitimate security check"], 'answer': 1, 'explanation': "This is a widespread vishing (voice phishing) scam. Microsoft will never cold-call you to fix a problem or ask for remote access." },
            { 'type': 'mcq', 'text': "Which human emotion is most commonly exploited by social engineers?", 'options': ["Joy", "Calmness", "Urgency and Fear", "Boredom"], 'answer': 2, 'explanation': "Creating a sense of urgency ('This must be done NOW!') or fear ('Your account will be deleted!') makes people act without thinking critically." },
            { 'type': 'mcq', 'text': "The best defense against social engineering is:", 'options': ["A strong firewall", "A healthy sense of skepticism and a verification process", "Never answering your phone", "Having complex passwords"], 'answer': 1, 'explanation': "While technical controls help, the ultimate defense is a well-trained, cautious user. Always be skeptical of unsolicited requests and verify them through a separate, trusted channel." }
        ]
    }
};

const particleConfig = {
    secure: { particles: { number: { value: 60 }, color: { value: "#28a745" }, line_linked: { color: "#28a745", opacity: 0.2 }, move: { direction: "top", speed: 1 } } },
    warning: { particles: { number: { value: 80 }, color: { value: "#f7ca18" }, line_linked: { color: "#f7ca18", opacity: 0.3 }, move: { direction: "none", speed: 2 } } },
    danger: { particles: { number: { value: 100 }, color: { value: "#dc3545" }, line_linked: { color: "#dc3545", opacity: 0.4 }, move: { direction: "bottom", speed: 3 } } },
    hub: { particles: { number: { value: 40 }, color: { value: "#30363d" }, line_linked: { color: "#e8491d", opacity: 0.2 }, move: { direction: "none", speed: 2 } } }
};
const baseParticleConfig = { particles: { shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, width: 1 }, move: { enable: true, random: true, out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" } } }, retina_detect: true };

const quizController = {
    quizType: null, quizData: [], currentQuestionIndex: 0, score: 0, securityLevel: 100,
    init() {
        const bodyEl = document.body;
        const pageType = bodyEl.getAttribute('data-quiz-type') || (window.location.pathname.includes('results.html') ? 'results' : 'hub');
        this.quizType = pageType;
        if (pageType === 'hub') { this.runParticles(particleConfig.hub); }
        else if (pageType === 'results') { this.showResults(); }
        else {
            this.quizData = allQuizData[this.quizType];
            if (this.quizData) this.showTraining();
        }
    },
    showTraining() {
        const modal = document.getElementById('trainingModal');
        const trainingData = allQuizData[this.quizType].training;
        document.getElementById('trainingTitle').innerText = allQuizData[this.quizType].title;
        document.getElementById('trainingContent').innerHTML = trainingData;
        modal.classList.add('show');
        document.getElementById('startQuizBtn').onclick = () => {
            modal.classList.remove('show');
            document.querySelector('.container').style.visibility = 'visible';
            this.startQuiz();
        };
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
        document.getElementById('questionArea').innerHTML = `<div class="email-preview">${q.emailContent}</div><p style="text-align:center; font-weight:bold; margin-top:15px;">Is this email Legit or Phishing?</p>`;
        const buttonsContainer = document.querySelector('.answer-buttons');
        buttonsContainer.innerHTML = `<button class="btn" onclick="quizController.checkAnswer(false)">✅ Legit</button><button class="btn" onclick="quizController.checkAnswer(true)">🚫 Phishing</button>`;
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
        let isCorrect = (q.type === 'phishing-email') ? (userAnswer === q.isPhishing) : (userAnswer === q.answer);
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
        if (typeof particlesJS === 'undefined') return;
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
