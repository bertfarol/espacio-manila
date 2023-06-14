import React, { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { Artworks as ArtworkType } from "@/types/artworks";
import { fetchArtworks } from "@/utils/api";
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

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleViewRoom = () => {
    setIsShowRoom(!isShowRoom);
  };

  return (
    <>
      {artwork && (
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
