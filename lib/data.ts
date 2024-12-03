import { PersonalInfo, CareerEntry, MusicCareer, TimelineDataPoint } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Serge Shima",
  age: 41,
  currentLocation: {
    city: "Tashkent",
    country: "Uzbekistan",
    since: "June 2024",
  },
  origin: {
    city: "Minsk",
    country: "Belarus",
  },
  physicalAttributes: {
    height: 178,
    weight: 95,
    appearance: [
      "Bald with two mohawk spikes",
      "Long black braided beard",
      "Curled mustache",
      "Wears glasses",
      "Square face",
      "Gray eyes",
    ],
  },
  languages: [
    { name: "Russian", level: "native" },
    { name: "English", level: "professional" },
    { name: "Belarusian", level: "professional" },
  ],
  education: {
    degree: "Bachelor in History and English",
    university: "Belarusian State Pedagogical University",
    period: "2000-2005",
  },
  personality: {
    mbti: "ENTP-A",
    traits: [
      "Altruistic",
      "Empathetic",
      "Self-ironic",
      "Humorous",
      "Creative",
      "Strategic thinker",
    ],
    beliefs: "Advaita Vedanta",
  },
};

export const careerData: CareerEntry[] = [
  {
    title: "Chief AI Officer",
    company: "TDI Group",
    period: "June 2024 - Present",
    location: "Tashkent, Uzbekistan",
    responsibilities: [
      "Leading creative advertising agency",
      "Integrating AI solutions into creative processes",
      "Developing new AI-based products",
      "Scaling marketing efforts through AI campaigns",
    ],
    skills: [
      "AI Integration",
      "Strategic Leadership",
      "Creative Management",
      "Team Leadership",
      "Product Development",
    ],
  },
  {
    title: "Head of Brand Marketing",
    company: "BNB Bank",
    period: "March 2023 - June 2024",
    location: "Minsk, Belarus",
    responsibilities: [
      "Led creative team and integrated AI solutions for marketing growth",
      "Scaled marketing efforts through AI campaigns",
      "Developed and implemented brand strategy",
    ],
    teachingExperience: [
      {
        role: "Course Author & Instructor",
        course: "Smart Marketing with AI",
        period: "2023-2024",
        location: "MBA Programs",
      }
    ],
  },
  {
    title: "Blockchain PMM Team Lead",
    company: "UniLayer.io",
    period: "February 2022 - March 2023",
    location: "Dubai, UAE",
    responsibilities: [
      "Developed MVP focusing on Cross-Chain/Interoperability",
      "Conducted market analysis and developed go-to-market strategies",
      "Wrote White Paper for the product",
      "Positioned complex B2B infrastructure",
    ],
    skills: [
      "Blockchain Technology",
      "Cross-Chain Interoperability",
      "Technical Writing",
      "Market Analysis",
    ],
  },
  {
    title: "Managing Partner & Product Director",
    company: "Kemliva Creative Bureau",
    period: "March 2018 - April 2022",
    location: "Almaty, Kazakhstan",
    responsibilities: [
      "Led digital advertising campaigns",
      "Integrated R&D with branding",
      "Managed creative teams and client relationships",
      "Developed innovative marketing solutions",
    ],
    teachingExperience: [
      {
        role: "Lead Instructor",
        course: "Путь Стратега",
        period: "September 2018 - January 2020",
        location: "IKRA, Minsk",
      }
    ],
  },
  {
    title: "Deputy Head of R&D and Gamification",
    company: "EUROTORG LLC",
    period: "February 2017 - March 2020",
    location: "Minsk, Belarus",
    responsibilities: [
      "Managed innovative promo projects",
      "Specialized in gamification, AR and VR",
      "Led development of loyalty programs",
    ],
    achievements: [
      "Generated $21M profit through Bonsticks 2-5, Team Plush, Kraina Vitamina, Alice AR Wonderland projects",
      "Successfully implemented multiple AR/VR campaigns",
    ],
    skills: [
      "Gamification",
      "AR/VR Development",
      "Project Management",
      "Innovation Strategy",
    ],
  },
  {
    title: "Creative Strategist",
    company: "AIDA Pioneer",
    period: "October 2014 - March 2017",
    location: "Minsk, Belarus",
    responsibilities: [
      "Developed creative direction and branding",
      "Created communication strategies",
      "Led more than 60 campaigns",
    ],
    publications: [
      {
        type: "Book",
        title: "Эффективный брендинг",
        description: "Руководство по инновационным стратегиям брендинга",
      }
    ],
  },
  {
    title: "Creative Director",
    company: "BBDO Group Russia",
    period: "April 2013 - May 2014",
    location: "Minsk, Belarus",
    responsibilities: [
      "Led creative team",
      "Developed brand strategies",
      "Created innovative financial products",
    ],
    achievements: [
      "Created 'Halva' brand - most popular BNPL card in Belarus and Russia",
    ],
    projectHighlights: [
      "Innovative BNPL product development",
      "Brand strategy creation",
      "Market leadership achievement",
    ],
  },
  {
    title: "Event Manager",
    company: "Publicis Groupe",
    period: "June 2012 - August 2012",
    location: "Minsk, Belarus",
    responsibilities: [
      "Organized events",
      "Wrote promotional materials",
      "Managed client relationships",
    ],
  },
  {
    title: "Co-founder",
    company: "Re: Promo",
    period: "February 2005 - October 2011",
    location: "Minsk, Belarus",
    responsibilities: [
      "Managed projects and marketing",
      "Developed branding strategies",
      "Led sales initiatives",
      "Built client relationships",
    ],
  },
];

export const timelineData: TimelineDataPoint[] = [
  { year: 2005, role: "Co-founder", company: "Re:Promo", value: 1 },
  { year: 2012, role: "Event Manager", company: "Publicis Groupe", value: 2 },
  { year: 2013, role: "Creative Director", company: "BBDO Group", value: 3 },
  { year: 2014, role: "Creative Strategist", company: "AIDA Pioneer", value: 4 },
  { year: 2017, role: "Deputy Head R&D", company: "EUROTORG", value: 5 },
  { year: 2018, role: "Managing Partner", company: "Kemliva", value: 6 },
  { year: 2022, role: "Blockchain PMM Lead", company: "UniLayer.io", value: 7 },
  { year: 2023, role: "Head of Brand Marketing", company: "Belarusbank", value: 8 },
  { year: 2024, role: "Chief AI Officer", company: "TDI Group", value: 9 }
];

export const musicCareer: MusicCareer = {
  period: "1998-2014",
  roles: ["DJ", "Music producer", "Event organizer", "Club builder"],
  genres: ["House", "Techno", "Drum-n-bass", "Electronica", "World music"],
  achievements: [
    "Built and managed 3 successful nightclubs",
    "Released 5 original tracks",
    "Organized 100+ events",
    "Performed at major festivals",
  ],
  currentActivity: "Still records mixtapes and DJ mixes",
};

export const skills = [
  { name: "AI Integration", level: 95 },
  { name: "Strategic Leadership", level: 90 },
  { name: "Creative Management", level: 88 },
  { name: "Gamification", level: 85 },
  { name: "Blockchain", level: 82 },
  { name: "Digital Marketing", level: 92 },
];