// ========================================
// EASY CONFIGURATION FILE
// Edit your website details here
// ========================================

const SITE_CONFIG = {
    // Company Information
    companyName: "ELHAM SOLUTIONS",
    tagline: "Leading IT Solutions Provider in Saudi Arabia",
    
    // Contact Information
    email: "info@elhamsolutions.sa",
    supportEmail: "support@elhamsolutions.sa",
    phone: "+966 11 234 5678",
    mobile: "+966 50 123 4567",
    whatsapp: "966501234567", // Without + sign
    
    // Address
    address: {
        street: "King Fahd Road, Al Olaya District",
        city: "Riyadh",
        postalCode: "12211",
        country: "Saudi Arabia"
    },
    
    // Working Hours
    workingHours: "Sun - Thu: 9:00 AM - 6:00 PM",
    
    // Social Media Links
    social: {
        linkedin: "https://linkedin.com/company/elhamsolutions",
        twitter: "https://twitter.com/elhamsolutions",
        facebook: "https://facebook.com/elhamsolutions",
        instagram: "https://instagram.com/elhamsolutions",
        youtube: "https://youtube.com/@elhamsolutions"
    },
    
    // Google Maps Embed URL
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE",
    
    // Stats (shown in hero section)
    stats: {
        projects: 500,
        clients: 200,
        years: 15,
        team: 50
    },
    
    // Default Language ('en' or 'ar')
    defaultLanguage: "en"
};

// Make config globally available
window.SITE_CONFIG = SITE_CONFIG;