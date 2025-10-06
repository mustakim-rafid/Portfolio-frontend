export interface IBlog {
    id: number;
    title: string;
    uniqueTitle: string;
    content: string;
    thumbnail: string;
    tags: string[];
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
    owner: {
        id: number;
        name: string;
        avatar?: string
    }
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  repoLink: string;
  features: string[];
  techStack: string[];
  createdAt: Date;
  updatedAt: Date;
}