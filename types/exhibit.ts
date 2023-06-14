export interface Exhibit {
  id: number;
  name: string;
  slug: string;
  start_date: string;
  end_date: string;
  location: string;
  artist: string[];
  image: [
    {
      url: string;
      width: number;
      height: number;
    }
  ];
}
