export interface ResItem { title: string; url: string; note: string; }
export interface ResGroup { label?: string; items: ResItem[]; }
export interface ResTopic { topic: string; groups: ResGroup[]; }

export const resources: ResTopic[] = [
  {
    topic: 'Mind / Body',
    groups: [
      { label: 'Adults', items: [
        { title: 'The Secret to Healing Illness', url: 'https://www.youtube.com/watch?v=qUkEIjmXjB4', note: 'How to use nature and the quantum field (e.g. spirit) to heal the mind and body' },
        { title: 'The Body Keeps the Score', url: 'https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748', note: 'How developmental trauma impacts brain development and leads to mental illness' },
        { title: 'Healing the Fragmented Selves of Trauma Survivors', url: 'https://www.amazon.com/Healing-Fragmented-Selves-Trauma-Survivors/dp/0415708230', note: 'Overcoming the internalized self-alienation inherent in developmental trauma' },
        { title: "Why Zebras Don't Get Ulcers", url: 'https://www.amazon.com/Why-Zebras-Dont-Ulcers-Third/dp/0805073698', note: 'How the human ego and threat system interact to create chronic stress and consequent disease' },
        { title: 'When the Body Says No', url: 'https://www.amazon.com/When-Body-Says-Cost-Stress/dp/0470923350', note: 'The role that developmental trauma plays in illness and disease' },
        { title: "It Didn't Start with You", url: 'https://www.amazon.com/Didnt-Start-You-Inherited-Family/dp/1101980389', note: 'The epigenetic science of inherited trauma' },
        { title: 'In the Realm of Hungry Ghosts', url: 'https://www.amazon.com/Realm-Hungry-Ghosts-Encounters-Addiction/dp/155643880X', note: 'The bio-logical cause of addiction and how to treat it' },
        { title: 'Behave', url: 'https://www.amazon.com/Behave-Biology-Humans-Best-Worst/dp/1594205078', note: 'A thorough documentation of the biological anthropology of the human organism' },
        { title: 'Accessing the Healing Power of the Vagus Nerve', url: 'https://www.amazon.com/Accessing-Healing-Power-Vagus-Nerve/dp/1623170249', note: "How to unlock the self-healing power of Stephen Porges's Polyvagal Theory" },
        { title: 'The Polyvagal Theory', url: 'https://www.amazon.com/Polyvagal-Theory-Neurophysiological-Communication-Self-regulation/dp/0393707008', note: 'Neurophysiological foundations of emotions, attachment, communication, and self-regulation' },
        { title: 'Sapiens', url: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316095', note: 'Evolutionary biology of the human organism and how it has led to our recent behavior as a species' },
      ]},
      { label: 'Kids', items: [
        { title: 'Trauma Proofing Your Kid', url: 'https://www.amazon.com/dp/B08SPZ91SB', note: "How to support your child through potentially traumatic situations, so they don't develop PTSD" },
        { title: "Child Development: A Practitioner's Guide", url: 'https://www.amazon.com/Child-Development-Fourth-Practitioners-Adolescents/dp/1462542999', note: 'An overview of the phases of child development and how parents can support healthy maturation' },
        { title: 'Neuro-sequential Model of Therapy', url: 'https://www.neurosequential.com/', note: 'How the brain develops naturally, and how trauma impacts that development' },
        { title: 'Brainstorm', url: 'https://www.amazon.com/Brainstorm-Power-Purpose-Teenage-Brain/dp/158542935X', note: 'How the teenage brain differs from adolescents and adults, plus how to support the teenage phase of development' },
      ]},
    ],
  },
  {
    topic: 'Spirit',
    groups: [{ items: [
      { title: 'Awakening to the Spirit World', url: 'https://www.amazon.com/Awakening-Spirit-World-Shamanic-Revelation/dp/1591797500', note: 'An overview of and ways to engage with the eco-spiritual world of Shamanism' },
      { title: 'Lessons from the 12 Archangels', url: 'https://www.amazon.com/Lessons-12-Archangels-Divine-Intervention/dp/1844097269', note: 'Channeled messages from the Archangels to help humans wake up to their divinity' },
      { title: 'The Dream, the Journey, Eternity and God', url: 'https://www.amazon.com/Dream-Journey-Eternity-God-Channeled-ebook/dp/B0BF8Q18L4', note: "Channeled 12D wisdom about the nature of the universe and humanity's power to shape its own experience" },
      { title: 'The Wisdom of the Council', url: 'https://www.amazon.com/Wisdom-Council-Channeled-Messages-Purpose-ebook/dp/B09RPD8P9M', note: 'Channeled messages of 12D wisdom to help human beings thrive' },
      { title: 'The Awakened Way', url: 'https://www.amazon.com/Awakened-Way-Making-Divinely-Guided/dp/1401978436', note: 'How to live a life guided by unseen wisdom' },
      { title: 'The Great Awakening', url: 'https://www.amazon.com/Great-Awakening-Prophesized-Transformation-Enlightenment/dp/097947390X', note: 'Details on the prophesized shift from 3D to 5D as earth enters her ascension process' },
      { title: 'The Soul Retrieval Journey', url: 'https://www.amazon.com/Soul-Retrieval-Mending-Fragmented-Self/dp/0061227862', note: 'Bringing the soul back into the body after trauma and disconnection' },
      { title: 'Spiritual Emergency', url: 'https://www.amazon.com/Spiritual-Emergency-Personal-Transformation-Consciousness/dp/0874775388', note: 'An overview of the phenomenon of waking up to the truth of spirit through the body and mind' },
      { title: 'Being Peace', url: 'https://www.amazon.com/Being-Peace-Thich-Nhat-Hanh/dp/188837540X', note: 'How to tap into the greater truth of your quantum entanglement with all things to find peace' },
    ]}],
  },
  {
    topic: 'Community',
    groups: [{ items: [
      { title: 'Belonging', url: 'https://www.amazon.com/Belonging-Remembering-Ourselves-Toko-pa-Turner/dp/1775111202', note: 'How humans are wired for community connection to each other and the land' },
      { title: 'Tribe', url: 'https://www.amazon.com/Tribe-Homecoming-Belonging-Sebastian-Junger/dp/1455566381', note: 'How conflicts and threats bring communities and societies together in ways that improve health' },
      { title: 'The Myth of Normal: Trauma, Illness, and Healing in a Toxic Culture', url: 'https://www.youtube.com/watch?v=vMax92zeVck', note: 'How our environments are making us sick by neglecting and abusing our true nature' },
      { title: 'Finding Our True Self in This Crazy World', url: 'https://www.youtube.com/watch?v=vMax92zeVck', note: 'Historical and multi-generational social and systemic trauma' },
    ]}],
  },
  {
    topic: 'Environment',
    groups: [{ items: [
      { title: 'Braiding Sweetgrass', url: 'https://www.amazon.com/Braiding-Sweetgrass-Indigenous-Scientific-Knowledge/dp/1571313567', note: 'A Native American botanist explains the eco-spiritual truth of our interconnection with mother nature' },
      { title: 'The Intelligence of Trees', url: 'https://www.amazon.com/Intelligent-Trees-Peter-Wohlleben/dp/B01LWIEY4F', note: 'How forests use the mycelium like an internet to share information and resources to keep the ecosystem healthy' },
      { title: "Building the New Earth, Humanity's Great Opportunity", url: 'https://www.youtube.com/watch?v=bWGTiKrchOU', note: "Humanity's opportunity to heal the grief of perceived disconnection from nature in pursuit of a better future" },
    ]}],
  },
  {
    topic: 'Science & Spirituality',
    groups: [{ items: [
      { title: 'Every Life is on Fire', url: 'https://www.amazon.com/Every-Life-Fire-Thermodynamics-Explains/dp/1541699017', note: 'How thermodynamics explains the origins of living things, and puts our organic intelligence in context' },
      { title: 'The Neuroscience of Spirituality, Synchronicity & The Awakened Brain', url: 'https://www.youtube.com/watch?v=DUe0oaH7GtQ', note: 'The brain science of the spiritual interconnection of all things' },
      { title: 'Proof That Reality Is An Illusion: The Mystery Beyond Space-Time', url: 'https://www.youtube.com/watch?v=I7z26d8IsUc', note: 'The theory that consciousness creates spacetime, and thus the illusion of the human experience' },
      { title: 'The Science of Transformation, Pineal Gland Time Travel & Mystical Experiences', url: 'https://www.youtube.com/watch?v=QQIwZ41Ro1w', note: 'The neuroscience of transforming your biology by letting go of the past' },
      { title: 'Becoming Supernatural', url: 'https://www.amazon.com/Becoming-Supernatural/dp/1781808317', note: 'Unlocking your quantum potential to heal your physical body through consciousness' },
      { title: 'Letting Go', url: 'https://www.amazon.com/Letting-David-Hawkins-M-D-Ph-D/dp/1401945015', note: 'The vibration of emotion and how it correlates to disease vs. health and happiness vs. suffering' },
    ]}],
  },
  {
    topic: 'Psychedelics',
    groups: [
      { label: 'Education', items: [
        { title: 'Swimming in the Sacred', url: 'https://www.amazon.com/Swimming-Sacred-Wisdom-Psychedelic-Underground/dp/1608687309', note: 'Elder female guide wisdom at the intersection of trauma healing and spirituality' },
        { title: 'How to Change Your Mind', url: 'https://www.netflix.com/title/80229847', note: 'How psychedelics can help the entire human organism to heal and grow' },
      ]},
      { label: 'Support', items: [
        { title: 'Spirit Pharmacist', url: 'https://www.spiritpharmacist.com/', note: 'Drug interactions guide, reduced-fee consultation, courses and guides, email-based questions and answers' },
        { title: 'Fireside Project', url: 'https://firesideproject.org/', note: 'Psychedelic prep and integration coaching, and a trip support helpline' },
      ]},
    ],
  },
];
