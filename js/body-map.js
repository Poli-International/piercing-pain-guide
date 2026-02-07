// ═══════════════════════════════════════════════════════════════
// BODY-MAP.JS - Interactive SVG Body Diagram
// Clickable body regions that display pain information
// ═══════════════════════════════════════════════════════════════

let currentView = 'front'; // 'front' or 'back'

document.addEventListener('DOMContentLoaded', function() {
    initializeBodyMap();
    initializeViewToggle();
});

// ═══════════════════════════════════════════════════════════════
// INITIALIZE BODY MAP
// ═══════════════════════════════════════════════════════════════

function initializeBodyMap() {
    renderBodyMap('front');
}

// ═══════════════════════════════════════════════════════════════
// VIEW TOGGLE (Front / Back)
// ═══════════════════════════════════════════════════════════════

function initializeViewToggle() {
    const frontBtn = document.getElementById('frontViewBtn');
    const backBtn = document.getElementById('backViewBtn');

    frontBtn.addEventListener('click', function() {
        switchView('front', frontBtn, backBtn);
    });

    backBtn.addEventListener('click', function() {
        switchView('back', backBtn, frontBtn);
    });
}

function switchView(view, activeBtn, inactiveBtn) {
    if (currentView === view) return;

    currentView = view;

    // Update button states
    activeBtn.classList.add('view-btn--active');
    inactiveBtn.classList.remove('view-btn--active');

    // Render new view
    renderBodyMap(view);
}

// ═══════════════════════════════════════════════════════════════
// RENDER BODY MAP
// ═══════════════════════════════════════════════════════════════

function renderBodyMap(view) {
    const container = document.getElementById('bodyMapSvg');

    if (view === 'front') {
        container.innerHTML = createFrontBodyMap();
    } else {
        container.innerHTML = createBackBodyMap();
    }

    // Add click handlers to all regions
    attachClickHandlers();
}

// ═══════════════════════════════════════════════════════════════
// CREATE FRONT BODY MAP (Simplified SVG)
// ═══════════════════════════════════════════════════════════════

function createFrontBodyMap() {
    // Simplified body diagram with clickable regions
    // In production, use detailed SVG paths
    return `
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-sm); padding: var(--spacing-md);">
            ${createBodyRegion('outer_shoulder', 'Outer Shoulder', 'outer_shoulder')}
            ${createBodyRegion('outer_upper_arm', 'Outer Upper Arm', 'outer_upper_arm')}
            ${createBodyRegion('inner_upper_arm', 'Inner Upper Arm', 'inner_upper_arm')}
            ${createBodyRegion('outer_forearm', 'Outer Forearm', 'outer_forearm')}
            ${createBodyRegion('inner_forearm', 'Inner Forearm', 'inner_forearm')}
            ${createBodyRegion('chest', 'Chest', 'chest')}
            ${createBodyRegion('ribs', 'Ribs', 'ribs')}
            ${createBodyRegion('stomach', 'Stomach', 'stomach')}
            ${createBodyRegion('hands_fingers', 'Hands/Fingers', 'hands_fingers')}
            ${createBodyRegion('outer_thigh', 'Outer Thigh', 'outer_thigh')}
            ${createBodyRegion('knee', 'Knee', 'knee')}
            ${createBodyRegion('outer_calf', 'Outer Calf', 'outer_calf')}
            ${createBodyRegion('ankle', 'Ankle', 'ankle')}
            ${createBodyRegion('feet_toes', 'Feet/Toes', 'feet_toes')}
            ${createBodyRegion('neck_front', 'Front of Neck', 'neck_front')}
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// CREATE BACK BODY MAP (Simplified SVG)
// ═══════════════════════════════════════════════════════════════

function createBackBodyMap() {
    return `
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--spacing-sm); padding: var(--spacing-md);">
            ${createBodyRegion('outer_shoulder', 'Outer Shoulder', 'outer_shoulder')}
            ${createBodyRegion('upper_back', 'Upper Back', 'upper_back')}
            ${createBodyRegion('spine', 'Spine', 'spine')}
            ${createBodyRegion('lower_back', 'Lower Back', 'lower_back')}
            ${createBodyRegion('outer_upper_arm', 'Outer Upper Arm', 'outer_upper_arm')}
            ${createBodyRegion('inner_elbow', 'Inner Elbow', 'inner_elbow')}
            ${createBodyRegion('outer_forearm', 'Outer Forearm', 'outer_forearm')}
            ${createBodyRegion('outer_thigh', 'Outer Thigh', 'outer_thigh')}
            ${createBodyRegion('knee', 'Knee', 'knee')}
            ${createBodyRegion('outer_calf', 'Outer Calf', 'outer_calf')}
        </div>
    `;
}

// ═══════════════════════════════════════════════════════════════
// CREATE BODY REGION BUTTON
// ═══════════════════════════════════════════════════════════════

function createBodyRegion(locationKey, label, dataKey) {
    // Check if location exists in current database
    const location = (typeof currentDatabase !== 'undefined' && currentDatabase[dataKey]) ||
                     (typeof tattooPainLevels !== 'undefined' && tattooPainLevels[dataKey]);

    if (!location) {
        return ''; // Don't render if location doesn't exist
    }

    const color = location.color || '#999999';
    const painLevel = location.pain_level || '?';

    return `
        <button class="body-region-btn"
                data-location="${dataKey}"
                style="
                    background: linear-gradient(135deg, ${color}22 0%, ${color}44 100%);
                    border: 2px solid ${color};
                    border-radius: var(--radius-md);
                    padding: var(--spacing-md);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-align: left;
                    color: var(--text-primary);
                    font-weight: 600;
                    position: relative;
                "
                onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.2)';"
                onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none';">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.875rem;">${label}</span>
                <span style="
                    background: ${color};
                    color: white;
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 700;
                ">${painLevel}/10</span>
            </div>
        </button>
    `;
}

// ═══════════════════════════════════════════════════════════════
// ATTACH CLICK HANDLERS
// ═══════════════════════════════════════════════════════════════

function attachClickHandlers() {
    const regions = document.querySelectorAll('.body-region-btn');
    regions.forEach(region => {
        region.addEventListener('click', function() {
            const locationKey = this.getAttribute('data-location');
            if (typeof window.displayPainInfo === 'function') {
                window.displayPainInfo(locationKey);
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// UPDATE BODY MAP (called when procedure type changes)
// ═══════════════════════════════════════════════════════════════

function updateBodyMap(procedureType) {
    // Re-render current view with new procedure type
    renderBodyMap(currentView);
}

// Make available globally
window.updateBodyMap = updateBodyMap;
