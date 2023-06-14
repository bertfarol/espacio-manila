import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Artworks as artworkType } from "@/types/artworks";
import ArtworksList from "@/components/ArtworkPage/ArtworksList";
import Layout from "@/components/common/Layout";
import TabMenu from "@/components/ArtworkPage/TabMenu";
import { fetchArtworks, fetchArtworksArtists } from "@/utils/api";
import PageHead from "@/components/common/PageHead";
import FilterModal from "@/components/ArtworkPage/FilterModal";


interface ArtworksProps {
  artworks: artworkType[];
}

export default function Artworks({ artworks }: ArtworksProps) {
  const [category, setCategory] = useState<string>("all"); //TabMenu: set the type of artworks
  const [filterMenu, setFilterMenu] = useState<string[]>([]); // FilterModal: set the filter menu/data
  const [filterArtist, setFilterArtist] = useState<string>("all"); // FilterModal: set the filter for artwork by artist name
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false); // FilterModal: open modal
  const [artistsList, setArtistsList] = useState<string[]>([]); // FilterModal: fetch all artist name
  const [artworkCount, setArtworkCount] = useState<number>(0); // ArtworksList: count the length of the artworks

  const openFilterModal = (data: string[]) => {
    setIsFilterModalOpen(true);
    setFilterMenu(data);
  };

  const handleCloseModal = () => {
    setIsFilterModalOpen(false);
  };

  const resetArtist = () => {
    setFilterArtist("all");
  };

  useEffect(() => {
    const fetchArtists = async () => {
      const artist = await fetchArtworksArtists();
      setArtistsList(artist);
    };
    fetchArtists();
  }, []);

  return (
    <>
      <PageHead title={"Artworks"} />
      <Layout defaultHeader={true}>
        <section className="py-20 lg:py-32 lg:pt-24">
          <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto w-full">
            {/* max-width */}
            <div className="lg:flex lg:items-center">
              <div className="px-5 mb-5 lg:mb-0">
                <h2 className="text-5xl">Artworks</h2>
              </div>
              <TabMenu setCategory={setCategory} />
              <div className="py-[10px] lg:py-0 px-5 border-b border-[#E5E7EB] flex items-center gap-2 lg:border-none lg:grow lg:justify-end">
                <button
                  onClick={() => openFilterModal(artistsList)}
                  className="text-xs  xl:text-sm flex gap-2 border-[#E6EAED] border items-center py-[8px] px-[15px] leading-tight rounded-full hover:bg-[#f4f4f4]"
                >
                  Filter by Artist
                  <Icon icon="icons8:angle-down" className="w-3 h-3" />
                </button>
              </div>
            </div>
            <div className="py-4 px-5 flex justify-between items-center text-xs text-[#747474]">
              <p className="lg:hidden">All Artworks</p>
              <p>{artworkCount} Results</p>
            </div>

            {filterArtist != "all" && (
              <div className="pb-4">
                <p
                  onClick={resetArtist}
                  className="cursor-pointer flex gap-2 font-medium px-[16px] py-[10px] text-sm bg-[#F3F2F2] hover:bg-[#c2c2c2] rounded-full items-center w-fit"
                >
                  <span>{filterArtist}</span>
                  <Icon icon="iconamoon:close-light" className="w-5 h-5" />
                </p>
              </div>
            )}

            {/* MenuModal */}

            <FilterModal
              isModalOpen={isFilterModalOpen}
              onClose={handleCloseModal}
              filterMenu={filterMenu}
              setFilter={setFilterArtist}
            />

            {/* Artworks List */}
            <ArtworksList
              artworks={artworks}
              showAll={true}
              category={category}
              artist={filterArtist}
              setArtworkCount={setArtworkCount}
            />
            {/* /max-width */}
          </div>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const artworks = await fetchArtworks();

  return {
    props: {
      artworks,
    },
  };
}
