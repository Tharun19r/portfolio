/**
 * Central portfolio data — generated from Tharun's resume (Ramavath Tharun.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Ramavath Tharun',
  displayName: 'Ramavath Tharun',
  shortName: 'Tharun',
  firstName: 'THARUN',
  /** Single letter used as the series logo and on Original badges. */
  monogram: 'T',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A RAMAVATH ORIGINAL',
  role: 'Product & Business Analyst',
  tagline: ['Product Analytics', 'Business Analysis', 'Data + AI'],
  /** Roles the portfolio is positioned for. */
  targetRoles: ['Product Analyst', 'Senior Data Analyst', 'Associate Product Manager', 'Business Analyst'],
  intro:
    'A Solutions Analyst at Nucleus Software and a Data Science & Engineering graduate from IISER Bhopal, translating business requirements into API specifications and product workflows, identifying process bottlenecks through SQL and Excel, and collaborating with cross-functional teams to deliver effective, data-driven solutions.',
  location: 'Hyderabad, Telangana',
  email: 'ramavaththarun73@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/ramavath-tharun-493496263/',
    github: 'https://github.com/Tharun19r',
  },
  resumePdf: '/assets/Ramavath_Tharun_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Ramavath Tharun',
  },
  focus: ['Product Analytics', 'Business Analysis', 'Data-Driven Decisions', 'Process Improvement', 'AI for Product Insights'],
};

export const education = [
  {
    school: 'Indian Institute of Science Education and Research',
    short: 'IISER Bhopal',
    place: 'Bhopal',
    degree: 'BS — Data Science and Engineering',
    period: '2021 – 2025',
    score: '',
  },
  {
    school: 'Sri Chaitanya Junior College',
    short: 'Sri Chaitanya',
    place: 'Telangana',
    degree: 'State Board of Intermediate Education, Telangana',
    period: '2019 – 2021',
    score: 'Percentage 97%',
  },
  {
    school: 'Bhashayam Blooms',
    short: 'Bhashayam Blooms',
    place: 'Telangana',
    degree: 'Telangana Board of Secondary Education',
    period: '2019',
    score: 'CGPA 9.7',
  },
];

export const experience = [
  {
    company: 'Nucleus Software Exports Ltd.',
    role: 'Solutions Analyst',
    place: 'Noida',
    period: 'July 2025 – Present',
    points: [
      'Working in the Retail Banking – Lending domain, owning product features end to end: business requirements → user stories → ATDD → customer demos.',
      'Lead Management (backend): delivered the module end to end — captured business requirements, wrote user stories and ATDD scenarios, and collaborated with stakeholders and Product Managers through delivery.',
      'Contact Point Verification (CPV): wrote the user stories, tested the feature and identified bugs with the PQM team, authored ATDD scenarios in Given-When-Then (GWT) format, documented the product write-up and ran customer demos.',
      'User Management & IAM: currently working on identity and access management for the whole product.',
      'Analyzed lending workflows using SQL and Excel to identify bottlenecks, manual touchpoints and process inefficiencies, enabling data-driven process improvements.',
      'Created process flows, workflow documentation and traceability matrices to support solution design, requirement traceability and process standardization.',
    ],
  },
  {
    company: 'Underwater AI Lab, IIT Jammu',
    role: 'Summer Research Fellow',
    place: 'Jammu',
    period: 'May 2024 – July 2024',
    points: ['Collaborated on underwater video analysis, developing a YOLOv5 deep learning pipeline to detect and track fish in challenging aquatic environments.'],
  },
  {
    company: 'System and Informatics Lab, IISER Bhopal',
    role: 'Data Analyst Researcher',
    place: 'Bhopal',
    period: 'May 2023 – Nov 2023',
    points: [
      'Conducted data analysis and ML modeling on social anxiety across college batches using SVM, Logistic Regression and KNN, identifying year-wise differences and achieving strong assessment performance.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Badge shown on the card — a year when the resume gives one. */
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  /** Leave empty when the resume gives no figures — the impact block is hidden. */
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'funnel' | 'verify' | 'lock' | 'document' | 'detect' | 'city' | 'points' | 'domains' | 'chart';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'lead-management',
    title: 'Lead Management',
    year: 'Shipped',
    genre: 'Retail Banking • Lending • Business Analysis',
    logline: 'The backend Lead Management module of a retail-banking lending product — taken from business requirement to ATDD, end to end.',
    stack: ['Business Requirements', 'User Stories', 'ATDD', 'API Requirements', 'Agile'],
    build: [
      'Owned the backend Lead Management module end to end — from capturing business requirements to writing user stories and ATDD scenarios.',
      'Translated lending business requirements into API requirements and functional specifications for the development team.',
      'Collaborated with stakeholders and Product Managers in an Agile setup to refine scope, data flows and acceptance criteria through delivery.',
    ],
    features: ['Business requirement → user story → ATDD traceability', 'Backend lead workflows for retail lending', 'API requirements & functional specifications', 'Stakeholder & Product Manager alignment'],
    metrics: [],
    palette: ocean,
    motif: 'funnel',
  },
  {
    id: 'contact-point-verification',
    title: 'Contact Point Verification',
    year: 'Shipped',
    genre: 'Retail Banking • Lending • QA',
    logline: 'CPV for the lending journey — from user stories and Given-When-Then acceptance tests to bug triage with PQM and live customer demos.',
    stack: ['User Stories', 'ATDD (GWT)', 'Functional Testing', 'Product Documentation', 'Customer Demos'],
    build: [
      'Wrote the user stories for the CPV (Contact Point Verification) feature of the lending product.',
      'Tested the feature end to end, identified bugs and worked with the PQM team to get them resolved.',
      'Authored ATDD scenarios in Given-When-Then (GWT) format and documented the product write-up.',
      'Ran product demos for customers.',
    ],
    features: ['Given-When-Then acceptance scenarios', 'Bug identification with the PQM team', 'Product write-up documentation', 'Customer demos'],
    metrics: [],
    palette: jade,
    motif: 'verify',
  },
  {
    id: 'user-management-iam',
    title: 'User Management & IAM',
    year: 'Now',
    genre: 'Retail Banking • Identity & Access',
    logline: 'Identity and access management for the whole lending product — the production currently filming.',
    stack: ['IAM', 'User Management', 'Business Requirements', 'User Stories'],
    build: ['Currently working on User Management and IAM (Identity & Access Management) across the whole system of the product.'],
    features: ['User management across the product', 'Identity & access management', 'Platform-wide scope'],
    metrics: [],
    palette: violet,
    motif: 'lock',
  },
  {
    id: 'herbal-llm',
    title: 'Herbal Literature LLM',
    year: '2025',
    genre: 'NLP • LLM • Biomedical',
    logline: 'BS thesis — identifying the potential of ginger for arthritis treatment in the research literature using an LLM.',
    stack: ['Python', 'BERT', 'LLM', 'FastAPI', 'Gradio'],
    build: [
      'Designed and executed an advanced NLP and Machine Learning tool to identify Indian herbs with potential therapeutic efficacy, leveraging research articles for comprehensive biomedical analysis.',
      'Built an interactive AI-powered web application using Gradio and FastAPI, enabling users to upload PDF files and extract structured biomedical information using BERT-based weights and sentence highlighting.',
    ],
    features: [
      'PDF upload & parsing',
      'Structured biomedical information extraction',
      'BERT-based weights',
      'Sentence highlighting',
      'Gradio front end on a FastAPI back end',
    ],
    metrics: [],
    palette: crimson,
    motif: 'document',
  },
  {
    id: 'underwater-fish-tracking',
    title: 'Underwater Fish Tracking',
    year: '2024',
    genre: 'Computer Vision • Deep Learning',
    logline: 'A YOLOv5 pipeline that detects and tracks fish in challenging underwater video — built at the Underwater AI Lab, IIT Jammu.',
    stack: ['Python', 'YOLOv5', 'Deep Learning'],
    build: ['Collaborated on underwater video analysis, developing a YOLOv5 deep learning pipeline to detect and track fish in challenging aquatic environments.'],
    features: ['Fish detection in underwater video', 'Multi-frame tracking', 'Robust to challenging aquatic conditions'],
    metrics: [],
    palette: ocean,
    motif: 'detect',
  },
  {
    id: 'urban-scene-generation',
    title: '3D Urban Scene Generation',
    year: 'IISER',
    genre: '3D Vision • Generative',
    logline: 'A pipeline that generates 3D urban scenes from layout priors, validated on IISER Bhopal’s 3D structure datasets.',
    stack: ['Python', 'Deep Learning', '3D Vision'],
    build: ['Developed a 3D urban scene generation pipeline using layout priors, validating results on IISER Bhopal’s 3D structure datasets.'],
    features: ['Layout-prior–driven generation', 'Validation on IISER Bhopal 3D structure datasets'],
    metrics: [],
    palette: violet,
    motif: 'city',
  },
  {
    id: 'point-cloud-segmentation',
    title: 'Boundary-Aware Point Clouds',
    year: 'IISER',
    genre: '3D Vision • Segmentation',
    logline: 'Contrastive boundary learning for point cloud segmentation, sharpening accuracy near object edges.',
    stack: ['Python', 'PyTorch', 'Point Clouds'],
    build: ['Applied contrastive boundary learning for point cloud segmentation, enhancing accuracy near object edges using geometric priors and neighborhood features.'],
    features: ['Contrastive boundary learning', 'Geometric priors', 'Neighborhood features', 'Better accuracy near object edges'],
    metrics: [],
    palette: jade,
    motif: 'points',
  },
  {
    id: 'domain-adaptation',
    title: 'Semi-Supervised Adaptation',
    year: 'IISER',
    genre: 'Deep Learning • Generalization',
    logline: 'Semi-supervised domain adaptation to help deep learning models generalize to unseen data.',
    stack: ['Python', 'Deep Learning'],
    build: ['Enforced semi-supervised domain adaptation to improve deep learning model generalization on unseen data.'],
    features: ['Semi-supervised learning', 'Domain adaptation', 'Generalization to unseen data'],
    metrics: [],
    palette: amber,
    motif: 'domains',
  },
  {
    id: 'social-anxiety-analytics',
    title: 'Social Anxiety Analytics',
    year: '2023',
    genre: 'Data Analysis • ML',
    logline: 'Data analysis and ML modeling of social anxiety across college batches at the System and Informatics Lab, IISER Bhopal.',
    stack: ['Python', 'Scikit-Learn', 'SVM', 'Logistic Regression', 'KNN'],
    build: [
      'Conducted data analysis and ML modeling on social anxiety across college batches using SVM, Logistic Regression and KNN, identifying year-wise differences and achieving strong assessment performance.',
    ],
    features: ['Exploratory analysis across college batches', 'Year-wise comparison', 'SVM, Logistic Regression & KNN models'],
    metrics: [{ value: '3', label: 'ML models compared — SVM, Logistic Regression, KNN' }],
    palette: crimson,
    motif: 'chart',
  },
];

export const originalsBlurb = 'Three productions from the lending floor at Nucleus Software, plus six from data analysis, an LLM-powered thesis and applied ML research. Open any title for the full story.';
export const originalsPeriod = '2023 – Now';

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'gate-da',
    title: 'Top 2% Nationally',
    org: 'GATE DA · 2025',
    detail: 'All India Rank in the top 2% in GATE Data Science & Artificial Intelligence.',
    laurel: 'National Exam',
  },
  {
    id: 'iiser-aptitude',
    title: 'Top 10% in India',
    org: 'IISER Aptitude Test · 2021',
    detail: 'Placed in the top 10% nationally in the IISER Aptitude Test.',
    laurel: 'National Exam',
  },
  {
    id: 'kabaddi',
    title: 'Kabaddi Gold',
    org: 'IISM',
    detail: 'Gold medal in kabaddi at IISM.',
    laurel: 'Gold Medal',
  },
  {
    id: 'sports-excellence',
    title: 'Sports Excellence',
    org: 'Certificate · 2026',
    detail: 'Awarded a Certificate of Sports Excellence.',
    laurel: 'Recognition',
  },
  {
    id: 'academics',
    title: '97% · 9.7 CGPA',
    org: 'School & Intermediate',
    detail: '97% in Intermediate (Telangana State Board) and a 9.7 CGPA in Secondary School.',
    laurel: 'Academic',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** No certifications are listed on the resume — the "Certified" rail is hidden while this is empty. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'product-analytics',
    title: 'Product Analytics',
    subtitle: 'Metrics that drive product decisions',
    skills: [
      { name: 'Funnel Analysis', mono: 'Fn', note: 'Core' },
      { name: 'Retention Analysis', mono: 'Rt' },
      { name: 'A/B Testing', mono: 'Ab' },
      { name: 'Hypothesis Testing', mono: 'Ht' },
      { name: 'Customer Segmentation', mono: 'Cs' },
      { name: 'RCA', mono: 'Rc' },
      { name: 'Business Metrics', mono: 'Bm' },
      { name: 'KPI Tracking', mono: 'Kp' },
    ],
  },
  {
    id: 'business-analysis',
    title: 'Business Analysis',
    subtitle: 'From requirement to delivery',
    skills: [
      { name: 'Business Requirements', mono: 'Br', note: 'Daily' },
      { name: 'API Requirements', mono: 'Ap' },
      { name: 'Functional Specifications', mono: 'Fs' },
      { name: 'User Stories', mono: 'Us' },
      { name: 'Process Flows', mono: 'Pf' },
      { name: 'Traceability Matrices', mono: 'Tm' },
      { name: 'ATDD (Given-When-Then)', mono: 'At' },
      { name: 'Functional Testing', mono: 'Ft' },
      { name: 'Product Documentation', mono: 'Pd' },
      { name: 'Customer Demos', mono: 'Cd' },
      { name: 'Agile', mono: 'Ag' },
      { name: 'Stakeholder Collaboration', mono: 'Sc' },
    ],
  },
  {
    id: 'domain',
    title: 'Domain',
    subtitle: 'Retail Banking — Lending',
    skills: [
      { name: 'Retail Banking', mono: 'Rb', note: 'Current' },
      { name: 'Lending', mono: 'Ln' },
      { name: 'Lead Management', mono: 'Lm' },
      { name: 'Contact Point Verification', mono: 'Cp' },
      { name: 'User Management & IAM', mono: 'Ia' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    subtitle: 'Delivery, APIs, process & dashboards',
    skills: [
      { name: 'Jira', mono: 'Ji', note: 'Daily' },
      { name: 'Confluence', mono: 'Cf' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Swagger', mono: 'Sw' },
      { name: 'Power BI', mono: 'Pb' },
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Draw.io', mono: 'Dr' },
      { name: 'Visio', mono: 'Vs' },
      { name: 'Lucidchart', mono: 'Lc' },
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    subtitle: 'Analysis & visualization',
    skills: [
      { name: 'SQL', mono: 'Sq', note: 'Daily' },
      { name: 'Advanced Excel', mono: 'Xl' },
      { name: 'EDA', mono: 'Ed' },
      { name: 'Data Visualization', mono: 'Vz' },
      { name: 'Data Cleaning', mono: 'Dc' },
      { name: 'Data Validation', mono: 'Dv' },
      { name: 'Data Quality Assessment', mono: 'Dq' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Languages',
    skills: [
      { name: 'SQL', mono: 'Sq', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'R', mono: 'R' },
    ],
  },
  {
    id: 'ai-for-product',
    title: 'AI for Product',
    subtitle: 'Applied to product & business problems',
    skills: [
      { name: 'LLMs', mono: 'Lm' },
      { name: 'NLP', mono: 'Nl' },
      { name: 'Machine Learning', mono: 'Ml' },
      { name: 'Classification Models', mono: 'Cm' },
      { name: 'AI Prototyping', mono: 'Pr' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    subtitle: 'Data, ML & serving',
    skills: [
      { name: 'Pandas', mono: 'Pd' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Matplotlib', mono: 'Mp' },
      { name: 'Scikit-Learn', mono: 'Sk' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'TensorFlow', mono: 'Tf' },
      { name: 'PyTorch', mono: 'Pt' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the experience, projects or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  RCA: ['Lending workflow bottleneck analysis — Nucleus Software'],
  'KPI Tracking': ['Data-driven process improvements — Nucleus Software'],
  'Customer Segmentation': ['Year-wise cohort comparison — Social Anxiety Analytics'],
  'Hypothesis Testing': ['Year-wise differences — Social Anxiety Analytics'],
  'Business Requirements': ['Lead Management — Nucleus Software'],
  'API Requirements': ['CPV & LEAD workflows — Nucleus Software'],
  'Functional Specifications': ['CPV & LEAD workflows — Nucleus Software'],
  'User Stories': ['Lead Management', 'Contact Point Verification'],
  'Process Flows': ['Workflow documentation — Nucleus Software'],
  'Traceability Matrices': ['Requirement traceability — Nucleus Software'],
  'ATDD (Given-When-Then)': ['Lead Management', 'Contact Point Verification'],
  'Functional Testing': ['Bug identification with PQM — Contact Point Verification'],
  'Product Documentation': ['Product write-up — Contact Point Verification'],
  'Customer Demos': ['Contact Point Verification'],
  'Retail Banking': ['Nucleus Software — lending product'],
  Lending: ['Lead Management', 'Contact Point Verification', 'User Management & IAM'],
  'Lead Management': ['Backend module, end to end — Nucleus Software'],
  'Contact Point Verification': ['Stories, GWT, testing & demos — Nucleus Software'],
  'User Management & IAM': ['Current work — Nucleus Software'],
  Agile: ['Product Owners, Developers & QA — Nucleus Software'],
  'Stakeholder Collaboration': ['Stakeholders & Product Managers — Lead Management', 'PQM team & customers — CPV'],
  SQL: ['Lending workflow analysis — Nucleus Software'],
  'Advanced Excel': ['Lending workflow analysis — Nucleus Software'],
  EDA: ['Social Anxiety Analytics'],
  Python: ['Herbal Literature LLM', 'Social Anxiety Analytics'],
  LLMs: ['Herbal Literature LLM (BS thesis)'],
  NLP: ['Herbal Literature LLM (BS thesis)'],
  'Machine Learning': ['Social Anxiety Analytics', 'Research at IIT Jammu & IISER Bhopal'],
  'Classification Models': ['SVM, Logistic Regression & KNN — Social Anxiety Analytics'],
  'AI Prototyping': ['Gradio + FastAPI PDF-extraction app — Herbal Literature LLM'],
  'Scikit-Learn': ['Social Anxiety Analytics'],
  FastAPI: ['Herbal Literature LLM'],
  PyTorch: ['Boundary-Aware Point Clouds'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2019 – 2021',
    synopsis: 'School and Intermediate in Telangana — the years that set the bar.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Secondary School at Bhashayam Blooms under the Telangana Board — finishing with a 9.7 CGPA.',
        tags: ['SSC', 'CGPA 9.7'],
        runtime: '2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Ninety-Seven',
        description: 'Intermediate at Sri Chaitanya Junior College, State Board of Intermediate Education, Telangana — 97%.',
        tags: ['Intermediate', '97%'],
        runtime: '2019 – 2021',
        palette: crimson,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Data Science',
    period: '2021 – 2025',
    synopsis: 'BS in Data Science and Engineering at IISER Bhopal — from the first dataset to the first research lab.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Admission',
        description: 'Top 10% in India in the IISER Aptitude Test, opening the door to a BS in Data Science and Engineering at IISER Bhopal.',
        tags: ['IISER Bhopal', 'Top 10%'],
        runtime: '2021',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Data Analyst',
        description: 'Data Analyst Researcher at the System and Informatics Lab — modeling social anxiety across college batches with SVM, Logistic Regression and KNN.',
        tags: ['Python', 'SVM', 'KNN', 'Logistic Regression'],
        runtime: 'May – Nov 2023',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Raider',
        description: 'Gold medal in kabaddi at IISM.',
        tags: ['Kabaddi', 'Gold'],
        runtime: 'IISM',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'The Research Arc',
    period: '2024 – 2025',
    synopsis: 'Deep learning in the field and in the lab — underwater video, 3D scenes, point clouds and an LLM thesis.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Into the Deep',
        description: 'Summer Research Fellow at the Underwater AI Lab, IIT Jammu — a YOLOv5 pipeline to detect and track fish in challenging aquatic environments.',
        tags: ['YOLOv5', 'Computer Vision'],
        runtime: 'May – Jul 2024',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'Building Worlds',
        description: '3D urban scene generation with layout priors, contrastive boundary learning for point clouds, and semi-supervised domain adaptation.',
        tags: ['3D Vision', 'Point Clouds', 'Domain Adaptation'],
        runtime: 'IISER Bhopal',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Thesis',
        description: 'Identifying the potential of ginger for arthritis treatment in the literature using an LLM — with a Gradio + FastAPI app for PDF extraction.',
        tags: ['NLP', 'LLM', 'BERT', 'FastAPI'],
        runtime: 'Dec 2024 – Jun 2025',
        palette: crimson,
      },
      {
        code: 'S03 E04',
        title: 'The Top Two Percent',
        description: 'GATE Data Science & AI — All India Rank in the top 2% nationally.',
        tags: ['GATE DA', 'Top 2%'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Analyst',
    period: '2025 – Present',
    synopsis: 'Solutions Analyst at Nucleus Software, Noida — Retail Banking lending: Lead Management, Contact Point Verification and now User Management & IAM.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Lead',
        description: 'Backend Lead Management, end to end — business requirements, user stories and ATDD, with stakeholders and Product Managers.',
        tags: ['Lead Management', 'User Stories', 'ATDD'],
        runtime: 'Shipped',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Verifier',
        description: 'Contact Point Verification — user stories, testing and bug triage with PQM, Given-When-Then ATDD, the product write-up and customer demos.',
        tags: ['CPV', 'GWT', 'Customer Demos'],
        runtime: 'Shipped',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Optimizer',
        description: 'Analyzing lending workflows with SQL and Excel to surface bottlenecks, manual touchpoints and process inefficiencies.',
        tags: ['SQL', 'Excel', 'Process Improvement'],
        runtime: 'Nucleus Software',
        palette: amber,
      },
      {
        code: 'S04 E04',
        title: 'The Gatekeeper',
        description: 'User Management & IAM — identity and access management for the whole product.',
        tags: ['IAM', 'User Management'],
        runtime: 'Now filming',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc: product and business roles where data, analysis and AI shape what gets built.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Product Chapter',
        description: 'Heading for Product Analyst, Senior Data Analyst, Associate Product Manager and Business Analyst roles — funnels, retention, A/B testing and segmentation, with AI in the toolkit.',
        tags: ['Product Analyst', 'Senior Data Analyst', 'APM', 'Business Analyst'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Solutions Analyst', detail: 'Retail Banking • Lending', palette: ocean },
  { label: 'Shipped', title: 'Lead Management', detail: 'Backend • BRs → stories → ATDD', palette: ocean },
  { label: 'Shipped', title: 'CPV', detail: 'GWT • PQM • customer demos', palette: jade },
  { label: 'Now filming', title: 'User Mgmt & IAM', detail: 'Across the whole product', palette: violet },
  { label: 'Product analytics', title: 'Funnels & A/B', detail: 'Retention • Segmentation • RCA', palette: crimson },
  { label: 'Daily tools', title: 'SQL + Jira', detail: 'Excel • Power BI • Confluence • Postman', palette: amber },
  { label: 'National rank', title: 'GATE DA', detail: 'Top 2% nationally • 2025', palette: jade },
  { label: 'AI in the toolkit', title: 'LLM Insights', detail: 'BS thesis • BERT • FastAPI', palette: crimson },
  { label: 'Alma mater', title: 'IISER Bhopal', detail: 'BS Data Science & Engineering', palette: violet },
  { label: 'On the mat', title: 'Kabaddi Gold', detail: 'IISM', palette: amber },
];

/** Hero billboard: meta row and the floating chips beside the portrait. */
export const hero = {
  badge: 'PRODUCT',
  meta: ['Solutions Analyst · Nucleus', 'BS Data Science · IISER', 'GATE DA · Top 2%'],
  chips: [
    { text: 'Stories → ATDD (GWT)', sub: 'Business analysis' },
    { text: 'Retail Banking · Lending', sub: 'Domain' },
    { text: 'SQL · Excel · Python', sub: 'Analytics stack' },
  ],
};

/** About Me fact grid. */
export const aboutFacts = [
  { k: 'Now', v: 'Solutions Analyst · Retail Banking', s: 'Nucleus Software · Lending — Lead Mgmt, CPV, IAM' },
  { k: 'Open to', v: 'Product & Business roles', s: 'Product Analyst · Sr. Data Analyst · APM · BA' },
  { k: 'Toolkit', v: 'SQL, Excel & Power BI', s: 'with Jira, Confluence, Postman, Swagger & Python' },
  { k: 'Studied', v: 'BS, Data Science & Engineering', s: 'IISER Bhopal · 2021 – 2025 · ' + profile.location },
];

/** Stat strip next to the resume sheet. */
export const resumeStats = [
  { v: 'Top 2%', k: 'GATE DA' },
  { v: String(projects.length), k: 'Originals' },
  { v: String(experience.length), k: 'Roles' },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Now',
    title: 'Product & Business Analyst',
    lines: ['Solutions Analyst · Nucleus Software · Retail Banking — Lending', 'Shipped: Lead Management (backend) · Contact Point Verification', 'Now: User Management & IAM across the product'],
  },
  {
    kicker: 'Skills',
    title: 'Data → Decisions.',
    lines: ['Funnels · Retention · A/B testing · RCA · Segmentation', 'SQL · Advanced Excel · Power BI · Tableau · Python', 'Jira · Confluence · Postman · Swagger · Draw.io'],
    chips: ['SQL', 'Power BI', 'Jira', 'Postman', 'A/B Testing', 'Funnels'],
  },
  {
    kicker: 'Education',
    title: 'BS · Data Science',
    lines: ['IISER Bhopal — Data Science and Engineering', '2021 – 2025'],
    chips: ['GATE DA · Top 2%', 'IISER Aptitude · Top 10%'],
  },
  {
    kicker: 'With AI',
    title: 'AI in the Toolkit',
    lines: ['LLM thesis — structured extraction with BERT, Gradio & FastAPI', 'ML modeling with SVM, Logistic Regression & KNN', 'Applied research at IIT Jammu & IISER Bhopal'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['GATE DA — Top 2% nationally', 'IISER Aptitude Test — Top 10% in India', 'Kabaddi Gold — IISM'],
  },
  {
    kicker: 'Open to',
    title: 'The Next Role',
    lines: ['Product Analyst · Senior Data Analyst', 'Associate Product Manager · Business Analyst'],
  },
];

export type ProfileId = 'tharun' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'tharun',
    name: 'Tharun',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Hiring Manager',
    blurb: 'Skills, experience & projects first',
    color: '#46e3a8',
    order: ['skills', 'about', 'originals', 'journey', 'moments', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

const momentsMeta = certifications.length
  ? `${achievements.length} Moments • ${certifications.length} Certifications`
  : `${achievements.length} Moments • Awards & ranks`;

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Product & business focus', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • ${originalsPeriod}`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: momentsMeta, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
