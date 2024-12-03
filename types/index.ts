export interface PersonalInfo {
  name: string;
  age: number;
  currentLocation: {
    city: string;
    country: string;
    since: string;
  };
  origin: {
    city: string;
    country: string;
  };
  physicalAttributes: {
    height: number;
    weight: number;
    appearance: string[];
  };
  languages: {
    name: string;
    level: "native" | "bilingual" | "professional";
  }[];
  education: {
    degree: string;
    university: string;
    period: string;
  };
  personality: {
    mbti: string;
    traits: string[];
    beliefs: string;
  };
}

export interface CareerEntry {
  title: string;
  company: string;
  period: string;
  location: string;
  responsibilities: string[];
  achievements?: string[];
  teachingExperience?: {
    role: string;
    course: string;
    period: string;
    location: string;
  }[];
  publications?: {
    type: string;
    title: string;
    description: string;
  }[];
  skills?: string[];
  projectHighlights?: string[];
}

export interface MusicCareer {
  period: string;
  roles: string[];
  genres: string[];
  achievements: string[];
  currentActivity: string;
}