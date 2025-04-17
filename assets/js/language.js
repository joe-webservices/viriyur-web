const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.gallery": "Gallery",
    "nav.events": "Events",
    "nav.contact": "Contact",

    // Home Page
    "home.welcome": "Welcome to Viriyur",
    "home.subtitle": "A beautiful village in Tamil Nadu, India",
    "home.history": "Rich History",
    "home.history_desc":
      "Discover the ancient heritage and traditions of our village",
    "home.gallery": "Photo Gallery",
    "home.gallery_desc": "Explore beautiful moments captured in our village",
    "home.events": "Events",
    "home.events_desc": "Stay updated with upcoming festivals and celebrations",
    "home.find_us": "Find Us",
    "home.instagram": "Follow Us on Instagram",
    "home.instagram_loading": "Instagram feed loading...",

    // Gallery Page
    "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Explore the beauty of Viriyur through our photos",
    "gallery.landscape1": "Village Sunset",
    "gallery.landscape1_desc": "Beautiful sunset over the village fields",
    "gallery.landscape2": "Village Temple",
    "gallery.landscape2_desc": "Ancient temple architecture",
    "gallery.culture1": "Traditional Dance",
    "gallery.culture1_desc": "Village cultural performance",
    "gallery.culture2": "Traditional Crafts",
    "gallery.culture2_desc": "Local artisans at work",
    "gallery.event1": "Festival Celebration",
    "gallery.event1_desc": "Annual village festival",
    "gallery.event2": "Harvest Festival",
    "gallery.event2_desc": "Celebrating the harvest season",

    // Footer
    "footer.about": "About Viriyur",
    "footer.about_desc":
      "A beautiful village preserving its rich culture and traditions in Tamil Nadu, India.",
    "footer.quick_links": "Quick Links",
    "footer.connect": "Connect With Us",
    "footer.copyright": "© 2024 Viriyur Village. All rights reserved.",
  },
  ta: {
    // Navigation
    "nav.home": "முகப்பு",
    "nav.about": "பற்றி",
    "nav.gallery": "படக்காட்சி",
    "nav.events": "நிகழ்வுகள்",
    "nav.contact": "தொடர்பு",

    // Home Page
    "home.welcome": "விரியூர் கிராமத்திற்கு வரவேற்கிறோம்",
    "home.subtitle": "எங்கள் பாரம்பரியம் மற்றும் கலாச்சாரத்தை ஆராயுங்கள்",
    "home.history": "வரலாறு",
    "home.history_desc":
      "விரியூரின் பணக்கார வரலாறு மற்றும் பாரம்பரியத்தைக் கண்டறியவும்",
    "home.gallery": "படக்காட்சி",
    "home.gallery_desc": "எங்கள் கிராமத்தின் அழகான காட்சிகளைப் பாருங்கள்",
    "home.events": "நிகழ்வுகள்",
    "home.events_desc":
      "வரவிருக்கும் நிகழ்வுகள் மற்றும் திருவிழாக்களைப் பற்றி அறிக",
    "home.find_us": "எங்களைக் கண்டறியவும்",
    "home.instagram": "இன்ஸ்டாகிராமில் எங்களைப் பின்தொடரவும்",
    "home.instagram_loading": "இன்ஸ்டாகிராம் ஏற்றுகிறது...",

    // Gallery Page
    "gallery.title": "படக்காட்சி",
    "gallery.subtitle": "விரியூரின் அழகை எங்கள் புகைப்படங்கள் மூலம் ஆராயுங்கள்",
    "gallery.landscape1": "கிராமத்தின் சூரிய அஸ்தமனம்",
    "gallery.landscape1_desc": "கிராமத்தின் வயல்களில் அழகான சூரிய அஸ்தமனம்",
    "gallery.landscape2": "கிராமத்தின் கோவில்",
    "gallery.landscape2_desc": "பழமையான கோவில் கட்டிடக்கலை",
    "gallery.culture1": "பாரம்பரிய நடனம்",
    "gallery.culture1_desc": "கிராமத்தின் கலாச்சார நிகழ்ச்சி",
    "gallery.culture2": "பாரம்பரிய கைவினை",
    "gallery.culture2_desc": "உள்ளூர் கைவினைஞர்கள் வேலையில்",
    "gallery.event1": "திருவிழா கொண்டாட்டம்",
    "gallery.event1_desc": "ஆண்டு கிராம திருவிழா",
    "gallery.event2": "அறுவடை திருவிழா",
    "gallery.event2_desc": "அறுவடை காலத்தை கொண்டாடுதல்",

    // Footer
    "footer.about": "விரியூர் பற்றி",
    "footer.about_desc":
      "விரியூர் ஒரு வரலாற்று முக்கியத்துவம் வாய்ந்த கிராமம், இது தமிழ்நாட்டின் பணக்கார கலாச்சார பாரம்பரியத்தைக் கொண்டுள்ளது.",
    "footer.quick_links": "விரைவு இணைப்புகள்",
    "footer.connect": "இணைக்கவும்",
    "footer.copyright":
      "© 2024 விரியூர் கிராமம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("langBtn");
  const html = document.documentElement;

  // Get saved language preference
  const savedLang = localStorage.getItem("language") || "en";
  html.lang = savedLang;

  // Update button text based on saved language
  langBtn.textContent = savedLang === "en" ? "தமிழ்" : "English";

  // Initialize translations
  updateLanguage(savedLang);

  // Add click event listener to language toggle button
  langBtn.addEventListener("click", function () {
    const currentLang = html.lang;
    const newLang = currentLang === "en" ? "ta" : "en";

    // Update HTML lang attribute
    html.lang = newLang;

    // Update button text
    langBtn.textContent = newLang === "en" ? "தமிழ்" : "English";

    // Save language preference
    localStorage.setItem("language", newLang);

    // Update all translatable content
    updateLanguage(newLang);
  });
});

function updateLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Update the text content
      element.textContent = translations[lang][key];

      // Make the element visible
      element.style.visibility = "visible";
      element.style.opacity = "1";

      // Force a reflow to ensure proper rendering
      element.offsetHeight;
    }
  });
}
