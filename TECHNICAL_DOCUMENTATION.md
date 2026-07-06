# Piercing Pain Guide - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support / Contact](#support--contact)

---

## Architecture Overview

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (custom properties, flexbox, grid) |
| **Logic** | Vanilla JavaScript (ES6+) |
| **Dependencies** | None (zero external libraries) |

### File Structure

```
piercing-pain-guide/
├── index.html              # Main tool page (primary entry point)
├── documentation.html      # Standalone documentation page
├── embed.html              # Embed instructions and code generator
├── css/
│   ├── style.css           # Main tool styles
│   └── poli-standard.css   # Standard Poli branding styles
├── js/
│   ├── common.js           # Theme toggle, iframe resizing, embed modal
│   ├── body-map.js         # Interactive SVG body map rendering
│   └── comparison.js       # Location comparison logic
└── assets/
    └── poli-logo.png       # Poli International logo (40px)
```

### Component / Logic Breakdown

| Component | File | Responsibility |
|-----------|------|----------------|
| **Procedure Toggle** | `index.html` | Switch between Tattoo and Piercing pain guides |
| **Body Map** | `body-map.js` | Renders clickable front/back body region buttons |
| **Pain Info Display** | `index.html` | Shows selected location details (category, feels like, duration, factors, healing pain, warnings) |
| **Pain Tolerance Quiz** | `index.html` | 7-question form, calculates tolerance level, provides recommendations |
| **Location Comparison** | `comparison.js` | Side-by-side comparison of two selected locations |
| **Preparation Guide** | `index.html` | Tabbed checklist (Before, During, After) with breathing techniques and coping strategies |
| **Theme Toggle** | `common.js` | Dark/light mode persistence via `localStorage` |
| **Embed Modal** | `common.js` | Generates iframe embed code for the current URL |
| **Iframe Resizer** | `common.js` | Sends height to parent window for responsive embedding |

---

## Data Schemas

### Location Data Object

Each body location is stored as an object with the following fields (example values from the codebase):

```javascript
{
  name: "Outer Shoulder",
  pain_level: 4,
  color: "#10B981",
  category: "Moderate",
  why_hurts: "Moderate nerve density, good muscle padding",
  feels_like: "Buzzing sensation with occasional sharpness",
  duration: "30-60 minutes for average piece",
  factors: ["Skin thickness", "Artist technique", "Your pain tolerance"],
  best_for: "First tattoos, medium-sized designs",
  healing_pain: "Mild soreness for 2-3 days",
  warning: "Avoid if you have shoulder injuries" // optional
}
```

### Quiz Result Object

```javascript
{
  score: 18,          // Sum of 7 question values (range: 7-21)
  level: "High",      // "Low" (7-11), "Moderate" (12-16), "High" (17-21)
  description: "You have a high pain tolerance...",
  recommendations: [
    "You can handle most locations comfortably",
    "Focus on design over pain concerns"
  ],
  avoid: []           // Array of location names to approach with caution
}
```

### Comparison Result Object

```javascript
{
  locationA: { /* full location object */ },
  locationB: { /* full location object */ },
  difference: 2,      // Absolute pain_level difference
  morePainful: "Outer Shoulder",
  lessPainful: "Outer Forearm"
}
```

---

## Calculation / Logic Algorithms

### Pain Tolerance Quiz Scoring

**Function:** `handleQuizSubmit()` (inline in `index.html`)

**Algorithm:**

1. Collect values from 7 radio button groups (`q1` through `q7`)
2. Each value is `1` (low tolerance), `2` (moderate), or `3` (high tolerance)
3. Calculate `totalScore = sum(q1 + q2 + q3 + q4 + q5 + q6 + q7)`
4. Classify tolerance level:
   - `totalScore <= 11` → **Low Tolerance** (score range 7-11)
   - `totalScore >= 12 && totalScore <= 16` → **Moderate Tolerance**
   - `totalScore >= 17` → **High Tolerance** (score range 17-21)
5. Generate recommendations based on tolerance level
6. Display results and optionally list locations to avoid

### Location Comparison Logic

**Function:** `handleComparison()` in `comparison.js`

**Algorithm:**

1. Read selected values from `<select id="locationA">` and `<select id="locationB">`
2. Validate both selections are non-empty and different
3. Look up location data from `currentDatabase` object using the location keys
4. Calculate `difference = Math.abs(locationA.pain_level - locationB.pain_level)`
5. Determine which location is more painful
6. Generate comparison summary text based on difference magnitude:
   - `difference <= 2` → "relatively small difference"
   - `difference >= 3 && difference <= 5` → "noticeable difference"
   - `difference >= 6` → "significant difference"
7. Render two side-by-side cards with full location details

### Body Map Rendering

**Function:** `renderBodyMap(view)` in `body-map.js`

**Algorithm:**

1. Clear the `#bodyMapSvg` container
2. If `view === 'front'`, call `createFrontBodyMap()` which generates a 2-column grid of clickable buttons
3. If `view === 'back'`, call `createBackBodyMap()` which generates a 2-column grid of clickable buttons
4. Each button is created by `createBodyRegion(locationKey, label, dataKey)` which:
   - Checks if the location exists in `currentDatabase` or `tattooPainLevels`
   - Returns empty string if location not found
   - Otherwise renders a styled button with gradient background, pain level badge, and hover effects
5. Call `attachClickHandlers()` to bind click events to all `.body-region-btn` elements

### Iframe Auto-Resize

**Function:** `sendHeight()` in `common.js`

**Algorithm:**

1. Calculate `height = document.body.scrollHeight + 50` (buffer)
2. Post message to parent window: `window.parent.postMessage({ height: height }, '*')`
3. Trigger on: page load, window resize, click events, change events
4. MutationObserver watches `document.body` for DOM changes and re-triggers

### Theme Persistence

**Function:** `setTheme(theme, save)` in `common.js`

**Algorithm:**

1. Accept theme parameter (`'light'` or `'dark'`)
2. Toggle CSS classes `light-mode` / `dark-mode` on `<body>`
3. Update toggle button icon (☀️ for light, ◐ for dark)
4. If `save === true`, store theme in `localStorage.setItem('theme', theme)`
5. On page load, read `localStorage.getItem('theme')` (default `'dark'`)

---

## API Reference

### Global Functions

| Function | File | Parameters | Returns | Description |
|----------|------|------------|---------|-------------|
| `initializeBodyMap()` | `body-map.js` | None | `void` | Renders front body map on DOMContentLoaded |
| `renderBodyMap(view)` | `body-map.js` | `view`: `'front'` or `'back'` | `void` | Renders body map for specified view |
| `switchView(view, activeBtn, inactiveBtn)` | `body-map.js` | `view`, `activeBtn` (Element), `inactiveBtn` (Element) | `void` | Toggles between front/back views |
| `createBodyRegion(locationKey, label, dataKey)` | `body-map.js` | `locationKey` (string), `label` (string), `dataKey` (string) | `string` (HTML) | Generates button HTML for a body region |
| `attachClickHandlers()` | `body-map.js` | None | `void` | Binds click events to all `.body-region-btn` elements |
| `updateBodyMap(procedureType)` | `body-map.js` | `procedureType` (string) | `void` | Re-renders body map when procedure type changes |
| `handleComparison()` | `comparison.js` | None | `void` | Reads select values and displays comparison |
| `displayComparison(locationA, locationB)` | `comparison.js` | `locationA` (object), `locationB` (object) | `void` | Renders comparison results grid |
| `setTheme(theme, save)` | `common.js` | `theme` (`'light'` or `'dark'`), `save` (boolean) | `void` | Applies theme and optionally persists |
| `sendHeight()` | `common.js` | None | `void` | Posts iframe height to parent window |

### Event Handlers

| Event | Element | Handler | Description |
|-------|---------|---------|-------------|
| `click` | `#frontViewBtn` | `switchView('front', ...)` | Switch to front body map |
| `click` | `#backViewBtn` | `switchView('back', ...)` | Switch to back body map |
| `click` | `#compareBtn` | `handleComparison()` | Execute location comparison |
| `click` | `#darkModeToggle` | Toggle theme | Switch dark/light mode |
| `click` | `#embedBtn` | Show modal | Display embed code modal |
| `click` | `.modal-close` | Hide modal | Close embed code modal |
| `submit` | `#quizForm` | Calculate tolerance | Submit quiz and show results |
| `click` | `.retake-quiz-btn` | Reset quiz | Clear results and show form again |
| `click` | `.quick-link-btn[data-action="quiz"]` | Show quiz section | Open pain tolerance quiz |
| `click` | `.quick-link-btn[data-action="compare"]` | Show compare section | Open location comparison |
| `click` | `.quick-link-btn[data-action="prepare"]` | Show prepare section | Open preparation guide |
| `click` | `.close-section-btn` | Hide section | Close the current section |
| `click` | `.prep-tab` | Switch tab | Switch between Before/During/After tabs |

### Global Variables

| Variable | Type | Description |
|----------|------|-------------|
| `currentView` | string | Current body map view (`'front'` or `'back'`) |
| `currentDatabase` | object | Active pain level database (piercing or tattoo) |
| `tattooPainLevels` | object | Tattoo-specific pain level data |

---

## Integration Guide

### Standalone Embedding

The tool is a dependency-free static HTML/CSS/JS application. Embed it on any website using an iframe:

```html
<!-- Standard (recommended) -->
<iframe
  src="https://poliinternational.com/tools/piercing-pain-guide/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Piercing Pain Guide by Poli International">
</iframe>

<!-- Large version -->
<iframe
  src="https://poliinternational.com/tools/piercing-pain-guide/index.html"
  width="100%"
  height="1000"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Piercing Pain Guide by Poli International">
</iframe>

<!-- Compact version -->
<iframe
  src="https://poliinternational.com/tools/piercing-pain-guide/index.html"
  width="100%"
  height="600"
  frameborder="0"
  style="border: 1px solid #ddd; border-radius: 8px;"
  title="Piercing Pain Guide by Poli International">
</iframe>
```

### Iframe Auto-Resize

The tool automatically sends its height to the parent window via `postMessage`:

```javascript
// Parent window listener (optional, for dynamic height)
window.addEventListener('message', function(event) {
  if (event.data && event.data.height) {
    document.getElementById('myIframe').style.height = event.data.height + 'px';
  }
});
```

### Theme Synchronization

When embedded, the tool listens for theme messages from the parent:

```javascript
// Parent can send theme to embedded tool
document.getElementById('myIframe').contentWindow.postMessage({
  type: 'poli-theme',
  light: true   // or false for dark
}, '*');
```

### No Dependencies Required

The tool requires:
- No external libraries (no jQuery, React, Vue, etc.)
- No API keys
- No database connections
- No server-side processing
- No cookies or tracking scripts

---

## Customization

### CSS Custom Properties

The tool uses CSS custom properties for theming. Override these in your parent page if needed:

```css
:root {
  --bg-primary: #0f0f0f;
  --bg-secondary: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --border-color: #333333;
  --calm-blue: #3B82F6;
  --pain-severe: #EF4444;
  --pain-high: #F97316;
  --pain-moderate: #F59E0B;
  --pain-minimal: #10B981;
}
```

### Embed Styling

Customize the iframe appearance via the `style` attribute:

```html
<iframe
  src="https://poliinternational.com/tools/piercing-pain-guide/index.html"
  width="100%"
  height="800"
  frameborder="0"
  style="border: 2px solid #B76E79; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
  title="Piercing Pain Guide by Poli International">
</iframe>
```

---

## Performance

| Metric | Value |
|--------|-------|
| **Total HTTP Requests** | 5 (1 HTML, 2 CSS, 2 JS, 1 image) |
| **Total Page Weight** | ~150 KB (uncompressed) |
| **JavaScript Size** | ~25 KB total across 3 files |
| **CSS Size** | ~15 KB total across 2 files |
| **Render-Blocking Resources** | None (CSS is inline in head, JS deferred) |
| **DOM Content Loaded** | < 500ms on modern browsers |
| **First Meaningful Paint** | < 300ms |

### Optimization Notes

- No external fonts or icon libraries
- SVG body map is rendered as HTML buttons (no heavy SVG paths)
- All logic is synchronous vanilla JS (no async overhead)
- Theme preference stored in `localStorage` (no server round-trip)
- Iframe height calculation uses passive `MutationObserver`

---

## Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari | 14+ | Full support |
| Edge | 90+ | Full support |
| iOS Safari | 14+ | Touch-optimized |
| Android Chrome | 90+ | Touch-optimized |

### Requirements

- JavaScript enabled (required for interactivity)
- HTML5 `localStorage` support (for theme persistence)
- ES6+ support (arrow functions, `const`/`let`, template literals)
- CSS Grid and Flexbox support (for layout)
- `postMessage` API (for iframe communication)

---

## Security

### Input Handling

| Input | Handling | XSS Risk |
|-------|----------|----------|
| Quiz radio buttons | Pre-defined values (1, 2, 3) | None |
| Location selects | Pre-defined option values | None |
| Embed URL | Generated from `window.location.href` (read-only) | None |
| Theme message | Only accepts `{ type: 'poli-theme', light: boolean }` | Low (validated) |
| Iframe height message | Only reads `event.data.height` (number) | None |

### Security Measures

1. **No user-generated content** is rendered as HTML
2. **No `innerHTML`** with unsanitized input (all dynamic content uses pre-defined data)
3. **No external scripts** or third-party CDNs
4. **No cookies** or tracking mechanisms
5. **No form submissions** to external servers
6. **No `eval()`** or dynamic code execution
7. **`localStorage`** only stores theme preference (no sensitive data)
8. **`postMessage`** origin is not validated (but only reads numeric height values)

### Content Security Policy (Recommended)

If embedding on a site with CSP, allow:

```
frame-src https://poliinternational.com;
script-src 'self' 'unsafe-inline';  // Required for inline event handlers
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-02-07 | Initial release. Interactive body map, pain tolerance quiz, location comparison, preparation guide, dark/light theme, embed support. |

---

## Support / Contact

For technical support, integration assistance, or custom development:

- **Email:** support@poliinternational.com
- **Website:** https://poliinternational.com
- **Documentation:** https://poliinternational.com/piercing-pain-guide-documentation/
- **Tool URL:** https://poliinternational.com/tools/piercing-pain-guide/
- **Embed Page:** https://poliinternational.com/tools/piercing-pain-guide/embed.html

### Attribution

When embedding, the tool includes a subtle "Powered by Poli International" reference. This attribution must remain intact per the tool's license.

---

*Documentation generated from source code version 1.0.0. For the most current information, refer to the live tool at the URL above.*
