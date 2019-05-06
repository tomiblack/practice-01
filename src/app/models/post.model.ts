export interface Post {
  id: number;
  title: string;
  author: string;
  text: string;
}

export interface UpdatePost {
  title: string;
  text: string;
}
