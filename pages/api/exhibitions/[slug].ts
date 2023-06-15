// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Exhibit as ExhibitionData } from "@/types/exhibit";
import { fetchExhibitions } from "@/utils/api";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExhibitionData | { message: string }>
) {
  const { slug } = req.query;

  const exhibitions = await fetchExhibitions(); 

  const filteredExhibition = exhibitions.find(
    (exhibition: ExhibitionData) => exhibition.slug === slug
  );

  if (!filteredExhibition) {
    // Return a 404 response if the exhibition is not found
    return res.status(404).json({ message: "[api/exhibition/slug]Exhibition not found" });
  }

  res.status(200).json(filteredExhibition);
}
