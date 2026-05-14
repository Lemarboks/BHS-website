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
  aVanHeerden: `${site}/2019/06/Staff-34.jpg`
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
  { label: 'Gallery', path: '/gallery' },
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
  { name: 'Mrs A van Heerden', role: 'Grade 9 Grade Head - GET Mathematics and Mathematical Literacy Faculty', image: images.aVanHeerden }
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
    people: staff.slice(5)
  }
];

export const gallery = [
  { title: 'Grade 8 Orientation & Blazer Ceremony', image: images.hero },
  { title: '2019 Food Fair', image: images.foodFairOne },
  { title: 'Community events', image: images.foodFairTwo },
  { title: 'Learner moments', image: images.schoolLife },
  { title: 'Bloubergrant identity', image: images.logo }
];
