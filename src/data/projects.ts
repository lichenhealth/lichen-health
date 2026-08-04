export const WP = '/img';

export interface Section { title?: string; img?: string; screenshot?: boolean; body: string[]; }
export interface Project {
  slug: string;
  nav: string;
  heroImg: string;
  eyebrow: string;
  title: string;
  intro: { img: string; body: string; learnMore?: { label: string; href: string } };
  sections: Section[];
  cta: { line: string; label: string; href: string };
  seoTitle: string;
  seoDesc: string;
}

export const projects: Project[] = [
  {
    slug: 'care',
    nav: 'Care',
    heroImg: `${WP}/2024/10/Lichen_Care_hero-1.jpg`,
    eyebrow: 'Care Model',
    title: 'Your care team forms around you',
    intro: {
      img: `${WP}/2026/01/Group-4702-1.png`,
      body: "As social primates, community connection is vital to heal and stay well. As eternal souls, harmonic resonance with the collective field of energy that governs the health of our Mind, Body and Spirit is imperative to grow and thrive. And money is still the global, current-cy through which the exchange of energies is brokered between people, plants, animals and the land. Lichen considers all of these factors when delivering a comprehensive, functional medicine plan that helps you heal by remembering your divine interconnection with the planet and the universe.",
    },
    sections: [
      { title: 'Connect', img: `${WP}/2026/01/Group-4721.svg`, body: ["Your care team assembles around you, leveraging Lichen's Concierge platform to collaborate in weaving the land, plants, animals, elements, eco-spiritual practices, western medicine, naturopathic interventions and cutting edge technology necessary to best support your unique path to healing and expansion."] },
      { title: 'Integrate', img: `${WP}/2026/01/concierge-wow.png`, screenshot: true, body: ["Your Web of Wellbeing tracks the mental, physical, spiritual, social, economic and environmental factors that are hindering your deepest healing and highest potential, weaving the organic intelligence of your care team with the artificial intelligence of Lichen's network to connect you to the next, best resources on your path to wholeness."] },
      { title: 'Deliver', img: `${WP}/2026/01/Group-4744.svg`, body: ["We translate your Web of Wellbeing into a personalized healing and growth plan. The language of your Kaleidoscope of Care maps to the mainstream medical system, making it easy to export your data for outside care coordination. Because the network's currency is pinned to the incumbent, global economic system, members can budget and coordinate their care within (and outside) the network."] },
    ],
    cta: { line: 'Ready to heal yourself?', label: 'Request to Join', href: '/signup' },
    seoTitle: 'Care — Lichen',
    seoDesc: 'Your care team forms around you — Lichen weaves community, eco-spiritual practice and modern medicine into a comprehensive, functional medicine plan.',
  },
  {
    slug: 'business',
    nav: 'Business',
    heroImg: `${WP}/2024/10/Lichen_Business_Hero.jpg`,
    eyebrow: 'Lichen Business',
    title: 'Our business supports you',
    intro: {
      img: `${WP}/2026/01/Group-4628.png`,
      body: "Lichen is the radical collaboration of a fungus and an algae. The fungus provides structure and protection while the algae provides food, allowing them to thrive where neither could survive alone. They are pioneers, providing the organic infrastructure for new ecosystems to evolve. Lichen's business is architected to lay the local, organic groundwork for the next generation of human healing, connection and collaboration.",
      learnMore: { label: 'Explore the Conscious Economy →', href: '/conscious-economy' },
    },
    sections: [
      { title: 'Revenue Model', img: `${WP}/2026/01/Ingrid-2.svg`, body: [
        "With lean operations and no investors or shareholders to pay, all profits from our Content, Community and Concierge memberships not required to run the platform's technology and fund the salaries of Lichen's minimal staff flow back into subsidizing access to the resources that members need to heal, grow, realize their purpose and enjoy their lives.",
        "Subsidies are tracked and fully transparent, because there is no shame in receiving support when you've been under-resourced by the systems that are crumbling. Concierge Services are provided for members receiving subsidies, to help them plot a course toward sovereign interdependence.",
        "Artificial intelligence is leveraged to identify and optimize the re-balancing process, helping us return to a state of reciprocity with each other and the planet as quickly and efficiently as possible.",
        "Every contribution and subsidy is tracked through Lichen's Universal Current-cy — a transparent unit of account pegged to the incumbent global economy, so value can be honored within the network and translated into the wider world. We call this Universal Value Attribution: a system that returns value to every participant, human and non-human alike.",
      ] },
      { title: 'Philanthropic Model', img: `${WP}/2026/01/countryman-stables.png`, screenshot: true, body: [
        "With a clear path to self-sustainability via member subscriptions, our 501c3 Nonprofit is poised to pass donations through to network members, which makes donating to Lichen compelling for those passionate about immediate impact. Because 100% of our technological infrastructure is focused on supporting members in collaborating with each other, we are well positioned to foster efficiency across the network.",
        "With a highly trained, AI Engineer on staff, we are ready to solve operational problems for our network members via the buildout of additional platform features as the need arises.",
      ] },
      { title: 'Land Trust', img: `${WP}/2026/01/Group-4700.svg`, body: [
        "Lichen owned and operated facilities are in full service of the community, with calendar integrations that allow local practitioners, communities and groups to book spaces and services via the app. If network members require resources to restore, protect or maintain the land on which they offer healing to the community, donations and/or revenue is passed through to the land steward via the Lichen Land Trust.",
        "If private owners wish to remove their land from the trust, they must demonstrate that any investment made in their property has been repaid to the community via free or reduced fee services. If they wish to sell the land for profit, the value added via Lichen Land Trust must be paid out to the community to use in service of healing as they see fit.",
      ] },
    ],
    cta: { line: 'Wanna invest in a better future?', label: 'Donate Now', href: '/donate' },
    seoTitle: 'Business — Lichen',
    seoDesc: "Lichen's nonprofit business model: lean operations, transparent subsidies, philanthropic pass-through and a community Land Trust.",
  },
  {
    slug: 'platform',
    nav: 'Platform',
    heroImg: `${WP}/2024/10/Lichen_platform_hero.jpg`,
    eyebrow: 'Lichen Platform',
    title: 'Our platform serves you',
    intro: {
      img: `${WP}/2026/01/mycelium.svg`,
      body: "Our platform leverages the safety and adaptability of an AI-powered, Progressive Web Application, allowing humans to share information and resources, both locally and globally. Think of it as a silicon-based mycelium partnering with human intelligence to heal and maintain balance and reciprocity at the individual, social and ecological level — just as the trees use the fungi's mycelium to share information and resources to maintain the health of the forest.",
      learnMore: { label: 'Explore the Conscious Economy →', href: '/conscious-economy' },
    },
    sections: [
      { title: 'Lichen', img: `${WP}/2026/01/platform-home.png`, screenshot: true, body: [
        "Lichen provides a comprehensive ecosystem for humans, plants, animals and land to share information and resources — organized by Social, Creative, Educational and Actionable Content, as well as a Q&A feature.",
        "Members can post and manage Events; buy, sell, trade and gift on Marketplace; conduct Courses; manage and share books, articles, music, videos, photos and memes via Library; nourish themselves and each other with Food; share their creative gifts via Art; and connect with other network members through Directory.",
        "Members can engage the entire network, or drop in to the Communities, Groups and Organizations to which they belong. Unique to each member is their My-celium, the network of Members, Providers, Organizations and Places that comprise their unique, human web.",
        "The Home, Concierge, Chat, Calendar, Save and Maps features are fully integrated with the content and utilities provided within the network, thereby creating a seamless experience for Members, Providers, Organizations, Groups and Communities to collaborate, innovate, create, play and be, together.",
        "Beneath every exchange runs Lichen's Universal Current-cy — the silicon mycelium's accounting layer. Time, knowledge, goods, services, and the contributions of plants, animals and land are all tracked and made interchangeable, pegged to the global economy so value can flow within the network and translate beyond it.",
        "All of this is live today — and every new member's first three months of full Concierge membership are free.",
      ] },
      { title: 'Community', img: `${WP}/2026/01/community-event.png`, screenshot: true, body: [
        "Inspired by the efficiency and wisdom of the Fibonacci Spiral, each Community, Group, Organization and Place that decides to use the platform enjoys their own, complete ecosystem, which includes all of the features of the greater network. The platform even allows you to spin out your own progressive web application, so members can access you via the Lichen App, or via your owned and operated app.",
        "You can further filter the information and resources of the platform by the Members, Providers, Communities, Groups and Organizations you trust. Results can be expanded to include those trusted by someone you trust. This information is kept private, thereby dissuading inauthentic endorsements while automating and scaling the process of providing (and receiving) trusted recommendations surrounding what information you digest, the goods and services you exchange, the healthcare you receive, the places you go, and the entertainment you enjoy.",
      ] },
      { title: 'Concierge', img: `${WP}/2026/01/concierge-koc.png`, screenshot: true, body: [
        "The Concierge utility provides a safe, secure and private ecosystem within the Lichen app, where practitioners can collaborate to deliver the next, best intervention on your journey of healing, growth and transformation. Integrated with Lichen's chat feature, communication is easy and seamless.",
        "Lichen providers take turns being on-call for urgent care needs, ensuring that members get support while avoiding practitioner burnout. Each member also has an (optional) AI Assistant to synthesize information, answer questions and connect you with the bio/psycho/social/spiritual/ecological information you need to unlock your own, inner wisdom to heal and grow into your highest self. Your care team reviews your Assistant's work, helping it learn from the intelligence of the plants, animals, elements and individuals who support you.",
      ] },
    ],
    cta: { line: 'Ready to build healing connections?', label: 'Explore the Ecosystem', href: '/signup' },
    seoTitle: 'Platform — Lichen',
    seoDesc: "Lichen's AI-powered Progressive Web App: a silicon-based mycelium for sharing information and resources across community, content and concierge care.",
  },
];
