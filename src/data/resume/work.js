/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
// Work Experience Section
// Work Experience Section
const work = [
  {
    name: 'Colorado State University - Signal Lab',
    position: 'Machine Learning Research Assistant',
    startDate: '2023-05-01',
    summary: 'Research on TRACE project aimed at transparency and accountability in conversational AI.',
    highlights: [
      'Developed an AI-driven multimodal conversational agent combining LLMs with Theory of Mind',
      'Enhanced collaborative human-AI interactions by resolving unspoken assumptions through text, gestures, and actions',
    ],
  },
  {
    name: 'Colorado State University',
    position: 'Web Application Designer',
    startDate: '2023-06-01',
    summary: 'Designed and developed responsive web applications focused on usability, data management, and API integration.',
    highlights: [
      'Designed SQL databases for efficient storage and retrieval, optimizing web applications',
      'Implemented RESTful APIs and integrated third-party services for seamless data communication',
      'Created intuitive UI/UX designs to ensure high accessibility on both desktop and mobile platforms',
    ],
  },
  {
    name: 'Nalsoft PVT LTD',
    position: 'Senior Software Engineer - EPM',
    startDate: '2021-08-01',
    endDate: '2022-12-01',
    summary: 'Led and maintained end-to-end EPM projects on Oracle Cloud, including EPBCS and HFM applications.',
    highlights: [
      'Oversaw monthly close and maintenance for EPBCS and HFM applications, improving process efficiency',
      'Guided junior engineers on support projects, ensuring quality and alignment with client goals',
      'Coordinated with project managers and stakeholders to escalate issues and achieve project goals',
    ],
  },
  {
    name: 'Nalsoft PVT LTD',
    position: 'Software Engineer',
    startDate: '2019-06-01',
    endDate: '2021-07-01',
    summary: 'Worked on Oracle Cloud services and migrations, creating automation solutions for various client requirements.',
    highlights: [
      'Automated data loads using Python and bash scripting for streamlined operations',
      'Executed Oracle Cloud migrations, enhancing data integrity and reliability',
      'Developed complex business rules with Calc Script and Groovy, adapting to diverse client needs',
    ],
  },
];

export default work;
