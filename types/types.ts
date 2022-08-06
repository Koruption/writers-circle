export namespace Types {
  export interface Prompt {
    id: string
    createdAt: Date;
    title: string;
    image: string; 
    text: string;
  }

  export interface User { 
    id: string
    username: string;
    avatar: string;
    email: string;
  }

  export interface Post { 
    id: string;
    promptId: string;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    title: string;
    text: string;
    authorId: string;
  }

  export interface Comment {
    id: string;
    promptId: string;
    authorId: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface WorkspaceSettings {
    id: string;
    backgroundImage: string;
    backgroundImageOpacity: number;
    textColor: string;
    ownerId: string;
  }

  export interface Circle {
    id: string;
    name: string;
    createdAt: Date;
    description: string;
    creatorId: string;
    updatedAt: Date;
    bannerImage: string
  }

  export interface Badge {
    id: string;
    promptId: string;
    text: string;
  }
}