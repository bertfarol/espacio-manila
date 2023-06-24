import Image from "next/image";
import { useEffect, useState } from "react";

interface ArtworkRoomProps {
  imgWidthInches: number;
  imgHeightInches: number;
  showRoom: boolean;
  artworkImage: string;
  imageWidth: number;
  imageHeight: number;
}

interface SofaDetails {
  imageSrc: string;
  imgWidth: number;
  imgHeight: number;
}

interface FloorDetails {
  imageSrc: string;
  imgWidth: number;
  imgHeight: number;
}


const ViewOnWall: React.FC<ArtworkRoomProps> = ({
  imgWidthInches,
  imgHeightInches,
  showRoom,
  artworkImage,
  imageHeight,
  imageWidth,
}) => {
  const [sofaWidth, setSofaWidth] = useState<number>(0);
  const FURNITURE_ORIGINAL_WIDTH = 228.6; // cm
  const INCH_TO_CM = 2.54;

const [sofaDetails, setSofaDetails] = useState<SofaDetails>({
  imageSrc: "/light-blue-sofa.png",
  imgWidth: 837,
  imgHeight: 356,
});
  
const [floorBG, setFloorBG] = useState<string>("/light-floor.png");

const handleSofaButton = (newSrc: string,  newWidth: number,  newHeight: number): void => {
  setSofaDetails({
    imageSrc: newSrc,
    imgWidth: newWidth,
    imgHeight: newHeight,
  });
};

  const handleFloorButton = (floorBg:string) => {
    setFloorBG(floorBg);
  }

const { imageSrc, imgWidth, imgHeight } = sofaDetails;
 

  useEffect(() => {
    const resizeSofa = () => {
      const sofa = document.querySelector(".furniture-sofa") as HTMLElement;
      const painting = document.querySelector(".painting") as HTMLElement;

      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const sofaWidth = Math.min(windowHeight * 0.75, windowWidth * 0.5);

      sofa.style.width = `${sofaWidth}px`;
      setSofaWidth(sofaWidth);

      artworkResize(sofaWidth.toString());
    };

    const artworkResize = (furnitureWidth: string) => {
      const painting = document.querySelector(".painting") as HTMLElement;

      const parsedFurnitureWidth = parseInt(furnitureWidth, 10);
      let sofaPercentage = parsedFurnitureWidth * 0.7;
      let artworkSize = parsedFurnitureWidth / FURNITURE_ORIGINAL_WIDTH;
      let artworkInchesWidth = imgWidthInches * INCH_TO_CM;
      let artworkNewWidth = artworkInchesWidth * artworkSize;
      let bottom = artworkNewWidth > sofaPercentage ? 30 : 35;

      if (window.innerWidth <= 500) {
        bottom = 20;
        if (imgHeightInches > 40) {
          bottom -= 5;
        }
      } else {
        if (imgHeightInches > 40) {
          bottom -= 14;
        }
      }

      if (painting) {
        painting.style.bottom = `${bottom}%`;
        painting.style.width = `${artworkNewWidth}px`;
      }

    };

    setSofaWidth(window.innerWidth <= 750 ? window.innerWidth * 0.75 : 550);
    resizeSofa();
    window.addEventListener("resize", resizeSofa);
    return () => {
      window.removeEventListener("resize", resizeSofa);
    };
  }, []);

  return (
    <div
      className={`${showRoom ? "z-30" : "z-[-1]"} room-wrapper animate-room`}
    >
      <div className="room">
        <div className="wall">
          <div className="wall-inner-wrap">
            <Image
              className={`${
                showRoom ? "animate-zoomOutMobile md:animate-zoomOut" : ""
              } z-[70] painting drop-shadow-xs md:drop-shadow-3xl`}
              src={`/${artworkImage}`}
              alt="Espacio Manila - Painting"
              style={{ width: "100%" }}
              width={imageWidth}
              height={imageHeight}
            />

            <div className="furniture-sofa" style={{ width: `${sofaWidth}px` }}>
              <Image
                src={imageSrc}
                alt=""
                style={{ width: "100%" }}
                width={imgWidth}
                height={imgHeight}
              />
            </div>
          </div>
        </div>
        <div
          className="bg-center floor bg-floor-xs md:bg-fill"
          style={{ background: `url(${floorBG})` }}
        ></div>

        <div className="fixed flex flex-col gap-6 top-10 right-10 ">
          <button
            onClick={() => handleSofaButton("/brown-sofa.png", 837, 324)}
            className="w-14 h-10 md:w-20 md:h-14 px-1.5 bg-white  rounded-md shadow-lg border border-[#E6EAED] hover:border-[#009688] group"
          >
            <Image
              src="/brown-sofa.png"
              alt=""
              width={837}
              height={324}
              className="duration-300 group-hover:scale-90"
            />
          </button>
          <button
            onClick={() => handleSofaButton("/light-blue-sofa.png", 837, 356)}
            className="w-14 h-10 md:w-20 md:h-14 px-1.5 bg-white  rounded-md shadow-lg border border-[#E6EAED] hover:border-[#009688] group"
          >
            <Image
              src="/light-blue-sofa.png"
              alt=""
              width={837}
              height={356}
              className="duration-300 group-hover:scale-90"
            />
          </button>
          <button
            onClick={() => handleFloorButton("/dark-floor.png")}
            className="w-14 h-10 md:w-20 md:h-14 px-1.5 bg-white  rounded-md bg-[url(/dark-floor.png)] border border-[#E6EAED] shadow-lg hover:border-[#009688] hover:opacity-90"
          ></button>
          <button
            onClick={() => handleFloorButton("/light-floor.png")}
            className="w-14 h-10 md:w-20 md:h-14 px-1.5 bg-white  rounded-md bg-[url(/light-floor.png)] border border-[#E6EAED] shadow-lg hover:border-[#009688] hover:opacity-90"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ViewOnWall;
