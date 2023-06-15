import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Artworks } from "@/types/artworks";
import PageHead from "../common/PageHead";
import ViewOnWall from "./ViewOnWall";

type LightBoxProps = {
  data: Artworks;
  handleGoBack: () => void;
};

const LightBox = ({ data, handleGoBack }: LightBoxProps) => {
  const [showShadow, setShowShadow] = useState(false);
  const [isShowRoom, setIsShowRoom] = useState(false);

  const handleViewRoom = () => {
    setIsShowRoom(!isShowRoom);
  };

  const handleImageLoad = () => {
    setTimeout(() => {
      setShowShadow(true);
    }, 500);
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
  } = data;

  return (
    <>
      <PageHead title={title} />
      <div className="h-screen overflow-y-auto bg-white sm:flex sm:items-center sm:justify-center">
        <div
          onClick={isShowRoom ? handleViewRoom : handleGoBack}
          id={isShowRoom ? "handleViewRoom" : "handleGoBack"}
          className="fixed z-40 bg-[#F3F2F2] cursor-pointer top-3 left-2 md:top-5 md:left-8 rounded-full p-1"
        >
          <Icon icon="iconamoon:close-light" className="w-8 h-8" />
        </div>
        <div className="mx-auto max-w-6xl 2xl:max-w-[1400px] w-full py-12 sm:my-0">
          <div className="flex flex-col items-center justify-center gap-10 p-4 bg-white md:flex-row">
            <div className="relative mb-3 h-[350px] lg:h-[450px] 2xl:h-[650px] grow flex justify-center before:content-[''] before:absolute before:bg-[url('/dotted-box-gray.png')] 3xl:before:h-[93px] before:w-[88px] before:left-0 before:bottom-[-35px] after:content-[''] after:absolute after:bg-[url('/dotted-box-gray.png')] 3xl:after:h-[93px] after:w-[88px] after:right-0 after:bottom-[-35px]">
              <span>
                {imageUrl && (
                  <Image
                    src={`/${imageUrl}`}
                    alt={title}
                    width={imageWidth}
                    height={imageHeight}
                    className={`relative z-10 object-contain object-bottom h-full duration-300 ${
                      showShadow ? "drop-shadow-3xl lg:drop-shadow-4xl" : ""
                    }`}
                    priority
                    onLoad={handleImageLoad}
                  />
                )}
              </span>
            </div>
            <div className="max-w-[375px] xl:max-w-[426px]">
              <h1 className="text-3xl xl:text-[48px] leading-tight font-medium mb-4">
                {artist}
              </h1>
              <div className="leading-relaxed mb-7 sm:mb-10 xl:mb-20">
                <p>&#34;{title}&#34;</p>
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
                  <span className="font-medium text-black">
                    &#34;View in Room&#34;
                  </span>
                  &nbsp;feature enhances your experience by providing a visual
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
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
    </>
  );
};

export default LightBox;
