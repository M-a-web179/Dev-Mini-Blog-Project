export interface Post {
  id: number;
  title: string;
  author: string;
  content: string;
  datePosted: string; // ISO date string, e.g. "2026-09-17T10:00:00Z"
}