const texts = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      apartments: 'Apartments',
      features: 'Features',
      location: 'Location',
      booking: 'Booking',
      bookNow: 'Book Now',
      callUs: 'Call Us'
    },
    
    // Hero Section
    hero: {
      title: 'Host770',
      subtitle: 'Kosher Apartments for Rent in Miami',
      description: 'Perfect solution for Torah observant families - Walking distance to synagogues! Centrally located near kosher restaurants, mikvahs, and mehadrin supermarkets.',
      bookNow: 'Book Now',
      viewGallery: 'View Gallery'
    },

    // Gallery
    gallery: {
      subtitle: 'View our beautiful kosher apartments in Miami',
      moreImages: 'More Images',
      previousImage: 'Previous image',
      nextImage: 'Next image',
      goToImage: 'Go to image {number}',
      additionalImage: 'Additional apartment image {number}',
      livingRoom: 'Living room',
      bedroom: 'Bedroom',
      kitchen: 'Kitchen',
      bathroom: 'Bathroom',
      study: 'Study'
    },

    // Guest Reviews
    guestReviews: {
      title: 'Guest Reviews',
      subtitle: 'What our guests say about their stay at',
      previousReview: 'Previous review',
      nextReview: 'Next review',
      reviews: [
        {
          name: 'Sarah & David',
          date: 'July 2024',
          text: 'Perfect kosher apartment for our family vacation! The kashering was done professionally and the location near the synagogue was ideal.'
        },
        {
          name: 'Rabbi Cohen',
          date: 'June 2024',
          text: 'Excellent service from Host770. The apartment was fully kosher-certified and walking distance to minyan. Highly recommended for Torah observant families.'
        },
        {
          name: 'Miriam & Yosef',
          date: 'May 2024',
          text: 'Amazing experience for our honeymoon! The kosher kitchen was perfectly set up and the staff understood all our religious requirements.'
        },
        {
          name: 'Goldstein Family',
          date: 'April 2024',
          text: 'Great location with easy access to kosher restaurants and mikvahs. The apartment was clean and well-maintained according to halachic standards.'
        },
        {
          name: 'Chaya',
          date: 'March 2024',
          text: 'Host770 made our Miami stay worry-free! Everything was kosher and the customer service in Hebrew was excellent. Will definitely return!'
        },
        {
          name: 'Shimon',
          date: 'February 2024',
          text: 'Business trip made easy with kosher accommodations. The apartment had everything needed for maintaining kashrut away from home.'
        }
      ]
    },

    // Error Pages
    error: {
      pageNotFound: 'Oops! Page Not Found',
      pageNotFoundDescription: 'The page you\'re looking for doesn\'t exist, but you can still find the perfect kosher apartment in Miami!',
      returnHome: 'Return to Home Page',
      viewGallery: 'View Our Gallery',
      contactUs: 'Contact Us'
    },
    
    // Features
    features: {
      title: 'What\'s Included',
      fullyFurnished: 'Fully Furnished',
      fullyFurnishedDesc: 'Complete kosher setup: kosher kitchen (meat/dairy), hot plate, water heater, linens, towels',
      designerApartments: 'Kosher Certified',
      designerApartmentsDesc: 'Apartment kashered before each entry according to required kashrut level',
      modernAmenities: 'Complete Amenities',
      modernAmenitiesDesc: 'Washing machine, internet, and all modern conveniences',
      primeLocation: 'Prime Location',
      primeLocationDesc: 'Close to synagogues, kosher restaurants, bakeries, and Judaica stores'
    },
    
    // Amenities
    amenities: {
      title: 'Kosher Amenities & Services',
      pool: 'Collaboration with Miami Chabad Houses',
      gym: 'Apartment Kashering Service',
      synagogue: 'Walking Distance to Synagogues',
      kosherMexican: 'Kosher Restaurants Nearby',
      kosherItalian: 'Kosher Bakeries',
      kosherCafe: 'Judaica Stores',
      upsStore: 'Separate Beds Upon Request',
      superPharm: 'Additional Services Available',
      evParking: 'Professional Customer Service',
      poolDesc: 'Partnership with local Chabad centers for enhanced community experience',
      gymDesc: 'Professional kashering according to your required level of kashrut',
      synagogueDesc: 'Convenient walking distance to multiple synagogues',
      kosherMexicanDesc: 'Easy access to certified kosher dining options',
      kosherItalianDesc: 'Fresh kosher baked goods and pastries nearby',
      kosherCafeDesc: 'Religious books, ritual items, and gifts within reach',
      upsStoreDesc: 'Accommodation for religious needs and preferences',
      superPharmDesc: 'Airport transfers, kosher food delivery, Shabbat arrangements',
      evParkingDesc: 'Available 24/6 in Hebrew, English, and Spanish',
      specialNotice: '🏠 Comprehensive Kosher Living Solutions'
    },
    
    // Apartment Details
    apartments: {
      title: 'Kosher Apartment Details',
      suitableFor: 'Perfect for religious families, honeymoon couples, business travelers, and Torah observant tourists',
      features: 'Features',
      amenities: 'Amenities',
      contact: 'Contact for More Information',
      upToPeople: 'Up to {capacity} people',
      kosherKitchen: 'Kosher Kitchen Setup',
      meatDairy: 'Meat/Dairy Separation Available',
      hotPlate: 'Hot Plate & Water Heater',
      wifiModern: 'Free WiFi & Modern Amenities'
    },
    
    // Contact
    contact: {
      title: 'Contact Us',
      getInTouch: 'Get In Touch',
      address: 'Miami Beach, Florida, 33154',
      phone: '+1 (954) 319-7577',
      email: 'kooshsites@gmail.com',
      sendMessage: 'Send Message',
      getDirections: 'Get Directions',
      availableHours: 'Available 24/6',
      website: 'www.Host770.com'
    },
    
    // Booking Form
    bookingForm: {
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      phone: 'Phone',
      phonePlaceholder: 'Enter your phone number',
      email: 'Email',
      emailPlaceholder: 'Enter your email address',
      guests: 'Number of Guests',
      arrivalDate: 'Arrival Date',
      departureDate: 'Departure Date',
      message: 'Message',
      messagePlaceholder: 'Tell us about any special requirements...',
      submit: 'Send WhatsApp Message',
      submitting: 'Sending...'
    },
    
    // Booking Countdown
    bookingCountdown: {
      daysLeft: 'Only {days} days left to book for this weekend!',
      secureStay: 'Secure your stay at {title} for a perfect getaway',
      timeLeft: 'Time left:',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes'
    },
    
    // Booking
    booking: {
      title: 'Book Your Stay',
      subtitle: 'Contact us for personalized kosher accommodations',
      whatsappButton: 'WhatsApp - Available 24/6',
      callButton: 'Call Now',
      emailButton: 'Send Email'
    },
    
    // Footer
    footer: {
      description: 'Leading company for kosher apartment and property rentals in Miami. Located in central areas, near synagogues, kosher restaurants, mikvahs, and mehadrin supermarkets.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      allRightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      personalSupport: 'Personal and warm support throughout your stay'
    },
    
    // Common
    common: {
      learnMore: 'Learn More',
      viewMore: 'View More',
      contactUs: 'Contact Us',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      loading: 'Loading...',
      error: 'Error occurred',
      success: 'Success!'
    },

    // Accessibility
    accessibility: {
      switchToHebrew: 'Switch to Hebrew',
      switchToEnglish: 'Switch to English',
      toggleMobileMenu: 'Toggle mobile menu',
      instagram: 'Instagram',
      facebook: 'Facebook',
      scrollToTop: 'Scroll to top'
    }
  },
  
  he: {
    // Navigation
    nav: {
      home: 'בית',
      gallery: 'גלריה',
      apartments: 'דירות',
      features: 'מאפיינים',
      location: 'מיקום',
      booking: 'הזמנה',
      bookNow: 'הזמן עכשיו',
      callUs: 'התקשר אלינו'
    },
    
    // Hero Section
    hero: {
      title: 'Host770',
      subtitle: 'דירות כשרות להשכרה במיאמי',
      description: 'פתרון מושלם לשומרי מצוות – במרחק הליכה מבית כנסת! ממוקמים באזורים מרכזיים, ליד בתי כנסת, מסעדות כשרות, מקוואות ומכולות מהדרין.',
      bookNow: 'הזמן עכשיו',
      viewGallery: 'צפה בגלריה'
    },

    // Gallery
    gallery: {
      subtitle: 'צפו בדירות הכשרות היפות שלנו במיאמי',
      moreImages: 'תמונות נוספות',
      previousImage: 'תמונה קודמת',
      nextImage: 'תמונה הבאה',
      goToImage: 'עבור לתמונה {number}',
      additionalImage: 'תמונה משלימה לדירה {number}',
      livingRoom: 'אזנה',
      bedroom: 'חדר שינה',
      kitchen: 'מטבח',
      bathroom: 'אמבטיה',
      study: 'אורח'
    },

    // Guest Reviews
    guestReviews: {
      title: 'ביקורות אורחים',
      subtitle: 'מה האורחים שלנו אומרים על השהות ב',
      previousReview: 'ביקורת קודמת',
      nextReview: 'ביקורת הבאה',
      reviews: [
        {
          name: 'שרה ודוד',
          date: 'יולי 2024',
          text: 'דירה כשרה מושלמת לחופשת המשפחה שלנו! ההכשרה נעשתה בצורה מקצועית והמיקום ליד בית הכנסת היה אידיאלי.'
        },
        {
          name: 'הרב כהן',
          date: 'יוני 2024',
          text: 'שירות מעולה מHost770. הדירה הייתה כשרה לגמרי ובמרחק הליכה למניין. מומלץ בחום למשפחות שומרות מצוות.'
        },
        {
          name: 'מרים ויוסף',
          date: 'מאי 2024',
          text: 'חוויה מדהימה לירח הדבש שלנו! המטבח הכשר היה מוכן בצורה מושלמת והצוות הבין את כל הדרישות הדתיות שלנו.'
        },
        {
          name: 'משפחת גולדשטיין',
          date: 'אפריל 2024',
          text: 'מיקום נהדר עם גישה קלה למסעדות כשרות ומקוואות. הדירה הייתה נקייה ומתוחזקת היטב לפי תקנים הלכתיים.'
        },
        {
          name: 'חיה',
          date: 'מרץ 2024',
          text: 'Host770 הפך את השהות שלנו במיאמי לחסרת דאגות! הכל היה כשר ושירות הלקוחות בעברית היה מעולה. בהחלט נחזור!'
        },
        {
          name: 'שמעון',
          date: 'פברואר 2024',
          text: 'נסיעת עסקים שנעשתה קלה עם אירוח כשר. הדירה הכילה את כל מה שנדרש לשמירה על כשרות רחוק מהבית.'
        }
      ]
    },

    // Error Pages
    error: {
      pageNotFound: 'אופס! הדף לא נמצא',
      pageNotFoundDescription: 'הדף שאתה מחפש לא קיים, אבל אתה עדיין יכול למצוא את הדירה הכשרה המושלמת במיאמי!',
      returnHome: 'חזרה לעמוד הבית',
      viewGallery: 'צפה בגלריה שלנו',
      contactUs: 'צור קשר'
    },
    
    // Features
    features: {
      title: 'מה כלול אצלנו',
      fullyFurnished: 'מרוהט קומפלט',
      fullyFurnishedDesc: 'הכנה כשרה מלאה: מטבח כשר (בשרי/חלבי), פלטה, מיחם, סדינים, מגבות',
      designerApartments: 'הכשרה לפי דרישה',
      designerApartmentsDesc: 'הכשרת הדירה לפני כל כניסה לפי רמת הכשרות הנדרשת',
      modernAmenities: 'שירותים מלאים',
      modernAmenitiesDesc: 'מכונת כביסה, אינטרנט וכל הנוחויות המודרניות',
      primeLocation: 'מיקום מעולה',
      primeLocationDesc: 'קרבה למסעדות כשרות, מאפיות, חנויות יודאיקה ובתי כנסת'
    },
    
    // Amenities
    amenities: {
      title: 'שירותים כשרים ומתקנים',
      pool: 'שיתוף פעולה עם בתי חב"ד במיאמי',
      gym: 'שירות הכשרת דירות',
      synagogue: 'במרחק הליכה מבתי כנסת',
      kosherMexican: 'מסעדות כשרות בקרבת מקום',
      kosherItalian: 'מאפיות כשרות',
      kosherCafe: 'חנויות יודאיקה',
      upsStore: 'הפרדת מיטות לפי בקשה',
      superPharm: 'שירותים נוספים זמינים',
      evParking: 'שירות לקוחות מקצועי',
      poolDesc: 'שותפות עם מרכזי חב"ד מקומיים לחוויה קהילתית משופרת',
      gymDesc: 'הכשרה מקצועית לפי רמת הכשרות הנדרשת שלכם',
      synagogueDesc: 'מרחק הליכה נוח לבתי כנסת מרובים',
      kosherMexicanDesc: 'גישה קלה לאפשרויות אוכל כשר מוסמך',
      kosherItalianDesc: 'מוצרי מאפייה כשרים טריים וקינוחים בקרבת מקום',
      kosherCafeDesc: 'ספרי קודש, פריטי פולחן ומתנות בהישג יד',
      upsStoreDesc: 'התאמה לצרכים ולהעדפות דתיות',
      superPharmDesc: 'הסעות לשדה התעופה, משלוח אוכל כשר, הסדרי שבת',
      evParkingDesc: 'זמינים 24/6 בעברית, אנגלית וספרדית',
      specialNotice: '🏠 פתרונות מגורים כשרים מקיפים'
    },
    
    // Apartment Details
    apartments: {
      title: 'פרטי הדירות הכשרות',
      suitableFor: 'מושלם למשפחות דתיות, זוגות בירח דבש, אנשי עסקים ותיירים חרדים',
      features: 'מאפיינים',
      amenities: 'שירותים',
      contact: 'צור קשר למידע נוסף',
      upToPeople: 'עד {capacity} אנשים',
      kosherKitchen: 'הכנה מטבח כשר',
      meatDairy: 'הפרדת בשרי/חלבי',
      hotPlate: 'פלטה ומיחם',
      wifiModern: 'אינטרנט חינם ונוחויות מודרניות'
    },
    
    // Contact
    contact: {
      title: 'צור קשר',
      getInTouch: 'צור קשר',
      address: 'מיאמי, פלורידה',
      phone: '+1-XXX-XXX-XXXX',
      email: 'info@host770.com',
      sendMessage: 'שלח הודעת WhatsApp',
      getDirections: 'Get Directions',
      availableHours: 'זמינים 24/6 בעברית, אנגלית וספרדית',
      website: 'www.Host770.com'
    },
    
    // Booking Form
    bookingForm: {
      fullName: 'שם מלא',
      fullNamePlaceholder: 'הכנס את השם המלא שלך',
      phone: 'טלפון',
      phonePlaceholder: 'הכנס את מספר הטלפון שלך',
      email: 'אימייל',
      emailPlaceholder: 'הכנס את כתובת האימייל שלך',
      guests: 'מספר אורחים',
      arrivalDate: 'תאריך הגעה',
      departureDate: 'תאריך עזיבה',
      message: 'הודעה',
      messagePlaceholder: 'ספר לנו על דרישות מיוחדות...',
      submit: 'שלח הודעת WhatsApp',
      submitting: 'שולח...'
    },
    
    // Booking Countdown
    bookingCountdown: {
      daysLeft: 'רק {days} ימים נותרו להזמנה לסוף השבוע הזה!',
      secureStay: 'הבטח את השהות שלך ב{title} לחופשה מושלמת',
      timeLeft: 'זמן שנותר:',
      days: 'ימים',
      hours: 'שעות',
      minutes: 'דקות'
    },
    
    // Booking
    booking: {
      title: 'הזמן את השהות שלך',
      subtitle: 'צור קשר לקבלת התאמה אישית לדירות כשרות',
      whatsappButton: 'WhatsApp - זמינים 24/6',
      callButton: 'התקשר עכשיו',
      emailButton: 'שלח אימייל'
    },
    
    // Footer
    footer: {
      description: 'החברה המובילה להשכרת דירות ונכסים כשרים במיאמי. הנכסים ממוקמים באזורים מרכזיים, ליד בתי כנסת, מסעדות כשרות, מקוואות ומכולות מהדרין.',
      quickLinks: 'קישורים מהירים',
      contact: 'פרטי קשר',
      allRightsReserved: 'כל הזכויות שמורות.',
      privacyPolicy: 'מדיניות פרטיות',
      termsOfService: 'תנאי שירות',
      personalSupport: 'ליווי אישי וחם לאורך כל השהות'
    },
    
    // Common
    common: {
      learnMore: 'למד עוד',
      viewMore: 'צפה עוד',
      contactUs: 'צור קשר',
      close: 'סגור',
      next: 'הבא',
      previous: 'הקודם',
      loading: 'טוען...',
      error: 'אירעה שגיאה',
      success: 'הצלחה!'
    },

    // Accessibility
    accessibility: {
      switchToHebrew: 'Switch to Hebrew',
      switchToEnglish: 'Switch to English',
      toggleMobileMenu: 'Toggle mobile menu',
      instagram: 'Instagram',
      facebook: 'Facebook',
      scrollToTop: 'Scroll to top'
    }
  }
};

export { texts }; 