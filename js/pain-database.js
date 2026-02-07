// ═══════════════════════════════════════════════════════════════
// PAIN DATABASE - Tattoo & Piercing Pain Levels
// Comprehensive pain data for all body locations
// ═══════════════════════════════════════════════════════════════

// TATTOO PAIN LEVELS DATABASE
const tattooPainLevels = {
    // ═══════════════════════════════════════════════════════════════
    // LOW PAIN (1-3) - Minimal Pain
    // ═══════════════════════════════════════════════════════════════

    outer_shoulder: {
        name: 'Outer Shoulder',
        pain_level: 2,
        category: 'Minimal Pain',
        color: '#10B981',
        why_hurts: 'Good muscle padding, thick skin, fewer nerve endings',
        feels_like: 'Light scratching, minor discomfort, very tolerable',
        duration: 'Mild soreness for 1-2 days',
        factors: [
            'Muscle mass affects comfort',
            'Bony shoulder cap slightly more sensitive',
            'One of easiest locations'
        ],
        best_for: 'First tattoo, large pieces, long sessions',
        session_tolerance: 'Can sit 4-6 hours comfortably',
        healing_pain: 'Minimal - mostly forgotten by day 2'
    },

    outer_upper_arm: {
        name: 'Outer Upper Arm (Bicep)',
        pain_level: 2,
        category: 'Minimal Pain',
        color: '#10B981',
        why_hurts: 'Excellent muscle padding, thick skin',
        feels_like: 'Light scratching, more annoying than painful',
        duration: 'Mild soreness 1-2 days',
        factors: [
            'Muscle development reduces pain',
            'Inner arm more sensitive than outer',
            'Easy to sit still'
        ],
        best_for: 'First tattoo, portraits, large work',
        session_tolerance: '3-5 hours typical',
        healing_pain: 'Very minimal'
    },

    outer_forearm: {
        name: 'Outer Forearm',
        pain_level: 2,
        category: 'Minimal Pain',
        color: '#10B981',
        why_hurts: 'Thicker skin, less sensitive',
        feels_like: 'Light scratching, easily tolerable',
        duration: 'Mild soreness 1-2 days',
        factors: [
            'One of least painful locations',
            'Great for first tattoo',
            'Can watch artist work'
        ],
        best_for: 'First tattoo, detailed work, portraits',
        session_tolerance: '3-4 hours comfortable',
        healing_pain: 'Minimal - easy to ignore'
    },

    outer_calf: {
        name: 'Outer Calf',
        pain_level: 3,
        category: 'Mild Pain',
        color: '#84CC16',
        why_hurts: 'Good muscle padding, but some nerve endings',
        feels_like: 'Moderate scratching, manageable',
        duration: 'Soreness 2-3 days',
        factors: [
            'Outer calf easier than inner',
            'Muscle padding helps',
            'Near shin/ankle more painful'
        ],
        best_for: 'Medium to large pieces',
        session_tolerance: '2-4 hours',
        healing_pain: 'Moderate - notice when walking'
    },

    outer_thigh: {
        name: 'Outer Thigh',
        pain_level: 3,
        category: 'Mild Pain',
        color: '#84CC16',
        why_hurts: 'Good muscle and fat padding',
        feels_like: 'Scratching sensation, tolerable',
        duration: 'Soreness 2-3 days',
        factors: [
            'Large canvas = long sessions',
            'Muscle padding helps',
            'Near hip bone more sensitive'
        ],
        best_for: 'Large-scale work, thigh pieces',
        session_tolerance: '3-5 hours',
        healing_pain: 'Moderate, annoying when sitting'
    },

    // ═══════════════════════════════════════════════════════════════
    // MODERATE PAIN (4-6)
    // ═══════════════════════════════════════════════════════════════

    inner_forearm: {
        name: 'Inner Forearm',
        pain_level: 5,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Thinner skin, more nerve endings, visible veins',
        feels_like: 'Stinging, burning sensation, noticeable discomfort',
        duration: 'Soreness 3-4 days',
        factors: [
            'More sensitive than outer forearm',
            'Near wrist especially painful',
            'Veins visible = more nerve dense'
        ],
        best_for: 'Not recommended for first tattoo',
        session_tolerance: '2-3 hours',
        healing_pain: 'Moderate - notice with arm movement'
    },

    inner_upper_arm: {
        name: 'Inner Upper Arm',
        pain_level: 5,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Softer tissue, more sensitive, near armpit',
        feels_like: 'Stinging, uncomfortable, harder to sit still',
        duration: 'Soreness 3-4 days',
        factors: [
            'Near armpit increases sensitivity',
            'Softer tissue harder to tattoo',
            'Arm position can be awkward'
        ],
        best_for: 'Sleeve connections',
        session_tolerance: '2-3 hours',
        healing_pain: 'Moderate - annoying with arm movement'
    },

    chest: {
        name: 'Chest',
        pain_level: 6,
        category: 'Moderate-High Pain',
        color: '#F97316',
        why_hurts: 'Thin skin over ribs, near sternum very painful',
        feels_like: 'Sharp stinging, vibrates through chest',
        duration: 'Soreness 4-5 days',
        factors: [
            'Near sternum = most painful',
            'Over pec muscle easier',
            'Breathing affects pain',
            'Male vs female anatomy different'
        ],
        best_for: 'Bold designs, not first tattoo',
        session_tolerance: '2-3 hours with breaks',
        healing_pain: 'Noticeable - clothing rubs'
    },

    upper_back: {
        name: 'Upper Back',
        pain_level: 4,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Moderate muscle padding, some bony areas',
        feels_like: 'Scratching, tolerable but noticeable',
        duration: 'Soreness 2-3 days',
        factors: [
            'Shoulder blade areas more painful',
            'Spine very sensitive',
            'Cannot see work being done'
        ],
        best_for: 'Back pieces, wings',
        session_tolerance: '3-4 hours',
        healing_pain: 'Moderate - clothing rubs'
    },

    lower_back: {
        name: 'Lower Back',
        pain_level: 5,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Less muscle padding, near spine sensitive',
        feels_like: 'Stinging, noticeable discomfort',
        duration: 'Soreness 3-4 days',
        factors: [
            'Near spine increases sensitivity',
            'Lower back has less padding',
            'Waistband irritation during healing'
        ],
        best_for: 'Lower back pieces',
        session_tolerance: '2-3 hours',
        healing_pain: 'Moderate - waistband pressure'
    },

    // ═══════════════════════════════════════════════════════════════
    // HIGH PAIN (7-8) - Intense Pain
    // ═══════════════════════════════════════════════════════════════

    ribs: {
        name: 'Ribs / Side Torso',
        pain_level: 8,
        category: 'Intense Pain',
        color: '#EF4444',
        why_hurts: 'Thin skin directly over bone, many nerve endings',
        feels_like: 'Sharp, intense stinging, vibrates through body',
        duration: 'Significant soreness 5-7 days',
        factors: [
            'One of most painful locations',
            'Breathing intensifies pain',
            'Very difficult to sit still',
            'Near armpit even worse'
        ],
        best_for: 'Experienced clients only',
        session_tolerance: '1-2 hours MAX, frequent breaks',
        healing_pain: 'High - painful to breathe deeply, laugh, move',
        warning: 'Not recommended for first tattoo'
    },

    inner_elbow: {
        name: 'Inner Elbow (Ditch)',
        pain_level: 8,
        category: 'Intense Pain',
        color: '#EF4444',
        why_hurts: 'Extremely thin skin, nerve cluster, no padding',
        feels_like: 'Excruciating burning, electric shocks',
        duration: 'Intense pain 5-7 days',
        factors: [
            'One of most painful locations',
            'Nerve cluster in elbow',
            'Difficult position to work',
            'Many tap out during this area'
        ],
        best_for: 'Completing sleeve only - avoid if possible',
        session_tolerance: '30-60 minutes MAX',
        healing_pain: 'Severe - painful to bend arm',
        warning: 'Extremely painful - mental preparation critical'
    },

    knee: {
        name: 'Knee / Kneecap',
        pain_level: 7,
        category: 'High Pain',
        color: '#EF4444',
        why_hurts: 'Bone directly under thin skin, nerve dense',
        feels_like: 'Sharp, vibrating pain through leg',
        duration: 'Significant soreness 5-7 days',
        factors: [
            'Kneecap especially painful',
            'Ditch behind knee excruciating',
            'Difficult position to maintain',
            'Vibration through bone'
        ],
        best_for: 'Leg sleeves only',
        session_tolerance: '1-2 hours',
        healing_pain: 'High - painful to bend, walk'
    },

    // ═══════════════════════════════════════════════════════════════
    // SEVERE PAIN (9-10) - Extreme Pain
    // ═══════════════════════════════════════════════════════════════

    spine: {
        name: 'Spine / Vertebrae',
        pain_level: 9,
        category: 'Severe Pain',
        color: '#DC2626',
        why_hurts: 'Bone directly under thin skin, nerve highway',
        feels_like: 'Intense electric pain radiating outward',
        duration: 'Severe soreness 7-10 days',
        factors: [
            'Nerve highway along spine',
            'Every vertebrae is painful',
            'Vibration felt throughout body',
            'Very difficult to endure'
        ],
        best_for: 'Only as part of back piece',
        session_tolerance: '30-90 minutes with many breaks',
        healing_pain: 'Severe - painful to move, sit, lie down',
        warning: 'Extremely painful - not for first-timers'
    },

    armpit: {
        name: 'Armpit',
        pain_level: 9,
        category: 'Severe Pain',
        color: '#DC2626',
        why_hurts: 'Extremely sensitive skin, lymph nodes, nerve cluster',
        feels_like: 'Unbearable burning, shocking pain',
        duration: 'Severe pain 7-10 days',
        factors: [
            'One of most sensitive areas',
            'Nerve cluster',
            'Thin, sensitive skin',
            'Difficult to reach',
            'Many cannot complete this area'
        ],
        best_for: 'Only for sleeve connection',
        session_tolerance: '15-45 minutes MAX',
        healing_pain: 'Severe - painful to move arm at all',
        warning: 'Extremely painful - avoid if possible'
    },

    hands_fingers: {
        name: 'Hands / Fingers',
        pain_level: 8,
        category: 'Intense Pain',
        color: '#EF4444',
        why_hurts: 'Thin skin, bone, many nerve endings, no padding',
        feels_like: 'Sharp, burning, vibrating through hand',
        duration: 'Significant pain 5-7 days',
        factors: [
            'Very thin skin',
            'Bone directly under',
            'Nerve dense',
            'High visibility = high stakes',
            'Fades faster (friction, washing)'
        ],
        best_for: 'Experienced clients, committed',
        session_tolerance: '1-2 hours',
        healing_pain: 'High - use hands constantly',
        warning: 'Painful and high maintenance'
    },

    feet_toes: {
        name: 'Feet / Toes',
        pain_level: 8,
        category: 'Intense Pain',
        color: '#EF4444',
        why_hurts: 'Thin skin, bone, nerve endings, no padding',
        feels_like: 'Sharp, intense vibrating pain',
        duration: 'Severe pain 5-7 days',
        factors: [
            'Very thin skin',
            'Bone directly beneath',
            'Extremely sensitive',
            'Difficult healing (shoes, walking)',
            'Fades faster'
        ],
        best_for: 'Very committed clients only',
        session_tolerance: '1-2 hours MAX',
        healing_pain: 'Severe - walking is painful',
        warning: 'Extremely painful and difficult healing'
    },

    neck_front: {
        name: 'Front of Neck',
        pain_level: 7,
        category: 'High Pain',
        color: '#EF4444',
        why_hurts: 'Thin skin, sensitive area, near throat',
        feels_like: 'Intense stinging, very uncomfortable',
        duration: 'Soreness 4-5 days',
        factors: [
            'Extremely sensitive area',
            'Psychological discomfort',
            'Swallowing can hurt',
            'High visibility'
        ],
        best_for: 'Bold statement pieces',
        session_tolerance: '1-2 hours',
        healing_pain: 'High - movement constant',
        warning: 'Very painful and highly visible'
    },

    ankle: {
        name: 'Ankle',
        pain_level: 7,
        category: 'High Pain',
        color: '#EF4444',
        why_hurts: 'Bone close to surface, thin skin, no padding',
        feels_like: 'Sharp vibrating pain',
        duration: 'Soreness 4-6 days',
        factors: [
            'Bone directly under skin',
            'No fat or muscle padding',
            'Difficult healing (shoes, socks)',
            'Swelling common'
        ],
        best_for: 'Small to medium pieces',
        session_tolerance: '1-2 hours',
        healing_pain: 'High - shoes rub constantly'
    },

    stomach: {
        name: 'Stomach / Abdomen',
        pain_level: 6,
        category: 'Moderate-High Pain',
        color: '#F97316',
        why_hurts: 'Soft tissue, nerve sensitive, ticklish',
        feels_like: 'Stinging mixed with tickling sensation',
        duration: 'Soreness 3-5 days',
        factors: [
            'Very ticklish for most people',
            'Soft tissue moves with breathing',
            'Near belly button more sensitive',
            'Weight fluctuation affects appearance'
        ],
        best_for: 'Large statement pieces',
        session_tolerance: '2-3 hours',
        healing_pain: 'Moderate - clothing waistband'
    }
};

// PIERCING PAIN LEVELS DATABASE
const piercingPainLevels = {
    // ═══════════════════════════════════════════════════════════════
    // LOW PAIN (1-3) - Minimal Pain
    // ═══════════════════════════════════════════════════════════════

    earlobe: {
        name: 'Ear Lobe',
        pain_level: 2,
        category: 'Minimal Pain',
        color: '#10B981',
        why_hurts: 'Soft tissue, few nerve endings',
        feels_like: 'Quick pinch, over in 1 second',
        duration: 'Sharp pain 1 second, dull ache 10-20 minutes',
        factors: [
            'Softest ear tissue',
            'Easiest piercing',
            'Great for first piercing'
        ],
        healing_pain: 'Very minimal - often forget it\'s there',
        healing_time: '6-8 weeks',
        best_for: 'First piercing, multiple lobes'
    },

    septum: {
        name: 'Septum',
        pain_level: 3,
        category: 'Mild Pain',
        color: '#84CC16',
        why_hurts: 'Through thin skin "sweet spot" - not cartilage if done right',
        feels_like: 'Intense pressure, eyes water, but quick',
        duration: 'Sharp pain 2-3 seconds, watery eyes 5 minutes',
        factors: [
            'Proper placement through sweet spot',
            'Eyes watering is reflex, not pain indicator',
            'Often less painful than expected',
            'Bad placement through cartilage = MUCH more painful'
        ],
        healing_pain: 'Minimal - tender for few days',
        healing_time: '2-3 months',
        best_for: 'Easy to hide (flip up)',
        note: 'If through cartilage, pain level 7-8!'
    },

    // ═══════════════════════════════════════════════════════════════
    // MODERATE PAIN (4-6)
    // ═══════════════════════════════════════════════════════════════

    nostril: {
        name: 'Nostril',
        pain_level: 5,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Through cartilage, near nerve endings',
        feels_like: 'Sharp pinch, pressure, eyes may water',
        duration: 'Sharp pain 2-3 seconds, aching 20-30 minutes',
        factors: [
            'Through cartilage',
            'Eyes watering common',
            'Hurts more than expected',
            'Breathing feels weird initially'
        ],
        healing_pain: 'Moderate - tender for weeks',
        healing_time: '3-4 months',
        best_for: 'Popular facial piercing'
    },

    helix: {
        name: 'Helix (Upper Ear Cartilage)',
        pain_level: 5,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Through thick cartilage',
        feels_like: 'Sharp, crunching pressure',
        duration: 'Sharp pain 3-4 seconds, throbbing 30+ minutes',
        factors: [
            'Cartilage crunch unsettling',
            'Thicker cartilage than lower ear',
            'Pressure sensation intense',
            'Sleeping on it very painful during healing'
        ],
        healing_pain: 'Moderate-High - sore for months',
        healing_time: '3-6 months',
        best_for: 'Popular ear piercing'
    },

    conch: {
        name: 'Conch (Inner Ear)',
        pain_level: 6,
        category: 'Moderate-High Pain',
        color: '#F97316',
        why_hurts: 'Through thickest ear cartilage',
        feels_like: 'Intense pressure, loud crunching sensation',
        duration: 'Sharp pain 3-5 seconds, throbbing 30-60 minutes',
        factors: [
            'Thickest ear cartilage',
            'Loud crunch (it\'s your ear!)',
            'Pressure intense',
            'Long healing = long discomfort'
        ],
        healing_pain: 'High - very sore for months',
        healing_time: '6-12 months',
        best_for: 'Statement ear piercing'
    },

    navel: {
        name: 'Navel (Belly Button)',
        pain_level: 5,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Through skin fold, sensitive area',
        feels_like: 'Sharp pinch, pressure',
        duration: 'Sharp pain 2-3 seconds, aching 30 minutes',
        factors: [
            'Clamping uncomfortable',
            'Area more sensitive than expected',
            'Depends on anatomy',
            'Clothing rubs during healing'
        ],
        healing_pain: 'Moderate - annoying for months',
        healing_time: '6-12 months',
        best_for: 'Popular body piercing'
    },

    // ═══════════════════════════════════════════════════════════════
    // HIGH PAIN (7-8) - Intense Pain
    // ═══════════════════════════════════════════════════════════════

    nipple: {
        name: 'Nipple',
        pain_level: 7,
        category: 'High Pain',
        color: '#EF4444',
        why_hurts: 'Extremely sensitive tissue, nerve dense',
        feels_like: 'Intense sharp pain, electric shock',
        duration: 'Sharp pain 3-5 seconds, throbbing 30-60 minutes',
        factors: [
            'Very nerve dense',
            'Extremely sensitive',
            'More painful than most expect',
            'Second one worse (anticipation)',
            'Male vs female similar pain'
        ],
        healing_pain: 'High - tender for months',
        healing_time: '6-12 months',
        best_for: 'Experienced piercees',
        warning: 'One of most painful piercings'
    },

    industrial: {
        name: 'Industrial (Two Helix Connected)',
        pain_level: 7,
        category: 'High Pain',
        color: '#EF4444',
        why_hurts: 'Two piercings through cartilage, pressure from bar',
        feels_like: 'Two sharp pains, long pressure',
        duration: 'Two separate pains, throbbing hours',
        factors: [
            'Two piercings in one session',
            'Pressure from connecting bar',
            'Longer procedure',
            'Very swollen during healing',
            'Sleeping difficult for months'
        ],
        healing_pain: 'High - very problematic healing',
        healing_time: '6-12 months',
        best_for: 'Statement ear piercing',
        warning: 'Difficult healing, patience required'
    },

    daith: {
        name: 'Daith (Inner Cartilage Fold)',
        pain_level: 7,
        category: 'High Pain',
        color: '#EF4444',
        why_hurts: 'Through thick cartilage fold, awkward angle',
        feels_like: 'Intense pressure, crunching, sharp pain',
        duration: 'Sharp pain 4-6 seconds, throbbing 1+ hour',
        factors: [
            'Thick, folded cartilage',
            'Awkward angle to pierce',
            'Intense pressure',
            'Long procedure',
            'Swelling significant'
        ],
        healing_pain: 'High - very sore for months',
        healing_time: '6-12 months',
        best_for: 'Migraine relief claim (unproven)'
    },

    tongue: {
        name: 'Tongue',
        pain_level: 4,
        category: 'Moderate Pain',
        color: '#F59E0B',
        why_hurts: 'Through muscle, lots of blood flow',
        feels_like: 'Quick sharp pinch, pressure',
        duration: 'Sharp pain 2 seconds, swelling 3-7 days',
        factors: [
            'Swelling is worse than initial pain',
            'Talking and eating difficult',
            'Heals relatively fast',
            'Proper placement critical'
        ],
        healing_pain: 'Moderate - swelling annoying',
        healing_time: '4-6 weeks',
        best_for: 'Classic oral piercing'
    },

    // ═══════════════════════════════════════════════════════════════
    // SEVERE PAIN (9-10) - Extreme Pain
    // ═══════════════════════════════════════════════════════════════

    genital: {
        name: 'Genital Piercings',
        pain_level: 9,
        category: 'Severe Pain',
        color: '#DC2626',
        why_hurts: 'Extremely sensitive tissue, many nerve endings',
        feels_like: 'Intense, shocking pain',
        duration: 'Sharp intense pain, throbbing hours',
        factors: [
            'Extremely sensitive area',
            'High nerve density',
            'Varies by specific piercing type',
            'Requires experienced piercer'
        ],
        healing_pain: 'Variable but significant',
        healing_time: '3-6 months',
        best_for: 'Personal reasons',
        warning: 'Only with experienced professional piercer',
        note: 'Specific pain varies greatly by piercing type'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { tattooPainLevels, piercingPainLevels };
}
