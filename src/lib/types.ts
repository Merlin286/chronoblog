export interface Post {
  id: string;
  title: string;
  slug: string;
  publicationDate: string;
  image: string;
  content: string;
}

export interface Comment {
  id: string;
  postId: string;
  author: string;
  content: string;
  timestamp: string;
  parentId?: string | null;
}
