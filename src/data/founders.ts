export interface Tier { name: string; from: string; essence: string; benefits: string[]; }
export const tiers: Tier[] = [
  { name: 'Substrate Circle', from: 'From $5,000', essence: 'An ocean of those who are ready for sea change.', benefits: [
    "Name etched on the Founders' Stone at the property entry",
    'Lifetime invitation to all four seasonal gatherings',
    "Annual founder's letter and seasonal land updates",
    'Early access and member pricing on all programming',
    "Recognition in the printed Founders' Chronicle",
  ]},
  { name: 'Root Circle', from: 'From $25,000', essence: 'The hidden architecture that anchors what grows.', benefits: [
    "Permanent recognition on the Founders' Stone and maloka entryway",
    "Two reserved seats at the Annual Founders' Convergence",
    'One complimentary three-day ceremonial weekend each year',
    'Priority booking on all retreats and supervised programming',
    'Everything in Substrate Circle',
  ]},
  { name: 'Hearth Circle', from: 'From $75,000', essence: 'Where the fire is tended.', benefits: [
    'Naming rights on a hearth-scale feature — fireplace, bench, or sauna stone',
    'Two complimentary ceremonial retreats annually',
    'Annual private steward dinner with the founder',
    'One personal integration consultation each year',
    'Everything in Root Circle',
  ]},
  { name: 'Maloka Circle', from: 'From $250,000', essence: 'The sacred container itself.', benefits: [
    'Naming rights on a structure or interior feature',
    'Four complimentary ceremonial retreats annually for member and family',
    "Standing voice on the Founders' Advisory Council",
    'Inclusion in the founding documentary and archive',
    'Everything in Hearth Circle',
  ]},
  { name: 'Old Growth Circle', from: 'From $1,000,000', essence: 'The mother trees that anchor the entire forest.', benefits: [
    'Named in perpetuity on a flagship element of the land',
    'Lifetime, transferable patronage rights for your lineage',
    'Annual private retreat with a dedicated practitioner team',
    'Land Legacy Steward designation and a permanent Advisory seat',
    'Everything in Maloka Circle',
  ]},
];

export const steps = [
  { n: '01', t: 'Begin the conversation', d: 'Schedule a personal call so we understand what draws you to Lichen.' },
  { n: '02', t: 'Choose your tier', d: 'Select the level that matches your capacity and intended depth.' },
  { n: '03', t: 'Complete your commitment', d: 'Confirm in writing — a single gift or a twelve-month pledge.' },
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
  { q: 'Is my founding contribution tax-deductible?', a: "Lichen is finalizing its legal architecture — likely a charitable foundation holding the land and scholarship work alongside an operating entity. You receive full documentation appropriate to your contribution, and we walk through tax treatment with you before any commitment." },
  { q: 'Can I deepen my commitment over time?', a: 'Yes — commitments compound. A member who begins at Substrate is welcomed into Root, Hearth, or beyond as contributions accumulate. There is no penalty for starting small.' },
  { q: 'What if I want to remain anonymous?', a: 'Anonymity is honored at every tier, without exception. You receive the same access and invitations; your name appears nowhere unless you ask for it to.' },
  { q: 'Can a business, family foundation, or DAF contribute?', a: 'Yes. We welcome corporate contributions, matching gifts, and grants from family foundations and donor-advised funds, and coordinate documentation with you and your advisors.' },
];
