// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Artworks as ArtworkType } from "@/types/artworks";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[] | { message: string }>
) {
  const response = await fetch("http://localhost:3000/api/artworks");
  const artworks = await response.json();

  const filteredArtists: string[] = [];

  artworks.forEach((artwork: ArtworkType) => {
    if (!filteredArtists.includes(artwork.artist)) {
      filteredArtists.push(artwork.artist);
    }
  });

  if (!filteredArtists) {
    return res.status(404).json({ message: "Artist not found" });
  }

  res.status(200).json(filteredArtists);
}
