import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Exhibit } from "@/types/exhibit";
import { useEffect, useState } from "react";
import { Artworks } from "@/types/artworks";
import { fetchArtworks } from "@/utils/api";
import ArtworksList from "../ArtworkPage/ArtworksList";
import PageHead from "../common/PageHead";
import DateFormat from "../common/DateFormat";



const artworks = [
  {
    id: 1,
    title: "Doe",
    imgUrl: "/Doe.jpg",
    imgWidth: 508,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 2,
    title: "Vixen",
    imgUrl: "/Vixen.jpg",
    imgWidth: 510,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 3,
    title: "Cosset",
    imgUrl: "/Cosset.jpg",
    imgWidth: 507,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 4,
    title: "The Gathering",
    imgUrl: "/The-Gathering.jpg",
    imgWidth: 826,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 5,
    title: "Doe",
    imgUrl: "/Doe.jpg",
    imgWidth: 508,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 6,
    title: "Vixen",
    imgUrl: "/Vixen.jpg",
    imgWidth: 510,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 7,
    title: "Cosset",
    imgUrl: "/Cosset.jpg",
    imgWidth: 507,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
  {
    id: 8,
    title: "The Gathering",
    imgUrl: "/The-Gathering.jpg",
    imgWidth: 826,
    artist: "Mayi Peñaflorida",
    medium: "etching on aluminum composite panel",
    dimension: "18 x 24 inches",
    year: "2022",
  },
];

type SinglePageProps = {
  data: Exhibit;
};

export default function SinglePage({ data }: SinglePageProps) {
  const { name, start_date, end_date, location, artist, image: [{ url, width, height }], slug } = data;

  const [artworksData, setArtworksData] = useState<Artworks[]>([]);
  
  const fetchArtworkData = async () => {
    const artworks = await fetchArtworks();
    const filteredByExhitbion = artworks.filter((artwork: Artworks) => {
      return artwork.exhibition === slug;
    });
    setArtworksData(filteredByExhitbion);
  }

  useEffect(() => {
    fetchArtworkData();
  }, [fetchArtworkData]);

  return (
    <>
      <PageHead title={name} />
      <Layout defaultHeader={true}>
        <div className="pb-20 lg:pb-32 lg:pt-24">
          <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto w-full">
            {/* Exhibition Content */}
            <div className="relative mb-20 lg:flex lg:px-5">
              <div
                className={
                  "relative z-10 mb-6 lg:mb-0 grow lg:pr-8 h-[300px] lg:h-[500px]"
                }
              >
                <Image
                  src={`/${url}`}
                  width={width}
                  height={height}
                  alt={name}
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <div className="px-5 lg:px-0 lg:max-w-[424px] flex flex-col justify-between">
                <p className="px-2 py-1 text-xs font-medium tracking-wider text-white bg-black rounded w-fit">
                  Upcoming
                </p>
                <div>
                  <h1 className="text-5xl mb-4 lg:mb-[30px]  lg:max-w-[210px] lg:leading-tight">
                    {name}
                  </h1>
                  <div className="grid grid-cols-tableCol grid-rows-tableRow gap-2.5">
                    <div className="font-medium grid-item">Date:</div>
                    <div className="grid-item text-grayText">
                      {
                        <DateFormat
                          startDate={start_date}
                          endDate={end_date}
                        />
                      }
                    </div>
                    <div className="font-medium grid-item">Location:</div>
                    <div className="grid-item text-grayText">{location}</div>
                    <div className="font-medium grid-item">Artist: </div>
                    <div className="grid-item text-grayText">{artist}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Artworks List */}
            <div className="px-5 mb-5 lg:mb-0">
              <h2 className="text-[22px] lg:font-medium tracking-wider">
                Selected Artworks
              </h2>
            </div>
            <ArtworksList artworks={artworksData} showAll={true} artist="all" category="all"/>
          </div>
        </div>
      </Layout>
    </>
  );
}


// xl: items - end;