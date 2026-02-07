// ═══════════════════════════════════════════════════════════════
// COMPARISON.JS - Location Comparison Tool
// Side-by-side pain level comparison
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
    const compareBtn = document.getElementById('compareBtn');
    if (compareBtn) {
        compareBtn.addEventListener('click', handleComparison);
    }
});

// ═══════════════════════════════════════════════════════════════
// HANDLE COMPARISON
// ═══════════════════════════════════════════════════════════════

function handleComparison() {
    const locationA = document.getElementById('locationA').value;
    const locationB = document.getElementById('locationB').value;

    if (!locationA || !locationB) {
        alert('Please select both locations to compare');
        return;
    }

    if (locationA === locationB) {
        alert('Please select two different locations');
        return;
    }

    // Get location data
    const dataA = currentDatabase[locationA];
    const dataB = currentDatabase[locationB];

    // Display comparison
    displayComparison(dataA, dataB);
}

// ═══════════════════════════════════════════════════════════════
// DISPLAY COMPARISON RESULTS
// ═══════════════════════════════════════════════════════════════

function displayComparison(locationA, locationB) {
    const resultsContainer = document.getElementById('comparisonResults');
    resultsContainer.style.display = 'grid';

    // Determine which is more painful
    const difference = Math.abs(locationA.pain_level - locationB.pain_level);
    let comparisonText = '';

    if (locationA.pain_level === locationB.pain_level) {
        comparisonText = `<p style="text-align: center; grid-column: 1 / -1; padding: var(--spacing-lg); background: var(--bg-tertiary); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
            <strong>Equal Pain Levels!</strong> Both locations have similar pain levels (${locationA.pain_level}/10).
            Your experience may vary based on individual factors.
        </p>`;
    } else {
        const more_painful = locationA.pain_level > locationB.pain_level ? locationA : locationB;
        const less_painful = locationA.pain_level > locationB.pain_level ? locationB : locationA;

        comparisonText = `<div style="grid-column: 1 / -1; padding: var(--spacing-lg); background: var(--bg-tertiary); border-radius: var(--radius-md); margin-bottom: var(--spacing-lg);">
            <h3 style="color: var(--calm-blue); margin-bottom: var(--spacing-md);">Comparison Summary</h3>
            <p><strong style="color: ${more_painful.color};">${more_painful.name}</strong> is more painful than <strong style="color: ${less_painful.color};">${less_painful.name}</strong></p>
            <p style="margin-top: var(--spacing-sm);">Pain difference: <strong>${difference} points</strong> on the 1-10 scale</p>
            <p style="margin-top: var(--spacing-sm); color: var(--text-secondary);">
                ${difference <= 2 ? 'This is a relatively small difference - your experience may vary.' : ''}
                ${difference >= 3 && difference <= 5 ? 'This is a noticeable difference in pain level.' : ''}
                ${difference >= 6 ? 'This is a significant difference - prepare accordingly!' : ''}
            </p>
        </div>`;
    }

    resultsContainer.innerHTML = `
        ${comparisonText}

        <!-- Location A Card -->
        <div style="background: var(--card-bg); border: 2px solid ${locationA.color}; border-radius: var(--radius-lg); padding: var(--spacing-lg);">
            <h3 style="color: ${locationA.color}; margin-bottom: var(--spacing-md);">${locationA.name}</h3>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md); padding-bottom: var(--spacing-md); border-bottom: 1px solid var(--border-color);">
                <span style="font-weight: 600;">Pain Level:</span>
                <span style="font-size: 1.5rem; font-weight: 700; color: ${locationA.color};">${locationA.pain_level}/10</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Category:</strong>
                <span style="color: var(--text-secondary);">${locationA.category}</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Feels Like:</strong>
                <span style="color: var(--text-secondary);">${locationA.feels_like}</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Duration:</strong>
                <span style="color: var(--text-secondary);">${locationA.duration}</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Session Tolerance:</strong>
                <span style="color: var(--text-secondary);">${locationA.session_tolerance || 'Varies'}</span>
            </div>

            <div>
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Healing Pain:</strong>
                <span style="color: var(--text-secondary);">${locationA.healing_pain}</span>
            </div>

            ${locationA.warning ? `
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-md); background: rgba(239, 68, 68, 0.1); border: 1px solid var(--pain-severe); border-radius: var(--radius-md);">
                    <strong style="color: var(--pain-severe);">⚠️ Warning:</strong>
                    <p style="margin-top: var(--spacing-xs); color: var(--text-secondary);">${locationA.warning}</p>
                </div>
            ` : ''}
        </div>

        <!-- Location B Card -->
        <div style="background: var(--card-bg); border: 2px solid ${locationB.color}; border-radius: var(--radius-lg); padding: var(--spacing-lg);">
            <h3 style="color: ${locationB.color}; margin-bottom: var(--spacing-md);">${locationB.name}</h3>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md); padding-bottom: var(--spacing-md); border-bottom: 1px solid var(--border-color);">
                <span style="font-weight: 600;">Pain Level:</span>
                <span style="font-size: 1.5rem; font-weight: 700; color: ${locationB.color};">${locationB.pain_level}/10</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Category:</strong>
                <span style="color: var(--text-secondary);">${locationB.category}</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Feels Like:</strong>
                <span style="color: var(--text-secondary);">${locationB.feels_like}</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Duration:</strong>
                <span style="color: var(--text-secondary);">${locationB.duration}</span>
            </div>

            <div style="margin-bottom: var(--spacing-md);">
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Session Tolerance:</strong>
                <span style="color: var(--text-secondary);">${locationB.session_tolerance || 'Varies'}</span>
            </div>

            <div>
                <strong style="display: block; margin-bottom: var(--spacing-xs);">Healing Pain:</strong>
                <span style="color: var(--text-secondary);">${locationB.healing_pain}</span>
            </div>

            ${locationB.warning ? `
                <div style="margin-top: var(--spacing-md); padding: var(--spacing-md); background: rgba(239, 68, 68, 0.1); border: 1px solid var(--pain-severe); border-radius: var(--radius-md);">
                    <strong style="color: var(--pain-severe);">⚠️ Warning:</strong>
                    <p style="margin-top: var(--spacing-xs); color: var(--text-secondary);">${locationB.warning}</p>
                </div>
            ` : ''}
        </div>
    `;

    // Scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
