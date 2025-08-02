// --- COMPLETE & EXPANDED QUIZ/TRAINING DATA (15+ Questions per module) ---
const allQuizData = {
    phishing: {
        title: "Phishing Quiz",
        training: `<h3>Spotting Phishing Attempts</h3><ul><li><strong>Check the Sender:</strong> Look for misspellings or unofficial domains (e.g., 'support@paypaI.com').</li><li><strong>Look for Errors:</strong> Professional companies proofread. Typos and bad grammar are major red flags.</li><li><strong>Hover, Don't Click:</strong> Always check a link's true destination by hovering over it before you click.</li><li><strong>Sense of Urgency:</strong> Attackers create fake emergencies to make you act without thinking.</li></ul>`,
        questions: [
            // Easy
            { difficulty: 'easy', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> PayPaI Support &lt;support@paypaI.com&gt;\n<strong>Subject:</strong> URGENT: Yore Account is Locked!\n\nWe noticed unusual activity. Please click to verify:\n<span class="suspicious-link" data-real-url="http://paypaI-login-security.com/verify">Verify Account</span>`, explanation: 'Phishing: Note the misspelling in "PayPaI" (a capital "i") and "yore".' },
            { difficulty: 'easy', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Amaz0n &lt;winner@giveaway-central.net&gt;\n<strong>Subject:</strong> Congratulations! You've Won a $1000 Gift Card!\n\n<span class="suspicious-link" data-real-url="http://win.giftcard-ama.net/claim">Click here to claim your reward!</span>`, explanation: 'Phishing: The sender isn\'t from Amazon, and the "too good to be true" offer is a classic red flag.' },
            { difficulty: 'easy', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> DHL Express &lt;dhl-track@delivery-notice.com&gt;\n<strong>Subject:</strong> Your package could not be delivered\n\nPlease pay the redelivery fee: <span class="suspicious-link" data-real-url="http://dhl.pay-fee.online/redeliver">Pay Fee Now</span>`, explanation: 'Phishing: Reputable couriers rarely ask for redelivery fees via a generic email link.'},
            { difficulty: 'easy', type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Your Manager &lt;manager@chesmiconsolidated.com&gt;\n<strong>Subject:</strong> Quick question\n\nHi, can you please send me the Q3 sales report when you have a moment? Thanks.`, explanation: 'Legitimate: This is a standard internal request. The sender address appears correct and there are no suspicious links or urgent demands.'},
            // Medium
            { difficulty: 'medium', type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Google &lt;no-reply@accounts.google.com&gt;\n<strong>Subject:</strong> Security alert: New sign-in\n\nWe detected a new sign-in to your Google Account on a Windows device. If this was you, you don't need to do anything.`, explanation: 'Legitimate: The sender is from "@accounts.google.com", and it\'s a standard security alert.' },
            { difficulty: 'medium', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> LinkedIn &lt;notification@linkedin-careers.com&gt;\n<strong>Subject:</strong> You have a new connection request\n\nAn HR Manager has sent you a connection request.\n<span class="suspicious-link" data-real-url="http://linkedin.auth-portal.com/login">View Request</span>`, explanation: 'Phishing: The sender domain "linkedin-careers.com" is designed to look real but is fake.'},
            { difficulty: 'medium', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Accounts Payable &lt;invoice@quickbooks-mail.com&gt;\n<strong>Subject:</strong> Overdue Invoice\n\nPayment is due immediately to avoid service interruption.\n<span class="suspicious-link" data-real-url="http://quickbooks.secure-pay.net/inv7823">View Invoice</span>`, explanation: 'Phishing: The sense of urgency is a classic tactic, and the domain is not the official QuickBooks domain.'},
            { difficulty: 'medium', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> IT Service Desk &lt;help@it-support.chesmigroup.com&gt;\n<strong>Subject:</strong> Security Alert: Mandatory Password Update\n\nYour password expires in 6 hours.\n<span class="suspicious-link" data-real-url="http://sso.chesmigroup.pw-update.net/login">https://sso.chesmigroup.com/update-password</span>`, explanation: 'Phishing: The link *text* looks real, but hovering reveals a malicious URL.' },
            { difficulty: 'medium', type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Microsoft 365 &lt;message-center@microsoft.com&gt;\n<strong>Subject:</strong> Weekly Digest: Your Microsoft 365 usage\n\nHi User,\nHere's your weekly summary of activity in SharePoint and Teams. Visit the admin center for more details.`, explanation: 'Legitimate: This is a typical automated report from a valid Microsoft domain with no suspicious links or urgent calls to action.'},
            // Hard
            { difficulty: 'hard', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> John Doe (CEO) &lt;j.doe@ceo-chesmigroup.com&gt;\n<strong>Subject:</strong> Urgent & Confidential Request\n\nI'm in a conference and need you to process an urgent wire transfer. Please let me know if you can handle this.`, explanation: 'Phishing: This is CEO fraud, using urgency and authority to bypass procedures.'},
            { difficulty: 'hard', type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> Asana &lt;no-reply@asana.com&gt;\n<strong>Subject:</strong> Jane Smith mentioned you in a task\n\nJane Smith mentioned you in the task "Finalize Q3 Marketing Budget".`, explanation: 'Legitimate: A standard notification from a legitimate third-party service like Asana.' },
            { difficulty: 'hard', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> SharePoint Admin &lt;sharepoint@microsft.com&gt;\n<strong>Subject:</strong> A file was shared with you\n\nYou must re-enter your Microsoft 365 password to view this secure document.\n<span class="suspicious-link" data-real-url="http://sharepoint-online.security-access.io/auth">Open</span>`, explanation: 'Phishing: Note the typo in the sender ("microsft.com"). Legitimate services rarely ask you to re-enter a password from an email link.'},
            { difficulty: 'hard', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Human Resources &lt;hr@chesmiconsoIidated.com&gt;\n<strong>Subject:</strong> Important: Updated Employee Handbook\n\nAll employees must acknowledge the updated handbook by EOD. Please review the attached document and sign the acknowledgment form.`, explanation: 'Phishing: A very subtle misspelling in the domain ("consoIidated" with a capital "i"). The attachment would likely contain malware.'},
            { difficulty: 'hard', type: 'phishing-email', isPhishing: false, emailContent: `<strong>From:</strong> DocuSign &lt;dse@docusign.net&gt;\n<strong>Subject:</strong> Completed: Your document is signed\n\nAll parties have now signed "MSA-Vendor-Agreement.pdf". A completed copy is attached for your records.`, explanation: 'Legitimate: This is a standard notification from the correct DocuSign domain. In a real scenario, you would only trust this if you were expecting a document.'},
            { difficulty: 'hard', type: 'phishing-email', isPhishing: true, emailContent: `<strong>From:</strong> Finance Department &lt;finance@chesmiconsolidated.com&gt;\n<strong>Subject:</strong> Your recent expense report\n\nThere was an issue processing your expense report from last week. Please click here to review the errors and resubmit:\n<span class="suspicious-link" data-real-url="http://expenses.corporate-login.net/view">Review Report</span>`, explanation: 'Phishing: This is a highly targeted spear phishing attack. While the sender address looks real (it can be spoofed), the link destination is a fake portal designed to steal credentials.'}
        ]
    },
    password: {
        title: "Password Security Quiz",
        training: `<h3>Creating a Digital Fortress</h3><ul><li><strong>Length Over All:</strong> A 15+ character password is far stronger than a short, complex one.</li><li><strong>Use a Passphrase:</strong> 'Correct-Horse-Battery-Staple' is easy to remember but very hard to crack.</li><li><strong>MFA is Your Best Friend:</strong> Always enable Multi-Factor Authentication (MFA/2FA). It's the single best way to secure an account.</li><li><strong>Unique for Every Site:</strong> Use a password manager to create and store unique, strong passwords for every single account.</li></ul>`,
        questions: [
            // Easy
            { difficulty: 'easy', type: 'mcq', text: "What is the MOST important factor for a strong password?", answers: [{text:"Length and complexity", correct:true}, {text:"Using your pet's name", correct:false}, {text:"Changing it every day", correct:false}, {text:"Making it easy to remember", correct:false}], explanation: "Length is the single most critical factor. A long password is exponentially harder to crack." },
            { difficulty: 'easy', type: 'mcq', text: "What does 'MFA' stand for in cybersecurity?", answers: [{text:"Multi-Factor Authentication", correct:true}, {text:"Maximum Firewall Action", correct:false}, {text:"Malware-Free Application", correct:false}, {text:"My First Account", correct:false}], explanation: "Multi-Factor Authentication (MFA) adds a crucial second layer of security, like a code from your phone." },
            { difficulty: 'easy', type: 'mcq', text: "Which of the following is the weakest password?", answers: [{text:"MyPassword123", correct:true}, {text:"Blue-Ocean-Sleeps-Loudly-7!", correct:false}, {text:"j*pL2@n&c#Vq", correct:false}, {text:"AvocadoSunlightTreeDoor", correct:false}], explanation: "Common words, names, or predictable number sequences are very weak and easy to guess." },
            { difficulty: 'easy', type: 'mcq', text: "A password manager is a tool used to:", answers: [{text:"Securely store your passwords", correct:true}, {text:"Share passwords with friends", correct:false}, {text:"Create computer viruses", correct:false}, {text:"Browse the internet", correct:false}], explanation: "A password manager's primary job is to act as a secure vault for all your unique and complex passwords." },
            // Medium
            { difficulty: 'medium', type: 'mcq', text: "Reusing passwords across multiple websites is a huge risk because of:", answers: [{text:"Credential Stuffing", correct:true}, {text:"Malware", correct:false}, {text:"Phishing", correct:false}, {text:"It's not a risk", correct:false}], explanation: "Credential stuffing is when attackers take a leaked password from one site and 'stuff' it into login forms on other major sites to see if it works." },
            { difficulty: 'medium', type: 'mcq', text: "Which of the following is the best example of a passphrase?", answers: [{text:"Correct-Horse-Battery-Staple", correct:true}, {text:"P@ssword!", correct:false}, {text:"My$on'sBday", correct:false}, {text:"12345678", correct:false}], explanation: "A passphrase is a sequence of words. They are extremely long and hard to guess, making them very strong." },
            { difficulty: 'medium', type: 'mcq', text: "Someone calls and asks for your password to 'fix an urgent IT issue'. What should you do?", answers: [{text:"Ask for their name and call them back at the official IT helpdesk number", correct:true}, {text:"Give it to them, it's an emergency", correct:false}, {text:"Ask them to email you instead", correct:false}, {text:"Tell them your password hint", correct:false}], explanation: "Never give your password over the phone. A real IT professional will never ask for it. Always verify the person's identity through an official channel." },
            { difficulty: 'medium', type: 'mcq', text: "Is it safe to let your web browser (e.g., Chrome) save your passwords?", answers: [{text:"It's convenient, but less secure than a dedicated password manager", correct:true}, {text:"Yes, it's the most secure method", correct:false}, {text:"No, browsers never save passwords", correct:false}, {text:"Only for unimportant sites", correct:false}], explanation: "While convenient, browser password stores can be a target for malware. A dedicated, encrypted password manager is a more secure solution." },
            { difficulty: 'medium', type: 'mcq', text: "If you receive a password reset email you didn't request, you should:", answers: [{text:"Ignore it and delete it", correct:true}, {text:"Click the link to make sure it's fake", correct:false}, {text:"Forward it to a friend", correct:false}, {text:"Reply and say it wasn't you", correct:false}], explanation: "Unsolicited password reset emails are almost always phishing attempts. The safest action is to simply delete it. If you're concerned, go to the website directly (don't use the link) to check your account." },
            // Hard
            { difficulty: 'hard', type: 'mcq', text: "What is 'Shoulder Surfing'?", answers: [{text:"Physically looking over someone's shoulder to see their password", correct:true}, {text:"A new social media app", correct:false}, {text:"Hacking into Wi-Fi networks", correct:false}, {text:"A type of advanced phishing", correct:false}], explanation: "This is a low-tech but effective physical security risk. Always be aware of your surroundings when typing in passwords in public or in the office." },
            { difficulty: 'hard', type: 'mcq', text: "If a website forces you to change your password every 90 days, this practice is:", answers: [{text:"An outdated practice that can lead to weaker passwords", correct:true}, {text:"The best security practice", correct:false}, {text:"Required by international law", correct:false}, {text:"A way to test your memory", correct:false}], explanation: "Many security bodies, including NIST, now recommend against forced periodic password changes, as it often leads users to create simple, predictable patterns (e.g., 'Summer2025!', 'Fall2025!')." },
            { difficulty: 'hard', type: 'mcq', text: "What is a 'brute-force' attack?", answers: [{text:"An attacker trying every possible password combination", correct:true}, {text:"An angry email", correct:false}, {text:"Breaking a server with a hammer", correct:false}, {text:"A type of phishing", correct:false}], explanation: "A brute-force attack is like trying every key on a keychain. This is why password length is so important—it makes the number of 'keys' astronomically large." },
            { difficulty: 'hard', type: 'mcq', text: "A 'dictionary attack' is a type of brute-force attack that:", answers: [{text:"Uses a list of common words and phrases", correct:true}, {text:"Tries every single letter and number", correct:false}, {text:"Looks up your password in a dictionary", correct:false}, {text:"Only works on non-English passwords", correct:false}], explanation: "Dictionary attacks are efficient because so many people use common words. This is why 'P@ssw0rd1' is weak, but 'Blue-Ocean-Sleeps-Loudly-7!' is strong." },
            { difficulty: 'hard', type: 'mcq', text: "What is a key benefit of a 'salt' in password hashing?", answers: [{text:"It ensures two users with the same password have different hashes", correct:true}, {text:"It makes the password taste better", correct:false}, {text:"It encrypts the password twice", correct:false}, {text:"It adds extra length to the password", correct:false}], explanation: "A salt is a random string added to a password before hashing. It prevents attackers from using pre-computed 'rainbow tables' to crack entire databases of passwords at once." },
            { difficulty: 'hard', type: 'mcq', text: "What is the most secure form of Multi-Factor Authentication (MFA)?", answers: [{text:"A physical security key (e.g., YubiKey)", correct:true}, {text:"An SMS text message code", correct:false}, {text:"An email link", correct:false}, {text:"A secret question", correct:false}], explanation: "Physical keys are the gold standard as they are immune to phishing and SIM-swapping attacks that can compromise SMS-based MFA." }
        ]
    },
    ai: {
        title: "AI Security Quiz",
        training: `<h3>Navigating AI Safely</h3><ul><li><strong>Treat AI as Public:</strong> Never paste confidential, personal, or company-sensitive data into public AI chatbots like ChatGPT or Gemini.</li><li><strong>Verify, Verify, Verify:</strong> AI can 'hallucinate' and make up facts, or be used to create convincing fake content (deepfakes). Always verify critical information from a trusted source.</li><li><strong>Recognize AI Phishing:</strong> Attackers use AI to write flawless, highly convincing phishing emails at a massive scale. Be more vigilant than ever.</li><li><strong>Understand the Risks:</strong> Be aware of prompt injection (tricking the AI) and data poisoning (corrupting the AI).</li></ul>`,
        questions: [
            // Easy
            { difficulty: 'easy', type: 'mcq', text: "What is the biggest risk of pasting confidential company data into a public AI chatbot?", answers: [{text:"The AI company might use your data for training or it could be exposed in a breach", correct:true}, {text:"The AI might get confused", correct:false}, {text:"It's perfectly safe", correct:false}, {text:"It uses too much internet bandwidth", correct:false}], explanation: "Public AI tools may use your inputs to train their models. That sensitive data could then be part of a future data leak, exposing company secrets." },
            { difficulty: 'easy', type: 'mcq', text: "A 'deepfake' refers to:", answers: [{text:"AI-generated video or audio that realistically fakes someone's appearance or voice", correct:true}, {text:"A very deep thought from an AI", correct:false}, {text:"A fake social media profile", correct:false}, {text:"A fundamental error in an AI's logic", correct:false}], explanation: "Deepfakes can be used for misinformation or to create fake videos of executives authorizing fraudulent transactions, posing a major security risk." },
            { difficulty: 'easy', type: 'mcq', text: "An AI 'hallucination' is when an AI:", answers: [{text:"Confidently states incorrect or fabricated information as if it were fact", correct:true}, {text:"Becomes self-aware", correct:false}, {text:"Processes images", correct:false}, {text:"Refuses to answer a question", correct:false}], explanation: "Hallucinations are a key weakness of current AIs. Never trust AI-generated information for critical decisions without verifying it from a primary source." },
            // Medium
            { difficulty: 'medium', type: 'mcq', text: "A 'prompt injection' attack is when someone...", answers: [{text:"Tricks an AI with clever text to bypass its safety rules or reveal hidden info", correct:true}, {text:"Injects a virus into the AI's code", correct:false}, {text:"Spills coffee on the AI server", correct:false}, {text:"Asks the AI too many questions", correct:false}], explanation: "Prompt injection is like a social engineering attack against an AI, manipulating it to perform unintended actions or reveal its original programming." },
            { difficulty: 'medium', type: 'mcq', text: "How can attackers use AI to enhance phishing attacks?", answers: [{text:"By creating grammatically perfect, highly personalized emails at scale", correct:true}, {text:"By making emails prettier", correct:false}, {text:"By slowing down email servers", correct:false}, {text:"They cannot use AI for phishing", correct:false}], explanation: "AI removes the classic red flag of bad grammar and allows attackers to create convincing, targeted emails in any language instantly, making them harder to spot." },
            { difficulty: 'medium', type: 'mcq', text: "Is it a good idea to use an AI tool to summarize a confidential internal report?", answers: [{text:"Only if the AI runs entirely on a secure company server", correct:true}, {text:"Yes, it's a great time-saver", correct:false}, {text:"Yes, all AI tools are secure", correct:false}, {text:"No, it's too slow", correct:false}], explanation: "Using public AI tools for this is a data leak risk. However, if the company provides a secure, internal AI tool, it can be a safe and powerful productivity booster." },
            { difficulty: 'medium', type: 'mcq', text: "If you receive a voice message from your CEO asking for an urgent money transfer, what new AI-related risk should you consider?", answers: [{text:"That it might be an AI-generated voice clone (voice deepfake)", correct:true}, {text:"That the CEO used AI to write the message", correct:false}, {text:"That AI might intercept the message", correct:false}, {text:"There are no new AI risks here", correct:false}], explanation: "Voice cloning technology is now accessible enough for attackers to create realistic deepfake audio to impersonate executives or colleagues in vishing (voice phishing) attacks." },
            { difficulty: 'medium', type: 'mcq', text: "Bias in AI refers to:", answers: [{text:"When an AI's results are systematically prejudiced due to flawed training data", correct:true}, {text:"The AI's preference for certain colors", correct:false}, {text:"The physical tilt of the AI server", correct:false}, {text:"When an AI is politically opinionated", correct:false}], explanation: "If an AI is only trained on data from one demographic, its decisions may be unfair or inaccurate for other demographics. This is a major ethical and operational risk." },
            // Hard
            { difficulty: 'hard', type: 'mcq', text: "What is 'AI data poisoning'?", answers: [{text:"Intentionally feeding an AI bad or malicious data during training to corrupt its results", correct:true}, {text:"When an AI gives a wrong answer", correct:false}, {text:"The process of cleaning AI data", correct:false}, {text:"A type of AI-powered antivirus", correct:false}], explanation: "Data poisoning is a serious attack where an adversary corrupts the training data to make the AI unreliable, biased, or vulnerable." },
            { difficulty: 'hard', type: 'mcq', text: "What is an 'adversarial example' in the context of AI?", answers: [{text:"A photo that has been slightly altered to trick an AI into misidentifying it", correct:true}, {text:"A good example for teaching", correct:false}, {text:"An AI that argues with you", correct:false}, {text:"An example of AI breaking the law", correct:false}], explanation: "For example, changing a few pixels in a photo of a cat could make an AI confidently identify it as a car. This shows that AI perception is not like human perception." },
            { difficulty: 'hard', type: 'mcq', text: "What is a 'model inversion' attack?", answers: [{text:"An attack that extracts sensitive training data by repeatedly querying the AI", correct:true}, {text:"Flipping the AI's server upside down", correct:false}, {text:"Reversing the AI's decision", correct:false}, {text:"An attack that poisons the data", correct:false}], explanation: "This attack can potentially reconstruct sensitive data, like people's faces or medical records, that was used to train the AI model, representing a major privacy breach." },
            { difficulty: 'hard', type: 'mcq', text: "A 'large language model (LLM)' is:", answers: [{text:"A type of AI trained on vast amounts of text data to understand and generate language", correct:true}, {text:"A very large book about grammar", correct:false}, {text:"A computer with a lot of storage", correct:false}, {text:"A programming language", correct:false}], explanation: "LLMs like the one powering ChatGPT are the foundation of modern generative AI, capable of tasks from writing emails to creating code." },
            { difficulty: 'hard', type: 'mcq', text: "When an AI company states your data is 'anonymized', what risk might still exist?", answers: [{text:"The data could potentially be 're-identified' by combining it with other data sets", correct:true}, {text:"The data is completely risk-free", correct:false}, {text:"The company might sell it", correct:false}, {text:"It means the data is deleted", correct:false}], explanation: "True anonymization is very difficult. Researchers have repeatedly shown that 'anonymized' data can often be traced back to specific individuals when cross-referenced with other available information." },
            { difficulty: 'hard', type: 'mcq', text: "What is meant by the 'black box' problem in AI?", answers: [{text:"It can be difficult or impossible to understand how a complex AI made a particular decision", correct:true}, {text:"AI models are always black in color", correct:false}, {text:"The problem of an AI not turning on", correct:false}, {text:"A bug in the AI's code", correct:false}], explanation: "This lack of transparency can be a major issue in fields like medicine or finance, where understanding the 'why' behind a decision is crucial for trust and accountability." },
            { difficulty: 'hard', type: 'mcq', text: "Using an AI to help write code is generally:", answers: [{text:"A useful tool, but the code must be carefully reviewed for security vulnerabilities", correct:true}, {text:"Always secure because AI doesn't make mistakes", correct:false}, {text:"A bad idea because the AI will steal your code", correct:false}, {text:"Only for junior developers", correct:false}], explanation: "AI can produce insecure or flawed code. It's a powerful assistant, but the human developer is ultimately responsible for validating the code's quality and security." }
        ]
    },
    social: {
        title: "Social Engineering Quiz",
        training: `<h3>The Art of Deception</h3><p>Social engineering is the psychological manipulation of people into performing actions or divulging confidential information.</p><ul><li><strong>Pretexting:</strong> An attacker invents a scenario (a pretext) to gain your trust. E.g., "I'm from IT, I need your password for an urgent upgrade."</li><li><strong>Baiting:</strong> Luring you with a tempting offer, like a free movie download or a "found" USB drive, that contains malware.</li><li><strong>Vishing & Smishing:</strong> Phishing done via Voice calls (Vishing) or SMS text messages (Smishing).</li><li><strong>Tailgating:</strong> Following an authorized person into a secure area. Always ensure the door closes behind you.</li></ul>`,
        questions: [
            // Easy
            { difficulty: 'easy', type: 'mcq', text: "What is the primary goal of a social engineering attack?", answers: [{text:"To manipulate a person into breaking security procedures", correct:true}, {text:"To test security systems", correct:false}, {text:"To make friends", correct:false}, {text:"To build rapport with employees", correct:false}], explanation: "Social engineering bypasses technical defenses by targeting the 'human element'. It exploits trust, urgency, and fear to achieve its goal." },
            { difficulty: 'easy', type: 'mcq', text: "Which human emotion is most commonly exploited by social engineers?", answers: [{text:"Urgency and Fear", correct:true}, {text:"Joy", correct:false}, {text:"Calmness", correct:false}, {text:"Boredom", correct:false}], explanation: "Creating a sense of urgency ('This must be done NOW!') or fear ('Your account will be deleted!') makes people act without thinking critically." },
            { difficulty: 'easy', type: 'mcq', text: "You receive an SMS text message from your bank with a link to 'verify a recent transaction'. This is known as:", answers: [{text:"Smishing", correct:true}, {text:"Vishing", correct:false}, {text:"A bank transfer", correct:false}, {text:"A friendly reminder", correct:false}], explanation: "Smishing is simply phishing conducted over SMS. The same rules apply: be wary of urgent requests and suspicious links." },
            // Medium
            { difficulty: 'medium', type: 'mcq', text: "An attacker calls you pretending to be from the IT helpdesk, saying they need your password to fix an urgent error. This is an example of:", answers: [{text:"Pretexting", correct:true}, {text:"Tailgating", correct:false}, {text:"Baiting", correct:false}, {text:"A normal IT procedure", correct:false}], explanation: "Pretexting is creating a fabricated scenario or 'pretext' to manipulate a victim into giving up information they otherwise wouldn't." },
            { difficulty: 'medium', type: 'mcq', text: "You find a USB drive labeled 'Executive Salaries Q4' in the office parking lot. What should you do?", answers: [{text:"Give it to the security or IT department immediately", correct:true}, {text:"Plug it into your computer to see who it belongs to", correct:false}, {text:"Ignore it", correct:false}, {text:"Plug it into a colleague's computer", correct:false}], explanation: "This is a classic 'baiting' attack. The USB drive is likely loaded with malware that will infect the first computer it's plugged into. Never plug in unknown media." },
            { difficulty: 'medium', type: 'mcq', text: "A person without an ID badge holds a heavy box and asks you to hold the secure door open for them. This is an attempt at:", answers: [{text:"Tailgating", correct:true}, {text:"Being polite", correct:false}, {text:"A fire drill", correct:false}, {text:"Quid Pro Quo", correct:false}], explanation: "Tailgating (or piggybacking) is following an authorized person into a restricted area. You should always ensure only authorized personnel enter." },
            { difficulty: 'medium', type: 'mcq', text: "You get a call from someone claiming to be from Microsoft, stating your computer is infected and they need remote access to fix it. This is:", answers: [{text:"A common tech support scam (vishing)", correct:true}, {text:"Excellent customer service", correct:false}, {text:"A standard Windows update", correct:false}, {text:"A legitimate security check", correct:false}], explanation: "This is a widespread vishing (voice phishing) scam. Microsoft will never cold-call you to fix a problem or ask for remote access." },
            { difficulty: 'medium', type: 'mcq', text: "The best defense against social engineering is:", answers: [{text:"A healthy sense of skepticism and a verification process", correct:true}, {text:"A strong firewall", correct:false}, {text:"Never answering your phone", correct:false}, {text:"Having complex passwords", correct:false}], explanation: "While technical controls help, the ultimate defense is a well-trained, cautious user. Always be skeptical of unsolicited requests and verify them through a separate, trusted channel." },
            // Hard
            { difficulty: 'hard', type: 'mcq', text: "An attacker offers you a free software license in exchange for your network login credentials. This tactic is called:", answers: [{text:"Quid Pro Quo", correct:true}, {text:"Baiting", correct:false}, {text:"Tailgating", correct:false}, {text:"A good deal", correct:false}], explanation: "'Quid Pro Quo' means 'something for something'. The attacker offers a (usually fake) benefit in exchange for information or access." },
            { difficulty: 'hard', type: 'mcq', text: "An attacker researches your company's public information and key employees to make their phishing email more believable. This is called:", answers: [{text:"Spear Phishing", correct:true}, {text:"Generic Phishing", correct:false}, {text:"Spam", correct:false}, {text:"Marketing", correct:false}], explanation: "Spear phishing is a highly targeted attack that uses specific information about the victim or their organization to appear much more legitimate." },
            { difficulty: 'hard', type: 'mcq', text: "What is 'whaling' in the context of cybersecurity?", answers: [{text:"A spear phishing attack aimed at high-level executives", correct:true}, {text:"Fishing with a very large net", correct:false}, {text:"An attack on an aquarium", correct:false}, {text:"A type of malware", correct:false}], explanation: "Whaling is like spear phishing, but the 'whales' are senior executives. The goal is often to trick them into making large fraudulent wire transfers." },
            { difficulty: 'hard', type: 'mcq', text: "A Business Email Compromise (BEC) attack is when an attacker:", answers: [{text:"Compromises a legitimate email account to send fraudulent payment requests", correct:true}, {text:"Sends a million emails at once", correct:false}, {text:"Hacks a business's website", correct:false}, {text:"Steals a company's email list", correct:false}], explanation: "BEC attacks are highly sophisticated because they come from a trusted, legitimate source (like a vendor). Always verify changes to payment details over the phone." },
            { difficulty: 'hard', type: 'mcq', text: "What is 'pharming'?", answers: [{text:"Redirecting a user to a fraudulent website by compromising DNS servers", correct:true}, {text:"Creating a fake farm online", correct:false}, {text:"Phishing for pharmaceutical information", correct:false}, {text:"Sending a phishing email", correct:false}], explanation: "Pharming is more dangerous than phishing because the user can type the correct website address and still be redirected to a fake site without any suspicious link to click." },
            { difficulty: 'hard', type: 'mcq', text: "Someone leaves a comment on your public social media photo, 'Great pic from the conference! By the way, what was the name of your first pet again?' This could be an attempt to:", answers: [{text:"Gather answers to your security questions", correct:true}, {text:"Be friendly", correct:false}, {text:"Reconnect with an old friend", correct:false}, {text:"Sell you pet food", correct:false}], explanation: "Attackers scour social media for personal details that are commonly used as answers to security questions for password recovery. Be careful what you share." },
            { difficulty: 'hard', type: 'mcq', text: "You get an email that appears to be from your own email address, threatening to release sensitive information unless you pay a ransom. This is likely:", answers: [{text:"A bluff using a spoofed 'From' address", correct:true}, {text:"Proof that your account has been fully hacked", correct:false}, {text:"A prank from a coworker", correct:false}, {text:"A real threat you must pay", correct:false}], explanation: "This is a common scam. It's extremely easy to spoof the 'From' field in an email. Unless there's specific, undeniable proof, it's almost certainly a bluff designed to scare you." }
        ]
    }
};

const particleConfig = { secure: { particles: { number: { value: 60 }, color: { value: "#28a745" }, line_linked: { color: "#28a745", opacity: 0.2 }, move: { direction: "top", speed: 1 } } }, warning: { particles: { number: { value: 80 }, color: { value: "#f7ca18" }, line_linked: { color: "#f7ca18", opacity: 0.3 }, move: { direction: "none", speed: 2 } } }, danger: { particles: { number: { value: 100 }, color: { value: "#dc3545" }, line_linked: { color: "#dc3545", opacity: 0.4 }, move: { direction: "bottom", speed: 3 } } }, hub: { particles: { number: { value: 40 }, color: { value: "#30363d" }, line_linked: { color: "#e8491d", opacity: 0.2 }, move: { direction: "none", speed: 2 } } } };
const baseParticleConfig = { particles: { shape: { type: "circle" }, opacity: { value: 0.5, random: true }, size: { value: 2, random: true }, line_linked: { enable: true, distance: 150, width: 1 }, move: { enable: true, random:true, out_mode: "out" } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "grab" } } }, retina_detect: true };

const appController = {
    init() {
        const pagePath = window.location.pathname.split("/").pop() || 'index.html';
        if (pagePath === 'index.html') {
            if (localStorage.getItem('chesmiUserData')) {
                window.location.href = 'hub.html';
            } else {
                this.handleLoginPage();
            }
        } else if (pagePath === 'hub.html') this.handleHubPage();
        else if (pagePath.includes('_quiz.html')) this.handleQuizPage();
        else if (pagePath === 'results.html') this.handleResultsPage();
        else if (pagePath === 'certificate.html') this.handleCertificatePage();
        else if (pagePath === 'admin.html') this.handleAdminPage();
    },
    handleLoginPage() {
        this.runParticles(particleConfig.hub);
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.onsubmit = (e) => {
                e.preventDefault();
                const userData = { name: document.getElementById('userName').value, email: document.getElementById('userEmail').value, role: document.getElementById('userRole').value, company: "Chesmi Consolidated (Pvt) Ltd" };
                localStorage.setItem('chesmiUserData', JSON.stringify(userData));
                window.location.href = 'hub.html';
            };
        }
    },
    handleHubPage() { this.checkLogin(); this.runParticles(particleConfig.hub); },
    handleQuizPage() { this.checkLogin(); window.quizController.init(); },
    handleResultsPage() { this.checkLogin(); window.quizController.showResults(); },
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
            if (certWrapper) certWrapper.innerHTML = '<div class="container" style="color: #333;"><h1>Error</h1><p>Certificate data not found. Please generate the certificate from the results page.</p><a href="hub.html" class="btn">Back to Hub</a></div>';
        }
    },
    handleAdminPage() {
        this.runParticles(particleConfig.hub);
        const adminContent = document.querySelector('.container');
        const passwordModal = document.getElementById('passwordModal');
        const passwordForm = document.getElementById('passwordForm');

        if (passwordModal) passwordModal.classList.add('show');
        if (adminContent) adminContent.style.visibility = 'hidden';

        if (passwordForm) {
            passwordForm.onsubmit = (e) => {
                e.preventDefault();
                const passwordInput = document.getElementById('adminPassword');
                const passwordError = document.getElementById('passwordError');
                if (passwordInput.value === "admin123") {
                    passwordModal.classList.remove('show');
                    adminContent.style.visibility = 'visible';
                    this.populateLogTable();
                    document.getElementById('downloadAllLogsBtn').onclick = () => this.downloadAllLogs();
                    document.getElementById('clearLogsBtn').onclick = () => this.clearAllLogs();
                } else {
                    passwordError.style.display = 'block';
                    passwordInput.focus();
                }
            };
        }
    },
    populateLogTable() {
        const logs = JSON.parse(localStorage.getItem('chesmiTrainingLogs')) || [];
        const tableBody = document.getElementById('logTable')?.querySelector('tbody');
        if (!tableBody) return;
        tableBody.innerHTML = '';
        logs.forEach(log => {
            const row = tableBody.insertRow();
            const statusClass = log.status === 'Pass' ? 'status-pass' : 'status-fail';
            row.innerHTML = `
                <td>${new Date(log.timestamp).toLocaleString()}</td>
                <td>${log.name}</td>
                <td>${log.email}</td>
                <td>${log.quiz}</td>
                <td>${log.score}/${log.total}</td>
                <td>${log.attempt}</td>
                <td class="${statusClass}">${log.status}</td>
            `;
        });
    },
    downloadAllLogs() {
        const logs = JSON.parse(localStorage.getItem('chesmiTrainingLogs')) || [];
        if (logs.length === 0) { alert("No logs to download."); return; }
        const headers = "Timestamp,Name,Email,Role,Quiz,Score,Total,Attempt,Status";
        const csvContent = [
            headers,
            ...logs.map(log => [ `"${log.timestamp}"`, `"${log.name}"`, `"${log.email}"`, `"${log.role}"`, `"${log.quiz}"`, log.score, log.total, log.attempt, log.status ].join(','))
        ].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        const date = new Date().toISOString().split('T')[0];
        link.setAttribute("href", url);
        link.setAttribute("download", `chesmi_training_log_${date}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },
    clearAllLogs() {
        if (confirm("Are you sure you want to permanently delete all log entries from this browser? This cannot be undone.")) {
            localStorage.removeItem('chesmiTrainingLogs');
            this.populateLogTable();
            alert("All logs have been cleared.");
        }
    },
    checkLogin() {
        if (!window.location.pathname.includes('index.html') && !localStorage.getItem('chesmiUserData')) {
            window.location.href = 'index.html';
        }
    },
    runParticles(config) {
        if (typeof particlesJS === 'undefined') return;
        if (window.pJSDom && window.pJSDom[0]) { window.pJSDom[0].pJS.fn.vendors.destroypJS(); window.pJSDom = []; }
        if (document.getElementById('particles-js')) { particlesJS('particles-js', { ...baseParticleConfig, ...config }); }
    }
};

const quizController = {
    quizType: null, quizData: [], currentQuizSet: [], currentQuestionIndex: 0, score: 0, securityLevel: 100, attempts: 1,
    shuffleArray(array) { for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]]; } return array; },
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
        const attemptKey = `${this.quizType}_attempts`;
        this.attempts = (parseInt(localStorage.getItem(attemptKey), 10) || 0) + 1;
        localStorage.setItem(attemptKey, this.attempts);
        const allQuestions = this.quizData.questions;
        const easy = this.shuffleArray(allQuestions.filter(q => q.difficulty === 'easy')).slice(0, 3);
        const medium = this.shuffleArray(allQuestions.filter(q => q.difficulty === 'medium')).slice(0, 4);
        const hard = this.shuffleArray(allQuestions.filter(q => q.difficulty === 'hard')).slice(0, 3);
        this.currentQuizSet = this.shuffleArray([...easy, ...medium, ...hard]);
        document.title = `${this.quizData.title} - Chesmi Consolidated (Pvt) Ltd`;
        document.getElementById('quizTitle').innerText = this.quizData.title;
        this.currentQuestionIndex = 0; this.score = 0; this.securityLevel = 100;
        appController.runParticles(particleConfig.secure);
        this.updateSecurityVisuals();
        this.loadQuestion();
    },
    loadQuestion() {
        const q = this.currentQuizSet[this.currentQuestionIndex];
        document.getElementById('questionCounter').innerText = `Question ${this.currentQuestionIndex + 1} of ${this.currentQuizSet.length}`;
        document.getElementById('progressBar').style.width = `${((this.currentQuestionIndex + 1) / this.currentQuizSet.length) * 100}%`;
        document.getElementById('feedback').style.display = 'none';
        if (q.type === 'phishing-email') this.renderPhishingQuestion(q);
        else if (q.type === 'mcq') this.renderMCQ(q);
    },
    renderPhishingQuestion(q) {
        document.getElementById('questionArea').innerHTML = `<div class="email-preview">${q.emailContent}</div><p style="text-align:center; font-weight:bold; margin-top:15px;">Is this email Legit or Phishing?</p>`;
        document.querySelector('.answer-buttons').innerHTML = `<button class="btn" onclick="quizController.checkAnswer(false)">✅ Legit</button><button class="btn" onclick="quizController.checkAnswer(true)">🚫 Phishing</button>`;
        this.setupInteractiveLinks();
    },
    renderMCQ(q) {
        document.getElementById('questionArea').innerHTML = `<p>${q.text}</p>`;
        const buttonsContainer = document.querySelector('.answer-buttons');
        buttonsContainer.innerHTML = '';
        const shuffledAnswers = this.shuffleArray([...q.answers]);
        shuffledAnswers.forEach(answer => {
            buttonsContainer.innerHTML += `<button class="mcq-option" onclick="quizController.checkAnswer(${answer.correct})">${answer.text}</button>`;
        });
    },
    checkAnswer(userAnswer) {
        const q = this.currentQuizSet[this.currentQuestionIndex];
        let isCorrect = (q.type === 'phishing-email') ? (userAnswer === q.isPhishing) : (userAnswer === true);
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
        if (this.currentQuestionIndex === this.currentQuizSet.length - 1) {
            nextButton.textContent = 'Finish & See Results';
            nextButton.onclick = () => this.finishQuiz();
        } else {
            nextButton.textContent = 'Next Question';
            nextButton.onclick = () => { this.currentQuestionIndex++; this.loadQuestion(); };
        }
    },
    finishQuiz() {
        this.generateLogEntry();
        localStorage.setItem('lastQuizType', this.quizType);
        localStorage.setItem('lastQuizScore', this.score);
        localStorage.setItem('lastQuizTotal', this.currentQuizSet.length);
        window.location.href = 'results.html';
    },
    showResults() {
        const quizType = localStorage.getItem('lastQuizType');
        const score = parseInt(localStorage.getItem('lastQuizScore'), 10);
        const total = parseInt(localStorage.getItem('lastQuizTotal'), 10);
        if (!quizType || isNaN(score) || isNaN(total)) { window.location.href = 'index.html'; return; }
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
            localStorage.removeItem(`${quizType}_attempts`);
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
        const passStatus = this.score >= 9 ? 'Pass' : 'Fail';
        const newLog = {
            timestamp: timestamp, name: userData.name, email: userData.email, role: userData.role,
            quiz: this.quizData.title, score: this.score, total: this.currentQuizSet.length,
            attempt: this.attempts, status: passStatus
        };
        const logs = JSON.parse(localStorage.getItem('chesmiTrainingLogs')) || [];
        logs.push(newLog);
        localStorage.setItem('chesmiTrainingLogs', JSON.stringify(logs));
    },
    updateSecurityVisuals() { if (!document.getElementById('securityStatusBar')) return; this.securityLevel = Math.max(0, Math.min(100, this.securityLevel)); document.getElementById('securityStatusBar').style.width = `${this.securityLevel}%`; let stateClass = 'state-secure', stateText = 'STATUS: SECURE', config = particleConfig.secure; if (this.securityLevel < 70) { stateClass = 'state-warning'; stateText = 'STATUS: AT RISK'; config = particleConfig.warning; } if (this.securityLevel < 40) { stateClass = 'state-danger'; stateText = 'STATUS: COMPROMISED'; config = particleConfig.danger; } document.body.className = stateClass; document.getElementById('securityStatusText').textContent = stateText; appController.runParticles(config); },
    setupInteractiveLinks() { document.querySelectorAll('.suspicious-link').forEach(link => { if (link.querySelector('.link-tooltip')) return; const realUrl = link.getAttribute('data-real-url'); if (realUrl) { const tooltip = document.createElement('span'); tooltip.className = 'link-tooltip'; tooltip.textContent = `⚠️ Destination: ${realUrl}`; link.appendChild(tooltip); } link.addEventListener('click', e => e.preventDefault()); }); }
};

document.addEventListener('DOMContentLoaded', () => {
    window.quizController = quizController;
    appController.init();
});
