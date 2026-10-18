type ProjectType = {
  name: string;
  slug: string;
  picture: string;
  tags: string;
  tech: string;
  description: string;
  short_description: string;
  link: string;
  github: string;
  started_at: string;
  completed_at: string;
  featured?: boolean;
  with?: {
    name: string;
    link: string;
  };
};

export default ProjectType;
