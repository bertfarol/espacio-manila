// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Artworks as ArtworkType } from "@/types/artworks";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ArtworkType | { message: string }>
) {
  const { slug } = req.query;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks`
  );
  const artworks = await response.json();

  const filteredArtwork = artworks.find(
    (artwork: ArtworkType) => artwork.slug === slug
  );

  if (!filteredArtwork) {
    return res.status(404).json({ message: "Artwork not found" });
  }

  res.status(200).json(filteredArtwork);
}
