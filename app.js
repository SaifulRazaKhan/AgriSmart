/* ==========================================================================
   AGRISMART AI - MULTILINGUAL CONTROLLER & AGRONOMIC ENGINE (ES6)
   ========================================================================== */

// 1. TRANSLATION MATRIX FOR LOCALIZATION (ALL 13 TARGET LANGUAGES)
const TRANSLATIONS = {
  hi: {
    login_title: "ओटीपी लॉगिन",
    enter_phone_title: "मोबाइल नंबर सत्यापित करें",
    enter_phone_desc: "हम सुरक्षित रूप से लॉगिन करने के लिए 4-अंकीय सत्यापन कोड भेजेंगे।",
    phone_label: "मोबाइल नंबर",
    otp_label: "4-अंकीय ओटीपी दर्ज करें",
    resend_text: "कोड पुनः भेजें:",
    btn_send_otp: "ओटीपी कोड भेजें",
    btn_verify_otp: "सत्यापित करें और लॉगिन करें",
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
    risk_introduction: "अत्यधिक उर्वरक दोमट मिट्टी में सूक्ष्म पारिस्थितिकी तंत्र को नष्ट कर देता है और उपज बढ़ाए बिना उत्पादन लागत बढ़ाता है। अपर्याप्त खुराक से तने कमजोर होते हैं।",
    overuse_risks: "अत्यधिक उपयोग के नुकसान",
    underuse_risks: "कम उपयोग के नुकसान",
    or_1: "मिट्टी के वातावरण को अम्लीय बनाता है।",
    or_2: "भूजल में नाइट्रेट्स का रिसाव करता है।",
    or_3: "तने सड़ने और कीटों के प्रति संवेदनशीलता बढ़ाता है।",
    ur_1: "जड़ प्रणाली का विकास रुकना।",
    ur_2: "पत्तियों का समय से पहले पीला होना।",
    ur_3: "खराब पुष्पन और दाने भरना।",
    weather_safe_advisory: "48 घंटों तक बारिश की उम्मीद नहीं है। दानेदार यूरिया डालने का बेहतरीन समय।",
    chat_intro: "नमस्ते! मैं आपका कृषिस्मार्ट एआई उर्वरक सलाहकार हूँ। सटीक सिफारिश के लिए कृपया कुछ सवालों के जवाब दें।"
  },
  en: {
    login_title: "OTP Login",
    enter_phone_title: "Verify Mobile Number",
    enter_phone_desc: "We will send a 4-digit verification code to log in safely.",
    phone_label: "Mobile Number",
    otp_label: "Enter 4-Digit OTP",
    resend_text: "Resend Code in:",
    btn_send_otp: "Send OTP Code",
    btn_verify_otp: "Verify & Login",
    welcome_back: "Welcome Back,",
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
    suitability: "Suitability",
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
    login_title: "او ٹی پی لاگ ان",
    enter_phone_title: "موبائل نمبر کی تصدیق کریں",
    enter_phone_desc: "ہم محفوظ طریقے سے لاگ ان کرنے کے لیے 4 ہندسوں کا تصدیقی کوڈ بھیجیں گے۔",
    phone_label: "موبائل نمبر",
    otp_label: "4 ہندسوں کا او ٹی پی درج کریں",
    resend_text: "کوڈ دوبارہ بھیجیں:",
    btn_send_otp: "او ٹی پی کوڈ بھیجیں",
    btn_verify_otp: "تصدیق کریں اور لاگ ان کریں",
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
    settings_title: "کنفیگریشن سیٹنگز",
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
    suitability: "مناسبت",
    recommended_fertilizers: "تجویز کردہ کھاد کا مرکب",
    cost_estimation_title: "کل تخمینی سرمایہ کاری",
    subtotal_fertilizers: "کھاد اور یوریا کا کل",
    yield_potential: "تخمینی منافع میں اضافہ",
    irrigation_title: "آبپاشی کی تجویز",
    stage_planner_title: "فصل کی ترقی کا شیڈول",
    stage_planner_desc: "پیداواری صلاحیت کو زیادہ سے زیادہ بڑھانے کے لیے فصل کے پورے لائف سائیکل میں اس شیڈول پر عمل کریں۔",
    risk_title: "کھاد کے خطرات کی وارننگ",
    risk_introduction: "زیادہ کھاد مٹی میں موجود مائیکرو نظام کو تباہ کر دیتی ہے اور پیداوار میں اضافے کے بغیر لاگت بڑھاتی ہے۔ کم مقدار تنے کو کمزور کرتی ہے۔",
    overuse_risks: "زیادہ استعمال کے نقصانات",
    underuse_risks: "کم استعمال کے نقصانات",
    or_1: "مٹی کے ماحول کو تیزابی بناتا ہے۔",
    or_2: "زیر زمین پانی میں نائٹریٹ کا رساؤ ہوتا ہے۔",
    or_3: "تنے کی سڑن اور کیڑوں کے حملے کا خطرہ بڑھاتا ہے۔",
    ur_1: "جڑوں کے نظام کی سست نشوونما۔",
    ur_2: "پتوں کا وقت سے پہلے پیلا ہونا۔",
    ur_3: "پھول اور دانے بننے کا ناقص عمل۔",
    weather_safe_advisory: "اگلے 48 گھنٹوں تک بارش کا کوئی امکان نہیں ہے۔ دانے دار یوریا ڈالنے کا بہترین وقت ہے۔",
    chat_intro: "سلام! میں آپ کا ایگری سمارٹ اے آئی کھاد کا مشیر ہوں۔ براہ کرم مناسب کھاد کا خاکہ حاصل کرنے کے لیے چند سوالات کے جواب دیں۔"
  },
  mr: {
    login_title: "ओटीपी लॉगिन",
    enter_phone_title: "मोबाईल नंबर सत्यापित करा",
    enter_phone_desc: "आम्ही सुरक्षितपणे लॉगिन करण्यासाठी ४-अंकी पडताळणी कोड पाठवू.",
    phone_label: "मोबाईल नंबर",
    otp_label: "४-अंकी ओटीपी प्रविष्ट करा",
    resend_text: "कोड पुन्हा पाठवा:",
    btn_send_otp: "ओटीपी पाठवा",
    btn_verify_otp: "सत्यापित करा आणि लॉगिन करा",
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
    settings_title: "कॉन्फिगरेशन सेटिंग्स",
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
    risk_introduction: "जास्त खतामुळे मातीतील सूक्ष्म परिसंस्था नष्ट होते आणि पिकाचे नुकसान वाढवून उत्पादन खर्च वाढतो. अपुऱ्या डोसमुळे खोड कमकुवत होते.",
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

// Map localized text for regional scrolling languages dynamically
const LANG_NAMES = {
  hi: "हिन्दी", en: "English", ur: "اردو", mr: "मराठी",
  pa: "ਪੰਜਾਬੀ", bn: "বাংলা", gu: "ગુજરાતી", ta: "தமிழ்",
  te: "తెలుగు", kn: "ಕನ್ನಡ", ml: "മലയാളം", or: "ଓଡ଼ିଆ", as: "অসমীয়া"
};

// 2. ACTIVE SYSTEM STATE CONTAINER
let appState = {
  currentLanguage: 'hi',
  forcedWeather: 'default',
  geminiApiKey: '',
  chatMode: 'wizard',
  liveChatHistory: [],
  isLiveWeather: false,
  weatherData: null,
  userProfile: {
    name: 'Saiful',
    soilType: 'loamy',
    landArea: 2.5,
    areaUnit: 'acre',
    budgetCategory: 'medium',
    location: { country: 'India', state: 'Uttar Pradesh', district: 'Lucknow' }
  },
  chatSession: {
    step: 0,
    answers: {}
  },
  historyLogs: [
    { id: '1', date: '2026-06-10', crop: 'Rice', stage: 'Sowing', cost: '₹ 1,200', target: 'overview' },
    { id: '2', date: '2026-05-18', crop: 'Wheat', stage: 'Vegetative', cost: '₹ 2,400', target: 'overview' }
  ]
};

// Local storage names mapping
const LS_PROFILE_KEY = "agrismart_profile";
const LS_LANG_KEY = "agrismart_lang";
const LS_GEMINI_KEY = "agrismart_gemini_key";
const LS_CHAT_MODE_KEY = "agrismart_chat_mode";

// Load configuration on initialization
function initApp() {
  const savedLang = localStorage.getItem(LS_LANG_KEY);
  if (savedLang) {
    appState.currentLanguage = savedLang;
  }
  
  const savedProfile = localStorage.getItem(LS_PROFILE_KEY);
  if (savedProfile) {
    try {
      appState.userProfile = JSON.parse(savedProfile);
    } catch(e) {
      console.error("Failed parsing saved profile", e);
    }
  }

  // Load Gemini API settings
  appState.geminiApiKey = localStorage.getItem(LS_GEMINI_KEY) || '';
  appState.chatMode = localStorage.getItem(LS_CHAT_MODE_KEY) || 'wizard';
  
  // Pre-render the user's profile values in inputs
  document.getElementById('sett-name').value = appState.userProfile.name;
  document.getElementById('sett-soil').value = appState.userProfile.soilType;
  document.getElementById('sett-area').value = appState.userProfile.landArea;
  document.getElementById('sett-unit').value = appState.userProfile.areaUnit;
  document.getElementById('sett-budget').value = appState.userProfile.budgetCategory;
  document.getElementById('sett-gemini-key').value = appState.geminiApiKey;
  
  updateLocalizationUI(appState.currentLanguage);
  renderHistory();
  setupLanguageCardSelection();
  updateApiKeyStatusBadge();
  updateChatModeSelectorVisibility();

  // Gemini key visibility toggle
  const btnToggleVis = document.getElementById('btn-toggle-key-visibility');
  const keyInput = document.getElementById('sett-gemini-key');
  if (btnToggleVis && keyInput) {
    btnToggleVis.onclick = () => {
      const isPassword = keyInput.type === 'password';
      keyInput.type = isPassword ? 'text' : 'password';
      btnToggleVis.innerHTML = isPassword ? `<i class="fa-solid fa-eye-slash"></i>` : `<i class="fa-solid fa-eye"></i>`;
    };
  }

  // GPS Weather Sync binding
  const btnGps = document.getElementById('btn-gps-sync');
  if (btnGps) {
    btnGps.onclick = () => triggerGpsWeatherSync();
  }

  // Initialize Theme from Local Storage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.getElementById('btn-theme-toggle').innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    document.getElementById('btn-theme-toggle').innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }

  // Theme Toggle Event Listener
  document.getElementById('btn-theme-toggle').onclick = () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('btn-theme-toggle').innerHTML = isDark ? 
      `<i class="fa-solid fa-sun"></i>` : `<i class="fa-solid fa-moon"></i>`;
  };

  // Weather Simulator Buttons Binding
  document.querySelectorAll('.sim-btn').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.sim-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedWeather = btn.getAttribute('data-weather');
      appState.forcedWeather = selectedWeather;
      appState.isLiveWeather = false;
      
      const badge = document.getElementById('weather-status-badge');
      if (badge) {
        badge.innerText = 'SIMULATED';
        badge.style.backgroundColor = 'var(--neutral-slate)';
      }
      
      updateDashboardWeatherBanner(selectedWeather);
    };
  });

  // Soil Report OCR Trigger
  const ocrUploadBox = document.getElementById('ocr-upload-box');
  const ocrFileInput = document.getElementById('ocr-file-input');
  if (ocrUploadBox && ocrFileInput) {
    ocrUploadBox.onclick = () => ocrFileInput.click();
    ocrFileInput.onchange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        startOcrScanningSimulation();
      }
    };
  }

  // Voice Input triggers
  const btnVoice = document.getElementById('btn-voice-input');
  if (btnVoice) {
    btnVoice.onclick = () => toggleVoiceRecognition();
  }
}

// 3. UI SCREEN ROUTING ENGINE
function goToScreen(screenId) {
  // Hide all screens
  document.querySelectorAll('.app-screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Show target screen
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }
  
  // Custom screen entrance logic
  if (screenId === 'screen-dashboard') {
    document.getElementById('dash-user-name').innerText = appState.userProfile.name;
    document.getElementById('dash-soil-type').innerText = translateToken(`soil_${appState.userProfile.soilType}`);
    document.getElementById('dash-land-area').innerText = `${appState.userProfile.landArea} ${translateToken(appState.userProfile.areaUnit)}`;
    document.getElementById('dash-budget-level').innerText = translateToken(`budget_${appState.userProfile.budgetCategory}`);
    
    // Simulate real-time weather changes
    const locations = ["Lucknow, UP", "Patna, Bihar", "Pune, MH", "Amritsar, PB"];
    const randomLoc = locations[Math.floor(Math.random() * locations.length)];
    document.getElementById('dash-location').innerHTML = `<i class="fa-solid fa-location-dot"></i> ${randomLoc}`;
  }
}

// Translate simple static tokens
function translateToken(token) {
  const translations = {
    hi: {
      soil_loamy: "दोमट मिट्टी", soil_sandy: "रेतीली मिट्टी", soil_clay: "चिकनी मिट्टी", soil_black: "काली मिट्टी", soil_red: "लाल मिट्टी", soil_alluvial: "जलोढ़ मिट्टी",
      budget_low: "कम", budget_medium: "मध्यम", budget_high: "उच्च",
      acre: "एकर", bigha: "बीघा", hectare: "हेक्टेयर",
      sowing: "बुवाई (Sowing)", vegetative: "वानस्पतिक वृद्धि (Vegetative)", flowering: "फूल आना (Flowering)", maturity: "परिपक्वता (Maturity)"
    },
    en: {
      soil_loamy: "Loamy Soil", soil_sandy: "Sandy Soil", soil_clay: "Clay Soil", soil_black: "Black Soil", soil_red: "Red Soil", soil_alluvial: "Alluvial Soil",
      budget_low: "Low", budget_medium: "Medium", budget_high: "High",
      acre: "Acres", bigha: "Bigha", hectare: "Hectares",
      sowing: "Sowing", vegetative: "Vegetative", flowering: "Flowering", maturity: "Maturity"
    },
    ur: {
      soil_loamy: "دو مٹ مٹی", soil_sandy: "ریتیلی مٹی", soil_clay: "چکنی مٹی", soil_black: "کالی مٹی", soil_red: "لال مٹی", soil_alluvial: "جلودھ مٹی",
      budget_low: "کم", budget_medium: "درمیانہ", budget_high: "زیادہ",
      acre: "ایکڑ", bigha: "بیگھہ", hectare: "ہیکٹر",
      sowing: "بیج بوائی", vegetative: "سبز نشوونما", flowering: "پھول آنا", maturity: "پختگی"
    },
    mr: {
      soil_loamy: "दोमट माती", soil_sandy: "रेताळ माती", soil_clay: "चिकन माती", soil_black: "काळी माती", soil_red: "लाल माती", soil_alluvial: "गाळाची माती",
      budget_low: "कमी", budget_medium: "मध्यम", budget_high: "उच्च",
      acre: "एकर", bigha: "बिघा", hectare: "हेक्टर",
      sowing: "पेरणी", vegetative: "शाकीय वाढ", flowering: "फुलणे", maturity: "परिपक्वता"
    }
  };
  
  const currentLang = appState.currentLanguage;
  if (translations[currentLang] && translations[currentLang][token]) {
    return translations[currentLang][token];
  }
  return token;
}

// Update all translation tags in view
function updateLocalizationUI(langCode) {
  appState.currentLanguage = langCode;
  
  // Set HTML lang attribute
  document.documentElement.lang = langCode;
  
  // Update elements with data-i18n tags
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

  // Highlight selected language button in settings
  document.querySelectorAll('#screen-settings .lang-pill').forEach(btn => {
    if (btn.getAttribute('data-lang') === langCode) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });
}

// 4. LANGUAGE SCREEN SELECTION HANDLING
function setupLanguageCardSelection() {
  const cards = document.querySelectorAll('.lang-card, .lang-pill');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Clear highlight on others
      document.querySelectorAll('.lang-card').forEach(c => c.classList.remove('highlighted'));
      document.querySelectorAll('.lang-pill').forEach(p => p.classList.remove('selected'));
      
      const selectedLang = card.getAttribute('data-lang');
      appState.currentLanguage = selectedLang;
      localStorage.setItem(LS_LANG_KEY, selectedLang);
      
      if (card.classList.contains('lang-card')) {
        card.classList.add('highlighted');
      } else {
        card.classList.add('selected');
      }
      
      // Flash confirm buttons and text immediately to translate the prompt
      updateLocalizationUI(selectedLang);
    });
  });

  document.getElementById('btn-confirm-language').addEventListener('click', () => {
    goToScreen('screen-login');
  });
}

// 5. OTP LOGIN ROUTING
let otpSent = false;
document.getElementById('btn-login-submit').addEventListener('click', () => {
  const phoneVal = document.getElementById('input-phone').value;
  const loginBtn = document.getElementById('btn-login-submit');
  const otpGroup = document.getElementById('otp-group');
  
  if (!phoneVal || phoneVal.length < 10) {
    alert(appState.currentLanguage === 'hi' ? "कृपया वैध मोबाइल नंबर दर्ज करें" : "Please enter a valid mobile number");
    return;
  }
  
  if (!otpSent) {
    // Send API request to server
    fetch('/api/otp/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: phoneVal })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        otpSent = true;
        otpGroup.classList.remove('hidden');
        loginBtn.innerHTML = `<span>${translateBtnToken('btn_verify_otp')}</span> <i class="fa-solid fa-check-double"></i>`;
        
        alert(appState.currentLanguage === 'hi' ? 
          `ओटीपी जनरेट किया गया! कोड देखने के लिए अपने सर्वर यूआरएल में /otp-dashboard जोड़ें (जैसे: link/otp-dashboard)` : 
          `OTP generated! Go to /otp-dashboard on your server URL to retrieve it (e.g. link/otp-dashboard)`);

        // Start countdown
        let count = 59;
        const interval = setInterval(() => {
          count--;
          document.getElementById('timer-seconds').innerText = count;
          if (count <= 0) {
            clearInterval(interval);
          }
        }, 1000);
      } else {
        alert(data.message || "Error requesting OTP");
      }
    })
    .catch(err => {
      console.error("OTP send failed:", err);
      alert("Network connection error. Is the server running?");
    });
  } else {
    // Validate OTP against server
    const otpVal = document.getElementById('input-otp').value;
    fetch('/api/otp/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: phoneVal, otp: otpVal })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(appState.currentLanguage === 'hi' ? "गलत ओटीपी कोड!" : "Invalid OTP code!");
      }
    })
    .then(data => {
      if (data.status === 'success') {
        goToScreen('screen-dashboard');
      }
    })
    .catch(err => {
      alert(err.message || "Verification failed");
    });
  }
});

function translateBtnToken(key) {
  const dictionary = {
    hi: { btn_verify_otp: "सत्यापित करें और लॉगिन करें" },
    en: { btn_verify_otp: "Verify & Login" },
    ur: { btn_verify_otp: "تصدیق کریں اور لاگ ان کریں" },
    mr: { btn_verify_otp: "सत्यापित करा आणि लॉगिन करा" }
  };
  return dictionary[appState.currentLanguage][key] || "Verify";
}

// 6. AGRONOMIC RECOMMENDATION CALCULATION ENGINE
// Returns optimized fertilizer mixture quantities, application guide, schedules, and costs
function runAgronomyCalculator(profile, cropCode, growthStage) {
  // Base NPK targets per acre
  const NPK_BASE = {
    wheat: { sowing: [20, 20, 10], vegetative: [45, 10, 5], flowering: [10, 5, 10], maturity: [0, 0, 0] },
    rice: { sowing: [15, 25, 15], vegetative: [55, 12, 10], flowering: [15, 5, 10], maturity: [0, 0, 0] },
    sugarcane: { sowing: [40, 30, 20], vegetative: [75, 20, 15], flowering: [25, 10, 20], maturity: [0, 0, 0] },
    cotton: { sowing: [15, 15, 10], vegetative: [40, 10, 15], flowering: [20, 10, 10], maturity: [0, 0, 0] }
  };

  // Safe fallback if crop not specifically mapped
  const cropKey = NPK_BASE[cropCode] ? cropCode : 'rice';
  const stageKey = NPK_BASE[cropKey][growthStage] ? growthStage : 'vegetative';
  
  let [n, p, k] = NPK_BASE[cropKey][stageKey];
  
  // Soil textures multipliers
  const SOIL_MULTIPLIER = {
    loamy: [1.0, 1.0, 1.0],
    sandy: [1.15, 1.0, 1.10], // High N leaching
    clay: [0.90, 1.10, 1.0],  // Fine retention, P fixed
    black: [0.95, 1.0, 0.90],
    red: [1.0, 1.20, 1.0],    // Iron bounds P
    alluvial: [1.0, 0.95, 1.0]
  };
  
  const soil = profile.soilType;
  const mult = SOIL_MULTIPLIER[soil] || SOIL_MULTIPLIER['loamy'];
  
  let targetN = n * mult[0] * profile.landArea;
  let targetP = p * mult[1] * profile.landArea;
  let targetK = k * mult[2] * profile.landArea;
  
  let recList = [];
  let totalCost = 0;
  
  // Calibrate based on Farmers Budget limits
  const budget = profile.budgetCategory;
  
  if (budget === 'low') {
    // SSP (16% P), MOP (60% K), Granular Urea (46% N)
    // 1. Calculate P requirement via SSP
    let sspNeeded = targetP / 0.16;
    if (sspNeeded > 0) {
      let cost = Math.ceil(sspNeeded * 9); // ₹9 per kg
      totalCost += cost;
      recList.push({
        name: appState.currentLanguage === 'hi' ? "सिंगल सुपर फॉस्फेट (SSP)" : "Single Super Phosphate (SSP)",
        qty: `${Math.round(sspNeeded)} Kg`,
        method: appState.currentLanguage === 'hi' ? "जुताई के समय मिट्टी में अच्छी तरह मिलाएं।" : "Incorporate deeply into soil during field preparation.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "यह कम बजट में फॉस्फोरस और सल्फर प्रदान करने का सबसे किफायती साधन है।" : "Highly economical source of phosphorus and sulfur tailored for restricted budgets."
      });
    }
    
    // 2. Potassium via MOP
    let mopNeeded = targetK / 0.60;
    if (mopNeeded > 0) {
      let cost = Math.ceil(mopNeeded * 17); // ₹17/kg
      totalCost += cost;
      recList.push({
        name: appState.currentLanguage === 'hi' ? "मुरिएट ऑफ पोटाश (MOP)" : "Muriate of Potash (MOP)",
        qty: `${Math.round(mopNeeded)} Kg`,
        method: appState.currentLanguage === 'hi' ? "बुवाई या रोपाई के समय बेसल खुराक के रूप में फैलाएं।" : "Apply evenly as a basal dose during transplanting.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "सस्ती पोटाश खाद जो फसलों को रोगों से लड़ने की शक्ति देती है।" : "Low-cost potash source to improve plant cell wall strength and drought resistance."
      });
    }
    
    // 3. Nitrogen via Subsidized Granular Urea (SSP provides 0% N)
    let ureaNeeded = targetN / 0.46;
    if (ureaNeeded > 0) {
      let cost = Math.ceil(ureaNeeded * 6.5); // ₹6.5/kg subsidized
      totalCost += cost;
      recList.push({
        name: appState.currentLanguage === 'hi' ? "नीम कोटेड यूरिया (Granular)" : "Neem Coated Urea (Granular)",
        qty: `${Math.round(ureaNeeded)} Kg`,
        method: appState.currentLanguage === 'hi' ? "सिंचाई से तुरंत पहले छिटककर डालें।" : "Broadcast evenly over the field just before scheduled watering.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "सस्ती नाइट्रोजन जो पौधों के विकास में मदद करती है।" : "Subsidized nitrogen source for active growth. Broad-spectrum root intake."
      });
    }
  } else if (budget === 'medium') {
    // DAP (18% N, 46% P), MOP (60% K), Urea, Liquid Nano Urea
    // 1. Calculate P via DAP
    let dapNeeded = targetP / 0.46;
    let dapN = dapNeeded * 0.18;
    if (dapNeeded > 0) {
      let cost = Math.ceil(dapNeeded * 27); // ₹27/kg
      totalCost += cost;
      recList.push({
        name: "Di-Ammonium Phosphate (DAP)",
        qty: `${Math.round(dapNeeded)} Kg`,
        method: appState.currentLanguage === 'hi' ? "बुवाई के समय बीज के नीचे गहराई में डालें।" : "Apply below the seed layer at sowing to prevent root burn.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "यह फास्फोरस के साथ नाइट्रोजन की बेसल खुराक प्रदान करने के लिए सर्वोत्कृष्ट है।" : "Double-action nutrition providing crucial phosphorus along with starter nitrogen."
      });
    }
    
    // 2. K via MOP
    let mopNeeded = targetK / 0.60;
    if (mopNeeded > 0) {
      let cost = Math.ceil(mopNeeded * 17);
      totalCost += cost;
      recList.push({
        name: "Muriate of Potash (MOP)",
        qty: `${Math.round(mopNeeded)} Kg`,
        method: appState.currentLanguage === 'hi' ? "खेत तैयार करते समय मिट्टी में मिलाएं।" : "Broadcast during primary land preparation.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "उचित दाने भरने और तने की मजबूती के लिए आवश्यक पोटैशियम।" : "Potassium source ensures disease resistance and grain size uniformity."
      });
    }
    
    // 3. N via Liquid Nano Urea (foliar spray) and Urea
    let remainingN = targetN - dapN;
    if (remainingN > 0) {
      // Half granular, half Nano Urea spray
      let granularN = remainingN * 0.5;
      let nanoN = remainingN * 0.5;
      
      let ureaNeeded = granularN / 0.46;
      if (ureaNeeded > 0) {
        let cost = Math.ceil(ureaNeeded * 6.5);
        totalCost += cost;
        recList.push({
          name: appState.currentLanguage === 'hi' ? "नीम कोटेड यूरिया (Granular)" : "Neem Coated Urea (Granular)",
          qty: `${Math.round(ureaNeeded)} Kg`,
          method: appState.currentLanguage === 'hi' ? "खेत में छिटककर डालें।" : "Broadcast to soil.",
          cost: `₹ ${cost}`,
          rationale: appState.currentLanguage === 'hi' ? "जड़ प्रणाली को सक्रिय नाइट्रोजन देने के लिए संतुलित मूल्य।" : "Balanced granular N dosage for root uptake."
        });
      }
      
      // 1 bottle Nano urea replaces 45kg bag
      let nanoBottles = Math.max(1, Math.round(nanoN / 20.7)); 
      let cost = nanoBottles * 240; // ₹240 per bottle
      totalCost += cost;
      recList.push({
        name: appState.currentLanguage === 'hi' ? "लिक्विड नैनो यूरिया (Foliar)" : "Liquid Nano Urea (Foliar)",
        qty: `${nanoBottles} Bottle(s) (500ml)`,
        method: appState.currentLanguage === 'hi' ? "200 लीटर पानी में मिलाकर पत्तियों पर छिड़काव करें।" : "Mix in 200L of clean water and spray directly on crop leaves.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "पत्तियों द्वारा त्वरित अवशोषण। यह मिट्टी में बहने वाले नुकसान को शून्य करता है।" : "Immediate absorption via leaf stomata. Replaces one complete traditional urea bag."
      });
    }
  } else {
    // High budget optimization: Customized NPK complex, Liquid Nano Urea, Bio-fertilizer pack
    let npkNeeded = targetN / 0.19; // 19:19:19 complex
    if (npkNeeded > 0) {
      let cost = Math.ceil(npkNeeded * 180); // ₹180 per kg water soluble
      totalCost += cost;
      recList.push({
        name: "Water-Soluble NPK Complex (19:19:19)",
        qty: `${Math.round(npkNeeded)} Kg`,
        method: appState.currentLanguage === 'hi' ? "ड्रिप सिंचाई या पत्तेदार स्प्रे के माध्यम से प्रयोग करें।" : "Apply via drip irrigation fertigation or as a targeted leaf spray.",
        cost: `₹ ${cost}`,
        rationale: appState.currentLanguage === 'hi' ? "संतुलित और 100% घुलनशील खाद जो पौधे को सभी तीन प्राथमिक पोषक तत्व तुरंत देता है।" : "Ultra-pure 100% soluble fertilizer. Ensures even allocation of primary macronutrients."
      });
    }

    // Add organic Bio-fertilizer pack
    let bioCost = 250 * profile.landArea;
    totalCost += bioCost;
    recList.push({
      name: "Bio-Fertilizer Consortia (Azotobacter + PSB)",
      qty: `${Math.ceil(profile.landArea)} Pack(s)`,
      method: appState.currentLanguage === 'hi' ? "100 किलो गोबर की खाद में मिलाकर मिट्टी में डालें।" : "Mix with 100kg organic compost and apply to root zone.",
      cost: `₹ ${bioCost}`,
      rationale: appState.currentLanguage === 'hi' ? "मिट्टी के लाभकारी जीवाणुओं को बढ़ाता है जो हवा से नाइट्रोजन लेकर पौधों को देते हैं।" : "Enriches microbial soil life, fixing atmospheric nitrogen naturally."
    });
  }

  // Calculate simulated crop profit increase
  let baseYieldGain = { wheat: 2400, rice: 2560, sugarcane: 4500, cotton: 3200 };
  let profitVal = Math.round((baseYieldGain[cropKey] || 2500) * profile.landArea * (budget === 'high' ? 1.25 : (budget === 'low' ? 0.85 : 1)));

  return {
    recList,
    totalCost,
    profitVal,
    suitability: Math.round(92 + Math.random() * 7),
    targetNPK: [Math.round(targetN), Math.round(targetP), Math.round(targetK)]
  };
}

// 7. HISTORICAL LOGS RENDER
function renderHistory() {
  const container = document.getElementById('history-list');
  if (!container) return;
  
  if (appState.historyLogs.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--neutral-slate); font-size:14px; padding:20px;">No history logged yet.</p>`;
    return;
  }
  
  container.innerHTML = '';
  appState.historyLogs.forEach(log => {
    const card = document.createElement('div');
    card.className = 'history-card animate-fade-in';
    card.innerHTML = `
      <div class="history-main-info">
        <h4>${log.crop}</h4>
        <p>${translateToken(log.stage)} | Cost: ${log.cost}</p>
      </div>
      <div class="history-date">${log.date}</div>
    `;
    card.addEventListener('click', () => {
      // Simulate reload of recommendations
      showRecommendations(log.crop.toLowerCase(), log.stage);
    });
    container.appendChild(card);
  });
}

// 8. CHATBOT CONVERSATIONAL CONSOLE ENGINE
const CHAT_FLOW_STEPS = [
  {
    key: "location",
    prompt: {
      hi: "आपकी भौगोलिक स्थिति क्या है? कृपया अपना राज्य चुनें:",
      en: "What is your geographic location? Please select your State:",
      ur: "آپ کا جغرافیائی مقام کیا ہے؟ براہ کرم اپنا صوبہ منتخب کریں:",
      mr: "तुमची भौगोलिक स्थिती काय आहे? कृपया तुमचे राज्य निवडा:"
    },
    inputType: "select",
    options: ["Uttar Pradesh", "Bihar", "Punjab", "Maharashtra", "Madhya Pradesh"]
  },
  {
    key: "soil",
    prompt: {
      hi: "आपकी मिट्टी का प्रकार क्या है? (नीचे दी गई मिट्टी की छवियों के आधार पर चयन करें)",
      en: "What is your soil texture? (Select from soil types below)",
      ur: "آپ کی مٹی کی ساخت کیا ہے؟ (نیچے دیے گئے کارڈز سے منتخب کریں)",
      mr: "तुमच्या शेतातील मातीचा प्रकार कोणता आहे?"
    },
    inputType: "soil-deck"
  },
  {
    key: "crop",
    prompt: {
      hi: "आप किस फसल के लिए उर्वरक शिफारिश चाहते हैं?",
      en: "Which crop do you want a fertilizer recommendation for?",
      ur: "آپ کس فصل کے لیے کھاد کی سفارش چاہتے ہیں؟",
      mr: "तुम्हाला कोणत्या पिकासाठी खत शिफारस हवी आहे?"
    },
    inputType: "options",
    options: [
      { code: "wheat", names: { hi: "🌾 गेहूं (Wheat)", en: "Wheat", ur: "گندم", mr: "गहू" } },
      { code: "rice", names: { hi: "🌾 धान (Rice)", en: "Rice", ur: "چاول", mr: "भात" } },
      { code: "sugarcane", names: { hi: "🎋 गन्ना (Sugarcane)", en: "Sugarcane", ur: "گنا", mr: "ऊस" } },
      { code: "cotton", names: { hi: "☁️ कपास (Cotton)", en: "Cotton", ur: "کپاس", mr: "कापूस" } }
    ]
  },
  {
    key: "stage",
    prompt: {
      hi: "आपकी फसल वर्तमान में विकास के किस चरण में है?",
      en: "What growth stage is your crop currently in?",
      ur: "آپ کی فصل اس وقت کس مرحلے پر ہے؟",
      mr: "तुमचे पीक सध्या कोणत्या वाढीच्या टप्प्यावर आहे?"
    },
    inputType: "options",
    options: [
      { code: "sowing", names: { hi: "🌱 बुवाई (Sowing)", en: "Sowing", ur: "بیج بوائی", mr: "पेरणी" } },
      { code: "vegetative", names: { hi: "🌿 वानस्पतिक वृद्धि (Vegetative)", en: "Vegetative", ur: "سبز نشوونما", mr: "शाकीय वाढ" } },
      { code: "flowering", names: { hi: "🌸 फूल आना (Flowering)", en: "Flowering", ur: "پھول آنا", mr: "फुलणे" } },
      { code: "maturity", names: { hi: "🍂 परिपक्वता (Maturity)", en: "Maturity", ur: "پختگی", mr: "परिपक्वता" } }
    ]
  },
  {
    key: "area",
    prompt: {
      hi: "आपके खेत का क्षेत्रफल कितना है? (संख्या दर्ज करें):",
      en: "What is your total land area? (Enter number):",
      ur: "آپ کے فارم کا رقبہ کتنا ہے؟ (نمبر درج کریں):",
      mr: "तुमच्या शेताचे क्षेत्रफळ किती आहे?"
    },
    inputType: "numeric"
  },
  {
    key: "budget",
    prompt: {
      hi: "उर्वरक खरीद के लिए आपका बजट स्तर क्या है?",
      en: "What is your budget tier for fertilizer purchase?",
      ur: "کھاد کی خریداری کے لیے آپ کا بجٹ لیول کیا ہے؟",
      mr: "खत खरेदीसाठी तुमची बजेट पातळी काय आहे?"
    },
    inputType: "options",
    options: [
      { code: "low", names: { hi: "💵 कम बजट (Low)", en: "Low Budget", ur: "کم بجٹ", mr: "कमी बजेट" } },
      { code: "medium", names: { hi: "💳 मध्यम बजट (Medium)", en: "Medium Budget", ur: "درمیانہ بجट", mr: "मध्यम बजेट" } },
      { code: "high", names: { hi: "💰 उच्च बजट (Optimized)", en: "High Budget", ur: "زیادہ بجٹ", mr: "उच्च बजेट" } }
    ]
  }
];

function startChatbot() {
  goToScreen('screen-chatbot');
  
  // Set chat mode selection visibility
  updateChatModeSelectorVisibility();
  
  // Switch to current mode
  switchChatMode(appState.chatMode);
}

function confirmQuitChat() {
  if (confirm(appState.currentLanguage === 'hi' ? "क्या आप वाकई चैटबॉट से बाहर निकलना चाहते हैं?" : "Do you really want to exit the chatbot?")) {
    goToScreen('screen-dashboard');
  }
}

function appendChatBubble(sender, text) {
  const chatContainer = document.getElementById('chat-messages-container');
  const bubble = document.createElement('div');
  bubble.className = `msg-bubble ${sender}`;
  bubble.innerText = text;
  chatContainer.appendChild(bubble);
  
  // Smooth scroll
  chatContainer.scrollTo({
    top: chatContainer.scrollHeight,
    behavior: 'smooth'
  });
}

// Render dynamic input choices at bottom panel
function runChatStep() {
  const stepIdx = appState.chatSession.step;
  if (stepIdx >= CHAT_FLOW_STEPS.length) {
    // Completed! Generate recommendation
    appendChatBubble("bot", appState.currentLanguage === 'hi' ? "सभी डेटा एकत्र कर लिया गया है। कृपया आपका उर्वरक खाका तैयार होने तक प्रतीक्षा करें..." : "Data gathered successfully. Processing agronomic rules and scaling NPK values...");
    
    setTimeout(() => {
      processChatSessionRecommendation();
    }, 1200);
    return;
  }
  
  const step = CHAT_FLOW_STEPS[stepIdx];
  const promptText = step.prompt[appState.currentLanguage] || step.prompt['en'];
  appendChatBubble("bot", promptText);
  
  const inputPanel = document.getElementById('chat-input-panel');
  inputPanel.innerHTML = '';
  
  if (step.inputType === 'select') {
    const grid = document.createElement('div');
    grid.className = 'options-choice-grid';
    step.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.innerText = opt;
      btn.addEventListener('click', () => submitChatAnswer(opt, opt));
      grid.appendChild(btn);
    });
    inputPanel.appendChild(grid);
  } else if (step.inputType === 'options') {
    const grid = document.createElement('div');
    grid.className = 'options-choice-grid-2';
    step.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'btn-option';
      btn.innerText = opt.names[appState.currentLanguage] || opt.names['en'];
      btn.addEventListener('click', () => submitChatAnswer(opt.code, opt.names[appState.currentLanguage] || opt.names['en']));
      grid.appendChild(btn);
    });
    inputPanel.appendChild(grid);
  } else if (step.inputType === 'soil-deck') {
    const deck = document.createElement('div');
    deck.className = 'soil-choice-deck';
    const soils = [
      { code: 'loamy', hi: "दोमट मिट्टी", en: "Loamy" },
      { code: 'sandy', hi: "रेतीली मिट्टी", en: "Sandy" },
      { code: 'clay', hi: "चिकनी मिट्टी", en: "Clay" },
      { code: 'black', hi: "काली मिट्टी", en: "Black" },
      { code: 'red', hi: "लाल मिट्टी", en: "Red" },
      { code: 'alluvial', hi: "जलोढ़ मिट्टी", en: "Alluvial" }
    ];
    soils.forEach(soil => {
      const card = document.createElement('div');
      card.className = `soil-opt-card ${soil.code}`;
      card.innerHTML = `
        <div class="soil-swatch"></div>
        <span class="name">${appState.currentLanguage === 'hi' ? soil.hi : soil.en}</span>
      `;
      card.addEventListener('click', () => submitChatAnswer(soil.code, appState.currentLanguage === 'hi' ? soil.hi : soil.en));
      deck.appendChild(card);
    });
    inputPanel.appendChild(deck);
  } else if (step.inputType === 'numeric') {
    const block = document.createElement('div');
    block.className = 'chatbot-numeric-input-block';
    
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'e.g. 2.5';
    input.step = '0.5';
    input.min = '0.1';
    
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
    
    btn.addEventListener('click', () => {
      const val = parseFloat(input.value);
      if (isNaN(val) || val <= 0) {
        alert(appState.currentLanguage === 'hi' ? "कृपया वैध क्षेत्रफल संख्या दर्ज करें" : "Please enter a valid numeric land area");
        return;
      }
      submitChatAnswer(val, `${val} Acres`);
    });
    
    block.appendChild(input);
    block.appendChild(btn);
    inputPanel.appendChild(block);
    
    // Auto focus
    input.focus();
  }
}

function submitChatAnswer(rawVal, displayVal) {
  const step = CHAT_FLOW_STEPS[appState.chatSession.step];
  appState.chatSession.answers[step.key] = rawVal;
  
  appendChatBubble("user", displayVal);
  
  appState.chatSession.step++;
  setTimeout(() => {
    runChatStep();
  }, 400);
}

function processChatSessionRecommendation() {
  const ans = appState.chatSession.answers;
  
  // Construct temporary user profile based on questionnaire
  const tempProfile = {
    name: appState.userProfile.name,
    soilType: ans.soil,
    landArea: ans.area,
    areaUnit: 'acre',
    budgetCategory: ans.budget,
    location: { country: 'India', state: ans.location, district: 'Local Block' }
  };
  
  // Save temp profile to active state
  appState.userProfile = tempProfile;
  localStorage.setItem(LS_PROFILE_KEY, JSON.stringify(tempProfile));
  
  // Inject calculated logs in history list
  const dateStr = new Date().toISOString().split('T')[0];
  const cropDisplay = ans.crop.charAt(0).toUpperCase() + ans.crop.slice(1);
  
  const calcData = runAgronomyCalculator(tempProfile, ans.crop, ans.stage);
  
  appState.historyLogs.unshift({
    id: String(Date.now()),
    date: dateStr,
    crop: cropDisplay,
    stage: ans.stage,
    cost: `₹ ${calcData.totalCost}`,
    target: 'overview'
  });
  
  renderHistory();
  showRecommendations(ans.crop, ans.stage);
}

// 9. RENDER DYNAMIC RECOMMENDATION SHEETS
function showRecommendations(cropCode, growthStage) {
  goToScreen('screen-recommendations');
  
  const profile = appState.userProfile;
  const calc = runAgronomyCalculator(profile, cropCode, growthStage);
  
  // Render headers
  const cropIcons = { wheat: '🌾', rice: '🌾', sugarcane: '🎋', cotton: '☁️' };
  document.getElementById('rec-crop-badge').innerText = cropIcons[cropCode] || '🌾';
  
  const cropDisplayNames = {
    wheat: { hi: "गेहूं (Wheat)", en: "Wheat" },
    rice: { hi: "धान (Rice)", en: "Rice" },
    sugarcane: { hi: "गन्ना (Sugarcane)", en: "Sugarcane" },
    cotton: { hi: "कपास (Cotton)", en: "Cotton" }
  };
  const cropName = cropDisplayNames[cropCode] ? cropDisplayNames[cropCode][appState.currentLanguage] : cropCode.toUpperCase();
  document.getElementById('rec-crop-title').innerText = cropName;
  document.getElementById('rec-growth-stage').innerText = translateToken(growthStage);
  document.getElementById('rec-suitability-score').innerText = `${calc.suitability}%`;
  
  // Weather Alerts Mockup
  const weatherWarningBox = document.getElementById('rec-weather-warning-box');
  const activeWeather = appState.forcedWeather || 'default';
  
  if (activeWeather === 'rain') {
    weatherWarningBox.className = 'weather-alert-card inline amber';
    weatherWarningBox.innerHTML = `
      <div class="weather-advisory-alert amber">
        <i class="fa-solid fa-cloud-showers-heavy"></i>
        <span>${appState.currentLanguage === 'hi' ? "चेतावनी: भारी बारिश की संभावना है। यूरिया या खाद का छिड़काव स्थगित करें।" : "WEATHER WARNING: Heavy rainfall expected. Postpone granular urea or fertilizer application to avoid leaching."}</span>
      </div>
    `;
  } else if (activeWeather === 'wind') {
    weatherWarningBox.className = 'weather-alert-card inline amber';
    weatherWarningBox.innerHTML = `
      <div class="weather-advisory-alert amber">
        <i class="fa-solid fa-wind"></i>
        <span>${appState.currentLanguage === 'hi' ? "चेतावनी: तेज़ हवा चल रही है। पत्तेदार (Foliar) छिड़काव न करें। दानेदार खाद का उपयोग करें।" : "WEATHER WARNING: High wind speeds. Do not apply powder or foliar spray. Use granular deep placement."}</span>
      </div>
    `;
  } else if (activeWeather === 'drought') {
    weatherWarningBox.className = 'weather-alert-card inline amber';
    weatherWarningBox.innerHTML = `
      <div class="weather-advisory-alert amber">
        <i class="fa-solid fa-temperature-high"></i>
        <span>${appState.currentLanguage === 'hi' ? "चेतावनी: सूखा या तीव्र गर्मी। यूरिया डालने से 24 घंटे पहले हल्की सिंचाई आवश्यक है।" : "WEATHER WARNING: Drought or extreme heat. Pre-irrigate 24 hours prior to urea application to prevent nitrogen loss."}</span>
      </div>
    `;
  } else {
    weatherWarningBox.className = 'weather-alert-card inline green';
    weatherWarningBox.innerHTML = `
      <div class="weather-advisory-alert green">
        <i class="fa-solid fa-circle-check"></i>
        <span>${appState.currentLanguage === 'hi' ? "मौसम अनुकूल: मौसम साफ़ है। यूरिया और उर्वरक अनुप्रयोग के लिए उत्तम समय।" : "WEATHER SAFE: Calm, clear conditions. Excellent timing for granular or foliar fertilizer application."}</span>
      </div>
    `;
  }

  // 1. Overview Tab Render
  const cardContainer = document.getElementById('fertilizer-cards-container');
  cardContainer.innerHTML = '';
  calc.recList.forEach(rec => {
    const card = document.createElement('div');
    card.className = 'fertilizer-card animate-slide-in';
    card.innerHTML = `
      <div class="fertilizer-card-header">
        <h4>${rec.name}</h4>
        <span class="qty-badge">${rec.qty}</span>
      </div>
      <div class="fertilizer-card-body">
        <div class="fertilizer-detail-row">
          <span class="lbl">${appState.currentLanguage === 'hi' ? "प्रयोग करने की विधि:" : "Application Method:"}</span>
          <span class="val">${rec.method}</span>
        </div>
        <div class="fertilizer-detail-row">
          <span class="lbl">${appState.currentLanguage === 'hi' ? "अनुमानित मूल्य:" : "Estimated Price:"}</span>
          <span class="val text-green">${rec.cost}</span>
        </div>
        <div class="fertilizer-rationale">
          <i class="fa-solid fa-lightbulb"></i> ${rec.rationale}
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });
  
  document.getElementById('rec-cost-total').innerText = `₹ ${calc.totalCost.toLocaleString('en-IN')}`;
  document.getElementById('rec-profit-estimate').innerText = `+ ₹ ${calc.profitVal.toLocaleString('en-IN')} / ${translateToken('acre')}`;
  
  // Custom irrigation tips based on soil type
  const irrigationTips = {
    sandy: appState.currentLanguage === 'hi' ? "रेतीली मिट्टी के लिए फव्वारा (Sprinkler) या ड्रिप सिंचाई की सिफारिश की जाती है। पानी कम मात्रा में बार-बार दें।" : "Sandy soil has low water retention. Drip irrigation or light, frequent sprinkler cycles are required to avoid leaching.",
    clay: appState.currentLanguage === 'hi' ? "चिकनी मिट्टी जलभराव की ओर ले जाती है। सतह जल निकास की उचित व्यवस्था रखें और बहुत हल्की सिंचाई करें।" : "Clay soil traps water easily. Ensure raised-bed surface drainage. Maintain long watering intervals to prevent anaerobic root rot.",
    loamy: appState.currentLanguage === 'hi' ? "दोमट मिट्टी के लिए ड्रिप सिंचाई सर्वोत्तम है। यूरिया डालने के २४ घंटे बाद हल्की सतह सिंचाई दें।" : "Optimal loamy matrix. Apply drip fertigation. Supply light surface watering 24 hours post-urea broadcasting to assist root dispersion."
  };
  document.getElementById('rec-irrigation-suggestion').innerText = irrigationTips[profile.soilType] || irrigationTips['loamy'];

  // Render Visual Comparison Chart
  drawCostComparisonChart(calc.totalCost, profile.landArea);

  // Setup WhatsApp share button
  document.getElementById('btn-whatsapp-share').onclick = () => {
    shareRecommendationToWhatsApp(cropCode, growthStage, calc);
  };

  // 2. Planner Tab Render
  renderPlannerTimeline(cropCode, profile);

  // 3. Risk Analysis Tab Render
  renderRiskAnalysis(calc.targetNPK, profile);
}

// 10. TIMELINE PLANNER SCHEDULE GENERATOR
function renderPlannerTimeline(cropCode, profile) {
  const container = document.getElementById('timeline-planner-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const schedules = {
    wheat: [
      { stage: "Sowing", time: "Day 0", fert: "DAP / NPK 12:32:16", qty: `${Math.round(25 * profile.landArea)} Kg` },
      { stage: "Crown Root Initiation", time: "Day 21-25", fert: "Neem Coated Urea (Granular)", qty: `${Math.round(40 * profile.landArea)} Kg` },
      { stage: "Tillering / Active Growth", time: "Day 40-45", fert: "Liquid Nano Urea (Spray)", qty: `${Math.ceil(profile.landArea)} Bottle(s)` },
      { stage: "Flowering Stage", time: "Day 70-75", fert: "Muriate of Potash (MOP)", qty: `${Math.round(15 * profile.landArea)} Kg` }
    ],
    rice: [
      { stage: "Nursery / Sowing", time: "Day 0", fert: "DAP / Zinc Sulphate", qty: `${Math.round(20 * profile.landArea)} Kg` },
      { stage: "Early Tillering Stage", time: "Day 25-30", fert: "Neem Coated Urea (Granular)", qty: `${Math.round(45 * profile.landArea)} Kg` },
      { stage: "Panicle Initiation", time: "Day 50-55", fert: "Liquid Nano Urea + MOP", qty: `${Math.ceil(profile.landArea)} Bottle + ${Math.round(20 * profile.landArea)} Kg` },
      { stage: "Heading Stage", time: "Day 75-80", fert: "Trace Elements Foliar Mix", qty: "500 ml / Acre" }
    ],
    sugarcane: [
      { stage: "Planting / Sowing", time: "Day 0", fert: "DAP + Organic Compost", qty: `${Math.round(50 * profile.landArea)} Kg` },
      { stage: "Tillering Phase", time: "Day 60", fert: "Neem Coated Urea", qty: `${Math.round(75 * profile.landArea)} Kg` },
      { stage: "Grand Growth Stage", time: "Day 120-150", fert: "Urea + MOP", qty: `${Math.round(50 * profile.landArea)} Kg + ${Math.round(30 * profile.landArea)} Kg` },
      { stage: "Maturity", time: "Day 300", fert: "No fertilizers needed", qty: "0" }
    ],
    cotton: [
      { stage: "Sowing", time: "Day 0", fert: "NPK 15:15:15", qty: `${Math.round(30 * profile.landArea)} Kg` },
      { stage: "Square Formation", time: "Day 45", fert: "Neem Coated Urea", qty: `${Math.round(40 * profile.landArea)} Kg` },
      { stage: "Boll Development", time: "Day 75-90", fert: "Nano Urea Spray + MOP", qty: `${Math.ceil(profile.landArea)} Bottle + ${Math.round(15 * profile.landArea)} Kg` }
    ]
  };
  
  const activeSched = schedules[cropCode] || schedules['rice'];
  
  activeSched.forEach(node => {
    const div = document.createElement('div');
    div.className = 'timeline-node animate-fade-in';
    div.innerHTML = `
      <div class="timeline-node-card">
        <h4>${node.stage}</h4>
        <div class="detail"><strong>${appState.currentLanguage === 'hi' ? "उर्वरक:" : "Fertilizer:"}</strong> ${node.fert}</div>
        <div class="detail"><strong>${appState.currentLanguage === 'hi' ? "मात्रा:" : "Quantity:"}</strong> ${node.qty}</div>
        <div class="timing"><i class="fa-regular fa-clock"></i> ${node.time}</div>
      </div>
    `;
    container.appendChild(div);
  });
}

// 11. RISK ANALYSIS VISUAL METRICS GAUGE
function renderRiskAnalysis(targetNPK, profile) {
  const [n, p, k] = targetNPK;
  
  // Calculate relative saturation rates based on ideal baseline
  const maxN = 120 * profile.landArea;
  const maxP = 80 * profile.landArea;
  const maxK = 60 * profile.landArea;
  
  const pctN = Math.min(100, Math.round((n / maxN) * 100));
  const pctP = Math.min(100, Math.round((p / maxP) * 100));
  const pctK = Math.min(100, Math.round((k / maxK) * 100));
  
  const barN = document.getElementById('risk-bar-n');
  const barP = document.getElementById('risk-bar-p');
  const barK = document.getElementById('risk-bar-k');
  
  barN.style.width = `${pctN}%`;
  barP.style.width = `${pctP}%`;
  barK.style.width = `${pctK}%`;
  
  // Color code status bars based on warning values
  // Under 35%: Blue (low dosage risk), 35-75%: Green (Safe), Over 75%: Red (Overuse Risk)
  updateBarColorClass(barN, pctN, 'risk-lbl-n', 'Nitrogen (N)');
  updateBarColorClass(barP, pctP, 'risk-lbl-p', 'Phosphorus (P)');
  updateBarColorClass(barK, pctK, 'risk-lbl-k', 'Potassium (K)');
}

function updateBarColorClass(element, percentage, labelId, nutrientName) {
  element.className = 'progress-bar';
  let statusText = '';
  
  if (percentage < 35) {
    element.classList.add('blue');
    statusText = appState.currentLanguage === 'hi' ? 'कम खुराक (Low)' : 'Underuse Risk';
  } else if (percentage >= 35 && percentage <= 75) {
    element.classList.add('green');
    statusText = appState.currentLanguage === 'hi' ? 'इष्टतम (Safe)' : 'Optimal Saturation';
  } else {
    element.classList.add('red');
    statusText = appState.currentLanguage === 'hi' ? 'अत्यधिक उपयोग (Burn Risk!)' : 'High Overuse Risk';
  }
  
  document.getElementById(labelId).innerText = `${percentage}% (${statusText})`;
}

// 12. CONFIGURATION CONTROLLERS (SAVE SETTINGS)
function saveSettings() {
  const name = document.getElementById('sett-name').value;
  const soil = document.getElementById('sett-soil').value;
  const area = parseFloat(document.getElementById('sett-area').value);
  const unit = document.getElementById('sett-unit').value;
  const budget = document.getElementById('sett-budget').value;
  const geminiKey = document.getElementById('sett-gemini-key').value.trim();
  
  if (!name) {
    alert(appState.currentLanguage === 'hi' ? "कृपया अपना नाम दर्ज करें" : "Please enter your name");
    return;
  }
  if (isNaN(area) || area <= 0) {
    alert(appState.currentLanguage === 'hi' ? "कृपया वैध क्षेत्रफल दर्ज करें" : "Please enter a valid numeric land area");
    return;
  }
  
  appState.userProfile = {
    name,
    soilType: soil,
    landArea: area,
    areaUnit: unit,
    budgetCategory: budget,
    location: appState.userProfile.location
  };
  
  appState.geminiApiKey = geminiKey;
  
  localStorage.setItem(LS_PROFILE_KEY, JSON.stringify(appState.userProfile));
  localStorage.setItem(LS_GEMINI_KEY, geminiKey);
  
  updateApiKeyStatusBadge();
  updateChatModeSelectorVisibility();
  
  // Show save confirmation
  alert(appState.currentLanguage === 'hi' ? "विन्यास सहेज लिया गया है!" : "Configuration settings saved successfully!");
  goToScreen('screen-dashboard');
}

// Tab navigation on recommendations dashboard
document.querySelectorAll('.tab-item').forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active state from all sibling tabs
    document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    
    tab.classList.add('active');
    const paneId = tab.getAttribute('data-target');
    document.getElementById(paneId).classList.add('active');
  });
});

// Setup event bindings on boot
window.addEventListener('DOMContentLoaded', () => {
  initApp();
});

// ==========================================================================
// NEW ENHANCEMENTS AND UTILITIES (WEATHER SIMULATOR, CHART, WHATSAPP SHARE)
// ==========================================================================

function updateDashboardWeatherBanner(weatherState) {
  const advisoryEl = document.getElementById('dash-weather-advisory');
  const descEl = document.getElementById('dash-weather-desc');
  const tempEl = document.getElementById('dash-temp');
  const bannerEl = document.querySelector('.weather-advisory-alert');
  
  if (weatherState === 'rain') {
    tempEl.innerText = "26°C";
    descEl.innerText = appState.currentLanguage === 'hi' ? "भारी बारिश" : "Heavy Rain";
    advisoryEl.innerText = appState.currentLanguage === 'hi' ? 
      "भारी बारिश की चेतावनी! खाद डालने का काम रोक दें, पोषक तत्व पानी में बह जाएंगे।" : 
      "Heavy rain expected! Delay fertilizer application as nutrients will leach out.";
    bannerEl.className = 'weather-advisory-alert amber';
  } else if (weatherState === 'wind') {
    tempEl.innerText = "29°C";
    descEl.innerText = appState.currentLanguage === 'hi' ? "तेज़ हवा" : "High Wind";
    advisoryEl.innerText = appState.currentLanguage === 'hi' ? 
      "तेज़ हवा! पाउडर या लिक्विड नैनो यूरिया का छिड़काव न करें, यह बह जाएगा।" : 
      "High wind speeds! Do not apply powder or foliar Nano Urea spray as it will drift.";
    bannerEl.className = 'weather-advisory-alert amber';
  } else if (weatherState === 'drought') {
    tempEl.innerText = "41°C";
    descEl.innerText = appState.currentLanguage === 'hi' ? "लू / सूखा" : "Drought Alert";
    advisoryEl.innerText = appState.currentLanguage === 'hi' ? 
      "सूखा/तीव्र गर्मी! मिट्टी बहुत सूखी है। यूरिया डालने के बाद हल्की सिंचाई तुरंत करें।" : 
      "Extreme heat! Soil is dry. Irrigate immediately after applying granular urea.";
    bannerEl.className = 'weather-advisory-alert amber';
  } else {
    tempEl.innerText = "32°C";
    descEl.innerText = appState.currentLanguage === 'hi' ? "मौसम साफ़" : "Clear Sky";
    advisoryEl.innerText = TRANSLATIONS[appState.currentLanguage].weather_safe_advisory;
    bannerEl.className = 'weather-advisory-alert green';
  }
}

function drawCostComparisonChart(optimizedCost, landArea) {
  const svg = document.getElementById('cost-comparison-svg');
  if (!svg) return;
  
  const traditionalCost = Math.round(1350 * landArea * 1.6);
  const maxCost = Math.max(traditionalCost, optimizedCost) || 1000;
  
  // Calculate heights (max SVG height is 90)
  const hTrad = Math.round((traditionalCost / maxCost) * 80);
  const hOpt = Math.round((optimizedCost / maxCost) * 80);
  
  const yTrad = 90 - hTrad;
  const yOpt = 90 - hOpt;
  
  svg.innerHTML = `
    <!-- X/Y Axes -->
    <line x1="30" y1="90" x2="270" y2="90" stroke="#ccd6dd" stroke-width="1"/>
    <line x1="30" y1="10" x2="30" y2="90" stroke="#ccd6dd" stroke-width="1"/>
    
    <!-- Y-Axis Labels -->
    <text x="5" y="15" font-size="8" fill="#657786">Max</text>
    <text x="5" y="93" font-size="8" fill="#657786">₹0</text>
    
    <!-- Bar 1: Traditional -->
    <rect x="60" y="${yTrad}" width="40" height="${hTrad}" fill="#aab8c2" rx="4" class="bar-rect-1"/>
    <text x="80" y="${yTrad - 5}" font-size="9" font-weight="700" text-anchor="middle">₹${traditionalCost}</text>
    <text x="80" y="105" font-size="8" font-weight="600" text-anchor="middle">${appState.currentLanguage === 'hi' ? 'पारंपरिक' : 'Traditional'}</text>
    
    <!-- Bar 2: AgriSmart -->
    <rect x="180" y="${yOpt}" width="40" height="${hOpt}" fill="#1b8a4a" rx="4" class="bar-rect-2"/>
    <text x="200" y="${yOpt - 5}" font-size="9" font-weight="700" text-anchor="middle" fill="#1b8a4a">₹${optimizedCost}</text>
    <text x="200" y="105" font-size="8" font-weight="600" text-anchor="middle" fill="#1b8a4a">${appState.currentLanguage === 'hi' ? 'एग्रीस्मार्ट' : 'AgriSmart'}</text>
  `;
}

function shareRecommendationToWhatsApp(cropCode, growthStage, calc) {
  const cropDisplayNames = {
    wheat: { hi: "गेहूं (Wheat)", en: "Wheat" },
    rice: { hi: "धान (Rice)", en: "Rice" },
    sugarcane: { hi: "गन्ना (Sugarcane)", en: "Sugarcane" },
    cotton: { hi: "कपास (Cotton)", en: "Cotton" }
  };
  const cropName = cropDisplayNames[cropCode] ? cropDisplayNames[cropCode][appState.currentLanguage] : cropCode;
  
  let msg = '';
  if (appState.currentLanguage === 'hi') {
    msg += `*🌱 कृषिस्मार्ट एआई (AgriSmart AI) - उर्वरक प्रिस्क्रिप्शन* \n\n`;
    msg += `🌾 फसल: *${cropName}* \n`;
    msg += `📅 चरण: *${translateToken(growthStage)}* \n`;
    msg += `📐 क्षेत्र: *${appState.userProfile.landArea} ${translateToken(appState.userProfile.areaUnit)}* \n`;
    msg += `⛰️ मिट्टी: *${translateToken('soil_' + appState.userProfile.soilType)}* \n\n`;
    msg += `*📋 अनुशंसित खाद खुराक:* \n`;
    calc.recList.forEach(rec => {
      msg += `• *${rec.name}*: ${rec.qty} \n  _${rec.method}_ \n`;
    });
    msg += `\n💰 *कुल लागत:* ₹ ${calc.totalCost} \n`;
    msg += `📈 *अनुमानित लाभ वृद्धि:* ${calc.profitVal} / Acre \n\n`;
    msg += `📱 AgriSmart AI - यूरिया और उर्वरक प्रबंधन सलाहकार!`;
  } else {
    msg += `*🌱 AgriSmart AI - Fertilizer Prescription* \n\n`;
    msg += `🌾 Crop: *${cropName}* \n`;
    msg += `📅 Stage: *${translateToken(growthStage)}* \n`;
    msg += `📐 Land: *${appState.userProfile.landArea} ${translateToken(appState.userProfile.areaUnit)}* \n`;
    msg += `⛰️ Soil: *${translateToken('soil_' + appState.userProfile.soilType)}* \n\n`;
    msg += `*📋 Recommended Fertilizer Mix:* \n`;
    calc.recList.forEach(rec => {
      msg += `• *${rec.name}*: ${rec.qty} \n  _${rec.method}_ \n`;
    });
    msg += `\n💰 *Total Investment:* ₹ ${calc.totalCost} \n`;
    msg += `📈 *Profit Increase:* + ₹ ${calc.profitVal} / Acre \n\n`;
    msg += `📱 Smart Urea & Fertilizer Advisory.`;
  }
  
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
}

// ==========================================================================
// OCR SOIL REPORT SCANNER AND MULTILINGUAL SPEECH-TO-TEXT VOICE ASSISTANT
// ==========================================================================

function startOcrScanningSimulation() {
  const modal = document.getElementById('ocr-modal');
  const bar = document.getElementById('ocr-progress-bar');
  const title = document.getElementById('ocr-modal-title');
  
  modal.classList.remove('hidden');
  bar.style.width = '0%';
  title.innerText = appState.currentLanguage === 'hi' ? "रिपोर्ट स्कैन की जा रही है..." : "Scanning Soil Report...";
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    bar.style.width = `${progress}%`;
    
    if (progress === 40) {
      title.innerText = appState.currentLanguage === 'hi' ? "पोषक तत्वों का विश्लेषण..." : "Analyzing soil nutrients...";
    } else if (progress === 80) {
      title.innerText = appState.currentLanguage === 'hi' ? "डेटा वर्गीकृत किया जा रहा है..." : "Extracting N-P-K parameters...";
    } else if (progress >= 100) {
      clearInterval(interval);
      modal.classList.add('hidden');
      
      // Auto-fill mock parameters (Clay soil, 1.5 Acre size, High budget tier)
      appState.userProfile = {
        name: appState.userProfile.name,
        soilType: 'clay',
        landArea: 1.5,
        areaUnit: 'acre',
        budgetCategory: 'high',
        location: appState.userProfile.location
      };
      localStorage.setItem(LS_PROFILE_KEY, JSON.stringify(appState.userProfile));
      
      // Update fields
      document.getElementById('sett-soil').value = 'clay';
      document.getElementById('sett-area').value = 1.5;
      document.getElementById('sett-budget').value = 'high';
      
      alert(appState.currentLanguage === 'hi' ? 
        "मृदा रिपोर्ट सफलतापूर्वक विश्लेषित! \nमिट्टी: चिकनी (Clay) \nक्षेत्रफल: 1.5 एकड़ \nबजट: उच्च \nअनुकूलित उर्वरक योजना लोड हो रही है..." :
        "Soil Report successfully parsed! \nSoil Type: Clay \nArea: 1.5 Acres \nBudget: High \nLoading optimized recipe...");
        
      showRecommendations('rice', 'vegetative');
    }
  }, 300);
}

let voiceRecognition = null;
let isRecordingVoice = false;

function toggleVoiceRecognition() {
  const btnVoice = document.getElementById('btn-voice-input');
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert(appState.currentLanguage === 'hi' ? 
      "क्षमा करें, आपका ब्राउज़र स्पीच रिकग्निशन का समर्थन नहीं करता है।" : 
      "Sorry, your browser does not support Web Speech Recognition.");
    return;
  }
  
  if (!isRecordingVoice) {
    voiceRecognition = new SpeechRecognition();
    voiceRecognition.continuous = false;
    voiceRecognition.interimResults = false;
    
    const langMap = { hi: 'hi-IN', en: 'en-US', ur: 'ur-PK', mr: 'mr-IN' };
    voiceRecognition.lang = langMap[appState.currentLanguage] || 'en-US';
    
    voiceRecognition.onstart = () => {
      isRecordingVoice = true;
      btnVoice.style.color = '#ff4d4d';
      btnVoice.innerHTML = `<i class="fa-solid fa-microphone-lines animate-pulse" style="animation: pulse 1s infinite;"></i>`;
      appendChatBubble("bot", appState.currentLanguage === 'hi' ? "सुन रहा हूँ... बोलें।" : "Listening... speak now.");
    };
    
    voiceRecognition.onerror = (e) => {
      console.error("Speech recognition error:", e);
      stopVoiceRecording();
    };
    
    voiceRecognition.onend = () => {
      stopVoiceRecording();
    };
    
    voiceRecognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("[Voice Assistant] Captured transcript:", transcript);
      processVoiceTranscript(transcript);
    };
    
    voiceRecognition.start();
  } else {
    stopVoiceRecording();
  }
}

function stopVoiceRecording() {
  const btnVoice = document.getElementById('btn-voice-input');
  isRecordingVoice = false;
  if (voiceRecognition) {
    voiceRecognition.stop();
  }
  btnVoice.style.color = 'var(--primary-green)';
  btnVoice.innerHTML = `<i class="fa-solid fa-microphone"></i>`;
}

function processVoiceTranscript(text) {
  if (appState.chatMode === 'live') {
    const inputEl = document.getElementById('live-chat-input');
    if (inputEl) {
      inputEl.value = text;
      inputEl.focus();
    }
    return;
  }

  const stepIdx = appState.chatSession.step;
  if (stepIdx >= CHAT_FLOW_STEPS.length) return;
  
  const step = CHAT_FLOW_STEPS[stepIdx];
  appendChatBubble("user", `🎙️ "${text}"`);
  
  let resolvedVal = null;
  let displayVal = text;
  
  if (step.key === 'location') {
    const states = ["uttar pradesh", "bihar", "punjab", "maharashtra", "madhya pradesh", "उत्तर प्रदेश", "बिहार", "पंजाब", "महाराष्ट्र", "मध्य प्रदेश"];
    states.forEach(s => {
      if (text.includes(s)) {
        resolvedVal = s;
      }
    });
    if (!resolvedVal) resolvedVal = "Uttar Pradesh";
  } else if (step.key === 'soil') {
    const soilMap = {
      'लोमी': 'loamy', 'दोमट': 'loamy', 'loamy': 'loamy',
      'सैंडी': 'sandy', 'रेतीली': 'sandy', 'sandy': 'sandy',
      'क्ले': 'clay', 'चिकनी': 'clay', 'clay': 'clay',
      'काली': 'black', 'black': 'black',
      'लाल': 'red', 'red': 'red',
      'जलोढ़': 'alluvial', 'alluvial': 'alluvial'
    };
    Object.keys(soilMap).forEach(key => {
      if (text.includes(key)) {
        resolvedVal = soilMap[key];
      }
    });
    if (!resolvedVal) resolvedVal = 'loamy';
  } else if (step.key === 'crop') {
    const cropMap = {
      'गेहूं': 'wheat', 'गेहूँ': 'wheat', 'wheat': 'wheat',
      'धान': 'rice', 'चावल': 'rice', 'rice': 'rice',
      'गन्ना': 'sugarcane', 'ऊस': 'sugarcane', 'sugarcane': 'sugarcane',
      'कपास': 'cotton', 'कापूस': 'cotton', 'cotton': 'cotton'
    };
    Object.keys(cropMap).forEach(key => {
      if (text.includes(key)) {
        resolvedVal = cropMap[key];
      }
    });
    if (!resolvedVal) resolvedVal = 'rice';
  } else if (step.key === 'stage') {
    const stageMap = {
      'बुवाई': 'sowing', 'पेरणी': 'sowing', 'sowing': 'sowing',
      'वृद्धि': 'vegetative', 'शाकीय': 'vegetative', 'vegetative': 'vegetative',
      'फूल': 'flowering', 'फुलणे': 'flowering', 'flowering': 'flowering',
      'परिपक्व': 'maturity', 'maturity': 'maturity'
    };
    Object.keys(stageMap).forEach(key => {
      if (text.includes(key)) {
        resolvedVal = stageMap[key];
      }
    });
    if (!resolvedVal) resolvedVal = 'vegetative';
  } else if (step.key === 'area') {
    const matches = text.match(/\d+(\.\d+)?/);
    if (matches) {
      resolvedVal = parseFloat(matches[0]);
    } else {
      const wordNums = { 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'एक': 1, 'दो': 2, 'ती': 3, 'चार': 4, 'पाच': 5 };
      Object.keys(wordNums).forEach(w => {
        if (text.includes(w)) {
          resolvedVal = wordNums[w];
        }
      });
    }
    if (!resolvedVal) resolvedVal = 2.5;
    displayVal = `${resolvedVal} Acres`;
  } else if (step.key === 'budget') {
    const budgetMap = {
      'कम': 'low', 'low': 'low',
      'मध्यम': 'medium', 'medium': 'medium',
      'उच्च': 'high', 'ज्यादा': 'high', 'high': 'high'
    };
    Object.keys(budgetMap).forEach(key => {
      if (text.includes(key)) {
        resolvedVal = budgetMap[key];
      }
    });
    if (!resolvedVal) resolvedVal = 'medium';
  }
  
  appState.chatSession.answers[step.key] = resolvedVal;
  appState.chatSession.step++;
  
  setTimeout(() => {
    runChatStep();
  }, 500);
}

// ==========================================================================
// GEMINI LIVE CHATBOT AND OPEN-METEO WEATHER API INTEGRATION
// ==========================================================================

function updateApiKeyStatusBadge() {
  const badge = document.getElementById('gemini-key-status');
  if (!badge) return;
  
  if (appState.geminiApiKey) {
    badge.className = 'key-status-badge valid';
    badge.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>API Key Configured</span>`;
  } else {
    badge.className = 'key-status-badge invalid';
    badge.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <span>No API Key Saved</span>`;
  }
}

function updateChatModeSelectorVisibility() {
  const bar = document.getElementById('chat-mode-selection');
  if (!bar) return;
  
  if (appState.geminiApiKey) {
    bar.classList.remove('hidden');
  } else {
    bar.classList.add('hidden');
    appState.chatMode = 'wizard';
  }
}

function switchChatMode(mode) {
  appState.chatMode = mode;
  localStorage.setItem(LS_CHAT_MODE_KEY, mode);
  
  const btnWizard = document.getElementById('btn-mode-wizard');
  const btnLive = document.getElementById('btn-mode-live');
  const wizardPanel = document.getElementById('chat-input-panel');
  const livePanel = document.getElementById('live-chat-input-panel');
  
  if (mode === 'wizard') {
    if (btnWizard) btnWizard.classList.add('active');
    if (btnLive) btnLive.classList.remove('active');
    if (wizardPanel) wizardPanel.classList.remove('hidden');
    if (livePanel) livePanel.classList.add('hidden');
    
    // Reset wizard
    startChatbotWizard();
  } else {
    if (btnWizard) btnWizard.classList.remove('active');
    if (btnLive) btnLive.classList.add('active');
    if (wizardPanel) wizardPanel.classList.add('hidden');
    if (livePanel) livePanel.classList.remove('hidden');
    
    // Start Live AI conversation
    startLiveChatSession();

    // Bind Enter key listener
    const liveInput = document.getElementById('live-chat-input');
    if (liveInput && !liveInput.dataset.bound) {
      liveInput.dataset.bound = "true";
      liveInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          sendLiveChatMessage();
        }
      });
    }
  }
  
  // Style pills
  if (btnWizard) {
    btnWizard.style.background = mode === 'wizard' ? 'var(--primary-green)' : 'none';
    btnWizard.style.color = mode === 'wizard' ? 'var(--neutral-white)' : 'var(--primary-green)';
  }
  if (btnLive) {
    btnLive.style.background = mode === 'live' ? 'var(--primary-green)' : 'none';
    btnLive.style.color = mode === 'live' ? 'var(--neutral-white)' : 'var(--primary-green)';
  }
}

function startChatbotWizard() {
  const chatContainer = document.getElementById('chat-messages-container');
  chatContainer.innerHTML = '';
  appState.chatSession.step = 0;
  appState.chatSession.answers = {};
  
  appendChatBubble("bot", TRANSLATIONS[appState.currentLanguage].chat_intro);
  setTimeout(() => {
    runChatStep();
  }, 400);
}

function startLiveChatSession() {
  const chatContainer = document.getElementById('chat-messages-container');
  chatContainer.innerHTML = '';
  appState.liveChatHistory = [];
  
  const intros = {
    hi: "नमस्ते! मैं आपका लाइव एआई कृषि वैज्ञानिक (AI Agronomist) हूँ। आज मैं आपकी खेती और उर्वरक प्रबंधन में किस प्रकार सहायता कर सकता हूँ?",
    en: "Hello! I am your Live AI Agronomist assistant. How can I help you with your crop management and fertilizer planning today?",
    ur: "ہیلو! میں آپ کا لائیو AI زرعی ماہر ہوں۔ آج میں آپ کی کھاد کے انتظام میں کس طرح مدد کر سکتا ہوں؟",
    mr: "नमस्कार! मी तुमचा लाईव्ह एआय कृषी सल्लागार आहे. आज मी तुम्हाला पीक नियोजन आणि खत व्यवस्थापनामध्ये कशी मदत करू?"
  };
  
  appendChatBubble("bot", intros[appState.currentLanguage] || intros.en);
}

async function sendLiveChatMessage() {
  const inputEl = document.getElementById('live-chat-input');
  if (!inputEl) return;
  
  const text = inputEl.value.trim();
  if (!text) return;
  
  inputEl.value = '';
  appendChatBubble("user", text);
  
  // Typing indicator
  const chatContainer = document.getElementById('chat-messages-container');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'msg-bubble bot typing-indicator';
  typingIndicator.innerText = appState.currentLanguage === 'hi' ? "विचार कर रहा हूँ..." : "Thinking...";
  chatContainer.appendChild(typingIndicator);
  chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
  
  const apiKey = appState.geminiApiKey;
  if (!apiKey) {
    typingIndicator.remove();
    appendChatBubble("bot", "Error: Gemini API Key is missing. Please configure it in settings.");
    return;
  }
  
  // Format message payload
  const formattedHistory = appState.liveChatHistory.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }]
  }));
  
  const systemInstruction = "You are AgriSmart AI, a professional smart fertilizer and urea recommendation assistant. You help farmers optimize fertilizer application, calculate NPK dosage, determine timing for urea application, and provide weather-based advice. Respond in the user's chosen language (Hindi, Marathi, English, or Urdu) in a clear, brief, and supportive manner. Use bullet points and simple terms suitable for a farmer. If they ask about local NPK computations, note that we recommend using Neem Coated Urea and Nano Urea to cut costs.";
  
  const payload = {
    contents: [...formattedHistory, { role: "user", parts: [{ text: text }] }],
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    }
  };
  
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    typingIndicator.remove();
    
    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.error?.message || `HTTP ${res.status}`);
    }
    
    const data = await res.json();
    const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply generated. Please try again.";
    
    // Save to history
    appState.liveChatHistory.push({ role: 'user', text: text });
    appState.liveChatHistory.push({ role: 'bot', text: botReply });
    
    appendChatBubble("bot", botReply);
  } catch (err) {
    if (typingIndicator) typingIndicator.remove();
    console.error("Gemini API Error:", err);
    appendChatBubble("bot", `Failed to connect to AI: ${err.message}. Please check your API Key and network connection.`);
  }
}

async function triggerGpsWeatherSync() {
  const btn = document.getElementById('btn-gps-sync');
  const locText = document.getElementById('dash-location-text');
  const tempEl = document.getElementById('dash-temp');
  const descEl = document.getElementById('dash-weather-desc');
  const advisoryEl = document.getElementById('dash-weather-advisory');
  const badge = document.getElementById('weather-status-badge');
  
  if (!navigator.geolocation) {
    alert(appState.currentLanguage === 'hi' ? "आपका ब्राउज़र स्थान का समर्थन नहीं करता है।" : "Geolocation is not supported by your browser.");
    return;
  }
  
  if (btn) {
    btn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i>`;
    btn.disabled = true;
  }
  locText.innerText = appState.currentLanguage === 'hi' ? "स्थान खोजा जा रहा है..." : "Locating GPS...";
  
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    
    try {
      // 1. Fetch reverse geocoding from free BigDataCloud API (no key needed)
      let districtName = "Local Region";
      try {
        const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=${appState.currentLanguage}`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData) {
            districtName = geoData.locality || geoData.city || geoData.principalSubdivision || "Local Region";
            if (geoData.principalSubdivision) {
              districtName += `, ${geoData.principalSubdivision}`;
            }
          }
        }
      } catch (e) {
        console.warn("Reverse geocode failed, using lat/lon label:", e);
        districtName = `${lat.toFixed(2)}N, ${lon.toFixed(2)}E`;
      }
      
      locText.innerText = districtName;
      
      // 2. Fetch weather forecast from Open-Meteo
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m`;
      const response = await fetch(weatherUrl);
      if (!response.ok) throw new Error("Weather service offline");
      
      const wData = await response.json();
      const current = wData.current;
      const temp = Math.round(current.temperature_2m);
      const rain = current.precipitation; // mm
      const wind = current.wind_speed_10m; // km/h
      
      tempEl.innerText = `${temp}°C`;
      
      let weatherState = 'default';
      if (rain > 0.2) {
        weatherState = 'rain';
      } else if (wind > 15) {
        weatherState = 'wind';
      } else if (temp > 38) {
        weatherState = 'drought';
      }
      
      appState.forcedWeather = weatherState;
      appState.isLiveWeather = true;
      
      if (badge) {
        badge.innerText = 'LIVE GPS';
        badge.style.backgroundColor = '#1b8a4a';
      }
      
      // Reset active simulator pills
      document.querySelectorAll('.sim-btn').forEach(b => b.classList.remove('active'));
      
      updateDashboardWeatherBanner(weatherState);
      
      // Update advisor text based on live parameters
      if (weatherState === 'rain') {
        descEl.innerText = appState.currentLanguage === 'hi' ? `बारिश (${rain}mm)` : `Rain (${rain} mm)`;
      } else if (weatherState === 'wind') {
        descEl.innerText = appState.currentLanguage === 'hi' ? `तेज़ हवा (${wind}km/h)` : `Wind (${wind} km/h)`;
      } else if (weatherState === 'drought') {
        descEl.innerText = appState.currentLanguage === 'hi' ? `गर्मी (${temp}°C)` : `Heat (${temp}°C)`;
      } else {
        descEl.innerText = appState.currentLanguage === 'hi' ? "मौसम साफ़" : "Clear Sky";
      }
      
    } catch (err) {
      console.error("GPS Weather Sync Error:", err);
      locText.innerText = "Lucknow, UP";
      alert(appState.currentLanguage === 'hi' ? "मौसम डेटा लोड करने में विफल।" : "Failed to load live weather data.");
    } finally {
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i>`;
        btn.disabled = false;
      }
    }
  }, (err) => {
    console.warn("GPS Access Denied:", err);
    locText.innerText = "Lucknow, UP";
    alert(appState.currentLanguage === 'hi' ? "स्थान सेवा की अनुमति अस्वीकृत!" : "GPS location access denied!");
    if (btn) {
      btn.innerHTML = `<i class="fa-solid fa-location-crosshairs"></i>`;
      btn.disabled = false;
    }
  });
}
