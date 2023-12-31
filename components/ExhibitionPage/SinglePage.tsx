import Layout from "@/components/common/Layout";
import Image from "next/image";
import { Exhibit } from "@/types/exhibit";
import { useEffect, useState } from "react";
import { Artworks } from "@/types/artworks";
import { fetchArtworks } from "@/utils/api";
import ArtworksList from "../ArtworkPage/ArtworksList";
import PageHead from "../common/PageHead";
import DateFormat from "../common/DateFormat";
import { useRouter } from "next/router";

type SinglePageProps = {
  data: Exhibit;
};

export default function SinglePage({ data }: SinglePageProps) {
  const {
    name,
    start_date,
    end_date,
    location,
    artist,
    image: [{ url, width, height }],
    slug,
  } = data;

  const [artworksData, setArtworksData] = useState<Artworks[]>([]);
  const [exhibitStat, setExhibitStat] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    const status = asPath.split("status=")[1];
    setExhibitStat(status);
  }, [router.asPath, router]);

  useEffect(() => {
    const fetchArtworkData = async () => {
      const artworks = await fetchArtworks();
      const filteredByExhitbion = artworks.filter((artwork: Artworks) => {
        return artwork.exhibition === slug;
      });
      setArtworksData(filteredByExhitbion);
    };

    fetchArtworkData();
  }, []);

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
                <p className={`${exhibitStat === "previous" ? "bg-[#888888]" : "bg-[#009688]"} px-2 py-1 mb-3 text-xs font-medium tracking-wider text-white rounded w-fit lg:mb-0`}>
                  <span className="capitalize">{exhibitStat}</span>
                </p>
                <div>
                  <h1 className="text-5xl mb-4 lg:mb-[30px]  lg:max-w-[210px] lg:leading-tight">
                    {name}
                  </h1>
                  <div className="grid grid-cols-tableCol grid-rows-tableRow gap-2.5">
                    <div className="font-medium grid-item">Date:</div>
                    <div className="grid-item text-grayText">
                      {<DateFormat startDate={start_date} endDate={end_date} />}
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
            <ArtworksList
              artworks={artworksData}
              showAll={true}
              artist="all"
              category="all"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

// xl: items - end;
