// Questions Data
const questions = [
    "Does your child line up toys or objects repeatedly?",
    "Does your child respond when their name is called?",
    "Does your child prefer playing alone rather than with others most of the time?",
    "Does your child make eye contact while interacting with people?",
    "Does your child get very upset if routines change?",
    "Does your child imitate actions like clapping or waving?",
    "Does your child repeat the same words or phrases frequently?",
    "Does your child enjoy playing with other children?",
    "Does your child stare at spinning objects like fans or wheels for long periods?",
    "Does your child follow simple instructions like \"bring the ball\"?",
    "Does your child show strong sensitivity to sounds, lights, or textures?",
    "Does your child bring objects to show you something interesting?",
    "Does your child become distressed by small environmental changes?",
    "Does your child point to objects to show interest?",
    "Does your child focus intensely on one object for a long time?",
    "Does your child smile back when someone smiles at them?",
    "Has your child ever lost speech or social skills they previously had?",
    "Does your child use gestures such as waving goodbye or nodding yes/no?",
    "Does your child repeatedly flap hands, rock, or spin their body?",
    "Does your child engage in pretend play (like feeding a doll or pretending to cook)?"
];

// Risk indicators for each question (true = Yes is risk, false = No is risk)
const riskIndicators = [
    true,  // Q1: Yes is risk
    false, // Q2: No is risk
    true,  // Q3: Yes is risk
    false, // Q4: No is risk
    true,  // Q5: Yes is risk
    false, // Q6: No is risk
    true,  // Q7: Yes is risk
    false, // Q8: No is risk
    true,  // Q9: Yes is risk
    false, // Q10: No is risk
    true,  // Q11: Yes is risk
    false, // Q12: No is risk
    true,  // Q13: Yes is risk
    false, // Q14: No is risk
    true,  // Q15: Yes is risk
    false, // Q16: No is risk
    true,  // Q17: Yes is risk
    false, // Q18: No is risk
    true,  // Q19: Yes is risk
    false  // Q20: No is risk
];

// Application State
let currentQuestion = 0;
let answers = [];
let screeningInProgress = false;
let mobileMenuOpen = false;

// DOM Elements
const questionText = document.getElementById('questionText');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const questionContainer = document.getElementById('questionContainer');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Load i18n first
    const i18nScript = document.createElement('script');
    i18nScript.src = 'i18n.js';
    i18nScript.onload = function() {
        // Set up navigation
        setupNavigation();
        
        // Set up mobile menu
        setupMobileMenu();
        
        // Set up scroll effects
        setupScrollEffects();
        
        // Set up language selector
        setupLanguageSelector();
        
        // Start with home page
        showPage('home');
        
        // Update UI with current language
        i18n.updateUI();
    };
    document.head.appendChild(i18nScript);
});

// Language Selector Setup
function setupLanguageSelector() {
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const dropdown = document.getElementById('languageDropdown');
        const button = document.querySelector('.language-btn');
        
        if (!button.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
}

function toggleLanguageSelector() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

function changeLanguage(lang) {
    i18n.setLanguage(lang);
    
    // Update questions array with new language
    updateQuestionsArray();
    
    // Close dropdown
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.remove('show');
}

function updateQuestionsArray() {
    // Update the questions array from i18n
    questions.length = 0; // Clear existing questions
    questions.push(...i18n.translations[i18n.currentLanguage].questions);
}

// Mobile Menu Setup
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenuBtn.classList.add('active');
        navLinks.style.display = 'flex';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'white';
        navLinks.style.flexDirection = 'column';
        navLinks.style.padding = '1rem';
        navLinks.style.boxShadow = 'var(--shadow-lg)';
        navLinks.style.borderRadius = '0 0 var(--radius-lg) var(--radius-lg)';
    } else {
        mobileMenuBtn.classList.remove('active');
        navLinks.style.display = '';
        navLinks.style.position = '';
        navLinks.style.top = '';
        navLinks.style.left = '';
        navLinks.style.right = '';
        navLinks.style.background = '';
        navLinks.style.flexDirection = '';
        navLinks.style.padding = '';
        navLinks.style.boxShadow = '';
        navLinks.style.borderRadius = '';
    }
}

// Scroll Effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Navigation Setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('href').substring(1);
            showPage(targetPage);
        });
    });
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        setTimeout(() => {
            targetPage.classList.add('active');
        }, 50);
    }
    
    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
    
    // Initialize screening if going to screening page
    if (pageId === 'screening' && !screeningInProgress) {
        startScreening();
    }
}

// Start Screening
function startScreening() {
    currentQuestion = 0;
    answers = [];
    screeningInProgress = true;
    showQuestion();
}

// Show Question
function showQuestion() {
    if (currentQuestion < questions.length) {
        // Update question text with animation
        questionContainer.style.opacity = '0';
        questionContainer.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            questionText.textContent = questions[currentQuestion];
            progressText.textContent = i18n.t('questionOf', { current: currentQuestion + 1, total: questions.length });
            
            // Update progress bar
            const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
            progressFill.style.width = `${progressPercentage}%`;
            
            // Animate question in
            questionContainer.style.opacity = '1';
            questionContainer.style.transform = 'translateY(0)';
        }, 300);
    } else {
        // Show results
        showResults();
    }
}

// Answer Question
function answerQuestion(answer) {
    // Store answer
    answers.push(answer);
    
    // Move to next question
    currentQuestion++;
    
    // Add button animation feedback
    const buttons = document.querySelectorAll('.btn-answer');
    buttons.forEach(btn => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Show next question or results
    setTimeout(() => {
        showQuestion();
    }, 300);
}

// Calculate Score
function calculateScore() {
    let riskScore = 0;
    
    for (let i = 0; i < answers.length; i++) {
        // Check if answer matches risk indicator
        if (riskIndicators[i] && answers[i] === true) {
            riskScore++;
        } else if (!riskIndicators[i] && answers[i] === false) {
            riskScore++;
        }
    }
    
    return riskScore;
}

// Get Risk Level
function getRiskLevel(score) {
    if (score <= 3) {
        return {
            levelKey: 'lowRisk',
            level: i18n.t('lowRisk'),
            color: 'var(--success-green)',
            description: i18n.t('lowRiskDescription'),
            recommendation: i18n.t('lowRiskRecommendation')
        };
    } else if (score <= 7) {
        return {
            levelKey: 'moderateRisk',
            level: i18n.t('moderateRisk'),
            color: 'var(--warning-yellow)',
            description: i18n.t('moderateRiskDescription'),
            recommendation: i18n.t('moderateRiskRecommendation')
        };
    } else {
        return {
            levelKey: 'highRisk',
            level: i18n.t('highRisk'),
            color: 'var(--danger-red)',
            description: i18n.t('highRiskDescription'),
            recommendation: i18n.t('highRiskRecommendation')
        };
    }
}

// Show Results
function showResults() {
    screeningInProgress = false;
    const score = calculateScore();
    const riskLevel = getRiskLevel(score);
    
    // Calculate percentage for circle
    const percentage = (score / questions.length) * 100;
    const degrees = (percentage / 100) * 360;
    
    // Navigate to results page
    showPage('results');
    
    // Update score display with animation
    setTimeout(() => {
        const scoreNumber = document.getElementById('scoreNumber');
        const scoreLabel = document.getElementById('scoreLabel');
        const scoreCircle = document.getElementById('scoreCircle');
        const resultsExplanation = document.getElementById('resultsExplanation');
        
        // Animate score number
        let currentScore = 0;
        const scoreInterval = setInterval(() => {
            if (currentScore <= score) {
                scoreNumber.textContent = `${currentScore}/${questions.length}`;
                currentScore++;
            } else {
                clearInterval(scoreInterval);
            }
        }, 50);
        
        // Update score circle
        scoreCircle.style.setProperty('--score-degrees', `${degrees}deg`);
        scoreCircle.style.background = `conic-gradient(
            ${riskLevel.color} 0deg,
            ${riskLevel.color} ${degrees}deg,
            var(--neutral-200) ${degrees}deg
        )`;
        
        // Update risk level
        scoreLabel.textContent = i18n.t(riskLevel.levelKey);
        scoreLabel.style.color = riskLevel.color;
        
        // Update explanation
        resultsExplanation.innerHTML = `
            <h3>${i18n.t(riskLevel.levelKey)}</h3>
            <p><strong>${i18n.t('score')}: ${score} ${i18n.t('of')} ${questions.length}</strong></p>
            <p>${riskLevel.description}</p>
            <p><strong>${i18n.t('recommendation')}:</strong> ${riskLevel.recommendation}</p>
        `;
    }, 500);
}

// Retake Screening
function retakeScreening() {
    // Reset state
    currentQuestion = 0;
    answers = [];
    screeningInProgress = false;
    
    // Navigate to screening page
    showPage('screening');
}

// Download Results
function downloadResults() {
    const score = calculateScore();
    const riskLevel = getRiskLevel(score);
    
    // Initialize jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set colors based on risk level
    let riskColor;
    if (riskLevel.level === 'Low Risk') {
        riskColor = [40, 167, 69]; // Green
    } else if (riskLevel.level === 'Moderate Risk') {
        riskColor = [255, 193, 7]; // Yellow
    } else {
        riskColor = [220, 53, 69]; // Red
    }
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(74, 144, 226); // Primary blue
    doc.text('Early Development Screening Results', 105, 30, { align: 'center' });
    
    // Date
    doc.setFontSize(12);
    doc.setTextColor(108, 117, 125); // Text light
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 45, { align: 'center' });
    
    // Score Section
    doc.setFontSize(16);
    doc.setTextColor(44, 62, 80); // Text dark
    doc.text('Screening Score', 20, 70);
    
    doc.setFontSize(32);
    doc.setTextColor(...riskColor);
    doc.text(`${score} / ${questions.length}`, 105, 85, { align: 'center' });
    
    // Risk Level
    doc.setFontSize(20);
    doc.setTextColor(...riskColor);
    doc.text(riskLevel.level, 105, 105, { align: 'center' });
    
    // Description
    doc.setFontSize(12);
    doc.setTextColor(44, 62, 80); // Text dark
    const splitDescription = doc.splitTextToSize(riskLevel.description, 170);
    doc.text(splitDescription, 20, 125);
    
    // Recommendation Section
    doc.setFontSize(14);
    doc.setTextColor(74, 144, 226); // Primary blue
    doc.text('Recommendation:', 20, 160);
    
    doc.setFontSize(11);
    doc.setTextColor(44, 62, 80); // Text dark
    const splitRecommendation = doc.splitTextToSize(riskLevel.recommendation, 170);
    doc.text(splitRecommendation, 20, 170);
    
    // Disclaimer Box
    doc.setFillColor(245, 248, 251); // Light grey background
    doc.rect(20, 210, 170, 40, 'F');
    doc.setDrawColor(74, 144, 226); // Primary blue border
    doc.rect(20, 210, 170, 40);
    
    // Create results text
    const resultsText = `
${i18n.t('resultsTitle')}
===================================

${i18n.t('date')}: ${new Date().toLocaleDateString()}
${i18n.t('score')}: ${score} ${i18n.t('of')} ${questions.length}
${i18n.t('riskLevel')}: ${riskLevel.level}

${riskLevel.description}

${i18n.t('recommendation')}:
${riskLevel.recommendation}

${i18n.t('disclaimer')}: ${i18n.t('disclaimerFull')}
    `;
    const splitResultsText = doc.splitTextToSize(resultsText, 160);
    doc.text(splitResultsText, 25, 220);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(108, 117, 125);
    doc.text('Early Development Screening Tool - Confidential Report', 105, 280, { align: 'center' });
    
    // Save the PDF
    doc.save(`autism_screening_results_${new Date().toISOString().split('T')[0]}.pdf`);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (screeningInProgress) {
        if (e.key === 'ArrowLeft' || e.key === '1') {
            answerQuestion(false);
        } else if (e.key === 'ArrowRight' || e.key === '2') {
            answerQuestion(true);
        }
    }
});

// Add touch gesture support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (screeningInProgress) {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - answer No
                answerQuestion(false);
            } else {
                // Swipe right - answer Yes
                answerQuestion(true);
            }
        }
    }
}
