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

const ViewOnWall: React.FC<ArtworkRoomProps> = ({
  imgWidthInches,
  imgHeightInches,
  showRoom,
  artworkImage,
  imageHeight,
  imageWidth,
}) => {
  const [sofaWidth, setSofaWidth] = useState<number>(0);

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

    setSofaWidth(window.innerWidth <= 750 ? window.innerWidth * 0.75 : 550);
    resizeSofa();
    window.addEventListener("resize", resizeSofa);
    return () => {
      window.removeEventListener("resize", resizeSofa);
    };
  }, []);

  const FURNITURE_ORIGINAL_WIDTH = 228.6; // cm
  const INCH_TO_CM = 2.54;

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

  return (
    <div className={`${showRoom ? "block" : "hidden"}`}>
      <div className="room-wrapper animate-room">
        <div className="room">
          <div className="wall">
            <div className="wall-inner-wrap">
              <Image
                className="painting add-shadow"
                src={`/${artworkImage}`}
                alt="Espacio Manila - Painting"
                style={{ width: "100%" }}
                width={imageWidth}
                height={imageHeight}
              />
              <div
                className="furniture-sofa"
                style={{ width: `${sofaWidth}px` }}
              >
                <Image
                  src="/brown-sofa.png"
                  alt=""
                  style={{ width: "100%" }}
                  width={837}
                  height={324}
                />
              </div>
            </div>
          </div>
          <div className="floor"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewOnWall;
