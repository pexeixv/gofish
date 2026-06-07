export interface WorkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  icon: string;
  image: string;
}

export const workData: WorkItem[] = [
  {
    id: "indian-racing-festival",
    title: "Indian Racing Festival",
    category: "Media Consulting",
    image: "https://picsum.photos/seed/racing/1200/800",
    client: "Indian Racing League",
    year: "2024",
    description: "End-to-end media strategy, planning & buying across TV, OOH, in-cinema & print.",
    challenge: "Establishing a premier motorsport event in India and driving massive audience engagement both on-ground and digitally.",
    solution: "Managed celebrity-led team ownerships across three franchises and executed a 360-degree media campaign.",
    results: ["20,000+ On-Ground Attendees", "14B+ Digital Impressions", "Global OTT Partnerships"],
    gallery: ["https://picsum.photos/seed/racing1/800/600", "https://picsum.photos/seed/racing2/800/600"]
  },
  {
    id: "magic-moments-launch",
    title: "Magic Moments Launch",
    category: "Celebrity Engagement",
    image: "https://picsum.photos/seed/magic/1200/800",
    client: "Radico Khaitan Ltd.",
    year: "2018",
    description: "Executed a 360-degree media campaign 'Magic is in the Air' to launch Radico Khaitan brand 'Magic Moments'.",
    challenge: "Create a dominant market presence for a new premium brand in a highly competitive sector.",
    solution: "Onboarded prominent celebrities Jacqueline Fernandes & Kartik Aaryan and drove a mass rollout across TV, cinema, and digital.",
    results: ["+50% Q3 Profit Growth", "20% Share Price Increase", "+15% YoY Revenue Growth"],
    gallery: ["https://picsum.photos/seed/magic1/800/600", "https://picsum.photos/seed/magic2/800/600"]
  },
  {
    id: "z-pop-dream",
    title: "Z-POP Dream (India)",
    category: "Media Consulting",
    image: "https://picsum.photos/seed/kpop/1200/800",
    client: "Z-POP",
    year: "2020",
    description: "End-to-end ATL strategy & execution for India market entry to increase app downloads.",
    challenge: "Successfully introduce an international pop platform to the Indian target demographic.",
    solution: "Strategic media campaign to increase mobile app ('Glitsy') downloads across targeted digital properties.",
    results: ["30% Increase in App Downloads", "High Engagement Metrics", "Successful Market Entry"],
    gallery: ["https://picsum.photos/seed/kpop1/800/600", "https://picsum.photos/seed/kpop2/800/600"]
  },
  {
    id: "lloyd-deepika-ranveer",
    title: "Lloyd x Deepika & Ranveer",
    category: "Celebrity Engagement",
    image: "https://picsum.photos/seed/lloyd/1200/800",
    client: "Lloyd",
    year: "2022",
    description: "Landmark brand collaboration signing top-tier Bollywood superstars.",
    challenge: "Elevate Lloyd's brand positioning by associating with the ultimate power couple of Indian cinema.",
    solution: "Comprehensive campaign spanning AC, Refrigerator, and Washing Machine segments featuring Deepika Padukone and Ranveer Singh.",
    results: ["Massive Brand Recall", "Premium Audience Reach", "Sustained National Campaign"],
    gallery: ["https://picsum.photos/seed/lloyd1/800/600", "https://picsum.photos/seed/lloyd2/800/600"]
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "celebrity-engagement",
    title: "Celebrity Engagement",
    description: "Deliver strategic, cost-efficient, high-impact celebrity collaborations.",
    fullDescription: "Celebrity Partnerships Drive Modern Marketing — But only when done right. With 20+ years of expertise, Go Fish delivers strategic, high-impact celebrity collaborations. We do not manage talent; we expertly connect brands with the right faces to create synergies that drive real ROI.",
    features: ["Endorsements & Appearances", "Influencer Campaigns", "Celebrity-Led Merchandising", "Brand/Equity Partnerships"],
    process: [
      { step: "01", title: "Strategy & Planning", desc: "Identifying the perfect talent-brand fit using audience insights." },
      { step: "02", title: "Negotiations", desc: "Handling contract management and securing the right association." },
      { step: "03", title: "Execution", desc: "Campaign rollout and optimization of existing associations." }
    ],
    icon: "Star",
    image: "https://picsum.photos/seed/celeb/800/600"
  },
  {
    id: "media-consulting",
    title: "Media Consulting",
    description: "Strategic media consulting to optimize visibility, spend, & impact.",
    fullDescription: "Go Fish provides strategic media consulting to help brands and large-format events/IPs optimize visibility, spend, and impact across entertainment, sports, and commercial platforms. We unlock select media at entertainment rates.",
    features: ["End-to-End Media Planning", "TV, Radio, Outdoor & Digital", "Broadcaster Onboarding", "Part-Barter Media Partnerships"],
    process: [
      { step: "01", title: "Strategy & Buying", desc: "End-to-end media planning and execution across all mediums." },
      { step: "02", title: "IP Consulting", desc: "Consulting on media strategy for events, IPs, and sports properties." },
      { step: "03", title: "Optimization", desc: "Monitoring campaign performance to drive exponential ROI." }
    ],
    icon: "Video",
    image: "https://picsum.photos/seed/mediaconsult/800/600"
  },
  {
    id: "entertainment-sports",
    title: "Entertainment & Sports Partnerships",
    description: "Create symbiotic brand-content associations delivering high recall.",
    fullDescription: "We create seamless in-film product placements, co-branded campaigns, and sports sponsorships. Get high recall at a fraction of traditional media costs with strategic alliances.",
    features: ["In-Film Product Placements", "Out-of-Film Associations", "Film-Led Merchandising", "Sports Partnerships"],
    process: [
      { step: "01", title: "Discovery", desc: "Identifying relevant feature films, web series, and sporting events." },
      { step: "02", title: "Integration", desc: "Seamless integration of products inside the content or property." },
      { step: "03", title: "Amplification", desc: "Leveraging film imagery and assets for out-of-film communication." }
    ],
    icon: "Handshake",
    image: "https://picsum.photos/seed/sports/800/600"
  },
  {
    id: "content-production",
    title: "Content & Ad Film Production",
    description: "Powered by specialized teams to deliver high-quality ad films & content.",
    fullDescription: "Powered by specialized in-house teams & partnerships with renowned directors, delivering high-quality, cost-efficient ad films. From hero TVCs to bite-sized digital videos, we handle the entire creation cycle.",
    features: ["Ad Film Production", "Celebrity-Led Digital Content", "Behind The Scenes (BTS)", "Short-Form Content"],
    process: [
      { step: "01", title: "Ideation", desc: "Research, scripting, and pre-production planning." },
      { step: "02", title: "Production", desc: "Filming high-impact TVCs and digital content with renowned directors." },
      { step: "03", title: "Post & Amplification", desc: "Editing, packaging, and multi-platform distribution." }
    ],
    icon: "Video",
    image: "https://picsum.photos/seed/production2/800/600"
  },
  {
    id: "pr-communications",
    title: "PR & Communications",
    description: "Strategic Public Relations and Communications Marketing services.",
    fullDescription: "Our PR & Communications division, ME Biz, executes end-to-end press conferences, digital and traditional PR, and entertainment-led PR with a sharp focus on celebrity associations.",
    features: ["Press Conferences", "Digital & Traditional PR", "High-Impact Media Amplification", "Flexible Engagement Models"],
    process: [
      { step: "01", title: "Consultancy", desc: "Developing strategic PR retainers or project-based consultancy." },
      { step: "02", title: "Execution", desc: "End-to-end press conference conceptualization and media amplification." },
      { step: "03", title: "Monitoring", desc: "Ongoing media monitoring and narrative management." }
    ],
    icon: "Star",
    image: "https://picsum.photos/seed/pr/800/600"
  }
];
