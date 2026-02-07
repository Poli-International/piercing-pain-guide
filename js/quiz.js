// ═══════════════════════════════════════════════════════════════
// QUIZ.JS - Pain Tolerance Quiz Logic
// 7 questions, scoring system, personalized recommendations
// ═══════════════════════════════════════════════════════════════

const quizScoring = {
    low_tolerance: {
        range: [7, 11],
        level: 'Lower Pain Tolerance',
        description: 'You may find tattooing/piercing more challenging than others. This is completely normal! Many people have lower pain tolerance, and there are strategies to help you have a positive experience.',
        recommendations: [
            'Start with less painful locations (outer forearm, outer shoulder, outer calf)',
            'Plan shorter sessions (1-2 hours maximum initially)',
            'Practice breathing techniques beforehand (box breathing, deep breathing)',
            'Bring a support person to your appointment',
            'Discuss numbing cream with your artist (some artists approve this)',
            'Take breaks frequently - communicate openly with your artist',
            'Stay well-fed and hydrated before your session',
            'Choose a time when you\'re well-rested and calm'
        ],
        avoid_locations: ['Ribs', 'Spine', 'Elbow Ditch', 'Armpit', 'Feet', 'Hands', 'Nipples']
    },

    medium_tolerance: {
        range: [12, 16],
        level: 'Average Pain Tolerance',
        description: 'You have average pain tolerance. Most tattoo and piercing locations should be manageable for you with proper preparation. You\'ll handle moderate pain well.',
        recommendations: [
            'Most locations are manageable with proper preparation',
            'Plan 2-3 hour sessions comfortably',
            'Use breathing techniques during the session',
            'Take breaks as needed - don\'t push yourself too hard',
            'Stay well-fed and hydrated throughout',
            'Approach very painful areas (ribs, spine) with extra preparation',
            'Communicate with your artist about your comfort level',
            'Build confidence with less painful spots first'
        ],
        caution_locations: ['Ribs', 'Spine', 'Elbow Ditch', 'Knee Ditch', 'Armpit', 'Nipples']
    },

    high_tolerance: {
        range: [17, 21],
        level: 'Higher Pain Tolerance',
        description: 'You have higher than average pain tolerance. You should handle tattooing and piercing well, including more challenging locations. However, even with high tolerance, some areas will still be very painful.',
        recommendations: [
            'Most locations will be manageable for you',
            'Can handle longer sessions (3-4+ hours)',
            'Even painful areas (ribs, spine) are likely tolerable',
            'Still use breaks for artist and skin health',
            'Breathing techniques help even with high tolerance',
            'Stay hydrated and fed for best experience',
            'Don\'t underestimate very painful locations',
            'High tolerance doesn\'t mean no pain - be realistic'
        ],
        note: 'Even people with high tolerance find ribs, spine, and elbow ditch very challenging. Don\'t skip preparation!'
    }
};

// ═══════════════════════════════════════════════════════════════
// QUIZ INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        quizForm.addEventListener('submit', handleQuizSubmit);
    }
});

// ═══════════════════════════════════════════════════════════════
// QUIZ SUBMISSION & SCORING
// ═══════════════════════════════════════════════════════════════

function handleQuizSubmit(e) {
    e.preventDefault();

    // Calculate total score
    let totalScore = 0;
    for (let i = 1; i <= 7; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (!answer) {
            alert('Please answer all questions');
            return;
        }
        totalScore += parseInt(answer.value);
    }

    // Determine tolerance level
    let toleranceData;
    if (totalScore >= quizScoring.high_tolerance.range[0]) {
        toleranceData = quizScoring.high_tolerance;
    } else if (totalScore >= quizScoring.medium_tolerance.range[0]) {
        toleranceData = quizScoring.medium_tolerance;
    } else {
        toleranceData = quizScoring.low_tolerance;
    }

    // Display results
    displayQuizResults(toleranceData, totalScore);

    // Hide form, show results
    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    // Scroll to results
    document.getElementById('quizResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Save to localStorage
    localStorage.setItem('painToleranceScore', totalScore);
    localStorage.setItem('painToleranceLevel', toleranceData.level);
}

// ═══════════════════════════════════════════════════════════════
// DISPLAY QUIZ RESULTS
// ═══════════════════════════════════════════════════════════════

function displayQuizResults(toleranceData, score) {
    // Tolerance level
    document.getElementById('toleranceLevel').textContent = toleranceData.level;

    // Description
    document.getElementById('toleranceDescription').textContent = toleranceData.description;

    // Recommendations
    const recommendationsList = document.getElementById('recommendationsList');
    recommendationsList.innerHTML = '';
    toleranceData.recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recommendationsList.appendChild(li);
    });

    // Avoid locations (only for low tolerance)
    const avoidSection = document.getElementById('avoidLocations');
    if (toleranceData.avoid_locations) {
        const avoidList = document.getElementById('avoidLocationsList');
        avoidList.textContent = toleranceData.avoid_locations.join(', ');
        avoidSection.style.display = 'block';
    } else {
        avoidSection.style.display = 'none';
    }

    // Show note if high tolerance
    if (toleranceData.note) {
        const noteElement = document.createElement('p');
        noteElement.style.marginTop = 'var(--spacing-lg)';
        noteElement.style.fontStyle = 'italic';
        noteElement.style.color = 'var(--text-secondary)';
        noteElement.innerHTML = `<strong>Note:</strong> ${toleranceData.note}`;
        document.getElementById('quizResults').querySelector('.results-body').appendChild(noteElement);
    }
}

// ═══════════════════════════════════════════════════════════════
// GET SAVED TOLERANCE (for other features to use)
// ═══════════════════════════════════════════════════════════════

function getSavedTolerance() {
    return {
        score: localStorage.getItem('painToleranceScore'),
        level: localStorage.getItem('painToleranceLevel')
    };
}

// Make available globally
window.getSavedTolerance = getSavedTolerance;
