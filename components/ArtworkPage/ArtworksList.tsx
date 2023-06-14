import { Artworks } from "@/types/artworks";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";

interface ArtworksProps {
  artworks: Artworks[];
  showAll: boolean;
  category?: string;
  artist?: string;
  setArtworkCount?: Dispatch<SetStateAction<number>>;
}

export default function ArtworksList({
  artworks,
  showAll = false,
  category,
  artist,
  setArtworkCount,
}: ArtworksProps) {
  const filteredArtworks = artworks.filter((art) => {
    const artistCondition = artist === "all" || art.artist === artist; // if 'artist === all' then it's 'true' it will display the entire artworks
    const categoryCondition = category === "all" || art.category === category; // if 'category === all' then it's 'true' it will display the entire artworks

    return artistCondition && categoryCondition;
  });

 

  const artworksList = showAll ? filteredArtworks : artworks.slice(0, 4);

  useEffect(() => {
    if (setArtworkCount) setArtworkCount(filteredArtworks.length);
  }, [filteredArtworks.length, setArtworkCount]);

  return (
    <div className="grid grid-cols-2 px-5 gap-x-4 gap-y-14 lg:grid-cols-4 lg:mt-4">
      {artworksList.map((art) => (
        <Link
          href={`/artworks/${art.slug}`}
          key={art.id}
          className="cursor-pointer hover:bg-gray-200/40 group"
        >
          <div className="mb-3 lg:h-[350px] relative">
            <Image
              src={`/${art.image.url}`}
              alt={art.title}
              width={art.image.width}
              height={art.image.height}
              className="object-contain object-bottom h-full art-shadow-sm"
            />
            <div className="group-hover:flex hidden tracking-wider items-center justify-center text-sm text-white bg-black/80 rounded-full h-14 w-14 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              View
            </div>
          </div>
          <div className="lg:text-center">
            <p className="text-base font-medium leading-none">{art.artist}</p>
            <span className="text-sm lg:text-sm text-[#747474]">
              {art.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
