const site = 'https://www.bloubergranthigh.co.za/wp-content/uploads';

export const images = {
  logo: `${site}/2019/02/bbr-school-logo.png`,
  hero: `${site}/2019/02/grade8-orientation-1080x608.jpg`,
  admissionIcon: `${site}/2019/02/admission-icon.png`,
  resourcesIcon: `${site}/2019/02/resources-icon.png`,
  eventIcon: `${site}/2019/02/event-icon.png`,
  foodFairOne: `${site}/2020/05/0a0219b1-153f-4ae2-89c8-ba97a271c7b2-1-225x300.jpg`,
  foodFairTwo: `${site}/2020/05/0e9f84a6-062c-4acf-b60f-bcf680084236-225x300.jpg`,
  schoolLife: `${site}/2020/05/01e067e5-02f4-404a-81a7-8556dbfa2e78-300x225.jpg`,
  pedro: `${site}/2020/05/STAFF-PEDRO-M.H.S_-Export-Students1.jpg`,
  felix: `${site}/2020/05/STAFF-FELIX-A_-Export-Students1.jpg`,
  tPedro: `${site}/2020/05/STAFF-PEDRO-T_-Export-Students1.jpg`
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
  { label: 'Motto', path: '/motto' },
  { label: 'Curriculum', path: '/curriculum' },
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

export const staff = [
  { name: 'Mr Malcolm H.S Pedro', role: 'Headmaster', image: images.pedro },
  { name: 'Mr A Felix', role: 'Deputy Headmaster - Head of Discipline - Life Orientation Subject Head', image: images.felix },
  { name: 'Mrs T Pedro', role: 'Head of Department - Head of Academics - Commerce Faculty', image: images.tPedro }
];

export const gallery = [
  { title: 'Grade 8 Orientation & Blazer Ceremony', image: images.hero },
  { title: '2019 Food Fair', image: images.foodFairOne },
  { title: 'Community events', image: images.foodFairTwo },
  { title: 'Learner moments', image: images.schoolLife },
  { title: 'Bloubergrant identity', image: images.logo }
];
