import { AcademicProgram, StatementOfFaithArticle, FacultyMember } from '../types';

export const INSTITUTION_INFO = {
  name: "Native Evangelical School of Theology",
  nameKn: "ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ",
  shortName: "NEST",
  tagline: "Theological Institution located at Mysore, Karnataka, India",
  taglineKn: "ಕರ್ನಾಟಕದ ಮೈಸೂರಿನಲ್ಲಿರುವ ಮಾನ್ಯತೆ ಪಡೆದ ದೇವತಾಶಾಸ್ತ್ರ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ",
  motto: "Rooted in the Vine, Bearing Fruit for the Nations",
  mottoKn: "ಬಳ್ಳಿಯಲ್ಲಿ ನೆಲೆನಿಂತು, ರಾಷ್ಟ್ರಗಳಿಗಾಗಿ ಫಲಕೊಡುವ ಸೇವಕರು",
  mottoScripture: "John 15:5",
  mottoScriptureKn: "ಯೋಹಾನ 15:5",
  category: "Theological Higher Education / Evangelical Seminary",
  principal: "Rev. Santhosh K. Chacko, Principal",
  principalKn: "ರೆವ. ಸಂತೋಷ್ ಕೆ. ಚಾಕೊ, ಪ್ರಿನ್ಸಿಪಾಲ್",
  address: "No. 133, Nagarthalli, Rayanakere P. O, Jayapura Hobli, Mysore 570008, Karnataka, India",
  addressKn: "ನಂ. 133, ನಾಗರಹಳ್ಳಿ, ರಾಯನಕೆರೆ ಪೋಸ್ಟ್, ಜಯಪುರ ಹೋಬಳಿ, ಮೈಸೂರು 570008, ಕರ್ನಾಟಕ, ಭಾರತ",
  postalCode: "570008",
  city: "Mysore",
  state: "Karnataka",
  country: "India",
  phone: "918880111763",
  phoneFormatted: "+91 88801 11763",
  email: "nestmysore@gmail.com",
  accreditation: {
    title: "Accredited Member of Asia Theological Association India",
    titleKn: "ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India) ಅಧಿಕೃತ ಸದಸ್ಯ ಸಂಸ್ಥೆ",
    shortTitle: "ATA India Accredited",
    body: "Asia Theological Association (ATA) India",
    directoryUrl: "https://ataindia.org/institution/native-evangelical-school-of-theology-2/",
    status: "Accredited Member",
    coursesOffered: [
      "Bachelor of Theology (B.Th)",
      "Diploma in Theology (Dip.Th)",
      "Master of Divinity (M.Div)"
    ],
    summary: "Native Evangelical School of Theology is officially recognized and accredited by the Asia Theological Association India (ATA India), adhering to rigorous evangelical academic standards, spiritual formation, and ministerial excellence."
  },
  socialLinks: {
    facebook: "https://share.google/td3ZrSFMqffHNzANv",
    youtube: "https://youtube.com/@nativeevangelicalschooloftheol?si=ntbOSZr1CLfo8Wg6",
    location: "https://share.google/8iDVppGi60dwCFj45",
    ataDirectory: "https://ataindia.org/institution/native-evangelical-school-of-theology-2/",
  },
  establishedYear: 2012,
  affiliations: "Accredited Member of Asia Theological Association India (ATA India)",
  officeHours: "Monday - Saturday: 8:30 AM - 5:30 PM (IST)",
};

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: "b-th",
    code: "B.Th",
    title: "Bachelor of Theology",
    titleKn: "ಬ್ಯಾಚುಲರ್ ಆಫ್ ಥಿಯಾಲಜಿ (B.Th)",
    degreeLevel: "Bachelor",
    duration: "3 Years (Residential)",
    durationKn: "3 ವರ್ಷಗಳು (ವಸತಿಯುತ)",
    mode: "Residential / Full-Time",
    modeKn: "ವಸತಿಯುತ / ಪೂರ್ಣಕಾಲಿಕ",
    language: "English Medium Only (Official)",
    languageKn: "ಕೇವಲ ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ (ಅಧಿಕೃತ)",
    eligibility: "10+2 / PUC (Pre-University Course) or recognized equivalent passed; Christian testimony and pastoral recommendation.",
    eligibilityKn: "10+2 / ಪಿಯುಸಿ ಅಥವಾ ತತ್ಸಮಾನ ತೇರ್ಗಡೆ; ಕ್ರೈಸ್ತ ಸಾಕ್ಷ್ಯ ಹಾಗೂ ಸಭಾಪಾಲಕರ ಶಿಫಾರಸು ಪತ್ರ.",
    description: "An Asia Theological Association (ATA India) accredited three-year residential undergraduate degree program in theological studies.",
    descriptionKn: "ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India) ಅಧಿಕೃತ ಮಾನ್ಯತೆ ಪಡೆದ 3 ವರ್ಷಗಳ ವಸತಿಯುತ ಪದವಿ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮ.",
    featured: true,
    ataAccredited: true
  },
  {
    id: "m-div",
    code: "M.Div",
    title: "Master of Divinity",
    titleKn: "ಮಾಸ್ಟರ್ ಆಫ್ ಡಿವಿನಿಟಿ (M.Div)",
    degreeLevel: "Master",
    duration: "2–3 Years (Residential)",
    durationKn: "2 ರಿಂದ 3 ವರ್ಷಗಳು (ವಸತಿಯುತ)",
    mode: "Residential / Full-Time",
    modeKn: "ವಸತಿಯುತ / ಪೂರ್ಣಕಾಲಿಕ",
    language: "English Medium Only (Official)",
    languageKn: "ಕೇವಲ ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ (ಅಧಿಕೃತ)",
    eligibility: "Recognized Bachelor's Degree (B.Th for 2-year track; university graduation for 3-year track); Christian testimony and pastoral recommendation.",
    eligibilityKn: "ಮಾನ್ಯತೆ ಪಡೆದ ಪದವಿ (B.Th ಹೊಂದಿದವರಿಗೆ 2 ವರ್ಷ; ಸಾಮಾನ್ಯ ಪದವೀಧರರಿಗೆ 3 ವರ್ಷಗಳ ಕೋರ್ಸ್); ಸಭಾಪಾಲಕರ ಶಿಫಾರಸು ಪತ್ರ.",
    description: "An Asia Theological Association (ATA India) accredited residential master's degree program in divinity and pastoral ministry.",
    descriptionKn: "ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India) ಅಧಿಕೃತ ಮಾನ್ಯತೆ ಪಡೆದ ವಸತಿಯುತ ಸ್ನಾತಕೋತ್ತರ ದೇವತಾಶಾಸ್ತ್ರ ಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮ.",
    featured: true,
    ataAccredited: true
  },
  {
    id: "dip-th",
    code: "Dip.Th",
    title: "Diploma in Theology",
    titleKn: "ಡಿಪ್ಲೊಮಾ ಇನ್ ಥಿಯಾಲಜಿ (Dip.Th)",
    degreeLevel: "Diploma",
    duration: "2 Years (Residential)",
    durationKn: "2 ವರ್ಷಗಳು (ವಸತಿಯುತ)",
    mode: "Residential / Full-Time",
    modeKn: "ವಸತಿಯುತ / ಪೂರ್ಣಕಾಲಿಕ",
    language: "Combined Kannada & English",
    languageKn: "ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಸಂಯೋಜಿತ ಮಾಧ್ಯಮ",
    eligibility: "10th Standard (SSLC) / High School completed, personal confession of faith and ministry recommendation.",
    eligibilityKn: "ಎಸ್.ಎಸ್.ಎಲ್.ಸಿ (10ನೇ ತರಗತಿ) ತೇರ್ಗಡೆ; ಯೇಸು ಕ್ರಿಸ್ತನಲ್ಲಿ ನಂಬಿಕೆ ಮತ್ತು ಸಭಾಪಾಲಕರ ಶಿಫಾರಸು ಪತ್ರ.",
    description: "An Asia Theological Association (ATA India) accredited two-year diploma program offered in English and Kannada.",
    descriptionKn: "ಏಷ್ಯಾ ಥಿಯಾಲಾಜಿಕಲ್ ಅಸೋಸಿಯೇಷನ್ (ATA India) ಅಧಿಕೃತ ಮಾನ್ಯತೆ ಪಡೆದ 2 ವರ್ಷಗಳ ಡಿಪ್ಲೊಮಾ ಕೋರ್ಸ್ (ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್).",
    featured: false,
    ataAccredited: true
  }
];

export const STATEMENT_OF_FAITH: StatementOfFaithArticle[] = [
  {
    id: "scriptures",
    title: "The Holy Scriptures",
    titleKn: "ಪವಿತ್ರ ಸತ್ಯವೇದವು ದೇವರ ವಾಕ್ಯ",
    scriptureReferences: ["2 Timothy 3:16-17", "2 Peter 1:20-21", "Psalm 119:105"],
    summary: "The 66 books of the Old and New Testaments are the verbally inspired, inerrant, and infallible Word of God.",
    summaryKn: "ಹಳೆಯ ಮತ್ತು ಹೊಸ ಒಡಂಬಡಿಕೆಯ 66 ಪುಸ್ತಕಗಳು ದೇವರ ಪವಿತ್ರಾತ್ಮನ ಪ್ರೇರಣೆಯಿಂದ ಬರೆಯಲ್ಪಟ್ಟ ದೋಷರಹಿತವಾದ ಸತ್ಯ ವಾಕ್ಯವಾಗಿದೆ.",
    fullDescription: "We believe that the Holy Bible is the inspired Word of God, written by human authors under the supernatural guidance of the Holy Spirit. It is the supreme and final standard of faith, doctrine, and Christian conduct for all believers and the church.",
    fullDescriptionKn: "ಪವಿತ್ರ ಸತ್ಯವೇದವು ದೇವರ ಜೀವಂತ ವಾಕ್ಯವಾಗಿದೆ. ಇದು ನಮ್ಮ ವಿಶ್ವಾಸ, ನಂಬಿಕೆ ಮತ್ತು ಕ್ರೈಸ್ತ ಜೀವನದ ಅಂತಿಮ ಅಧಿಕಾರವಾಗಿದೆ ಎಂದು ನಾವು ನಂಬುತ್ತೇವೆ."
  },
  {
    id: "godhead",
    title: "The Triune God",
    titleKn: "ತ್ರಿತ್ವ ದೇವರು (ಪಿತ, ಪುತ್ರ ಮತ್ತು ಪವಿತ್ರಾತ್ಮ)",
    scriptureReferences: ["Genesis 1:1, 26", "Matthew 28:19", "2 Corinthians 13:14"],
    summary: "There is one living and true God, eternally existing in three distinct persons: the Father, the Son, and the Holy Spirit.",
    summaryKn: "ಒಬ್ಬನೇ ಜೀವಸ್ವರೂಪನಾದ ಸತ್ಯ ದೇವರು ಪಿತ, ಪುತ್ರ ಮತ್ತು ಪವಿತ್ರಾತ್ಮ ಎಂಬ ಮೂರು ವ್ಯಕ್ತಿತ್ವಗಳಲ್ಲಿ ನಿತ್ಯವೂ ಏಕತ್ವದಲ್ಲಿ ಇರುತ್ತಾರೆ.",
    fullDescription: "We believe in one God, Creator and Sustainer of all things, infinitely perfect and eternally co-existing in three persons: Father, Son, and Holy Spirit, each possessing all the divine attributes and equal in power and glory.",
    fullDescriptionKn: "ಸಮಸ್ತ ಸೃಷ್ಟಿಕರ್ತನೂ ಸಂರಕ್ಷಕನೂ ಆದ ದೇವರು ಪರಿಪೂರ್ಣನೂ, ಪಿತ, ಪುತ್ರ, ಪವಿತ್ರಾತ್ಮ ಎಂಬ ಮೂರು ವ್ಯಕ್ತಿಗಳಲ್ಲಿ ಸಮಾನ ಮಹಿಮೆ ಮತ್ತು ಅಧಿಕಾರ ಹೊಂದಿರುವ ಒಬ್ಬನೇ ದೇವರಾಗಿದ್ದಾರೆ."
  },
  {
    id: "jesus-christ",
    title: "The Lord Jesus Christ",
    titleKn: "ಕರ್ತನಾದ ಯೇಸು ಕ್ರಿಸ್ತ",
    scriptureReferences: ["John 1:1-14", "1 Corinthians 15:3-4", "Hebrews 4:14-16"],
    summary: "Jesus Christ is fully God and fully man, born of a virgin, lived a sinless life, died for our sins, rose bodily, and will return in glory.",
    summaryKn: "ಯೇಸು ಕ್ರಿಸ್ತನು ಪೂರ್ಣ ದೇವರೂ ಪೂರ್ಣ ಮಾನವರೂ ಆಗಿದ್ದು, ಕನ್ಯೆಯ ಗರ್ಭದಲ್ಲಿ ಜನಿಸಿ, ಪಾಪವಿಲ್ಲದೆ ಜೀವಿಸಿ, ಶಿಲುಬೆಯ ಮೇಲೆ ಮೃತನಾಗಿ, ಮೂರನೇ ದಿನ ಪುನರುತ್ಥಾನ ಹೊಂದಿದ ರಕ್ಷಕನು.",
    fullDescription: "We believe that Jesus Christ was conceived by the Holy Spirit and born of the Virgin Mary. He offered Himself as a substitutionary sacrifice on the cross for the sins of mankind. He arose bodily from the dead, ascended to Heaven, and sits at the right hand of the Father as our High Priest and Advocate.",
    fullDescriptionKn: "ಯೇಸು ಕ್ರಿಸ್ತನು ಮಾನವಕುಲದ ಪಾಪಗಳಿಗಾಗಿ ಶಿಲುಬೆಯಲ್ಲಿ ಪ್ರಾಯಶ್ಚಿತ್ತ ಯಜ್ಞವಾದನು. ಮರಣವನ್ನು ಜಯಿಸಿ ಎದ್ದು, ಪರಲೋಕಕ್ಕೆ ಏರಿ ತಂದೆಯ ಬಲಗಡೆಯಲ್ಲಿ ನಮ್ಮ ಪ್ರಧಾನ ಯಾಜಕನಾಗಿದ್ದಾನೆ."
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    titleKn: "ಪವಿತ್ರಾತ್ಮ ದೇವರು",
    scriptureReferences: ["John 14:16-17, 26", "Acts 1:8", "Galatians 5:22-23"],
    summary: "The Holy Spirit convicts, regenerates, indwells, seals, and empowers believers for holy living and effective ministry.",
    summaryKn: "ಪವಿತ್ರಾತ್ಮನು ಪಾಪಿಗಳನ್ನು ಎಚ್ಚರಿಸಿ, ನಂಬಿದವರಲ್ಲಿ ವಾಸಮಾಡಿ, ಪವಿತ್ರ ಜೀವನಕ್ಕೆ ಮತ್ತು ಸುವಾರ್ತಾ ಸೇವೆಗೆ ಶಕ್ತಿ ನೀಡುತ್ತಾನೆ.",
    fullDescription: "We believe the Holy Spirit illuminates the minds of sinners, awakens them to repentance, regenerates them upon faith, indwells every believer from the moment of salvation, and imparts spiritual gifts for the building up of the body of Christ.",
    fullDescriptionKn: "ಪವಿತ್ರಾತ್ಮನು ಕ್ರಿಸ್ತನ ದೇಹವಾದ ಸಭೆಯನ್ನು ಕಟ್ಟಲು ವಿಶ್ವಾಸಿಗಳಿಗೆ ಆತ್ಮೀಕ ವರಗಳನ್ನು ಮತ್ತು ಬಲವನ್ನು ನೀಡುತ್ತಾನೆ."
  },
  {
    id: "salvation",
    title: "Salvation by Grace through Faith",
    titleKn: "ಕೃಪೆಯಿಂದ ನಂಬಿಕೆಯ ಮೂಲಕ ಉಚಿತ ರಕ್ಷಣೆ",
    scriptureReferences: ["Ephesians 2:8-10", "Romans 3:23-26", "Titus 3:5"],
    summary: "Salvation is a free gift of God's grace, received solely through repentance and faith in Jesus Christ, not by human works.",
    summaryKn: "ರಕ್ಷಣೆಯು ಮಾನವನ ಪುಣ್ಯ ಕಾರ್ಯಗಳಿಂದಲ್ಲ, ಕೇವಲ ದೇವರ ಉಚಿತ ಕೃಪೆಯಿಂದ ಮತ್ತು ಯೇಸು ಕ್ರಿಸ್ತನಲ್ಲಿನ ನಂಬಿಕೆಯ ಮೂಲಕ ಮಾತ್ರ ದೊರೆಯುತ್ತದೆ.",
    fullDescription: "We believe that all human beings are born with a sinful nature and are separated from God. Salvation cannot be earned through good deeds, rituals, or lineage, but is received exclusively through personal faith in the shed blood and resurrection of Jesus Christ.",
    fullDescriptionKn: "ಯೇಸು ಕ್ರಿಸ್ತನ ರಕ್ತ ಮತ್ತು ಆತನ ಪುನರುತ್ಥಾನದಲ್ಲಿ ನಂಬಿಕೆಯಿಡುವ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಪಾಪಕ್ಷಮೆಯೂ ನಿತ್ಯಜೀವವೂ ಉಚಿತವಾಗಿ ದೊರೆಯುತ್ತದೆ."
  },
  {
    id: "native-mission",
    title: "The Great Commission & Native Evangelism",
    titleKn: "ಸುವಾರ್ತಾ ಮಹಾ ಆಜ್ಞೆ ಮತ್ತು ಸ್ವದೇಶಿ ಸೇವೆ",
    scriptureReferences: ["Matthew 28:18-20", "Mark 16:15", "Romans 10:14-15"],
    summary: "Every believer is called to participate in the global mission of proclaiming the Gospel and planting indigenous, reproducing churches.",
    summaryKn: "ಲೋಕದ ಮೂಲೆಮೂಲೆಗೂ ಸುವಾರ್ತೆಯನ್ನು ಸಾರಿ, ಸ್ವದೇಶಿ ಕ್ರೈಸ್ತ ಸಭೆಗಳನ್ನು ಸ್ಥಾಪಿಸುವುದು ಪ್ರತಿ ವಿಶ್ವಾಸಿಯ ಪರಮ ಕರ್ತವ್ಯವಾಗಿದೆ.",
    fullDescription: "We believe that the church exists to glorify God and fulfill the Great Commission. Native Evangelical School of Theology is committed to raising up contextual, culturally sensitive native leaders equipped to bring the transformational love of Jesus to every community across Karnataka, India, and the nations.",
    fullDescriptionKn: "ಕರ್ನಾಟಕ, ಭಾರತ ಮತ್ತು ಸಮಸ್ತ ಜನಾಂಗಗಳಲ್ಲಿ ಯೇಸುವಿನ ಪ್ರೀತಿ ಮತ್ತು ಸುವಾರ್ತೆಯನ್ನು ಹರಡಲು ಸ್ಥಳೀಯ ಸಾಂಸ್ಕೃತಿಕ ಅರಿವುಳ್ಳ ಸೇವಕರನ್ನು ರೂಪಿಸಲು NEST ಬದ್ಧವಾಗಿದೆ."
  }
];

export const CAMPUS_PILLARS = [
  {
    title: "Biblical & Academic Rigor",
    subtitle: "Truth Rooted in God's Infallible Word",
    description: "Deep theological scholarship balanced with passionate devotional piety. Our students learn to interpret Scripture faithfully and engage contemporary culture thoughtfully.",
    icon: "BookOpen"
  },
  {
    title: "Vibrant Chapel & Prayer",
    subtitle: "Spiritual Formation at the Heart of NEST",
    description: "Daily corporate chapel services, morning intercession, and dedicated prayer vigils cultivating intimate communion with the Lord and spiritual vitality.",
    icon: "Flame"
  },
  {
    title: "Practical Village & Native Outreach",
    subtitle: "Fieldwork with Immediate Impact",
    description: "Every weekend, our faculty and students engage in practical village ministry, medical camps, open-air preaching, and church planting in rural Mysore & Karnataka districts.",
    icon: "Compass"
  },
  {
    title: "Caring Residential Community",
    subtitle: "One Family in the Lord",
    description: "A close-knit, supportive brotherhood and sisterhood where students from diverse states and linguistic backgrounds live, study, dine, and pray together in harmony.",
    icon: "Users"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Where is Native Evangelical School of Theology located?",
    questionKn: "ನೇಟಿವ್ ಇವಾಂಜೆಲಿಕಲ್ ಸ್ಕೂಲ್ ಆಫ್ ಥಿಯಾಲಜಿ ಎಲ್ಲಿದೆ?",
    answer: "NEST is situated at No. 133, Nagarthalli, Rayanakere Post, Jayapura Hobli, Mysore, Karnataka, India. We are easily accessible from Mysore City via HD Kote / Hunsur Road and public transit.",
    answerKn: "NEST ಸಂಸ್ಥೆಯು ಕರ್ನಾಟಕದ ಮೈಸೂರಿನ ರಾಯನಕೆರೆ ಅಂಚೆಯ ನಾಗರಹಳ್ಳಿಯಲ್ಲಿದೆ (ನಂ. 133, ಜಯಪುರ ಹೋಬಳಿ, ಮೈಸೂರು 570008). ಮೈಸೂರು ನಗರದಿಂದ ಸುಲಭವಾಗಿ ಬಸ್ ಮತ್ತು ವಾಹನ ಸೌಲಭ್ಯವಿದೆ."
  },
  {
    question: "What qualifications are required to apply for the Bachelor of Theology (B.Th)?",
    questionKn: "ಬ್ಯಾಚುಲರ್ ಆಫ್ ಥಿಯಾಲಜಿ (B.Th) ಪ್ರವೇಶಕ್ಕೆ ಬೇಕಾದ ಅರ್ಹತೆಗಳೇನು?",
    answer: "Applicants for the B.Th program must have completed 10+2 / Pre-University Course (PUC) or its recognized equivalent. Candidates must also provide a personal testimony of faith in Jesus Christ, a letter of recommendation from their local church pastor, and be committed to ministry.",
    answerKn: "ಅರ್ಜಿದಾರರು 10+2 ಅಥವಾ ಪಿಯುಸಿ ತೇರ್ಗಡೆಯಾಗಿರಬೇಕು. ಜೊತೆಗೆ ಕ್ರಿಸ್ತನಲ್ಲಿನ ಸಾಕ್ಷ್ಯ, ಸ್ಥಳೀಯ ಸಭಾಪಾಲಕರ ಶಿಫಾರಸು ಪತ್ರ ಮತ್ತು ಸೇವೆ ಮಾಡುವ ಬದ್ಧತೆ ಹೊಂದಿರಬೇಕು."
  },
  {
    question: "What are the official languages and medium of instruction?",
    questionKn: "ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ ಬೋಧನಾ ಮಾಧ್ಯಮ ಮತ್ತು ಭಾಷೆಗಳು ಯಾವುವು?",
    answer: "Our official medium of instruction for degree programs (B.Th & M.Div) is English. The Diploma in Theology (Dip.Th) is taught in combined Kannada and English to support regional pastors and church workers.",
    answerKn: "B.Th ಮತ್ತು M.Div ಪದವಿಗಳಿಗೆ ಅಧಿಕೃತ ಬೋಧನಾ ಮಾಧ್ಯಮ ಕೇವಲ ಇಂಗ್ಲಿಷ್ ಆಗಿದೆ. ಗ್ರಾಮೀಣ ಸೇವಕರ ಅನುಕೂಲಕ್ಕಾಗಿ Diploma in Theology (Dip.Th) ಕೋರ್ಸ್ ಕನ್ನಡ ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಸಂಯೋಜಿತ ಮಾಧ್ಯಮದಲ್ಲಿದೆ."
  },
  {
    question: "Is residential hostel accommodation available on campus?",
    questionKn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕ್ಯಾಂಪಸ್‌ನಲ್ಲಿ ವಸತಿ ನಿಲಯ ಹಾಗೂ ಊಟದ ಸೌಲಭ್ಯವಿದೆಯೇ?",
    answer: "Yes, NEST is a residential institution providing separate hostel accommodation and dining facilities for enrolled students. For admissions and fee inquiries, please contact the Principal's office directly.",
    answerKn: "ಹೌದು, NEST ವಸತಿಯುತ ಸಂಸ್ಥೆಯಾಗಿದ್ದು, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರತ್ಯೇಕ ವಸತಿ ನಿಲಯ ಹಾಗೂ ಭೋಜನಾಲಯ ಸೌಲಭ್ಯವಿದೆ. ಪ್ರವೇಶ ಮತ್ತು ಶುಲ್ಕದ ವಿವರಗಳಿಗೆ ಪ್ರಾಂಶುಪಾಲರ ಕಚೇರಿಯನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ."
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: "santhosh-chacko",
    name: "Rev. Santhosh K. Chacko",
    nameKn: "ರೆವ. ಸಂತೋಷ್ ಕೆ. ಚಾಕೊ",
    title: "Principal",
    titleKn: "ಪ್ರಿನ್ಸಿಪಾಲ್",
    role: "Principal",
    roleKn: "ಪ್ರಾಂಶುಪಾಲರು",
    qualification: "M.Th, B.D, B.Th",
    qualificationKn: "ಎಂ.ಟಿ.ಎಚ್, ಬಿ.ಡಿ, ಬಿ.ಟಿ.ಎಚ್",
    department: "Executive Leadership",
    departmentKn: "ಆಡಳಿತ & ನಾಯಕತ್ವ",
    photo: "/assets/aistudio/pricipal_7db520a9.webp"
  },
  {
    id: "teaching-faculty",
    name: "Resident Teaching Faculty",
    nameKn: "ಸ್ಥಳೀಯ ಬೋಧಕ ವೃಂದ",
    title: "Faculty Members",
    titleKn: "ಅಧ್ಯಾಪಕ ವರ್ಗ",
    role: "Theological Faculty Cohort",
    roleKn: "ದೇವತಾಶಾಸ್ತ್ರ ಬೋಧಕ ಸಮೂಹ",
    qualification: "ATA Accredited Theological Qualifications",
    qualificationKn: "ATA ಮಾನ್ಯತೆ ಪಡೆದ ಶೈಕ್ಷಣಿಕ ಅರ್ಹತೆಗಳು",
    department: "Academic Faculty",
    departmentKn: "ಶೈಕ್ಷಣಿಕ ಅಧ್ಯಾಪಕ ವೃಂದ",
    photo: "/assets/aistudio/techers_e3355ac8.webp"
  }
];

