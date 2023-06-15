// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Exhibit as ExhibitionData } from "@/types/exhibit";

const exhibitions: ExhibitionData[] = [
  {
    id: 1,
    name: "Everything from scratch",
    slug: "everything-from-scratch",
    start_date: "2024-01-22T00:00:00Z",
    end_date: "2024-01-23T00:00:00Z",
    location: "Espacio Manila Gallery, Festival Mall, Muntinlupa City",
    artist: ["Mayi Peñaflorida", "Jenny Sta Maria"],
    image: [
      {
        url: "exhibitions/thumb_01.jpg",
        width: 958,
        height: 500,
      },
    ],
  },
  {
    id: 2,
    name: "Katapat",
    slug: "katapat",
    start_date: "2023-01-22T00:00:00Z",
    end_date: "2023-02-22T00:00:00Z",
    location: "Espacio Manila Gallery, Festival Mall, Muntinlupa City",
    artist: ["Mayi Peñaflorida"],
    image: [
      {
        url: "exhibitions/thumb_02.jpg",
        width: 958,
        height: 500,
      },
    ],
  },
  {
    id: 5,
    name: "Visayas Art Fair",
    slug: "visayas-art-fair",
    start_date: "2022-11-25T00:00:00Z",
    end_date: "2022-11-27T00:00:00Z",
    location: "Espacio Manila Gallery, Festival Mall, Muntinlupa City",
    artist: ["Mayi Peñaflorida"],
    image: [
      {
        url: "exhibitions/thumb_04.jpg",
        width: 958,
        height: 500,
      },
    ],
  },
  {
    id: 6,
    name: "Inside the toy box",
    slug: "inside-the-toy-box",
    start_date: "2022-12-01T00:00:00Z",
    end_date: "2022-12-02T00:00:00Z",
    location: "Espacio Manila Gallery, Festival Mall, Muntinlupa City",
    artist: ["Mayi Peñaflorida"],
    image: [
      {
        url: "exhibitions/thumb_03.jpg",
        width: 958,
        height: 500,
      },
    ],
  },
];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExhibitionData[]>
) {
  res.status(200).json(exhibitions);
}
