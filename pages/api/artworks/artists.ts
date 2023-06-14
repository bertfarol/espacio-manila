// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Artworks as ArtworkType } from "@/types/artworks";
import { fetchArtworks } from "@/utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[] | { message: string }>
) {
  const artworks = await fetchArtworks();

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
