export interface Tier { name: string; from: string; essence: string; recognition: string[]; experiences: string[]; }
export const tiers: Tier[] = [
  { name: 'Substrate Circle', from: 'From $5,000', essence: 'An ocean of those who are ready for sea change.',
    recognition: [
      "Name etched on the Founders' Stone at the property entry",
      'Lifetime invitation to all-tier seasonal gatherings and land workdays',
      "Annual founder's letter and seasonal land updates",
      "Recognition in the printed Founders' Chronicle",
    ],
    experiences: [
      'Priority early booking on public programming',
    ]},
  { name: 'Root Circle', from: 'From $25,000', essence: 'The hidden architecture that anchors what grows.',
    recognition: [
      "Permanent recognition on the Founders' Stone and maloka entryway",
      "Two reserved seats at the Annual Founders' Convergence",
      'Everything in Substrate Circle',
    ],
    experiences: [
      'One three-day ceremonial weekend each year',
      'Priority booking on all retreats and supervised programming',
    ]},
  { name: 'Hearth Circle', from: 'From $75,000', essence: 'Where the fire is tended.',
    recognition: [
      'Naming rights on a hearth-scale feature — fireplace, bench, or sauna stone',
      'Everything in Root Circle',
    ],
    experiences: [
      'Two ceremonial retreats annually',
      'Annual private steward dinner with the founder',
      'One personal integration consultation each year',
    ]},
  { name: 'Maloka Circle', from: 'From $250,000', essence: 'The sacred container itself.',
    recognition: [
      'Naming rights on a structure or interior feature',
      "Standing voice on the Founders' Advisory Council",
      'Inclusion in the founding documentary and archive',
      'Everything in Hearth Circle',
    ],
    experiences: [
      'Four ceremonial retreats annually for member and family',
    ]},
  { name: 'Old Growth Circle', from: 'From $1,000,000', essence: 'The mother trees that anchor the entire forest.',
    recognition: [
      'Named in perpetuity on a flagship element of the land',
      'Land Legacy Steward designation and a permanent Advisory seat',
      'Legacy recognition extending to your lineage',
      'Everything in Maloka Circle',
    ],
    experiences: [
      'Annual private retreat with a dedicated practitioner team',
    ]},
];

export const steps = [
  { n: '01', t: 'Begin the conversation', d: 'Schedule a personal call so we understand what draws you to Lichen.' },
  { n: '02', t: 'Choose your tier', d: 'Select the level that matches your capacity and intended depth.' },
  { n: '03', t: 'Complete your commitment', d: 'Confirm in writing — a single gift or a twelve-month pledge, your giving vehicle, and your path: Full Deduction, or Experiences with values disclosed.' },
  { n: '04', t: 'Receive your welcome', d: 'A personal letter, land book, and the year’s convergence calendar arrive.' },
  { n: '05', t: 'Come to the land', d: 'Your first invitation to walk the property arrives within the season.' },
];

export const calendar = [
  ['January', 'New Year Integration Convergence', 'All Tiers'],
  ['February', "Founders' Winter Briefing", 'Root + Above'],
  ['March', 'Spring Equinox Land Ceremony', 'All Tiers'],
  ['April', 'Earth Stewardship Day — Land Workday', 'All Tiers'],
  ['May', "Founders' Weekend Retreat", 'Hearth + Above'],
  ['June', "Summer Solstice Ceremony & Founders' Gala", 'All Tiers'],
  ['July', 'Practitioner Symposium', 'All Tiers'],
  ['August', 'Behind-the-Land Tour & Patron Convening', 'Maloka + Above'],
  ['September', 'Autumn Equinox Harvest Gathering', 'All Tiers'],
  ['October', "Annual Founders' Convergence", 'All Tiers'],
  ['November', 'Private Steward Dinner with the Founder', 'Hearth + Above'],
  ['December', 'Year-End Gratitude Circle & Impact Showcase', 'All Tiers'],
];

export const faqs = [
  { q: 'Is my founding contribution tax-deductible?', a: "Lichen Health is a registered 501(c)(3), and contributions are deductible as the law allows. Here is the honest version, because that's how we do everything: if you choose the Full Deduction path, your entire gift is deductible. If you choose the Experiences path, we state the fair market value of your elected experiences in writing before you commit, and your deduction is your gift minus that value — exactly as the IRS requires, with documentation to match. We're glad to walk through the details with you and your advisors before any commitment." },
  { q: 'Can I deepen my commitment over time?', a: 'Yes — commitments compound. A member who begins at Substrate is welcomed into Root, Hearth, or beyond as contributions accumulate. There is no penalty for starting small.' },
  { q: 'What if I want to remain anonymous?', a: 'Anonymity is honored at every tier, without exception. You receive the same access and invitations; your name appears nowhere unless you ask for it to.' },
  { q: 'Can a business, family foundation, or DAF contribute?', a: "Yes — and we coordinate documentation with you and your advisors. One important protection: IRS rules do not allow donors to receive personal benefits (like retreats or ceremonies) in connection with gifts from donor-advised funds, private foundations, or IRA distributions. Gifts through these vehicles are honored on the Full Deduction path — complete Recognition & Relationship, full tier standing, no experiences. Many founders pair vehicles: DAF gifts for tier standing, a personal-fund gift when they want to elect experiences. We'll help you structure it cleanly." },
  { q: "What if I don't want any perks at all?", a: 'Then you are our favorite kind of complicated. Choose the Full Deduction path at any tier — full recognition, full relationship, full deduction, nothing else. You can also waive recognition itself and give in complete anonymity.' },
];
