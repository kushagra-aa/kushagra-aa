export type Experience = {
  name: string;
  website?: string;
  role: string;
  location: string;
  type: string;
  start: string;
  end: string;
  skills: string[];
  projects: {
    name: string;
    points: string;
    link?: string;
  }[];
};
