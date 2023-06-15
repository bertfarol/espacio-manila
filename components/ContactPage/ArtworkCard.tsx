import Image from "next/image";
import React from "react";
import { Artworks } from "@/types/artworks";
import Link from "next/link";

interface ArtworkCard {
  artwork: Artworks;
}

const ArtworkCard = ({ artwork }: ArtworkCard) => {

  const {
    title,
    artist,
    slug,
    width: artworkWidth,
    height: artworkHeight,
    image: { url: imageUrl, width: imageWidth, height: imageHeight },
  } = artwork;
  

  return (
    <>
      {artwork && (
        <div className="pr-5 mb-4 overflow-hidden rounded-lg shadow-lg animate-fadeDown group">
          <Link href={`/artworks/${slug}`} className="flex items-center justify-between gap-3">
            <div className="h-[80px] w-[80px]">
              <Image
                src={`/${imageUrl}`}
                height={imageHeight}
                width={imageWidth}
                alt={title}
                className="object-cover object-left w-full h-full duration-300 group-hover:opacity-80"
              />
            </div>
            <div className="grow">
              <h3 className="text-sm font-medium leading-tight lg:text-base group-hover:underline">
                {artist}
              </h3>
              <p className="text-sm">{title}</p>
              <p className="text-sm">
                {artworkWidth} x {artworkHeight} inches
              </p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ArtworkCard;
