// ═══════════════════════════════════════════════════════════════
// PAIN GUIDE - Main Application Logic
// Handles procedure switching, location display, section management
// ═══════════════════════════════════════════════════════════════

let currentProcedure = 'tattoo'; // 'tattoo' or 'piercing'
let currentDatabase = tattooPainLevels;
let selectedLocation = null;

// ═══════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    initializeProcedureToggle();
    initializeQuickLinks();
    initializeSectionControls();
    initializePreparationTabs();
    populateLocationSelectors();
});

// ═══════════════════════════════════════════════════════════════
// PROCEDURE TYPE TOGGLE (Tattoo / Piercing)
// ═══════════════════════════════════════════════════════════════

function initializeProcedureToggle() {
    const tattooBtn = document.getElementById('tattooBtn');
    const piercingBtn = document.getElementById('piercingBtn');

    tattooBtn.addEventListener('click', function() {
        switchProcedure('tattoo', tattooBtn, piercingBtn);
    });

    piercingBtn.addEventListener('click', function() {
        switchProcedure('piercing', piercingBtn, tattooBtn);
    });
}

function switchProcedure(type, activeBtn, inactiveBtn) {
    if (currentProcedure === type) return; // Already active

    currentProcedure = type;
    currentDatabase = type === 'tattoo' ? tattooPainLevels : piercingPainLevels;

    // Update button states
    activeBtn.classList.add('procedure-btn--active');
    inactiveBtn.classList.remove('procedure-btn--active');

    // Reset display
    selectedLocation = null;
    document.getElementById('painDetails').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';

    // Update body map (will be implemented in body-map.js)
    if (typeof updateBodyMap === 'function') {
        updateBodyMap(type);
    }

    // Repopulate location selectors
    populateLocationSelectors();
}

// ═══════════════════════════════════════════════════════════════
// LOCATION DISPLAY
// ═══════════════════════════════════════════════════════════════

function displayPainInfo(locationKey) {
    const location = currentDatabase[locationKey];
    if (!location) return;

    selectedLocation = locationKey;

    // Hide welcome message
    document.getElementById('welcomeMessage').style.display = 'none';

    // Show pain details
    const painDetails = document.getElementById('painDetails');
    painDetails.style.display = 'block';

    // Populate details
    document.getElementById('locationName').textContent = location.name;

    const painRating = document.getElementById('painRating');
    painRating.textContent = `${location.pain_level}/10`;

    // Set color based on pain level
    let level = 'minimal';
    if (location.pain_level >= 9) level = 'severe';
    else if (location.pain_level >= 7) level = 'high';
    else if (location.pain_level >= 4) level = 'moderate';

    painRating.setAttribute('data-level', level);
    painRating.style.color = location.color;

    document.getElementById('painCategory').textContent = location.category;
    document.getElementById('painCategory').style.color = location.color;

    document.getElementById('whyHurts').textContent = location.why_hurts;
    document.getElementById('feelsLike').textContent = location.feels_like;
    document.getElementById('duration').textContent = location.duration;
    document.getElementById('bestFor').textContent = location.best_for;
    document.getElementById('healingPain').textContent = location.healing_pain;

    // Populate factors list
    const factorsList = document.getElementById('factors');
    factorsList.innerHTML = '';
    location.factors.forEach(factor => {
        const li = document.createElement('li');
        li.textContent = factor;
        factorsList.appendChild(li);
    });

    // Show warning if exists
    const warningSection = document.getElementById('warningSection');
    const warningText = document.getElementById('warningText');
    if (location.warning) {
        warningText.textContent = location.warning;
        warningSection.style.display = 'block';
    } else {
        warningSection.style.display = 'none';
    }

    // Scroll to pain details
    painDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ═══════════════════════════════════════════════════════════════
// QUICK LINKS
// ═══════════════════════════════════════════════════════════════

function initializeQuickLinks() {
    const quickLinks = document.querySelectorAll('.quick-link-btn');
    quickLinks.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleQuickLink(action);
        });
    });
}

function handleQuickLink(action) {
    // Hide all sections first
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('compareSection').style.display = 'none';
    document.getElementById('prepareSection').style.display = 'none';

    // Show selected section
    if (action === 'quiz') {
        document.getElementById('quizSection').style.display = 'block';
        document.getElementById('quizSection').scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'compare') {
        document.getElementById('compareSection').style.display = 'block';
        document.getElementById('compareSection').scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'prepare') {
        document.getElementById('prepareSection').style.display = 'block';
        document.getElementById('prepareSection').scrollIntoView({ behavior: 'smooth' });
    }
}

// ═══════════════════════════════════════════════════════════════
// SECTION CONTROLS (Close buttons)
// ═══════════════════════════════════════════════════════════════

function initializeSectionControls() {
    const closeButtons = document.querySelectorAll('.close-section-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            if (section === 'quiz') {
                document.getElementById('quizSection').style.display = 'none';
            } else if (section === 'compare') {
                document.getElementById('compareSection').style.display = 'none';
            } else if (section === 'prepare') {
                document.getElementById('prepareSection').style.display = 'none';
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// PREPARATION TABS
// ═══════════════════════════════════════════════════════════════

function initializePreparationTabs() {
    const tabs = document.querySelectorAll('.prep-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchPrepTab(tabName);
        });
    });
}

function switchPrepTab(tabName) {
    // Remove active class from all tabs
    document.querySelectorAll('.prep-tab').forEach(tab => {
        tab.classList.remove('prep-tab--active');
    });

    // Remove active class from all tab contents
    document.querySelectorAll('.prep-tab-content').forEach(content => {
        content.classList.remove('prep-tab-content--active');
    });

    // Add active class to selected tab
    const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedTab) {
        selectedTab.classList.add('prep-tab--active');
    }

    // Show selected tab content
    const tabContent = document.getElementById(`${tabName}Tab`);
    if (tabContent) {
        tabContent.classList.add('prep-tab-content--active');
    }
}

// ═══════════════════════════════════════════════════════════════
// POPULATE LOCATION SELECTORS (for comparison tool)
// ═══════════════════════════════════════════════════════════════

function populateLocationSelectors() {
    const locationA = document.getElementById('locationA');
    const locationB = document.getElementById('locationB');

    if (!locationA || !locationB) return;

    // Clear existing options
    locationA.innerHTML = '<option value="">Select location...</option>';
    locationB.innerHTML = '<option value="">Select location...</option>';

    // Populate with current database
    Object.keys(currentDatabase).forEach(key => {
        const location = currentDatabase[key];

        const optionA = document.createElement('option');
        optionA.value = key;
        optionA.textContent = `${location.name} (${location.pain_level}/10)`;
        locationA.appendChild(optionA);

        const optionB = document.createElement('option');
        optionB.value = key;
        optionB.textContent = `${location.name} (${location.pain_level}/10)`;
        locationB.appendChild(optionB);
    });
}

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function getPainLevelColor(level) {
    if (level <= 3) return '#10B981'; // Green
    if (level <= 6) return '#F59E0B'; // Yellow
    if (level <= 8) return '#F97316'; // Orange
    return '#EF4444'; // Red
}

function getPainCategory(level) {
    if (level <= 3) return 'Minimal Pain';
    if (level <= 6) return 'Moderate Pain';
    if (level <= 8) return 'High Pain';
    return 'Severe Pain';
}

// Make displayPainInfo available globally for body-map.js
window.displayPainInfo = displayPainInfo;
