import React, { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Artworks as ArtworkType } from "@/types/artworks";
import { fetchArtworks, getArtworkBySlug } from "@/utils/api";
import LightBox from "@/components/ArtworkPage/LightBox";

type ArtworkProps = {
  artwork: ArtworkType;
};

export default function ArtworksDetails({ artwork }: ArtworkProps) {
  const [isShowRoom, setIsShowRoom] = useState(false);
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleViewRoom = () => {
    setIsShowRoom(!isShowRoom);
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!router.isFallback && !artwork?.slug) {
    return <h1>404 - Page Not Found</h1>;
  }

  return (
    <>
      {router.isFallback ? (
        <p>Loading...</p>
      ) : (
        <LightBox
          data={artwork}
          handleViewRoom={handleViewRoom}
          handleGoBack={handleGoBack}
          isShowRoom={isShowRoom}
        />
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  if (!params.slug) return { notFound: true };

  const artwork = await getArtworkBySlug(params.slug);

  return {
    props: {
      artwork,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const artworks = await fetchArtworks();

  // const paths = artworks.map((artwork) => ({
  //   params: { slug: artwork.slug },
  // }));

  return {
    paths: artworks.map((artwork: { slug: string; }) => {
      return {
        params: {
          slug: artwork.slug,
        },
      };
    }),
    fallback: false,
  };
};
