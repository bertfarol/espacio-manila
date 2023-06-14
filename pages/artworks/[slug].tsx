import React, { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Artworks as ArtworkType } from "@/types/artworks";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { fetchArtworks } from "@/utils/api";
import PageHead from "@/components/common/PageHead";
import ViewOnWall from "@/components/ArtworkPage/ViewOnWall";

type ArtworkProps = {
  artwork: ArtworkType;
};

export default function ArtworksDetails({ artwork }: ArtworkProps) {
  const [isShowRoom, setIsShowRoom] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleViewRoom = () => {
    setIsShowRoom(!isShowRoom);
  };

  const {
    title,
    slug,
    artist,
    medium,
    width: artworkWidth,
    height: artworkHeight,
    year,
    image: { url: imageUrl, width: imageWidth, height: imageHeight },
  } = artwork;

  return (
    <>
      <PageHead title={title} />
      <div className="h-screen bg-white sm:flex sm:items-center sm:justify-center">
        {/* <Link href="/artworks"> */} {/* TODO: remove unused code */}
        <Icon
          onClick={isShowRoom ? handleViewRoom : handleGoBack}
          icon="iconamoon:close-light"
          className="absolute z-40 w-8 h-8 cursor-pointer top-3 left-2 md:top-5 md:left-8"
        />
        {/* </Link> */}
        <div className="mx-auto max-w-6xl 2xl:max-w-[1400px] w-full my-12 sm:my-0">
          <div className="flex flex-col items-center justify-center gap-10 p-4 md:flex-row">
            <div className="relative mb-3 h-[350px] lg:h-[450px] 2xl:h-[650px] grow flex justify-center before:content-[''] before:absolute before:bg-[url('/dotted-box-gray.png')] 3xl:before:h-[93px] before:w-[88px] before:left-0 before:bottom-[-35px] after:content-[''] after:absolute after:bg-[url('/dotted-box-gray.png')] 3xl:after:h-[93px] after:w-[88px] after:right-0 after:bottom-[-35px]">
              <span>
                {imageUrl && (
                  <Image
                    src={`/${imageUrl}`}
                    alt={title}
                    width={imageWidth}
                    height={imageHeight}
                    className="relative z-10 object-contain object-bottom h-full art-shadow"
                  />
                )}
              </span>
            </div>
            <div className="max-w-[375px] xl:max-w-[426px]">
              <h1 className="text-3xl xl:text-[48px] leading-tight font-medium mb-4">
                {artist}
              </h1>
              <div className="leading-relaxed mb-7 sm:mb-10 xl:mb-20">
                <p>"{title}"</p>
                <p>{medium}</p>
                <p>
                  {artworkWidth} x {artworkHeight} inches
                </p>
                <p>{year}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/contact?artwork=${slug}`}
                  className="group flex gap-2 font-medium px-[16px] py-[10px] text-sm bg-[#F3F2F2] hover:bg-[#c2c2c2] rounded-full items-center w-fit"
                >
                  <span>Inquire</span>
                  <Icon
                    icon="material-symbols:mail-outline"
                    className="w-4 h-4 duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <button
                  onClick={handleViewRoom}
                  className="group flex gap-2 font-medium px-[16px] py-[10px] text-sm  items-center w-fit"
                >
                  <span className="group-hover:underline decoration-solid underline-offset-2">
                    View in room
                  </span>
                  <Icon
                    icon="carbon:view"
                    className="w-4 h-4 duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
              <div className="pt-2 mt-6 border-t">
                <p className="text-xs text-black/80">
                  <span className="font-medium text-black">"View in Room"</span>
                  feature enhances your experience by providing a visual
                  representation of the painting in a room setting, allowing you
                  to better gauge its size and visualize how it will complement
                  your space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewOnWall
        imgWidthInches={artworkWidth}
        imgHeightInches={artworkHeight}
        showRoom={isShowRoom}
        artworkImage={imageUrl}
      />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchArtworks();
  const artworks: ArtworkType[] = response;

  const paths = artworks.map((artwork) => ({
    params: { slug: artwork.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ArtworkProps> = async ({
  params,
}) => {
  const { slug } = params ?? {};

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks/${slug}` //TODO: create a separate utils/api for this line
  );
  const artwork: ArtworkType = await response.json();

  return {
    props: {
      artwork,
    },
    revalidate: 1,
  };
};
