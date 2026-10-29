import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageCode = 'en' | 'kn';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flagEmoji: string;
  officialRole: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flagEmoji: '🇬🇧',
    officialRole: 'Official Academic Medium of Instruction',
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flagEmoji: '🟡🔴',
    officialRole: 'ರಾಜ್ಯ ಭಾಷೆ ಮತ್ತು Dip.Th ಕೋರ್ಸ್‌ಗೆ ಸಂಯೋಜಿತ ಮಾಧ್ಯಮ',
  },
];

interface Translations {
  [key: string]: {
    en: string;
    kn: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Navigation
  navAbout: {
    en: 'About NEST',
    kn: 'ಸಂಸ್ಥೆಯ ಬಗ್ಗೆ',
  },
  navAccreditation: {
    en: 'Accreditation',
    kn: 'ಮಾನ್ಯತೆ (ATA)',
  },
  navPrograms: {
    en: 'Academic Programs',
    kn: 'ಕೋರ್ಸ್‌ಗಳು',
  },
  navFaculty: {
    en: 'Faculty & Leadership',
    kn: 'ಬೋಧಕ ವೃಂದ',
  },
  navAdmissions: {
    en: 'Admissions 2026–27',
    kn: 'ಪ್ರವೇಶಾತಿ 2026–27',
  },
  navCampusLife: {
    en: 'Seminary Life',
    kn: 'ಸೆಮಿನರಿ ಜೀವನ',
  },
  navGallery: {
    en: 'Campus Gallery',
    kn: 'ಕ್ಯಾಂಪಸ್ ಗ್ಯಾಲರಿ',
  },
  navFaith: {
    en: 'Statement of Faith',
    kn: 'ವಿಶ್ವಾಸ ಪ್ರಮಾಣ',
  },
  navContact: {
    en: 'Location & Contact',
    kn: 'ವಿಳಾಸ & ಸಂಪರ್ಕ',
  },
  navApplyNow: {
    en: 'Apply for Admissions',
    kn: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಿ',
  },

  // Brand and Institutional
  institutionName: {
    en: 'Native Evangelical School of Theology',
    kn: 'ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ',
  },
  institutionCity: {
    en: 'Mysore, Karnataka',
    kn: 'ಮೈಸೂರು, ಕರ್ನಾಟಕ',
  },
  institutionSubtitle: {
    en: 'Equipping Faithful Servants for Native and Global Ministry',
    kn: 'ಸ್ವದೇಶಿ ಮತ್ತು ಸಾರ್ವತ್ರಿಕ ಸೇವೆಗಾಗಿ ದೈವ ಸೇವಕರನ್ನು ಸಿದ್ಧಪಡಿಸುವ ಸಂಸ್ಥೆ',
  },
  ataAccreditedTag: {
    en: 'ATA India Accredited Member',
    kn: 'ATA India ಅಧಿಕೃತ ಮಾನ್ಯತೆ',
  },

  // Hero & Bulletin Section
  admissionsOpen: {
    en: 'Admissions Open 2026–2027',
    kn: 'ಪ್ರವೇಶಾತಿ ಆರಂಭವಾಗಿದೆ 2026–2027',
  },
  academicYear: {
    en: 'Academic Year 2026–2027',
    kn: 'ಶೈಕ್ಷಣಿಕ ಸಾಲು 2026–2027',
  },
  accreditedDegreeOptions: {
    en: 'ATA Accredited B.Th, M.Div & Dip.Th Degrees',
    kn: 'ATA ಮಾನ್ಯತೆ ಪಡೆದ B.Th, M.Div & Dip.Th ಕೋರ್ಸ್‌ಗಳು',
  },
  residentialSeminaryNotice: {
    en: 'Residential Seminary Campus at Nagarthalli, Mysore',
    kn: 'ನಾಗರಹಳ್ಳಿ, ಮೈಸೂರು ವಸತಿಯುತ ಕ್ಯಾಂಪಸ್',
  },
  verifyAtaListing: {
    en: 'ATA India Registry Listing',
    kn: 'ATA India ಅಧಿಕೃತ ನೋಂದಣಿ',
  },
  heroAdmissionsBadge: {
    en: 'Admissions Open 2026–2027',
    kn: '2026–2027 ಪ್ರವೇಶಾತಿಗೆ ಅರ್ಜಿ ಆಹ್ವಾನ',
  },
  heroMotto: {
    en: 'Rooted in the Vine, Bearing Fruit for the Nations.',
    kn: 'ಬಳ್ಳಿಯಲ್ಲಿ ನೆಲೆನಿಂತು, ರಾಷ್ಟ್ರಗಳಿಗಾಗಿ ಫಲಕೊಡುವ ಸೇವಕರು.',
  },
  heroMottoScripture: {
    en: 'John 15:5',
    kn: 'ಯೋಹಾನ 15:5',
  },
  heroHeadline: {
    en: 'Empowering Faith through Biblical Scholarship & Native Ministry Calling',
    kn: 'ಸತ್ಯವೇದದ ಶ್ರೇಷ್ಠ ವಿದ್ವತ್ತು ಮತ್ತು ಸ್ವದೇಶಿ ದೈವಿಕ ಕರೆಯೊಂದಿಗೆ ನಾಯಕರ ಸಿದ್ಧತೆ',
  },
  heroSub: {
    en: 'Native Evangelical School of Theology (NEST) is an Asia Theological Association (ATA India) accredited evangelical seminary located in Mysore, Karnataka. Official Medium of Instruction is English, with Diploma in Theology (Dip.Th) conducted in Combined English & Kannada.',
    kn: 'ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ (NEST) ಮೈಸೂರಿನಲ್ಲಿರುವ ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India) ಮಾನ್ಯತೆ ಪಡೆದ ಪ್ರಸಿದ್ಧ ಇವಾಂಜೆಲಿಕಲ್ ಸಂಸ್ಥೆಯಾಗಿದೆ. ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ ಮಾಧ್ಯಮ ಇಂಗ್ಲಿಷ್ ಆಗಿದ್ದು, ಡಿಪ್ಲೊಮಾ ಇನ್ ಥಿಯಾಲಜಿ (Dip.Th) ಕೋರ್ಸ್ ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಸಂಯೋಜಿತ ಮಾಧ್ಯಮದಲ್ಲಿದೆ.',
  },
  whatsappPrincipal: {
    en: 'WhatsApp Principal: 8880111763',
    kn: 'ಪ್ರಿನ್ಸಿಪಾಲ್ ವಾಟ್ಸಾಪ್: 8880111763',
  },
  callOffice: {
    en: 'Call Campus Office',
    kn: 'ಕಾಲೇಜು ಕಚೇರಿಗೆ ಕರೆ ಮಾಡಿ',
  },
  officialMediumLabel: {
    en: 'Medium of Instruction Policy:',
    kn: 'ಬೋಧನಾ ಮಾಧ್ಯಮ ನೀತಿ:',
  },
  mediumEnglishMain: {
    en: 'English Medium (Official Academic Medium for B.Th & M.Div)',
    kn: 'ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ (B.Th ಮತ್ತು M.Div ಅಧಿಕೃತ ಮಾಧ್ಯಮ)',
  },
  mediumKannadaDiploma: {
    en: 'Combined English & Kannada (Diploma in Theology - Dip.Th)',
    kn: 'ಕನ್ನಡ & ಇಂಗ್ಲಿಷ್ ಸಂಯೋಜಿತ ಮಾಧ್ಯಮ (ಡಿಪ್ಲೊಮಾ ಇನ್ ಥಿಯಾಲಜಿ - Dip.Th)',
  },

  // About Section
  aboutBadge: {
    en: 'Institutional Legacy & Calling',
    kn: 'ಸಂಸ್ಥೆಯ ಹಿನ್ನೆಲೆ ಮತ್ತು ದೈವಿಕ ದರ್ಶನ',
  },
  aboutHeading: {
    en: 'Rooted in Christ. Built for Native Ministry.',
    kn: 'ಕ್ರಿಸ್ತನಲ್ಲಿ ಬೇರೂರಿ, ಸ್ಥಳೀಯ ಸೇವೆಗಾಗಿ ಸಮರ್ಪಣೆ.',
  },
  aboutP1: {
    en: 'Founded with a burning passion to equip indigenous pastors, evangelists, and Christian educators, Native Evangelical School of Theology (NEST) provides sound theological training, spiritual discipleship, and missionary zeal.',
    kn: 'ಸ್ಥಳೀಯ ಸಭಾಪಾಲಕರು, ಸುವಾರ್ತಿಕರು ಮತ್ತು ಕ್ರೈಸ್ತ ಶಿಕ್ಷಕರನ್ನು ಸಿದ್ಧಪಡಿಸುವ ಉನ್ನತ ದರ್ಶನದೊಂದಿಗೆ ಸ್ಥಾಪಿತವಾದ ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ (NEST), ಸತ್ಯವೇದಾಧಾರಿತ ಶಿಕ್ಷಣ, ಆತ್ಮೀಕ ಶಿಷ್ಯತ್ವ ಮತ್ತು ಮಿಷನರಿ ಉತ್ಸಾಹವನ್ನು ನೀಡುತ್ತದೆ.',
  },
  aboutP2: {
    en: 'Located in Mysore at Nagarthalli, Rayanakere Post, our peaceful campus offers a sanctuary for in-depth Scripture study alongside daily prayer and weekly practical village ministry across Karnataka.',
    kn: 'ಮೈಸೂರಿನ ರಾಯನಕೆರೆ ಬಳಿಯ ನಾಗರಹಳ್ಳಿಯಲ್ಲಿರುವ ನಮ್ಮ ಸುಂದರ ಕ್ಯಾಂಪಸ್, ಸತ್ಯವೇದದ ಆಳವಾದ ಅಧ್ಯಯನ, ದೈನಂದಿನ ಉಪವಾಸ ಪ್ರಾರ್ಥನೆ ಹಾಗೂ ಕರ್ನಾಟಕದ ಹಳ್ಳಿಗಳಲ್ಲಿ ಪ್ರಾಯೋಗಿಕ ಸುವಾರ್ತಾ ಸೇವೆಗೆ ಉತ್ತಮ ವಾತಾವರಣ ಒದಗಿಸುತ್ತದೆ.',
  },
  aboutEmblemTitle: {
    en: 'The NEST Official Emblem',
    kn: 'NEST ಅಧಿಕೃತ ಲಾಂಛನದ ಅರ್ಥ',
  },
  aboutEmblemMeaning: {
    en: 'The Open Bible represents God\'s inerrant Word; the Cross proclaims Christ\'s sacrificial redemption; the Golden Lampstand and Wheat signify spiritual light and a fruitful harvest across the nations.',
    kn: 'ತೆರೆದ ಸತ್ಯವೇದವು ದೇವರ ಅಚಲ ವಾಕ್ಯವನ್ನು, ಶಿಲುಬೆಯು ಕ್ರಿಸ್ತನ ಪ್ರಾಯಶ್ಚಿತ್ತವನ್ನು, ಚಿನ್ನದ ದೀಪಸ್ತಂಭವು ಆತ್ಮೀಕ ಬೆಳಕನ್ನು ಮತ್ತು ಗೋಧಿ ಕದಿರು ರಾಷ್ಟ್ರಗಳ ಸಮೃದ್ಧ ಕೊಯ್ಲನ್ನು ಸೂಚಿಸುತ್ತದೆ.',
  },

  // Accreditation Section
  accreditationBadge: {
    en: 'Asia Theological Association (ATA)',
    kn: 'ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA)',
  },
  accreditationHeading: {
    en: 'Accredited Member of ATA India',
    kn: 'ATA India ದಿಂದ ಅಧಿಕೃತ ಮಾನ್ಯತೆ ಪಡೆದ ಸಂಸ್ಥೆ',
  },
  accreditationSummary: {
    en: 'NEST is officially accredited by the Asia Theological Association India, ensuring international evangelical standards, sound doctrine, academic excellence, and recognized theological qualifications.',
    kn: 'NEST ಸಂಸ್ಥೆಯು ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India) ನಿಂದ ಮಾನ್ಯತೆ ಪಡೆದಿದ್ದು, ಶ್ರೇಷ್ಠ ಶೈಕ್ಷಣಿಕ ಗುಣಮಟ್ಟ, ಸತ್ಯವಾದ ಸಿದ್ಧಾಂತ ಮತ್ತು ಮಾನ್ಯತೆ ಪಡೆದ ಪದವಿಗಳನ್ನು ನೀಡುತ್ತದೆ.',
  },
  viewAtaDirectory: {
    en: 'Verify on ATA India Directory',
    kn: 'ATA India ಅಧಿಕೃತ ಪಟ್ಟಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ',
  },

  // Programs Section
  programsBadge: {
    en: 'Theological Degree Programs',
    kn: 'ಥಿಯಾಲಾಜಿಕಲ್ ಕೋರ್ಸ್‌ಗಳು',
  },
  programsHeading: {
    en: 'Degrees Geared for Ministry Excellence',
    kn: 'ದೈವ ಸೇವೆಗಾಗಿ ಶ್ರೇಷ್ಠ ಪದವಿ ಕಾರ್ಯಕ್ರಮಗಳು',
  },
  programsSub: {
    en: 'Equipping men and women called by God for pastoral ministry, church planting, academic scholarship, and community transformation.',
    kn: 'ದೇವರಿಂದ ಕರೆಯಲ್ಪಟ್ಟ ದೈವಜನರನ್ನು ಸಭಾಪಾಲನೆ, ಸಭೆಗಳ ಸ್ಥಾಪನೆ, ಸತ್ಯವೇದ ಬೋಧನೆ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯ ಶ್ರೇಷ್ಠತೆಗಾಗಿ ಸಿದ್ಧಪಡಿಸುತ್ತೇವೆ.',
  },

  // Facebook & Campus Gallery Section
  galleryBadge: {
    en: 'Official Facebook Photos & Events',
    kn: 'ಅಧಿಕೃತ ಫೇಸ್‌ಬುಕ್ ಫೋಟೋಗಳು ಮತ್ತು ಕಾರ್ಯಕ್ರಮಗಳು',
  },
  galleryHeading: {
    en: 'Life, Worship & Ministry at NEST Mysore',
    kn: 'ಕ್ಯಾಂಪಸ್ ಜೀವನ, ಆರಾಧನೆ ಮತ್ತು ಸುವಾರ್ತಾ ಸೇವೆ',
  },
  gallerySub: {
    en: 'Glimpses of God\'s faithfulness from our graduation convocation, foundation day, NEST Sunday at fellowships, all-night prayer vigils, and rural field outreach.',
    kn: 'ಪದವಿ ಪ್ರದಾನ ಮಹೋತ್ಸವ, ಸಂಸ್ಥಾಪನಾ ದಿನ, NEST ಸಂಡೇ ಆರಾಧನೆಗಳು, ರಾತ್ರಿಯಿಡೀ ಪ್ರಾರ್ಥನಾ ಜಾಗರಣೆ ಹಾಗೂ ಹಳ್ಳಿಗಳ ಸುವಾರ್ತಾ ಸೇವೆಯ ನೈಜ ಫೋಟೋಗಳು.',
  },
  visitFacebookBtn: {
    en: 'View All Photos on Official Facebook',
    kn: 'ನಮ್ಮ ಅಧಿಕೃತ ಫೇಸ್‌ಬುಕ್ ಪುಟದಲ್ಲಿ ಇನ್ನಷ್ಟು ಫೋಟೋಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
  },
  allPhotosBadge: {
    en: 'Official Social Media Updates',
    kn: 'ಅಧಿಕೃತ ಸಾಮಾಜಿಕ ಜಾಲತಾಣ ಅಪ್‌ಡೇಟ್ಸ್',
  },

  // Daily Schedule
  scheduleTitle: {
    en: 'Daily Schedule of a NEST Seminarian',
    kn: 'ಸೆಮಿನರಿ ವಿದ್ಯಾರ್ಥಿಯ ದೈನಂದಿನ ದಿನಚರಿ',
  },
  scheduleSub: {
    en: 'A balanced rhythm of early morning prayer, scholarly lectures, library research, manual work, and chapel devotion.',
    kn: 'ಮುಂಜಾನೆಯ ಪ್ರಾರ್ಥನೆ, ತರಗತಿಯ ಬೋಧನೆ, ಗ್ರಂಥಾಲಯ ಅಧ್ಯಯನ ಮತ್ತು ಚಾಪೆಲ್ ಆರಾಧನೆಯ ಶಿಸ್ತುಬದ್ಧ ಜೀವನ.',
  },

  // Statement of Faith
  faithBadge: {
    en: 'Biblical Foundation',
    kn: 'ಸತ್ಯವೇದಾಧಾರಿತ ವಿಶ್ವಾಸ',
  },
  faithHeading: {
    en: 'Our Statement of Faith & Core Doctrine',
    kn: 'ನಮ್ಮ ವಿಶ್ವಾಸ ಪ್ರಮಾಣ ಮತ್ತು ಮುಖ್ಯ ಸಿದ್ಧಾಂತಗಳು',
  },
  faithSub: {
    en: 'We stand unapologetically on the historic Christian faith, the authority of the Holy Scriptures, and the Great Commission of Jesus Christ.',
    kn: 'ನಾವು ಅಪೋಸ್ತಲರ ಸತ್ಯವಾದ ಬೋಧನೆ, ಸತ್ಯವೇದದ ಪರಮ ಅಧಿಕಾರ ಮತ್ತು ಯೇಸು ಕ್ರಿಸ್ತನ ಸುವಾರ್ತಾ ಆಜ್ಞೆಯ ಮೇಲೆ ದೃಢವಾಗಿ ನಿಲ್ಲುತ್ತೇವೆ.',
  },

  // Admissions Section
  admissionsBadge: {
    en: 'Join the Class of 2026–2027',
    kn: '2026–2027 ಸಾಲಿನ ಪ್ರವೇಶಾತಿಗೆ ಸೇರಿ',
  },
  admissionsHeading: {
    en: 'Admissions Process & Scholarship Support',
    kn: 'ಪ್ರವೇಶಾತಿ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ',
  },
  admissionsSub: {
    en: 'We welcome committed Christian believers who sense God\'s call to pastoral, evangelistic, or teaching ministry. Financial aid and hostel accommodations are provided.',
    kn: 'ದೈವಿಕ ಕರೆಯನ್ನು ಹೊಂದಿರುವ ಯುವಕ-ಯುವತಿಯರನ್ನು ಪ್ರೀತಿಯಿಂದ ಸ್ವಾಗತಿಸುತ್ತೇವೆ. ಅರ್ಹರಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನ ಹಾಗೂ ಪ್ರತ್ಯೇಕ ಹಾಸ್ಟೆಲ್ ಸೌಲಭ್ಯವಿದೆ.',
  },
  howToApplyTitle: {
    en: 'How to Apply in 3 Simple Steps',
    kn: 'ಅರ್ಜಿ ಸಲ್ಲಿಸುವ 3 ಸರಳ ಹಂತಗಳು',
  },
  step1Title: {
    en: '1. Fill Online Application',
    kn: '1. ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಭರ್ತಿ ಮಾಡಿ',
  },
  step1Desc: {
    en: 'Submit your basic education and ministry background using our simple web form.',
    kn: 'ನಮ್ಮ ಸರಳ ಆನ್‌ಲೈನ್ ಫಾರ್ಮ್ ಮೂಲಕ ನಿಮ್ಮ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸಿ.',
  },
  step2Title: {
    en: '2. Pastor\'s Recommendation',
    kn: '2. ಸಭಾಪಾಲಕರ ಶಿಫಾರಸು ಪತ್ರ',
  },
  step2Desc: {
    en: 'Provide a recommendation letter from your home church pastor confirming your faith and calling.',
    kn: 'ನಿಮ್ಮ ಸ್ಥಳೀಯ ಸಭಾಪಾಲಕರ ಶಿಫಾರಸು ಪತ್ರ ಮತ್ತು ಸಾಕ್ಷ್ಯವನ್ನು ಒದಗಿಸಿ.',
  },
  step3Title: {
    en: '3. Principal Interview & Admission',
    kn: '3. ಪ್ರಿನ್ಸಿಪಾಲ್ ಸಂದರ್ಶನ ಮತ್ತು ಪ್ರವೇಶ',
  },
  step3Desc: {
    en: 'Direct interaction with Rev. Santhosh K. Chacko, followed by seat confirmation and hostel allotment.',
    kn: 'ರೆವ. ಸಂತೋಷ್ ಕೆ. ಚಾಕೊ ಅವರೊಂದಿಗೆ ನೇರ ಸಂದರ್ಶನದ ನಂತರ ಪ್ರವೇಶ ಖಚಿತವಾಗುತ್ತದೆ.',
  },

  // Contact Section
  contactBadge: {
    en: 'Visit & Connect',
    kn: 'ಕ್ಯಾಂಪಸ್‌ಗೆ ಭೇಟಿ ನೀಡಿ & ಸಂಪರ್ಕಿಸಿ',
  },
  contactHeading: {
    en: 'Contact & Campus Location in Mysore',
    kn: 'ಮೈಸೂರು ಕ್ಯಾಂಪಸ್ ವಿಳಾಸ ಮತ್ತು ಸಂಪರ್ಕ',
  },
  contactSub: {
    en: 'We welcome prospective candidates, pastors, sponsors, and prayer partners to our campus in Mysore.',
    kn: 'ವಿದ್ಯಾರ್ಥಿಗಳು, ಸಭಾಪಾಲಕರು ಮತ್ತು ಪ್ರಾರ್ಥನಾ ಸ್ನೇಹಿತರನ್ನು ಮೈಸೂರಿನ ನಮ್ಮ ಕ್ಯಾಂಪಸ್‌ಗೆ ಆತ್ಮೀಯವಾಗಿ ಸ್ವಾಗತಿಸುತ್ತೇವೆ.',
  },
  addressLabel: {
    en: 'Permanent Campus Address:',
    kn: 'ಶಾಶ್ವತ ಕ್ಯಾಂಪಸ್ ವಿಳಾಸ:',
  },
  fullAddress: {
    en: 'No. 133, Nagarthalli, Rayanakere P. O, Jayapura Hobli, Mysore 570008, Karnataka, India',
    kn: 'ನಂ. 133, ನಾಗರಹಳ್ಳಿ, ರಾಯನಕೆರೆ ಪೋಸ್ಟ್, ಜಯಪುರ ಹೋಬಳಿ, ಮೈಸೂರು 570008, ಕರ್ನಾಟಕ, ಭಾರತ',
  },
  openGoogleMaps: {
    en: 'Open Location on Google Maps',
    kn: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ವಿಳಾಸ ನೋಡಿ',
  },
  principalDeskLabel: {
    en: 'Direct Principal Desk & Admissions:',
    kn: 'ಪ್ರಿನ್ಸಿಪಾಲ್ ಕಚೇರಿ ಮತ್ತು ಪ್ರವೇಶಾತಿ ಸಂಪರ್ಕ:',
  },

  // Footer
  footerMission: {
    en: 'Native Evangelical School of Theology (NEST) is an ATA India accredited seminary committed to raising Christ-centered servants who bear fruit across Karnataka, India, and the world.',
    kn: 'ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ (NEST) ಕ್ರಿಸ್ತ ಕೇಂದ್ರಿತ ಸೇವಕರನ್ನು ಸಿದ್ಧಪಡಿಸುವ ATA India ಮಾನ್ಯತೆ ಪಡೆದ ಪ್ರಮುಖ ಸೆಮಿನರಿಯಾಗಿದೆ.',
  },
  copyright: {
    en: 'All Rights Reserved. Native Evangelical School of Theology (NEST), Mysore, Karnataka.',
    kn: 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ (NEST), ಮೈಸೂರು, ಕರ್ನಾಟಕ.',
  },

  // Modal / Form
  modalTitle: {
    en: 'Application for Admission 2026–2027',
    kn: '2026–2027 ಶೈಕ್ಷಣಿಕ ಸಾಲಿನ ಪ್ರವೇಶ ಅರ್ಜಿ',
  },
  modalSub: {
    en: 'Native Evangelical School of Theology (ATA Accredited) — Mysore, Karnataka',
    kn: 'ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ (ATA ಮಾನ್ಯತೆ) — ಮೈಸೂರು, ಕರ್ನಾಟಕ',
  },
  fullName: {
    en: 'Full Name (as in certificate)',
    kn: 'ಪೂರ್ಣ ಹೆಸರು (ದಾಖಲೆಯಂತೆ)',
  },
  phoneMobile: {
    en: 'Mobile / WhatsApp Number',
    kn: 'ಮೊಬೈಲ್ / ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ',
  },
  emailAddress: {
    en: 'Email Address',
    kn: 'ಇಮೇಲ್ ವಿಳಾಸ',
  },
  cityState: {
    en: 'Place, District & State',
    kn: 'ಊರು, ಜಿಲ್ಲೆ ಮತ್ತು ರಾಜ್ಯ',
  },
  selectProgram: {
    en: 'Selected Theological Program',
    kn: 'ಆಯ್ಕೆಮಾಡಿದ ಕೋರ್ಸ್',
  },
  languageMedium: {
    en: 'Language Medium',
    kn: 'ಬೋಧನಾ ಮಾಧ್ಯಮ',
  },
  qualification: {
    en: 'Highest Educational Qualification',
    kn: 'ವಿದ್ಯಾರ್ಹತೆ',
  },
  churchPastor: {
    en: 'Local Church Name & Pastor',
    kn: 'ಸ್ಥಳೀಯ ಸಭೆಯ ಹೆಸರು ಮತ್ತು ಸಭಾಪಾಲಕರು',
  },
  ministryCalling: {
    en: 'Brief Christian Testimony / Ministry Calling',
    kn: 'ನಿಮ್ಮ ಸಾಕ್ಷ್ಯ ಮತ್ತು ದೈವಿಕ ಕರೆಯ ಸಂಕ್ಷಿಪ್ತ ವಿವರ',
  },
  submitViaWhatsApp: {
    en: 'Submit Application via WhatsApp to Principal',
    kn: 'ಪ್ರಿನ್ಸಿಪಾಲ್ ಅವರಿಗೆ ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಅರ್ಜಿ ಕಳುಹಿಸಿ',
  },
};

interface LanguageContextType {
  currentLanguage: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('nest_site_lang') as LanguageCode;
      if (savedLang && (savedLang === 'en' || savedLang === 'kn')) {
        setCurrentLanguage(savedLang);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSetLanguage = (lang: LanguageCode) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem('nest_site_lang', lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  const t = (key: string): string => {
    const item = TRANSLATIONS[key];
    if (!item) return key;
    return item[currentLanguage] || item.en || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage: handleSetLanguage,
        t,
        languages: SUPPORTED_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
