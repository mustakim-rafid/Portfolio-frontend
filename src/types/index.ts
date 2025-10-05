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