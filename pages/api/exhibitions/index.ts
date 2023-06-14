// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Exhibit as ExhibitionData } from "@/types/exhibit";

const exhibitions: ExhibitionData[] = [
  {
    id: 1,
    name: "Everything from scratch",
    slug: "everything-from-scratch",
    start_date: "01-22-24",
    end_date: "01-23-24",
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
    start_date: "01-22-23",
    end_date: "02-22-23",
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
    id: 4,
    name: "Inside the toy box",
    slug: "inside-the-toy-box",
    start_date: "12-08-22",
    end_date: "12-08-22",
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
  {
    id: 5,
    name: "Visayas Art Fair",
    slug: "visayas-art-fair",
    start_date: "11-25-22",
    end_date: "11-27-22",
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
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExhibitionData[]>
) {
  res.status(200).json(exhibitions);
}
