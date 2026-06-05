const site = 'https://www.bloubergranthigh.co.za/wp-content/uploads';

export const images = {
  logo: `${site}/2019/02/bbr-school-logo.png`,
  hero: `${site}/2019/02/grade8-orientation-1080x608.jpg`,
  admissionIcon: `${site}/2019/02/admission-icon.png`,
  resourcesIcon: `${site}/2019/02/resources-icon.png`,
  eventIcon: `${site}/2019/02/event-icon.png`,
  foodFairOne: `${site}/2020/05/0a0219b1-153f-4ae2-89c8-ba97a271c7b2-1-225x300.jpg`,
  foodFairTwo: `${site}/2020/05/0e9f84a6-062c-4acf-b60f-bcf680084236-225x300.jpg`,
  foodFairThree: `${site}/2020/05/09353b57-2207-4288-a57e-3e2c4e295a00-1080x810.jpg`,
  gradeEightFunDay: `${site}/2020/05/20200118_145403132_iOS.jpg`,
  gradeEightFunDayTwo: `${site}/2020/05/20200118_150804472_iOS.jpg`,
  colourRun: `${site}/2019/02/colour-run-1080x675.jpg`,
  schoolLife: `${site}/2020/05/01e067e5-02f4-404a-81a7-8556dbfa2e78-300x225.jpg`,
  pedro: `${site}/2020/05/STAFF-PEDRO-M.H.S_-Export-Students1.jpg`,
  felix: `${site}/2019/06/Staff-7.jpg`,
  tPedro: `${site}/2019/06/Staff-25.jpg`,
  rMarks: `${site}/2019/07/Rolandia.jpg`,
  cPunt: `${site}/2019/06/Staff-27.jpg`,
  cWegewarth: `${site}/2019/06/Staff-35.jpg`,
  lSaaiman: `${site}/2019/06/Staff-29.jpg`,
  mMoses: `${site}/2019/06/Staff-21.jpg`,
  aVanHeerden: `${site}/2019/06/Staff-34.jpg`,
  fMoyo: `${site}/2019/06/Staff-22.jpg`,
  cMeyer: `${site}/2019/06/Staff-18.jpg`,
  aLewis: `${site}/2019/06/Staff-15.jpg`,
  dSmall: `${site}/2020/05/STAFF-SMALL-D._-Export-Students1.jpg`,
  aPienaar: `${site}/2022/02/STAFF-PIENAAR-A._-Export-Students1.jpg`,
  kMorgan: `${site}/2019/06/Staff-20.jpg`,
  cMbiba: `${site}/2019/06/Staff-17.jpg`,
  dBotha: `${site}/2022/02/STAFF-BOTHA-D._-Export-Students1.jpg`,
  dGerstner: `${site}/2022/02/STAFF-GERSTNER-D._-Export-Students1.jpg`,
  mJones: `${site}/2022/02/STAFF-JONES-M._-Export-Students1.jpg`,
  eBantom: `${site}/2022/02/STAFF-BANTOM-E._-Export-Students1.jpg`,
  bGonzo: `${site}/2022/02/STAFF-GONZO-B._-Export-Students1.jpg`,
  lLeRoux: `${site}/2022/02/STAFF-LE-ROUX-L._-Export-Students1.jpg`,
  cGoldstone: `${site}/2022/02/STAFF-GOLDSTONE-C._-Export-Students1.jpg`,
  cDirks: `${site}/2022/02/STAFF-DIRKS-C._-Export-Students1.jpg`,
  aRoussouw: `${site}/2022/02/STAFF-ROUSSOUW-A._-Export-Students1.jpg`,
  aBotha: `${site}/2019/06/Staff-2.jpg`,
  bWhite: `${site}/2022/02/STAFF-WHITE-B._-Export-Students1.jpg`,
  sDaniels: `${site}/2019/06/Staff-5.jpg`,
  tNeetling: `${site}/2019/06/Staff-23.jpg`,
  lSkattie: `${site}/2020/05/STAFF-SKATTIE-L._-Export-Students1.jpg`,
  mJacobs: `${site}/2019/06/Staff-10.jpg`,
  jBaatjies: `${site}/2020/05/STAFF-BAATJIES-J._-Export-Students1.jpg`,
  jJanuary: `${site}/2019/06/Staff-11.jpg`,
  rBrown: `${site}/2019/06/Staff-3.jpg`,
  dMaquamba: `${site}/2019/06/Staff-16.jpg`,
  fDaniels: `${site}/2019/06/Staff-4.jpg`,
  rSamaai: `${site}/2020/05/STAFF-SAMAAI-R._-Export-Students1.jpg`
};

export const school = {
  name: 'Bloubergrant',
  fullName: 'Bloubergrant High School',
  motto: 'To lead with Integrity',
  tagline: 'A modern, professional and animated website concept for a diverse Cape Town high school community.',
  founded: '12 January 2006',
  officialOpening: '14 January 2006',
  firstMatric: '2009',
  address: 'No 6 Curlewis Road, Table View, 7441, Cape Town',
  phone: '021 557 6390',
  email: 'bloubergrant.sec@wcgschools.gov.za'
};

export const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Curriculum', path: '/curriculum' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Events', path: '/events' },
  { label: 'News', path: '/news' },
  { label: 'Staff', path: '/staff' },
  { label: 'Contact', path: '/contact' }
];

export const pathways = [
  { title: 'Admission', text: 'Application guidance, admissions policy, fee information and enrolment information for prospective families.', path: '/admissions', image: images.admissionIcon, cta: 'Learn more' },
  { title: 'Resources', text: 'School uniform details, policies, newsletters, learner support and parent communication links.', path: '/resources', image: images.resourcesIcon, cta: 'Open resources' },
  { title: 'Events', text: 'Upcoming school moments, ceremonies, sport, culture, fundraisers and community activities.', path: '/events', image: images.eventIcon, cta: 'See events' }
];

export const values = [
  { title: 'Integrity-led', text: 'The website places the motto at the centre of the school story and turns it into a clear values message.', icon: 'shield' },
  { title: 'Diverse community', text: 'The copy celebrates the multicultural learner population and welcoming high-school environment.', icon: 'globe' },
  { title: 'Personal attention', text: 'Smaller-school strengths are highlighted for parents who want daily educator support and belonging.', icon: 'graduation' }
];

export const timeline = [
  { year: '12 January 2006', text: 'Bloubergrant High School opened its doors of learning for the first time.' },
  { year: '14 January 2006', text: 'The school was officially opened by Western Cape education and provincial leadership.' },
  { year: 'Vision', text: 'Challenge learners of all abilities to achieve excellence in academic, cultural and sporting activities.' },
  { year: 'Mission', text: 'Respect and care for individual learner needs in a safe, creative and holistic environment.' }
];

export const subjects = [
  'English, Afrikaans & Life Orientation',
  'Mathematics or Mathematical Literacy',
  'Physical Sciences & Life Sciences',
  'Accounting & Business Studies',
  'CAT, Tourism & Consumer Studies',
  'History and broader FET options'
];

export const resources = [
  'Bell times and daily routines',
  'Code of conduct and school policies',
  'Stationery and subject resources',
  'School fees and financial information',
  'Parent communication and circulars',
  'Learner support information'
];

export const newsItems = [
  { tag: 'Community', title: '2019 Food Fair', text: 'A gallery-first community story with photo highlights and event atmosphere.' },
  { tag: 'Orientation', title: 'Grade 8 Orientation & Blazer Ceremony', text: 'A welcoming story for new learners, parents, tours and the BHS pledge.' },
  { tag: 'Fundraising', title: 'Colour Run', text: 'A vibrant recap format for fundraisers, school spirit and learner involvement.' }
];

export const eventSections = [
  {
    heading: '20 Year Anniversary',
    intro: 'A milestone celebration marking two decades since Bloubergrant High School first opened its doors in January 2006.',
    events: [
      {
        title: 'Bloubergrant High School turns 20',
        meta: '12 January 2026',
        image: images.hero,
        text: 'Bloubergrant High School opened its doors on 12 January 2006. The 2026 anniversary marks 20 years of learning, leadership, school pride and community growth in Table View.'
      }
    ]
  },
  {
    heading: 'Community Fundraisers',
    intro: 'School events that bring families, learners and staff together while supporting key school moments.',
    events: [
      {
        title: '2019 Food Fair',
        meta: 'Community event',
        image: images.foodFairThree,
        text: 'A photo-led community highlight with stalls, school spirit and families gathering around the BHS campus.'
      },
      {
        title: 'Colour Run',
        meta: '26 January 2019',
        image: images.colourRun,
        text: 'Bloubergrant High hosted its first Colour Run as a main fundraiser toward the Matric Dance, supported by the Grade 11 fundraising team.'
      }
    ]
  },
  {
    heading: 'Grade 8 Welcome Events',
    intro: 'Orientation moments that help new learners settle into high school life and the BHS identity.',
    events: [
      {
        title: 'Grade 8 Orientation & Blazer Ceremony',
        meta: 'Latest News',
        image: images.hero,
        text: 'New learners toured the school, joined group activities and were officially welcomed as Bergies during the blazer ceremony.'
      },
      {
        title: 'Grade 8 2020 Fun Day',
        meta: 'School life',
        image: images.gradeEightFunDay,
        text: 'Fun Day images capture learners outdoors, taking part in activities and building connection at the start of the year.'
      }
    ]
  },
  {
    heading: 'School Life Gallery',
    intro: 'Extra event snapshots from existing BHS galleries, kept visual and easy to scan.',
    events: [
      {
        title: 'Learner Moments',
        meta: 'Campus life',
        image: images.schoolLife,
        text: 'Everyday moments from the school community, showing learners participating and connecting beyond the classroom.'
      },
      {
        title: 'Food Fair Highlights',
        meta: 'Photo gallery',
        image: images.foodFairTwo,
        text: 'More images from the Food Fair gallery, presented as part of the wider school events story.'
      }
    ]
  }
];

export const staff = [
  { name: 'Mr Malcolm H.S Pedro', role: 'Headmaster', image: images.pedro },
  { name: 'Mr A Felix', role: 'Deputy Headmaster - Head of Discipline - Life Orientation Subject Head', image: images.felix },
  { name: 'Mrs T Pedro', role: 'Head of Department - Head of Academics - Commerce Faculty', image: images.tPedro },
  { name: 'Mrs R Marks', role: 'Head of Department - Phase Head: Gr. 10 & 11 - Afrikaans Faculty', image: images.rMarks },
  { name: 'Mrs C Punt', role: 'Head of Department - Phase Head: Gr. 8 & 9 - Tourism & Consumer Studies Faculties', image: images.cPunt },
  { name: 'Mrs C Wegewarth', role: 'Grade 12 Grade Head - Sciences, CAT & Technology Faculties', image: images.cWegewarth },
  { name: 'Mrs L Saaiman', role: 'Grade 11 Grade Head - Mathematics & Mathematical Literacy', image: images.lSaaiman },
  { name: 'Ms M Moses', role: 'Gr. 10 Grade Head - Head of English Faculty - Head of Detention', image: images.mMoses },
  { name: 'Mrs A van Heerden', role: 'Grade 9 Grade Head - GET Mathematics and Mathematical Literacy Faculty', image: images.aVanHeerden },
  { name: 'Ms F Moyo', role: 'Grade 8 Grade Head - Business Studies & EMS', image: images.fMoyo },
  { name: 'Ms C Meyer', role: 'Head of Sports - EMS & Accounting', image: images.cMeyer },
  { name: 'Ms A Lewis', role: 'Head of Culture - Grade 8 Assistant Grade Head - English Faculty', image: images.aLewis },
  { name: 'Mrs D Small', role: 'Grade 9 Assistant Grade Head - Life Orientation', image: images.dSmall },
  { name: 'Mrs A Pienaar', role: 'Grade 10 Assistant Grade Head - Mathematics & Mathematical Literacy', image: images.aPienaar },
  { name: 'Mrs K Morgan', role: 'Grade 11 Assistant Grade Head - English', image: images.kMorgan },
  { name: 'Mr C Mbiba', role: 'Grade 12 Assistant Grade Head - History & Social Sciences Faculty', image: images.cMbiba },
  { name: 'Mrs D Botha', role: 'Class Tutor: Gr. 8B - Subject Head: Life Sciences', image: images.dBotha },
  { name: 'Ms D Gerstner', role: 'Class Tutor: Gr. 9C - Consumer Studies & Social Sciences', image: images.dGerstner },
  { name: 'Ms M. Jones', role: 'Class Tutor: Gr. 10B - English Home Language', image: images.mJones },
  { name: 'Ms E Bantom', role: 'Class Tutor: Gr. 11B - Mathematics & Mathematical Literacy', image: images.eBantom },
  { name: 'Mr B Gonzo', role: 'Class Tutor: Gr. 11C - Natural Sciences & Life Sciences', image: images.bGonzo },
  { name: 'Mrs L Le Roux', role: 'Class Tutor: Gr. 11D - Afrikaans', image: images.lLeRoux },
  { name: 'Mr C Goldstone', role: 'Class Tutor: Gr. 12B - FET Mathematics Subject Head', image: images.cGoldstone },
  { name: 'Mr C Dirks', role: 'Class Tutor: Gr. 12C - Afrikaans', image: images.cDirks },
  { name: 'Ms A Roussouw', role: 'Class Tutor: Gr. 12D - Afrikaans', image: images.aRoussouw },
  { name: 'Mrs A Botha', role: 'Personal Assistant to Headmaster', image: images.aBotha },
  { name: 'Mrs B White', role: 'Receptionist', image: images.bWhite },
  { name: 'Mrs S Daniels', role: 'Admin Assistant - Reports, Educpac, Registers', image: images.sDaniels },
  { name: 'Mrs T Neetling', role: 'School Financial Officer', image: images.tNeetling },
  { name: 'Ms L Skattie', role: 'School Bursar', image: images.lSkattie },
  { name: 'Mrs M Jacobs', role: 'Uniform', image: images.mJacobs },
  { name: 'Mr J Baatjies', role: 'Photocopies / Driver', image: images.jBaatjies },
  { name: 'Mr J January', role: 'Care Taker - Soccer', image: images.jJanuary },
  { name: 'Mr R Brown', role: 'Maintenance - Driver - Athletics, Cross Country & Rugby', image: images.rBrown },
  { name: 'Mr. D. Maquamba', role: 'Gardens', image: images.dMaquamba },
  { name: 'Mrs F Daniels', role: 'Supervision / Invigilation - Admin Assistant', image: images.fDaniels },
  { name: 'Mrs R Samaai', role: 'Supervision / Invigilation - Admin Assistant', image: images.rSamaai }
];

export const staffSections = [
  {
    heading: 'Senior Management Team',
    people: staff.slice(0, 2)
  },
  {
    heading: 'Heads of Departments',
    people: staff.slice(2, 5)
  },
  {
    heading: 'Grade Heads',
    people: staff.slice(5, 12)
  },
  {
    heading: 'Assistant Grade Heads',
    people: staff.slice(12, 16)
  },
  {
    heading: 'Teaching Staff',
    people: staff.slice(16, 25)
  },
  {
    heading: 'Admin Staff',
    people: staff.slice(25, 28)
  },
  {
    heading: 'Finance Staff',
    people: staff.slice(28, 32)
  },
  {
    heading: 'Ground Staff',
    people: staff.slice(32, 35)
  },
  {
    heading: 'Supervision Staff',
    people: staff.slice(35)
  }
];
