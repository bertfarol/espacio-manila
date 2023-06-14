export interface Artworks {
  id: number;
  title: string;
  slug: string;
  artist: string;
  medium: string;
  width: number;
  height: number;
  year: string;
  category: string;
  image: { url: string; width: number; height: number };
  _createdAt: string;
  exhibition: string;
}
