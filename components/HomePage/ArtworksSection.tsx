import React, { useEffect, useState } from "react";
import { fetchArtworks } from "@/utils/api";
import ArtworksList from "../ArtworkPage/ArtworksList";
import { Button } from "../common/Button";
import { Artworks } from "@/types/artworks";


export default function ArtworksSection() {
    const [artworks, setArtworks] = useState<Artworks[]>([]);

    const fetchData = async () => {
      const response = await fetchArtworks();
      setArtworks(response);
    };

    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <section
      id="artworks"
      className="bg-[#F9F8F2] py-16 lg:py-32 2xl:py-48 relative before:content-[''] before:absolute before:bg-[url('/dotted-gold.png')] 3xl:before:h-[189px] before:w-[88px] before:left-0 before:top-[42%] after:content-[''] after:absolute after:bg-[url('/dotted-gold.png')] 3xl:after:h-[189px] after:w-[88px] after:right-0 after:top-[42%] "
    >
      <div className="max-w-6xl 2xl:max-w-[1400px] px-5 mx-auto w-full relative">
        <div className="mb-8 lg:mb-10 md:items-center md:justify-between md:flex">
          <div className="mb-5">
            <h2 className="text-4xl">Artworks</h2>
            <p className="mt-1 text-grayText">Discover the latest collection</p>
          </div>
          <Button type="default" href="/artworks">
            View all artworks
          </Button>
        </div>
        {/* artwork list */}
        <ArtworksList artworks={artworks} showAll={false} />
      </div>
    </section>
  );
}