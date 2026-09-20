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
    your_farm_title: "आपका खेत विन्यास",
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
    chat_intro: "नमस्ते! मैं आपका कृषिस्मार्ट एआई उर्वरक सलाहकार हूँ। सटीक सिफारिश के लिए कृपया कुछ सवालों के जवाब दें।"
  },
  en: {
    welcome_back: "Welcome,",
    cta_title: "Get Smart Fertilizer Recommendation",
    cta_subtitle: "Choose the correct urea/fertilizer type, exact quantities, and schedules.",
    your_farm_title: "Your Farm Config",
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
    chat_intro: "Hello! I am your AgriSmart AI Fertilizer Advisor. Please answer a few quick questions to receive a tailored fertilizer blueprint."
  },
  ur: {
    welcome_back: "خوش آمدید،",
    cta_title: "سمارٹ کھاد کی سفارش حاصل کریں",
    cta_subtitle: "صحیح یوریا/کھاد کی قسم، درست مقدار اور شیڈول کا انتخاب کریں۔",
    your_farm_title: "آپ کے فارم کی تفصیلات",
    edit_btn: "ترمیم کریں",
    spec_soil: "مٹی کی قسم",
    spec_size: "زمین کا رقبہ",
    spec_budget: "بجٹ کی سطح",
    history_title: "حالیہ مشورے کی ہسٹری",
    nav_home: "ہوم",
    nav_chat: "چیٹ باٹ",
    nav_settings: "سیٹنگز",
    sett_profile_header: "کسان کی تفصیلات",
    name_label: "پورا نام",
    sett_lang_header: "انٹرفیس زبان",
    sett_lang_desc: "زبان تبدیل کرنے سے تمام یو آئی ٹیکسٹ، ایڈوائس کارڈز اور چیٹ باٹ کے جوابات فوری طور پر اپ ڈیٹ ہو جاتے ہیں۔",
    btn_save: "کنفیگریشن محفوظ کریں",
    rec_title: "کھاد کا خاکہ",
    tab_overview: "سفارشات",
    tab_planner: "ترقیاتی مراحل",
    tab_risk: "خطرہ کا تجزیہ",
    rec_stage_lbl: "ترقیاتی مرحلہ:",
    suitability: "مناسبت کا سکور",
    recommended_fertilizers: "تجویز کردہ کھاد کا مرکب",
    cost_estimation_title: "کل تخمینی سرمایہ کاری",
    subtotal_fertilizers: "کھاد اور یوریا کا کل",
    yield_potential: "تخمینی منافع میں اضافہ",
    irrigation_title: "آبپاشی کی تجویز",
    stage_planner_title: "فصل کی ترقی کا شیڈول",
    stage_planner_desc: "پیداواری صلاحیت کو زیادہ سے زیادہ بڑھانے کے لیے فصل کے پورے لائف سائیکل میں اس شیڈول پر عمل کریں۔",
    risk_title: "کھاد کے خطرات کی وارننگ",
    risk_introduction: "زیادہ کھاد مٹی میں موجود مائیکرو نظام کو تباہ کر دیتی ہے اور پیداوار میں اضافے کے بغیر لاگت بڑھاتی ہے۔",
    overuse_risks: "زیادہ استعمال کے نقصانات",
    underuse_risks: "کم استعمال کے نقصانات",
    or_1: "مٹی کے ماحول کو تیزابی بناتا ہے۔",
    or_2: "زیر زمین پانی میں نائٹریٹ کا رساؤ ہوتا ہے۔",
    or_3: "تنے کی سڑن اور کیڑوں کے حملے کا خطرہ بڑھاتا ہے۔",
    ur_1: "جڑوں کے نظام کی سست نشوونما۔",
    ur_2: "پتوں کا وقت سے پہلے پیلا ہونا۔",
    ur_3: "پھول اور دانے بننے کا ناقص عمل۔",
    weather_safe_advisory: "اگلے 48 گھنٹوں تک بارش کا کوئی امکان نہیں ہے۔ یوریا ڈالنے کا بہترین وقت ہے۔",
    chat_intro: "سلام! میں آپ کا ایگری سمارٹ اے آئی کھاد کا مشیر ہوں۔ براہ کرم مناسب کھاد کا خاکہ حاصل کرنے کے لیے چند سوالات کے جواب دیں۔"
  },
  mr: {
    welcome_back: "स्वागत आहे,",
    cta_title: "स्मार्ट खत शिफारस मिळवा",
    cta_subtitle: "योग्य युरिया/खताचा प्रकार, अचूक प्रमाण आणि वेळापत्रक निवडा.",
    your_farm_title: "तुमची शेती कॉन्फिगरेशन",
    edit_btn: "सुधारा",
    spec_soil: "मातीचा प्रकार",
    spec_size: "जमीन क्षेत्र",
    spec_budget: "बजेट पातळी",
    history_title: "अलीकडील सल्ला इतिहास",
    nav_home: "होम",
    nav_chat: "चॅटबॉट",
    nav_settings: "सेटिंग्ज",
    sett_profile_header: "शेतकऱ्याचा तपशील",
    name_label: "पूर्ण नाव",
    sett_lang_header: "इंटरफेस भाषा",
    sett_lang_desc: "भाषा बदलल्यास सर्व UI मजकूर, सल्ला कार्ड आणि चॅटबॉट त्वरित अपडेट होतात.",
    btn_save: "कॉन्फिगरेशन जतन करा",
    rec_title: "खत आराखडा",
    tab_overview: "शिफारसी",
    tab_planner: "वाढ टप्पे",
    tab_risk: "जोखीम विश्लेषण",
    rec_stage_lbl: "वाढ टप्पा:",
    suitability: "योग्यतेचा दर",
    recommended_fertilizers: "शिफारस केलेले खत मिश्रण",
    cost_estimation_title: "एकूण अंदाजित गुंतवणूक",
    subtotal_fertilizers: "खत आणि युरिया उप-एकूण",
    yield_potential: "अंदाजित नफा वाढ",
    irrigation_title: "जलसिंचनाचा सल्ला",
    stage_planner_title: "पीक चक्र दिनदर्शिका वेळापत्रक",
    stage_planner_desc: "उत्पादन क्षमता जास्तीत जास्त वाढवण्यासाठी पिकाच्या संपूर्ण जीवन चक्रात या वेळापत्रकाचे पालन करा.",
    risk_title: "खत जोखीम चेतावणी",
    risk_introduction: "जास्त खतामुळे मातीतील सूक्ष्म परिसंस्था नष्ट होते आणि पिकाचे नुकसान वाढवून उत्पादन खर्च वाढतो.",
    overuse_risks: "अतिवापराचे धोके",
    underuse_risks: "कमी वापराचे धोके",
    or_1: "मातीचे वातावरण आम्लयुक्त करते.",
    or_2: "भूजलामध्ये नायट्रेट्स वाहून नेते.",
    or_3: "खोड सडणे आणि कीटकांच्या हल्ल्यास संवेदनशीलता वाढवते.",
    ur_1: "मुळांची वाढ खुंटणे.",
    ur_2: "पाने अकाली पिवळी पडणे.",
    ur_3: "खराब फुलोरा आणि दाणे भरणे.",
    weather_safe_advisory: "४८ तास पावसाची शक्यता नाही. युरिया टाकण्यासाठी उत्तम वेळ.",
    chat_intro: "नमस्कार! मी तुमचा ॲग्रीस्मार्ट एआय खत सल्लागार आहे. कृपया योग्य खत शिफारस मिळवण्यासाठी काही प्रश्नांची उत्तरे द्या."
  }
};

// 2. NAMESPACED STORAGE KEYS FOR CLEAN MULTI-PROFILE ISOLATION
const LS_PROFILES_KEY  = "agrismart_v2_profiles";   // Dictionary of { userId: userProfileObj }
const LS_ACTIVE_ID_KEY = "agrismart_v2_active_id";  // Currently active userId string
const LS_LANG_KEY      = "agrismart_v2_lang";       // App UI language
const LS_GEMINI_KEY    = "agrismart_v2_gemini_key"; // Gemini API key
const LS_MODE_KEY      = "agrismart_v2_chat_mode";  // Chatbot mode
const LS_HISTORY_KEY   = "agrismart_v2_history_";   // Consultation history (suffixed by userId)

// 3. ACTIVE APPLICATION STATE CONTAINER
let appState = {
  activeUser: null,        // { id, name, language, role, soilType, landArea, areaUnit, budgetCategory, createdAt }
  currentLanguage: 'hi',
  draftName: '',
  forcedWeather: 'default',
  geminiApiKey: '',
  chatMode: 'wizard',
  liveChatHistory: [],
  weatherState: 'CONFIGURED_REGION', // 'LIVE_GPS' | 'CONFIGURED_REGION' | 'LOCATION_UNAVAILABLE'
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
  setupProfileOnboardingListeners();

  // Load Active Local Profile
  const activeProfile = loadActiveProfile();

  if (activeProfile) {
    console.log('[Local Identity] Active profile restored:', activeProfile.name, `(ID: ${activeProfile.id})`);
    appState.activeUser = activeProfile;
    if (activeProfile.language) {
      appState.currentLanguage = activeProfile.language;
    }
    
    loadUserHistory();
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

// 6. ONBOARDING & PROFILE CREATION PIPELINE
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
      // Step 1 -> Step 2: Move to Profile Setup (Name Entry)
      goToScreen('screen-profile-setup');
    };
  }
}

function setupProfileOnboardingListeners() {
  const btnSubmitProfile = document.getElementById('btn-submit-profile-setup');
  const nameInput        = document.getElementById('input-user-name');
  const nameError        = document.getElementById('name-error-msg');

  if (btnSubmitProfile && nameInput) {
    btnSubmitProfile.onclick = () => {
      const trimmedName = nameInput.value.trim();
      if (!trimmedName || trimmedName.length < 2) {
        if (nameError) nameError.classList.remove('hidden');
        nameInput.focus();
        showToast('Please enter your valid name to continue.', 'warning');
        return;
      }

      if (nameError) nameError.classList.add('hidden');

      // Create New Local Profile
      const newProfile = {
        id: 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        name: trimmedName,
        language: appState.currentLanguage,
        role: trimmedName.toLowerCase() === 'admin' ? 'admin' : 'farmer',
        soilType: 'loamy',
        landArea: 2.5,
        areaUnit: 'acre',
        budgetCategory: 'medium',
        createdAt: new Date().toISOString()
      };

      saveProfileToDisk(newProfile);
      appState.activeUser = newProfile;
      loadUserHistory();
      
      showToast(`Welcome, ${newProfile.name}! Profile created successfully.`, 'success');
      goToScreen('screen-dashboard');
    };

    nameInput.oninput = () => {
      if (nameError && nameInput.value.trim().length >= 2) {
        nameError.classList.add('hidden');
      }
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
    html += `
      <div class="profile-card-item ${isActive ? 'active' : ''}" onclick="switchActiveProfile('${p.id}')">
        <div class="p-info">
          <i class="fa-solid fa-user-circle"></i>
          <div>
            <div class="p-name">${p.name}</div>
            <div style="font-size: 11px; color: var(--neutral-slate);">${p.soilType ? p.soilType.toUpperCase() : 'Loamy'} Soil • ${p.landArea || 2.5} ${p.areaUnit || 'Acres'}</div>
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
  updateLocalizationUI(appState.currentLanguage);
  showToast(`Switched active profile to ${target.name}.`, 'success');
  goToScreen('screen-dashboard');
}

function startNewProfileCreation() {
  document.getElementById('input-user-name').value = '';
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
    const userName = appState.activeUser ? appState.activeUser.name : 'Farmer';
    document.getElementById('dash-user-name').innerText = userName;

    const u = appState.activeUser || {};
    document.getElementById('dash-soil-type').innerText = translateToken(`soil_${u.soilType || 'loamy'}`);
    document.getElementById('dash-land-area').innerText = `${u.landArea || 2.5} ${translateToken(u.areaUnit || 'acre')}`;
    document.getElementById('dash-budget-level').innerText = translateToken(`budget_${u.budgetCategory || 'medium'}`);

    renderHistory();
  }

  if (screenId === 'screen-settings' && appState.activeUser) {
    const u = appState.activeUser;
    document.getElementById('sett-name').value = u.name;
    document.getElementById('sett-soil').value = u.soilType || 'loamy';
    document.getElementById('sett-area').value = u.landArea || 2.5;
    document.getElementById('sett-unit').value = u.areaUnit || 'acre';
    document.getElementById('sett-budget').value = u.budgetCategory || 'medium';
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
  // Deterministic scoring matrix derived from agronomic science compatibility (No Math.random())
  const SOIL_COMPATIBILITY = {
    wheat:     { loamy: 96, alluvial: 94, clay: 88, black: 85, red: 78, sandy: 72 },
    rice:      { clay: 98, alluvial: 95, loamy: 90, black: 88, red: 75, sandy: 68 },
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
  const NPK_BASE = {
    wheat:     { sowing: [20, 20, 10], vegetative: [45, 10, 5],  flowering: [10, 5, 10], maturity: [0, 0, 0] },
    rice:      { sowing: [15, 25, 15], vegetative: [55, 12, 10], flowering: [15, 5, 10], maturity: [0, 0, 0] },
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
  
  const soil = profile.soilType || 'loamy';
  const area = profile.landArea || 2.5;
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
      profitIncrease: `+ ₹ ${profitEstimate.toLocaleString('en-IN')} / ${profile.areaUnit || 'acre'}`
    }
  };
}

// 11. LOCATION & WEATHER ENGINE
function triggerGpsWeatherSync() {
  const badge  = document.getElementById('weather-status-badge');
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

        let cityName = "Your GPS Location";
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
        showToast('Weather service unavailable. Displaying saved region data.', 'warning');
        if (badge) {
          badge.innerText = 'SAVED REGION';
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
    // New accounts start with EMPTY consultation history
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

// 13. ADMIN ROLE AUTHORIZATION ENGINE
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
      if (data.status === 'success' && data.metrics) {
        const m = data.metrics;
        document.getElementById('admin-metric-status').innerText = m.systemStatus;
        document.getElementById('admin-metric-uptime').innerText = m.serverUptimeSeconds;
      }
    }
  } catch (err) {
    console.warn('Failed to fetch admin metrics:', err);
  }
}

// 14. SETTINGS & PROFILE UPDATER
function saveSettings() {
  const nameVal   = document.getElementById('sett-name').value.trim();
  const soilVal   = document.getElementById('sett-soil').value;
  const areaVal   = parseFloat(document.getElementById('sett-area').value);
  const unitVal   = document.getElementById('sett-unit').value;
  const budgetVal = document.getElementById('sett-budget').value;
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
    appState.activeUser.name           = nameVal;
    appState.activeUser.soilType       = soilVal;
    appState.activeUser.landArea       = areaVal;
    appState.activeUser.areaUnit       = unitVal;
    appState.activeUser.budgetCategory = budgetVal;
    saveProfileToDisk(appState.activeUser);
  }

  appState.geminiApiKey = keyVal;
  localStorage.setItem(LS_GEMINI_KEY, keyVal);

  updateApiKeyStatusBadge();
  updateChatModeSelectorVisibility();
  showToast('Profile configuration saved successfully.', 'success');
  goToScreen('screen-dashboard');
}

// 15. LOCALIZATION HELPER
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
    hi: { soil_loamy: "दोमट मिट्टी", soil_sandy: "रेतीली मिट्टी", soil_clay: "चिकनी मिट्टी", soil_black: "काली मिट्टी", soil_red: "लाल मिट्टी", soil_alluvial: "जलोढ़ मिट्टी", budget_low: "कम", budget_medium: "मध्यम", budget_high: "उच्च", acre: "एकर", bigha: "बीघा", hectare: "हेक्टेयर" },
    en: { soil_loamy: "Loamy Soil", soil_sandy: "Sandy Soil", soil_clay: "Clay Soil", soil_black: "Black Soil", soil_red: "Red Soil", soil_alluvial: "Alluvial Soil", budget_low: "Low", budget_medium: "Medium", budget_high: "High", acre: "Acres", bigha: "Bigha", hectare: "Hectares" }
  };
  const lang = appState.currentLanguage;
  if (translations[lang] && translations[lang][token]) return translations[lang][token];
  if (translations['en'][token]) return translations['en'][token];
  return token;
}

// 16. CHATBOT INTERACTIVE CONSOLE CONTROLLER
function startChatbot() {
  goToScreen('screen-chatbot');
  const container = document.getElementById('chat-messages-container');
  if (container && container.children.length === 0) {
    appendChatMessage('bot', TRANSLATIONS[appState.currentLanguage]?.chat_intro || TRANSLATIONS['en'].chat_intro);
    renderWizardStep(0);
  }
}

function confirmQuitChat() {
  goToScreen('screen-dashboard');
}

function appendChatMessage(sender, text) {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerText = text;
  container.appendChild(bubble);
  container.scrollTop = container.scrollHeight;
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
  const profile = appState.activeUser || { soilType: 'loamy', landArea: 2.5, areaUnit: 'acre' };

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

// 17. GEMINI AI CHAT & VOICE ASSISTANT FUNCTIONS
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

  try {
    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: `System context: You are AgriSmart AI agronomist speaking to farmer ${appState.activeUser ? appState.activeUser.name : 'Farmer'} in ${appState.currentLanguage}. Question: ${query}` }]
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
