# Pain Guide - SKILL.md Standards Update Plan

## Current State vs. Required State

### ❌ Current Issues:
1. Header doesn't match SKILL.md standard (missing logo layout, embed button placement, title group)
2. Missing community feedback section
3. Footer missing (no Ko-fi button, no standardized footer)
4. Embed modal exists but doesn't match standard format
5. common.js and feedback.js not included in scripts
6. CSS doesn't use standard variable names
7. BEM naming inconsistent

### ✅ Required Changes:

## 1. HTML Structure Updates

### A. Header (Lines 12-28) - REPLACE WITH:
```html
<header class="pain-guide__header">
    <div class="pain-guide__header-content">
        <!-- LEFT: Logo -->
        <div class="pain-guide__logo-container">
            <img src="images/Poli-International-Co.webp" 
                 alt="Poli International Logo" 
                 class="pain-guide__logo">
        </div>

        <!-- CENTER: Title Group -->
        <div class="pain-guide__title-group">
            <h1 class="pain-guide__header-title">Interactive Pain Level Guide & Client Preparation</h1>
            <p class="pain-guide__header-subtitle">
                Understand pain levels, prepare effectively, and reduce anxiety through education
            </p>
        </div>

        <!-- RIGHT: Buttons -->
        <div class="pain-guide__header-buttons">
            <button id="embedBtn" class="pain-guide__embed-button">
                <span class="embed-icon">⚡</span>
                <span class="embed-text">Free Embed</span>
            </button>
            <button id="darkModeToggle" class="pain-guide__dark-mode-toggle">
                <span class="dark-mode-icon">◐</span>
            </button>
        </div>
    </div>
</header>
```

### B. Main Content (Lines 30-end) - WRAP WITH:
```html
<div class="pain-guide">
    <main class="pain-guide__main">
        <div class="pain-guide__container">
            <!-- ALL EXISTING TOOL CONTENT STAYS HERE -->
            <!-- Procedure toggle, body map, pain info, quiz, comparison, preparation -->
        </div>
    </main>
    
    <!-- ADD COMMUNITY FEEDBACK SECTION HERE -->
    <!-- ADD FOOTER HERE -->
</div>
```

### C. Community Feedback Section - ADD BEFORE FOOTER:
```html
<section class="community-feedback">
    <div class="container">
        <div class="feedback-card">
            <div class="feedback-header">
                <h2 class="feedback-title">💬 Help Us Build Better Tools, Friend!</h2>
                <p class="feedback-subtitle">
                    Hey there, fellow body art enthusiast! Whether you're a professional tattooist, piercer, or someone who loves body art as much as we do – we're all in this together.
                    Our passion doesn't get much support out there, so let's stick together and build the best tools to help our community thrive!
                </p>
                <p class="feedback-callout">
                    <strong>Your feedback matters!</strong> Found something useful? Got ideas for improvements? We're all ears!
                    Help us make this tool even better for everyone in our body art family.
                </p>
            </div>

            <form class="feedback-form" id="feedbackForm">
                <div class="feedback-form-grid">
                    <div class="form-group">
                        <label for="userEmail" class="form-label">Your Email (so we can reply!)</label>
                        <input type="email" id="userEmail" name="userEmail" class="form-input"
                               placeholder="your.email@example.com" required>
                    </div>

                    <div class="form-group">
                        <label for="userRole" class="form-label">You are a...</label>
                        <select id="userRole" name="userRole" class="form-select" required>
                            <option value="">Choose one</option>
                            <option value="tattoo_artist">Tattoo Artist</option>
                            <option value="piercer">Professional Piercer</option>
                            <option value="shop_owner">Shop Owner</option>
                            <option value="apprentice">Apprentice</option>
                            <option value="enthusiast">Body Art Enthusiast/Customer</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label for="feedbackText" class="form-label">Share Your Thoughts, Ideas, or Suggestions</label>
                    <textarea id="feedbackText" name="feedbackText" class="form-textarea"
                              placeholder="What do you love? What could be better? Any features you'd like to see? We genuinely want to hear from you!"
                              rows="5" required></textarea>
                </div>

                <div class="form-actions">
                    <button type="submit" class="feedback-submit-btn">
                        <span class="btn-icon">✉️</span>
                        <span class="btn-text">Send Feedback</span>
                    </button>
                </div>

                <div class="feedback-message feedback-message--success" id="feedbackSuccess" style="display: none;">
                    <strong>🎉 Thank you, friend!</strong> Your feedback has been sent. We'll read it carefully and get back to you soon!
                </div>
                <div class="feedback-message feedback-message--error" id="feedbackError" style="display: none;">
                    <strong>😔 Oops!</strong> Something went wrong. Please try again or email us directly at patrick@poli-international.com
                </div>
            </form>
        </div>
    </div>
</section>
```

### D. Footer - ADD AFTER FEEDBACK SECTION:
```html
<footer class="pain-guide__footer">
    <div class="pain-guide__footer-logo-section">
        <img src="images/Poli-International-Co.webp" 
             alt="Poli International" 
             class="pain-guide__footer-logo">
    </div>

    <div class="pain-guide__support-section">
        <p class="pain-guide__support-text">
            ☕ Enjoying this free tool? Support development of more professional tools!
        </p>
        <a href='https://ko-fi.com/C0C81NEXBV' target='_blank' class="pain-guide__kofi">
            <img src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' 
                 border='0' 
                 alt='Buy Me a Coffee at ko-fi.com' 
                 class="pain-guide__kofi-img" />
        </a>
    </div>

    <div class="pain-guide__footer-info">
        <p class="pain-guide__copyright">
            © 2025 Poli International - Professional Tattoo & Piercing Supplies
        </p>
        <p class="pain-guide__disclaimer">
            ⚠️ Pain is subjective and varies between individuals. Always consult with professional artists and healthcare providers about your specific situation.
        </p>
    </div>
</footer>
```

### E. Embed Modal - UPDATE TO STANDARD:
```html
<div id="embedModal" class="modal" style="display: none;">
    <div class="modal-content">
        <span class="modal-close" id="modalClose">&times;</span>
        <h2>Embed This Tool</h2>
        <p>Copy this code to embed the Pain Level Guide on your website:</p>
        <textarea id="embedCode" readonly></textarea>
        <button id="copyEmbedCode" class="copy-btn">Copy Code</button>
    </div>
</div>
```

### F. Scripts Section - UPDATE ORDER:
```html
<script src="js/pain-database.js"></script>
<script src="js/pain-guide.js"></script>
<script src="js/body-map.js"></script>
<script src="js/quiz.js"></script>
<script src="js/comparison.js"></script>
<script src="js/common.js"></script>      <!-- ADD -->
<script src="js/feedback.js"></script>     <!-- ADD -->
```

## 2. CSS Updates

### A. Add Standard CSS Variables (Beginning of file):
```css
:root {
  /* Tool-Specific Colors */
  --calm-blue: #3B82F6;
  --comfort-purple: #8B5CF6;
  --trust-teal: #14B8A6;
  --kofi-red: #FF5E5B;
  
  /* Pain Scale (Keep existing) */
  --pain-minimal: #10B981;
  --pain-moderate: #F59E0B;
  --pain-high: #F97316;
  --pain-severe: #EF4444;
  
  /* Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-tertiary: #F1F5F9;
  --bg-card: #FFFFFF;
  
  /* Text Colors */
  --text-primary: #1E293B;
  --text-secondary: #64748B;
  --text-muted: #94A3B8;
  
  /* Borders */
  --border-primary: #E2E8F0;
  --border-secondary: #CBD5E1;
  --border-accent: var(--calm-blue);
  
  /* Spacing (Standard) */
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Border Radius */
  --border-radius: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Transitions */
  --transition: all 0.3s ease;
  --transition-fast: all 0.15s ease;
}

body.dark-mode {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-tertiary: #334155;
  --bg-card: #1E293B;
  
  --text-primary: #F1F5F9;
  --text-secondary: #CBD5E1;
  --text-muted: #94A3B8;
  
  --border-primary: #334155;
  --border-secondary: #475569;
}
```

### B. Add Header CSS:
```css
.pain-guide__header {
  padding: var(--spacing-lg) var(--spacing-md);
  background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
  border-bottom: 3px solid var(--calm-blue);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.pain-guide__header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-md);
  align-items: center;
}

.pain-guide__logo {
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
}

.pain-guide__title-group {
  text-align: center;
}

.pain-guide__header-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}

.pain-guide__header-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 4px 0 0 0;
  line-height: 1.3;
}

.pain-guide__header-buttons {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.pain-guide__embed-button {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: white;
  color: var(--calm-blue);
  border: none;
  border-radius: var(--border-radius);
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.pain-guide__embed-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.pain-guide__dark-mode-toggle {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
  font-size: 1.2rem;
}

.pain-guide__dark-mode-toggle:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.05);
}
```

### C. Add Footer CSS:
```css
.pain-guide__footer {
  background: var(--bg-primary);
  border-top: 3px solid var(--calm-blue);
  padding: var(--spacing-2xl) var(--spacing-lg);
  margin-top: var(--spacing-2xl);
  text-align: center;
}

.pain-guide__footer-logo {
  height: 60px;
  width: auto;
  margin: 0 auto;
}

.pain-guide__support-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.pain-guide__kofi-img {
  height: 45px;
  transition: var(--transition);
}

.pain-guide__kofi-img:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.pain-guide__copyright,
.pain-guide__disclaimer {
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-top: var(--spacing-md);
}
```

### D. Add Community Feedback CSS:
(Copy entire feedback section from stencil-calculator/css/style.css lines with "community-feedback")

### E. Add Modal CSS:
(Copy modal section from stencil-calculator CSS)

## 3. BEM Naming Convention Updates

Update all class names to follow pattern:
```
.pain-guide__[element]
.pain-guide__[element]--[modifier]
```

Current classes to update:
- `.main-header` → `.pain-guide__header`
- `.main-content` → `.pain-guide__main`
- `.container` → `.pain-guide__container`
- `.tool-title` → `.pain-guide__title`
- etc.

## 4. Logo Path Updates

Current: `../../assets/poli-logo.png`
New: `images/Poli-International-Co.webp`

## 5. Embed.html Updates

Apply same structure changes to embed.html:
- Update header (compact version)
- Keep tool functionality
- Update footer
- Update modal
- Update CSS classes

## Summary of File Changes

| File | Changes | Lines Modified |
|------|---------|----------------|
| index.html | Complete restructure | ~700 lines |
| css/style.css | Add variables, header, footer, feedback, modal | ~800 lines added |
| js/common.js | ADDED (copied from stencil) | +96 lines |
| js/feedback.js | ADDED (copied from stencil) | +97 lines |
| embed.html | Restructure to match standards | ~500 lines |
| images/* | ADD logo file | +1 file |

## Testing Checklist After Updates

- [ ] Header displays correctly (logo, title, buttons)
- [ ] Dark mode toggle works
- [ ] Embed modal opens and copies code
- [ ] All tool functionality preserved (body map, quiz, comparison, prep)
- [ ] Community feedback form submits successfully
- [ ] Footer displays with Ko-fi button (45px height)
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] All colors match SKILL.md standards
- [ ] BEM naming consistent throughout
- [ ] Scripts load in correct order

## Estimated Time

Full implementation: 2-3 hours of systematic updates and testing
