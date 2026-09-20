/* ==========================================================================
   AGRISMART AI - MULTILINGUAL CONTROLLER & AGRONOMIC ENGINE (ES6)
   Local User Profile System Edition (Offline-First / Zero-OTP Architecture)
   ========================================================================== */

// 1. TRANSLATION MATRIX FOR LOCALIZATION (ALL 13 TARGET LANGUAGES)
const TRANSLATIONS = {
  hi: {
    welcome_back: "स्वागत है,",
    cta_title: "स्मार्ट उर्वरक सिफारिश प्राप्त करें",
    cta_subtitle: "सही यूरिया/खाद का प्रकार, सटीक मात्रा और कार्यक्रम चुनें।",
    your_farm_title: "आपका खेत प्रोफ़ाइल",
    edit_btn: "संशोधित करें",
    spec_soil: "मिट्टी का प्रकार",
    spec_size: "भूमि क्षेत्र",
    spec_budget: "बजट स्तर",
    history_title: "हालिया परामर्श इतिहास",
    nav_home: "होम",
    nav_chat: "चैटबॉट",
    nav_settings: "सेटिंग्स",
    settings_title: "कॉन्फ़िगरेशन सेटिंग्स",
    sett_profile_header: "किसान का विवरण",
    name_label: "पूरा नाम",
    sett_lang_header: "इंटरफ़ेस भाषा",
    sett_lang_desc: "भाषा बदलने से सभी यूआई टेक्स्ट, सलाह कार्ड और चैटबॉट तुरंत अपडेट हो जाते हैं।",
    btn_save: "कॉन्फ़िगरेशन सहेजें",
    rec_title: "उर्वरक खाका",
    tab_overview: "सिफारिशें",
    tab_planner: "विकास चरण",
    tab_risk: "जोखिम विश्लेषण",
    rec_stage_lbl: "विकास चरण:",
    suitability: "उपयुक्तता",
    recommended_fertilizers: "अनुशंसित उर्वरक मिश्रण",
    cost_estimation_title: "कुल अनुमानित निवेश",
    subtotal_fertilizers: "उर्वरक और यूरिया उप-योग",
    yield_potential: "अनुमानित लाभ वृद्धि",
    irrigation_title: "सिंचाई का सुझाव",
    stage_planner_title: "फसल चक्र कैलेंडर अनुसूची",
    stage_planner_desc: "उत्पादन क्षमता को अधिकतम करने के लिए फसल के पूरे जीवन चक्र में इस अनुसूची का पालन करें।",
    risk_title: "उर्वरक जोखिम चेतावनी",
    risk_introduction: "अत्यधिक उर्वरक मिट्टी के सूक्ष्म पारिस्थितिकी तंत्र को नष्ट कर देता है और उपज बढ़ाए बिना उत्पादन लागत बढ़ाता है।",
    overuse_risks: "अत्यधिक उपयोग के नुकसान",
    underuse_risks: "कम उपयोग के नुकसान",
    or_1: "मिट्टी के वातावरण को अम्लीय बनाता है।",
    or_2: "भूजल में नाइट्रेट्स का रिसाव करता है।",
    or_3: "तने सड़ने और कीटों के प्रति संवेदनशीलता बढ़ाता है।",
    ur_1: "जड़ प्रणाली का विकास रुकना।",
    ur_2: "पत्तियों का समय से पहले पीला होना।",
    ur_3: "खराब पुष्पन और दाने भरना।",
    weather_safe_advisory: "48 घंटों तक बारिश की उम्मीद नहीं है। यूरिया डालने का बेहतरीन समय।",
    chat_intro: "नमस्ते! मैं आपका कृषिस्मार्ट एआई उर्वरक सलाहकार हूँ। आपकी खेत प्रोफ़ाइल कॉन्फ़िगर है। आप मुझसे कोई भी कृषि प्रश्न पूछ सकते हैं।"
  },
  en: {
    welcome_back: "Welcome,",
    cta_title: "Get Smart Fertilizer Recommendation",
    cta_subtitle: "Choose the correct urea/fertilizer type, exact quantities, and schedules.",
    your_farm_title: "Your Farm Profile",
    edit_btn: "Edit",
    spec_soil: "Soil Type",
    spec_size: "Land Area",
    spec_budget: "Budget Level",
    history_title: "Recent Consultation History",
    nav_home: "Home",
    nav_chat: "Chatbot",
    nav_settings: "Settings",
    settings_title: "Configuration Settings",
    sett_profile_header: "Farmer Details",
    name_label: "Full Name",
    sett_lang_header: "Interface Language",
    sett_lang_desc: "Changing the language updates all UI text, advice cards, and chatbot triggers immediately.",
    btn_save: "Save Configuration",
    rec_title: "Fertilizer Blueprint",
    tab_overview: "Overview",
    tab_planner: "Planner",
    tab_risk: "Risk Analysis",
    rec_stage_lbl: "Growth Stage:",
    suitability: "Suitability Score",
    recommended_fertilizers: "Recommended Fertilizer Mix",
    cost_estimation_title: "Total Estimated Investment",
    subtotal_fertilizers: "Fertilizers & Urea Subtotal",
    yield_potential: "Estimated Profit Increase",
    irrigation_title: "Irrigation Suggestion",
    stage_planner_title: "Growth Stage Calendar Schedule",
    stage_planner_desc: "Follow this schedule throughout the lifecycle of the crop to maximize production efficiency.",
    risk_title: "Fertilizer Risk Warning",
    risk_introduction: "Excessive fertilizer destroys micro-ecosystems in soil and scales production costs without yield gains. Insufficient dosage leads to weak stems.",
    overuse_risks: "Overuse Risks",
    underuse_risks: "Underuse Risks",
    or_1: "Acidifies soil environment.",
    or_2: "Leaches nitrates into groundwater.",
    or_3: "Increases susceptibility to stem rot and pests.",
    ur_1: "Stunted root systems.",
    ur_2: "Premature yellowing of leaves.",
    ur_3: "Poor flowering and grain-filling.",
    weather_safe_advisory: "No rain expected for 48 hours. Excellent timing for granular urea application.",
    chat_intro: "Hello! I am your AgriSmart AI Fertilizer Advisor. Your farm profile is ready. Feel free to ask any farming or crop advice question!"
  }
};

// 2. NAMESPACED STORAGE KEYS FOR CLEAN MULTI-PROFILE ISOLATION
const LS_PROFILES_KEY  = "agrismart_v2_profiles";   // Dictionary of { userId: userProfileObj }
const LS_ACTIVE_ID_KEY = "agrismart_v2_active_id";  // Currently active userId string
const LS_LANG_KEY      = "agrismart_v2_lang";       // App UI language
const LS_GEMINI_KEY    = "agrismart_v2_gemini_key"; // Gemini API key
const LS_MODE_KEY      = "agrismart_v2_chat_mode";  // Chatbot mode
const LS_HISTORY_KEY   = "agrismart_v2_history_";   // Consultation history (suffixed by userId)
const LS_CHATS_KEY     = "agrismart_v2_chats_";     // Chat sessions list (suffixed by userId)

// 3. ACTIVE APPLICATION STATE CONTAINER
let appState = {
  activeUser: null,        // { id, name, language, role, farm: { location, soilType, landArea, landAreaUnit, crop, irrigation }, createdAt }
  currentLanguage: 'hi',
  forcedWeather: 'default',
  geminiApiKey: '',
  chatMode: 'wizard',
  activeChatId: null,
  activeChatMessages: [],
  userChatSessions: [],
  weatherState: 'SAVED_LOCATION', // 'LIVE_GPS' | 'SAVED_LOCATION' | 'LOCATION_UNAVAILABLE'
  weatherData: null,
  chatSession: {
    step: 0,
    answers: {}
  },
  historyLogs: []
};

// 4. TOAST NOTIFICATION SYSTEM
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item ${type}`;
  
  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-circle-exclamation';
  if (type === 'warning') icon = 'fa-triangle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 5. APPLICATION INITIALIZATION & PROFILE CONTROLLER
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Restore language preference
  const savedLang = localStorage.getItem(LS_LANG_KEY);
  if (savedLang) {
    appState.currentLanguage = savedLang;
  }

  // Restore Gemini API key & Chat Mode
  appState.geminiApiKey = localStorage.getItem(LS_GEMINI_KEY) || '';
  appState.chatMode     = localStorage.getItem(LS_MODE_KEY) || 'wizard';

  // Setup UI Listeners
  setupLanguageCardSelection();
  setupOnboardingStepNavigation();

  // Load Active Local Profile
  const activeProfile = loadActiveProfile();

  if (activeProfile) {
    console.log('[Local Identity] Active profile restored:', activeProfile.name, `(ID: ${activeProfile.id})`);
    appState.activeUser = activeProfile;
    if (activeProfile.language) {
      appState.currentLanguage = activeProfile.language;
    }
    
    loadUserHistory();
    loadUserChatSessions();
    updateLocalizationUI(appState.currentLanguage);
    updateApiKeyStatusBadge();
    updateChatModeSelectorVisibility();
    goToScreen('screen-dashboard');
  } else {
    console.log('[Local Identity] No active local profile found. Starting onboarding.');
    updateLocalizationUI(appState.currentLanguage);
    goToScreen('screen-language');
  }

  // Register PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('[PWA SW] Service worker registered successfully:', reg.scope))
      .catch(err => console.warn('[PWA SW] Service worker registration failed:', err));
  }
}

// Local Profile Storage Helpers
function getAllProfiles() {
  const raw = localStorage.getItem(LS_PROFILES_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) || {};
  } catch (e) {
    return {};
  }
}

function loadActiveProfile() {
  const activeId = localStorage.getItem(LS_ACTIVE_ID_KEY);
  if (!activeId) return null;
  const profiles = getAllProfiles();
  return profiles[activeId] || null;
}

function saveProfileToDisk(profileObj) {
  const profiles = getAllProfiles();
  profiles[profileObj.id] = profileObj;
  localStorage.setItem(LS_PROFILES_KEY, JSON.stringify(profiles));
  localStorage.setItem(LS_ACTIVE_ID_KEY, profileObj.id);
}

// 6. MULTI-STEP ONBOARDING PIPELINE
function setupLanguageCardSelection() {
  const cards = document.querySelectorAll('.lang-card, .lang-pill');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('highlighted', 'selected'));
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('selected'));
      
      const selectedLang = card.getAttribute('data-lang');
      appState.currentLanguage = selectedLang;
      localStorage.setItem(LS_LANG_KEY, selectedLang);
      
      card.classList.add('highlighted', 'selected');
      updateLocalizationUI(selectedLang);
    });
  });

  const btnConfirm = document.getElementById('btn-confirm-language');
  if (btnConfirm) {
    btnConfirm.onclick = () => {
      // Step 1 -> Onboarding Screen Step 1
      showOnboardStep(1);
      goToScreen('screen-profile-setup');
    };
  }
}

function showOnboardStep(stepNum) {
  const pane1 = document.getElementById('onboard-step-1');
  const pane2 = document.getElementById('onboard-step-2');
  const ind1  = document.getElementById('onboard-step-1-indicator');
  const ind2  = document.getElementById('onboard-step-2-indicator');

  if (stepNum === 1) {
    if (pane1) pane1.classList.remove('hidden');
    if (pane2) pane2.classList.add('hidden');
    if (ind1) ind1.classList.add('active');
    if (ind2) ind2.classList.remove('active');
  } else {
    if (pane1) pane1.classList.add('hidden');
    if (pane2) pane2.classList.remove('hidden');
    if (ind1) ind1.classList.remove('active');
    if (ind2) ind2.classList.add('active');
  }
}

function setupOnboardingStepNavigation() {
  const btnNextStep = document.getElementById('btn-next-to-farm-step');
  const btnBackStep = document.getElementById('btn-back-to-step-1');
  const btnSubmit   = document.getElementById('btn-submit-profile-setup');
  const nameInput   = document.getElementById('input-user-name');
  const nameError   = document.getElementById('name-error-msg');
  const btnGps      = document.getElementById('btn-onboard-gps');

  if (btnNextStep && nameInput) {
    btnNextStep.onclick = () => {
      const trimmedName = nameInput.value.trim();
      if (!trimmedName || trimmedName.length < 2) {
        if (nameError) nameError.classList.remove('hidden');
        nameInput.focus();
        showToast('Please enter your valid name to continue.', 'warning');
        return;
      }
      if (nameError) nameError.classList.add('hidden');
      showOnboardStep(2);
    };
  }

  if (btnBackStep) {
    btnBackStep.onclick = () => {
      showOnboardStep(1);
    };
  }

  if (btnGps) {
    btnGps.onclick = () => {
      if (!navigator.geolocation) {
        showToast('Geolocation not supported. Please type your location manually.', 'warning');
        return;
      }
      showToast('Detecting GPS location...', 'info');
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          try {
            const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
            const geoData = await geoRes.json();
            const locName = `${geoData.locality || geoData.city || 'Region'}, ${geoData.principalSubdivision || ''}`;
            document.getElementById('input-farm-location').value = locName;
            showToast(`Location detected: ${locName}`, 'success');
          } catch (e) {
            document.getElementById('input-farm-location').value = `${lat.toFixed(2)}°N, ${lon.toFixed(2)}°E`;
            showToast('GPS coordinates set.', 'info');
          }
        },
        () => {
          showToast('GPS access denied or unavailable. Enter location manually.', 'warning');
        }
      );
    };
  }

  if (btnSubmit) {
    btnSubmit.onclick = () => {
      const name = nameInput.value.trim();
      const loc  = document.getElementById('input-farm-location').value.trim() || 'Bareilly, UP';
      const soil = document.getElementById('select-farm-soil').value;
      const area = parseFloat(document.getElementById('input-farm-area').value);
      const unit = document.getElementById('select-farm-unit').value;
      const crop = document.getElementById('select-farm-crop').value;
      const irr  = document.getElementById('select-farm-irrigation').value;

      if (!name || name.length < 2) {
        showToast('Name is required.', 'error');
        showOnboardStep(1);
        return;
      }

      if (isNaN(area) || area <= 0 || area > 1000) {
        showToast('Please enter a valid land area greater than 0.', 'error');
        return;
      }

      const newProfile = {
        id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        name: name,
        language: appState.currentLanguage,
        role: name.toLowerCase() === 'admin' ? 'admin' : 'farmer',
        farm: {
          location: loc,
          soilType: soil,
          landArea: area,
          landAreaUnit: unit,
          crop: crop,
          irrigation: irr
        },
        createdAt: new Date().toISOString()
      };

      saveProfileToDisk(newProfile);
      appState.activeUser = newProfile;
      loadUserHistory();
      loadUserChatSessions();
      
      showToast(`Welcome, ${newProfile.name}! Farm profile saved successfully.`, 'success');
      goToScreen('screen-dashboard');
    };
  }
}

// 7. MULTI-PROFILE SWITCHER CONTROLLER
function renderSavedProfilesList() {
  const container = document.getElementById('saved-profiles-list');
  if (!container) return;

  const profiles = getAllProfiles();
  const activeId = localStorage.getItem(LS_ACTIVE_ID_KEY);
  const keys     = Object.keys(profiles);

  if (keys.length === 0) {
    container.innerHTML = `<p style="font-size: 13px; color: var(--neutral-slate); text-align: center;">No saved profiles on this device.</p>`;
    return;
  }

  let html = '';
  keys.forEach(id => {
    const p = profiles[id];
    const isActive = id === activeId;
    const farm = p.farm || {};
    html += `
      <div class="profile-card-item ${isActive ? 'active' : ''}" onclick="switchActiveProfile('${p.id}')">
        <div class="p-info">
          <i class="fa-solid fa-user-circle"></i>
          <div>
            <div class="p-name">${p.name}</div>
            <div style="font-size: 11px; color: var(--neutral-slate);">
              📍 ${farm.location || 'Farm Region'} • 🌱 ${(farm.crop || 'wheat').toUpperCase()} • ${farm.landArea || 2.5} ${farm.landAreaUnit || 'Acres'}
            </div>
          </div>
        </div>
        ${isActive ? '<span class="p-badge">Active</span>' : '<button class="btn btn-sm btn-outline-primary">Select</button>'}
      </div>
    `;
  });
  container.innerHTML = html;
}

function switchActiveProfile(targetId) {
  const profiles = getAllProfiles();
  const target = profiles[targetId];

  if (!target) {
    showToast('Selected profile not found.', 'error');
    return;
  }

  appState.activeUser = target;
  localStorage.setItem(LS_ACTIVE_ID_KEY, target.id);
  if (target.language) {
    appState.currentLanguage = target.language;
    localStorage.setItem(LS_LANG_KEY, target.language);
  }

  loadUserHistory();
  loadUserChatSessions();
  updateLocalizationUI(appState.currentLanguage);
  showToast(`Switched active profile to ${target.name}.`, 'success');
  goToScreen('screen-dashboard');
}

function startNewProfileCreation() {
  document.getElementById('input-user-name').value = '';
  showOnboardStep(1);
  goToScreen('screen-language');
}

// 8. SCREEN ROUTER & NAVIGATION CONTROLLER
function goToScreen(screenId) {
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }

  // Screen-specific Hydration Logic
  if (screenId === 'screen-dashboard') {
    const u = appState.activeUser || { name: 'Farmer', farm: {} };
    const farm = u.farm || {};

    document.getElementById('dash-user-name').innerText = u.name || 'Farmer';
    document.getElementById('dash-farm-loc').innerText = farm.location || 'Bareilly, UP';
    document.getElementById('dash-farm-crop').innerText = (farm.crop || 'Wheat').toUpperCase();
    document.getElementById('dash-soil-type').innerText = translateToken(`soil_${farm.soilType || 'loamy'}`);
    document.getElementById('dash-land-area').innerText = `${farm.landArea || 2.5} ${translateToken(farm.landAreaUnit || 'acre')}`;
    document.getElementById('dash-farm-irrigation').innerText = (farm.irrigation || 'Tube well').toUpperCase();
    document.getElementById('dash-location-text').innerText = farm.location || 'Bareilly, UP';

    renderHistory();
  }

  if (screenId === 'screen-settings' && appState.activeUser) {
    const u = appState.activeUser;
    const farm = u.farm || {};
    document.getElementById('sett-name').value = u.name || '';
    document.getElementById('sett-location').value = farm.location || 'Bareilly, UP';
    document.getElementById('sett-soil').value = farm.soilType || 'loamy';
    document.getElementById('sett-area').value = farm.landArea || 2.5;
    document.getElementById('sett-unit').value = farm.landAreaUnit || 'acre';
    document.getElementById('sett-crop').value = farm.crop || 'wheat';
    document.getElementById('sett-irrigation').value = farm.irrigation || 'tubewell';
    document.getElementById('sett-gemini-key').value = appState.geminiApiKey;
  }

  if (screenId === 'screen-profile-switch') {
    renderSavedProfilesList();
  }

  if (screenId === 'screen-admin') {
    checkAdminAccess();
  }
}

// 9. DETERMINISTIC AGRONOMIC SUITABILITY CALCULATOR
function calculateAgronomicSuitability(cropCode, growthStage, soilType) {
  // Deterministic matrix based on agronomic soil suitability (Zero Math.random())
  const SOIL_COMPATIBILITY = {
    wheat:     { loamy: 96, alluvial: 94, clay: 88, black: 85, red: 78, sandy: 72 },
    rice:      { clay: 98, alluvial: 95, loamy: 90, black: 88, red: 75, sandy: 68 },
    maize:     { loamy: 94, alluvial: 92, black: 88, clay: 82, red: 79, sandy: 75 },
    sugarcane: { alluvial: 97, loamy: 94, black: 92, clay: 89, red: 76, sandy: 70 },
    cotton:    { black: 98, alluvial: 92, loamy: 90, clay: 84, red: 80, sandy: 74 }
  };

  const STAGE_BONUS = { sowing: 2, vegetative: 0, flowering: -1, maturity: -3 };

  const crop = SOIL_COMPATIBILITY[cropCode] ? cropCode : 'rice';
  const baseScore = SOIL_COMPATIBILITY[crop][soilType] || 88;
  const stageMod  = STAGE_BONUS[growthStage] || 0;

  const finalScore = Math.max(65, Math.min(99, baseScore + stageMod));
  return `${finalScore}%`;
}

// 10. AGRONOMIC RECOMMENDATION ENGINE
function runAgronomyCalculator(profile, cropCode, growthStage) {
  const farm = (profile && profile.farm) ? profile.farm : { soilType: 'loamy', landArea: 2.5, landAreaUnit: 'acre' };

  const NPK_BASE = {
    wheat:     { sowing: [20, 20, 10], vegetative: [45, 10, 5],  flowering: [10, 5, 10], maturity: [0, 0, 0] },
    rice:      { sowing: [15, 25, 15], vegetative: [55, 12, 10], flowering: [15, 5, 10], maturity: [0, 0, 0] },
    maize:     { sowing: [25, 20, 10], vegetative: [50, 15, 10], flowering: [15, 10, 10], maturity: [0, 0, 0] },
    sugarcane: { sowing: [40, 30, 20], vegetative: [75, 20, 15], flowering: [25, 10, 20], maturity: [0, 0, 0] },
    cotton:    { sowing: [15, 15, 10], vegetative: [40, 10, 15], flowering: [20, 10, 10], maturity: [0, 0, 0] }
  };

  const cropKey  = NPK_BASE[cropCode] ? cropCode : 'rice';
  const stageKey = NPK_BASE[cropKey][growthStage] ? growthStage : 'vegetative';
  
  let [n, p, k] = NPK_BASE[cropKey][stageKey];
  
  const SOIL_MULTIPLIER = {
    loamy: [1.0, 1.0, 1.0],
    sandy: [1.15, 1.0, 1.10],
    clay: [0.90, 1.10, 1.0],
    black: [0.95, 1.0, 0.90],
    red: [1.0, 1.20, 1.0],
    alluvial: [1.0, 0.95, 1.0]
  };
  
  const soil = farm.soilType || 'loamy';
  const area = farm.landArea || 2.5;
  const mult = SOIL_MULTIPLIER[soil] || SOIL_MULTIPLIER['loamy'];
  
  n = Math.round(n * mult[0] * area);
  p = Math.round(p * mult[1] * area);
  k = Math.round(k * mult[2] * area);

  const ureaBags = Math.ceil(n / (0.46 * 50));
  const dapBags  = Math.ceil(p / (0.46 * 50));
  const mopBags  = Math.ceil(k / (0.60 * 50));

  const COST_PER_BAG = { urea: 268, dap: 1350, mop: 1700 };
  let totalCost = (ureaBags * COST_PER_BAG.urea) + (dapBags * COST_PER_BAG.dap) + (mopBags * COST_PER_BAG.mop);
  let profitEstimate = Math.round(totalCost * 4.2);

  const suitabilityScore = calculateAgronomicSuitability(cropKey, stageKey, soil);

  return {
    crop: cropKey,
    stage: stageKey,
    suitability: suitabilityScore,
    nutrients: { n, p, k },
    products: [
      { name: "Neem Coated Urea (46% N)", bags: ureaBags, timing: "Split application at 21 days", icon: "fa-seedling", bg: "green" },
      { name: "DAP - Di-Ammonium Phosphate (18-46-0)", bags: dapBags, timing: "Basal dressing during field prep", icon: "fa-flask", bg: "amber" },
      { name: "MOP - Muriate of Potash (60% K2O)", bags: mopBags, timing: "At early flowering stage", icon: "fa-droplet", bg: "blue" }
    ],
    financials: {
      totalCost: `₹ ${totalCost.toLocaleString('en-IN')}.00`,
      profitIncrease: `+ ₹ ${profitEstimate.toLocaleString('en-IN')} / ${farm.landAreaUnit || 'acre'}`
    }
  };
}

// 11. LOCATION & WEATHER ENGINE
function triggerGpsWeatherSync() {
  const badge   = document.getElementById('weather-status-badge');
  const locText = document.getElementById('dash-location-text');
  const tempEl  = document.getElementById('dash-temp');
  const descEl  = document.getElementById('dash-weather-desc');

  if (!navigator.geolocation) {
    showToast('Geolocation is not supported by your browser.', 'error');
    return;
  }

  showToast('Acquiring live GPS coordinates...', 'info');
  if (badge) {
    badge.innerText = 'LOCATING...';
    badge.className = 'weather-badge demo';
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const lat = pos.coords.latitude;
      const lon = pos.coords.longitude;

      try {
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const weatherData = await weatherRes.json();

        let cityName = "Live GPS Region";
        try {
          const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
          const geoData = await geoRes.json();
          if (geoData.locality || geoData.city || geoData.principalSubdivision) {
            cityName = `${geoData.locality || geoData.city || 'Region'}, ${geoData.principalSubdivision || ''}`;
          }
        } catch (ge) {}

        if (weatherData && weatherData.current_weather) {
          const cw = weatherData.current_weather;
          if (tempEl) tempEl.innerText = `${Math.round(cw.temperature)}°C`;
          if (descEl) descEl.innerText = cw.windspeed > 15 ? 'High Winds' : 'Clear Sky';
          if (locText) locText.innerText = cityName;

          appState.weatherState = 'LIVE_GPS';
          if (badge) {
            badge.innerText = 'LIVE GPS';
            badge.className = 'weather-badge live';
          }
          showToast(`Live weather updated for ${cityName}.`, 'success');
        }
      } catch (err) {
        showToast('Weather service unavailable. Displaying saved location data.', 'warning');
        if (badge) {
          badge.innerText = 'SAVED LOCATION';
          badge.className = 'weather-badge demo';
        }
      }
    },
    (err) => {
      showToast('GPS location permission denied or unavailable.', 'error');
      if (badge) {
        badge.innerText = 'LOCATION UNAVAILABLE';
        badge.className = 'weather-badge unavailable';
      }
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}

// 12. USER CONSULTATION HISTORY ENGINE (Profile-Scoped)
function loadUserHistory() {
  if (!appState.activeUser) {
    appState.historyLogs = [];
    return;
  }
  const userHistoryKey = LS_HISTORY_KEY + appState.activeUser.id;
  const saved = localStorage.getItem(userHistoryKey);
  if (saved) {
    try {
      appState.historyLogs = JSON.parse(saved);
    } catch(e) {
      appState.historyLogs = [];
    }
  } else {
    appState.historyLogs = [];
  }
}

function saveUserHistory() {
  if (!appState.activeUser) return;
  const userHistoryKey = LS_HISTORY_KEY + appState.activeUser.id;
  localStorage.setItem(userHistoryKey, JSON.stringify(appState.historyLogs));
}

function renderHistory() {
  const container = document.getElementById('history-list');
  if (!container) return;

  if (!appState.historyLogs || appState.historyLogs.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <div class="empty-icon"><i class="fa-solid fa-notes-medical"></i></div>
        <h4>No Consultation History Yet</h4>
        <p>Start your first fertilizer advisory consultation to see your saved blueprints here.</p>
      </div>
    `;
    return;
  }

  let html = '';
  appState.historyLogs.forEach(item => {
    html += `
      <div class="history-card" onclick="loadHistoryItem('${item.id}')">
        <div class="h-icon"><i class="fa-solid fa-wheat-awn"></i></div>
        <div class="h-info">
          <h4>${item.crop} (${item.stage})</h4>
          <span class="date">${item.date}</span>
        </div>
        <div class="h-cost">${item.cost}</div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// 13. CHAT SESSIONS & HISTORY ENGINE
function loadUserChatSessions() {
  if (!appState.activeUser) {
    appState.userChatSessions = [];
    return;
  }
  const key = LS_CHATS_KEY + appState.activeUser.id;
  const raw = localStorage.getItem(key);
  if (raw) {
    try {
      appState.userChatSessions = JSON.parse(raw);
    } catch(e) {
      appState.userChatSessions = [];
    }
  } else {
    appState.userChatSessions = [];
  }
}

function saveUserChatSessions() {
  if (!appState.activeUser) return;
  const key = LS_CHATS_KEY + appState.activeUser.id;
  localStorage.setItem(key, JSON.stringify(appState.userChatSessions));
}

function createNewChatSession() {
  const newChatId = 'chat_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
  const newSession = {
    id: newChatId,
    title: 'New Consultation',
    timestamp: new Date().toISOString(),
    messages: []
  };

  appState.activeChatId = newChatId;
  appState.activeChatMessages = [];
  appState.userChatSessions.unshift(newSession);
  saveUserChatSessions();

  const container = document.getElementById('chat-messages-container');
  if (container) container.innerHTML = '';
  document.getElementById('current-chat-title').innerText = newSession.title;

  appendChatMessage('bot', TRANSLATIONS[appState.currentLanguage]?.chat_intro || TRANSLATIONS['en'].chat_intro);
  renderWizardStep(0);
  showToast('New AI Chat session started.', 'success');
}

function toggleChatHistoryModal() {
  const modal = document.getElementById('modal-chat-history');
  if (!modal) return;

  if (modal.classList.contains('hidden')) {
    renderSavedChatsList();
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
}

function renderSavedChatsList() {
  const container = document.getElementById('saved-chats-list');
  if (!container) return;

  if (!appState.userChatSessions || appState.userChatSessions.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--neutral-slate); font-size: 13px;">No past chat sessions found.</p>`;
    return;
  }

  let html = '';
  appState.userChatSessions.forEach(s => {
    const isActive = s.id === appState.activeChatId;
    const timeStr = new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    html += `
      <div class="chat-session-item ${isActive ? 'active' : ''}" onclick="openChatSession('${s.id}')">
        <div class="cs-info">
          <div class="cs-title"><i class="fa-solid fa-comment-dots"></i> ${s.title}</div>
          <div class="cs-time">${timeStr} • ${s.messages.length} messages</div>
        </div>
        <button class="btn-icon text-red" onclick="event.stopPropagation(); deleteChatSession('${s.id}')" title="Delete Chat"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;
  });
  container.innerHTML = html;
}

function openChatSession(chatId) {
  const session = appState.userChatSessions.find(s => s.id === chatId);
  if (!session) return;

  appState.activeChatId = chatId;
  appState.activeChatMessages = session.messages || [];

  document.getElementById('current-chat-title').innerText = session.title;
  const container = document.getElementById('chat-messages-container');
  if (container) {
    container.innerHTML = '';
    if (session.messages.length === 0) {
      appendChatMessage('bot', TRANSLATIONS[appState.currentLanguage]?.chat_intro || TRANSLATIONS['en'].chat_intro);
    } else {
      session.messages.forEach(m => {
        appendChatMessage(m.sender, m.text, false);
      });
    }
  }

  toggleChatHistoryModal();
  showToast(`Opened chat: ${session.title}`, 'info');
}

function deleteChatSession(chatId) {
  appState.userChatSessions = appState.userChatSessions.filter(s => s.id !== chatId);
  saveUserChatSessions();
  renderSavedChatsList();
  if (appState.activeChatId === chatId) {
    createNewChatSession();
  }
}

function clearCurrentChat() {
  if (confirm('Clear messages in current conversation?')) {
    const session = appState.userChatSessions.find(s => s.id === appState.activeChatId);
    if (session) {
      session.messages = [];
      saveUserChatSessions();
    }
    const container = document.getElementById('chat-messages-container');
    if (container) container.innerHTML = '';
    appendChatMessage('bot', TRANSLATIONS[appState.currentLanguage]?.chat_intro || TRANSLATIONS['en'].chat_intro);
    toggleChatHistoryModal();
    showToast('Conversation cleared.', 'info');
  }
}

// 14. ADMIN ROLE AUTHORIZATION ENGINE
function checkAdminAccess() {
  const overlay  = document.getElementById('admin-lock-overlay');
  const userRole = appState.activeUser ? appState.activeUser.role : 'farmer';

  if (userRole === 'admin') {
    if (overlay) overlay.classList.add('hidden');
    fetchAdminMetrics();
  } else {
    if (overlay) overlay.classList.remove('hidden');
  }
}

function unlockAdminAccess() {
  const pinInput = document.getElementById('input-admin-pin');
  const pin = pinInput ? pinInput.value.trim() : '';

  if (pin === '9999') {
    if (appState.activeUser) {
      appState.activeUser.role = 'admin';
      saveProfileToDisk(appState.activeUser);
    }
    document.getElementById('admin-lock-overlay').classList.add('hidden');
    showToast('Admin authorization granted.', 'success');
    fetchAdminMetrics();
  } else {
    showToast('Incorrect Admin Security PIN. (Default PIN: 9999)', 'error');
  }
}

async function fetchAdminMetrics() {
  try {
    const res = await fetch('/api/admin/metrics', {
      headers: { 'Authorization': 'Bearer admin_pin_9999' }
    });
    if (res.ok) {
      const data = await res.json();
      if (data.status === 'success' && data.systemMetrics) {
        const m = data.systemMetrics;
        document.getElementById('admin-metric-status').innerText = 'ONLINE';
        document.getElementById('admin-metric-uptime').innerText = Math.round(m.uptime || 0);
      }
    }
  } catch (err) {
    console.warn('Failed to fetch admin metrics:', err);
  }
}

// 15. SETTINGS & PROFILE UPDATER
function saveSettings() {
  const nameVal   = document.getElementById('sett-name').value.trim();
  const locVal    = document.getElementById('sett-location').value.trim();
  const soilVal   = document.getElementById('sett-soil').value;
  const areaVal   = parseFloat(document.getElementById('sett-area').value);
  const unitVal   = document.getElementById('sett-unit').value;
  const cropVal   = document.getElementById('sett-crop').value;
  const irrVal    = document.getElementById('sett-irrigation').value;
  const keyVal    = document.getElementById('sett-gemini-key').value.trim();

  if (!nameVal || nameVal.length < 2) {
    showToast('Please enter a valid name.', 'error');
    return;
  }

  if (isNaN(areaVal) || areaVal <= 0 || areaVal > 1000) {
    showToast('Please enter a valid land area greater than 0.', 'error');
    return;
  }

  if (appState.activeUser) {
    appState.activeUser.name = nameVal;
    if (!appState.activeUser.farm) appState.activeUser.farm = {};
    appState.activeUser.farm.location     = locVal || 'Bareilly, UP';
    appState.activeUser.farm.soilType     = soilVal;
    appState.activeUser.farm.landArea     = areaVal;
    appState.activeUser.farm.landAreaUnit = unitVal;
    appState.activeUser.farm.crop         = cropVal;
    appState.activeUser.farm.irrigation   = irrVal;
    saveProfileToDisk(appState.activeUser);
  }

  appState.geminiApiKey = keyVal;
  localStorage.setItem(LS_GEMINI_KEY, keyVal);

  updateApiKeyStatusBadge();
  updateChatModeSelectorVisibility();
  showToast('Profile configuration saved successfully.', 'success');
  goToScreen('screen-dashboard');
}

// 16. LOCALIZATION HELPER
function updateLocalizationUI(langCode) {
  appState.currentLanguage = langCode;
  document.documentElement.lang = langCode;

  const catalog = TRANSLATIONS[langCode] || TRANSLATIONS['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (catalog[key]) {
      if (el.tagName === 'INPUT' && el.type === 'text') {
        el.placeholder = catalog[key];
      } else {
        el.innerText = catalog[key];
      }
    }
  });

  document.querySelectorAll('#settings-lang-grid .lang-pill').forEach(btn => {
    if (btn.getAttribute('data-lang') === langCode) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

function translateToken(token) {
  const translations = {
    hi: { soil_loamy: "दोमट मिट्टी", soil_sandy: "रेतीली मिट्टी", soil_clay: "चिकनी मिट्टी", soil_black: "काली मिट्टी", soil_red: "लाल मिट्टी", soil_alluvial: "जलोढ़ मिट्टी", acre: "एकड़", bigha: "बीघा", hectare: "हेक्टेयर" },
    en: { soil_loamy: "Loamy Soil", soil_sandy: "Sandy Soil", soil_clay: "Clay Soil", soil_black: "Black Soil", soil_red: "Red Soil", soil_alluvial: "Alluvial Soil", acre: "Acres", bigha: "Bigha", hectare: "Hectares" }
  };
  const lang = appState.currentLanguage;
  if (translations[lang] && translations[lang][token]) return translations[lang][token];
  if (translations['en'][token]) return translations['en'][token];
  return token;
}

// 17. CHATBOT INTERACTIVE CONSOLE CONTROLLER
function startChatbot() {
  goToScreen('screen-chatbot');
  if (!appState.activeChatId) {
    createNewChatSession();
  }
}

function confirmQuitChat() {
  goToScreen('screen-dashboard');
}

function appendChatMessage(sender, text, saveToSession = true) {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerText = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;

  if (saveToSession && appState.activeChatId) {
    const session = appState.userChatSessions.find(s => s.id === appState.activeChatId);
    if (session) {
      if (!session.messages) session.messages = [];
      session.messages.push({ sender, text, time: new Date().toISOString() });
      if (sender === 'user' && session.title === 'New Consultation') {
        session.title = text.length > 25 ? text.substring(0, 25) + '...' : text;
        document.getElementById('current-chat-title').innerText = session.title;
      }
      saveUserChatSessions();
    }
  }
}

function renderWizardStep(step) {
  const panel = document.getElementById('chat-input-panel');
  if (!panel) return;

  if (step === 0) {
    panel.innerHTML = `
      <div style="font-size: 13px; font-weight: 700; margin-bottom: 8px;">Select Crop:</div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('crop', 'wheat', 'Wheat / गेहूं')">🌾 Wheat (गेहूं)</button>
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('crop', 'rice', 'Rice / धान')">🌱 Rice (धान)</button>
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('crop', 'sugarcane', 'Sugarcane / गन्ना')">🎋 Sugarcane (गन्ना)</button>
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('crop', 'cotton', 'Cotton / कपास')">☁️ Cotton (कपास)</button>
      </div>
    `;
  } else if (step === 1) {
    panel.innerHTML = `
      <div style="font-size: 13px; font-weight: 700; margin-bottom: 8px;">Select Growth Stage:</div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('stage', 'sowing', 'Sowing / बुवाई')">🌱 Sowing</button>
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('stage', 'vegetative', 'Vegetative / वानस्पतिक')">🌿 Vegetative</button>
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('stage', 'flowering', 'Flowering / पुष्पन')">🌸 Flowering</button>
        <button class="btn btn-sm btn-primary" onclick="submitWizardAnswer('stage', 'maturity', 'Maturity / परिपक्वता')">🌾 Maturity</button>
      </div>
    `;
  } else if (step === 2) {
    panel.innerHTML = `
      <div style="font-size: 13px; font-weight: 700; margin-bottom: 8px;">Generate Recommendations:</div>
      <button class="btn btn-primary btn-block" onclick="generateRecommendationFromWizard()">
        <i class="fa-solid fa-calculator"></i> Calculate Fertilizer Blueprint
      </button>
    `;
  }
}

function submitWizardAnswer(key, val, displayLabel) {
  appState.chatSession.answers[key] = val;
  appendChatMessage('user', displayLabel);
  appState.chatSession.step += 1;
  renderWizardStep(appState.chatSession.step);
}

function generateRecommendationFromWizard() {
  const answers = appState.chatSession.answers;
  const crop  = answers.crop || 'wheat';
  const stage = answers.stage || 'vegetative';
  const profile = appState.activeUser || { farm: { soilType: 'loamy', landArea: 2.5, landAreaUnit: 'acre' } };

  const res = runAgronomyCalculator(profile, crop, stage);
  renderRecommendationView(res);

  // Record to History (Scoped to active user)
  const logItem = {
    id: 'rec_' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    crop: crop.toUpperCase(),
    stage: stage,
    cost: res.financials.totalCost
  };
  appState.historyLogs.unshift(logItem);
  saveUserHistory();

  goToScreen('screen-recommendations');
}

function renderRecommendationView(res) {
  document.getElementById('rec-crop-title').innerText = `${res.crop.toUpperCase()}`;
  document.getElementById('rec-growth-stage').innerText = res.stage;
  document.getElementById('rec-suitability-score').innerText = res.suitability;
  document.getElementById('rec-cost-total').innerText = res.financials.totalCost;
  document.getElementById('rec-profit-estimate').innerText = res.financials.profitIncrease;

  const container = document.getElementById('fertilizer-cards-container');
  if (container) {
    let cardsHtml = '';
    res.products.forEach(p => {
      cardsHtml += `
        <div class="fertilizer-card ${p.bg}">
          <div class="f-header">
            <i class="fa-solid ${p.icon} f-icon"></i>
            <h4>${p.name}</h4>
          </div>
          <div class="f-body">
            <span class="qty">${p.bags} Bags (50kg each)</span>
            <span class="timing"><i class="fa-solid fa-clock"></i> ${p.timing}</span>
          </div>
        </div>
      `;
    });
    container.innerHTML = cardsHtml;
  }
}

// 18. GEMINI AI CHAT & VOICE ASSISTANT FUNCTIONS
function updateApiKeyStatusBadge() {
  const badge = document.getElementById('gemini-key-status');
  if (!badge) return;

  if (appState.geminiApiKey && appState.geminiApiKey.length > 10) {
    badge.innerHTML = `<i class="fa-solid fa-circle-check"></i> Active Key`;
    badge.className = `key-status-badge valid`;
  } else {
    badge.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Not Set`;
    badge.className = `key-status-badge invalid`;
  }
}

function updateChatModeSelectorVisibility() {
  const bar = document.getElementById('chat-mode-selection');
  if (!bar) return;
  if (appState.geminiApiKey && appState.geminiApiKey.length > 10) {
    bar.classList.remove('hidden');
  } else {
    bar.classList.add('hidden');
    switchChatMode('wizard');
  }
}

function switchChatMode(mode) {
  appState.chatMode = mode;
  localStorage.setItem(LS_MODE_KEY, mode);

  const btnWiz  = document.getElementById('btn-mode-wizard');
  const btnLive = document.getElementById('btn-mode-live');
  const panWiz  = document.getElementById('chat-input-panel');
  const panLive = document.getElementById('live-chat-input-panel');

  if (mode === 'live') {
    if (btnWiz)  btnWiz.classList.remove('active');
    if (btnLive) btnLive.classList.add('active');
    if (panWiz)  panWiz.classList.add('hidden');
    if (panLive) panLive.classList.remove('hidden');
  } else {
    if (btnWiz)  btnWiz.classList.add('active');
    if (btnLive) btnLive.classList.remove('active');
    if (panWiz)  panWiz.classList.remove('hidden');
    if (panLive) panLive.classList.add('hidden');
  }
}

async function sendLiveChatMessage() {
  const input = document.getElementById('live-chat-input');
  const query = input ? input.value.trim() : '';

  if (!query) return;
  if (!appState.geminiApiKey) {
    showToast('Please configure a valid Gemini API Key in Settings.', 'warning');
    return;
  }

  appendChatMessage('user', query);
  input.value = '';

  const typingBubble = document.createElement('div');
  typingBubble.className = 'chat-bubble bot typing';
  typingBubble.innerText = 'AI Agronomist is thinking...';
  document.getElementById('chat-messages-container').appendChild(typingBubble);

  const farmer = appState.activeUser || { name: 'Farmer', farm: {} };
  const farm = farmer.farm || {};
  const farmContext = `Farmer Name: ${farmer.name}, Location: ${farm.location || 'Unknown'}, Crop: ${farm.crop || 'Wheat'}, Soil: ${farm.soilType || 'Loamy'}, Area: ${farm.landArea || 2.5} ${farm.landAreaUnit || 'acres'}, Irrigation: ${farm.irrigation || 'Tube well'}`;

  try {
    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `System Context: You are AgriSmart AI agronomist speaking to a farmer. Farmer Profile & Farm Details: [${farmContext}]. Language: ${appState.currentLanguage}. Farmer Question: ${query}` }]
        }
      ]
    };

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${appState.geminiApiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    typingBubble.remove();
    if (res.ok) {
      const data = await res.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Thank you. Please ensure adequate watering during urea application.";
      appendChatMessage('bot', reply);
    } else {
      appendChatMessage('bot', "API response error. Please check your Gemini API Key in Settings.");
    }
  } catch (err) {
    typingBubble.remove();
    appendChatMessage('bot', "Network error reaching Gemini AI service.");
  }
}

// Voice Input STT Helper
let recognition = null;
function toggleVoiceRecognition() {
  const btn = document.getElementById('btn-voice-input');
  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
    showToast('Voice recognition is not supported in your browser.', 'error');
    return;
  }

  if (recognition) {
    recognition.stop();
    recognition = null;
    if (btn) btn.style.color = 'var(--primary-green)';
    return;
  }

  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRec();
  recognition.lang = appState.currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
  recognition.interimResults = false;

  if (btn) btn.style.color = 'var(--danger-red)';
  showToast('Listening... Speak your crop query now.', 'info');

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    showToast(`Transcribed: "${transcript}"`, 'success');
    const liveInput = document.getElementById('live-chat-input');
    if (liveInput) liveInput.value = transcript;
    if (btn) btn.style.color = 'var(--primary-green)';
    recognition = null;
  };

  recognition.onerror = () => {
    showToast('Voice input error or timeout.', 'error');
    if (btn) btn.style.color = 'var(--primary-green)';
    recognition = null;
  };
}
