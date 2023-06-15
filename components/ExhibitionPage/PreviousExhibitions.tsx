import Image from "next/image";
import Link from "next/link";
import { Exhibit } from "@/types/exhibit";
import DateFormat from "../common/DateFormat";

interface PreviousProps {
  data: Exhibit[];
  showAll?: boolean;
}

const PreviousExhibitions = ({ data, showAll }: PreviousProps) => {
  const currentDate = new Date();

  const previousExhibitions = data.filter((exhibition: Exhibit) => {
    const exhibitStartDate = new Date(exhibition.start_date);
    const exhibitEndDate = new Date(exhibition.end_date);

    return exhibitStartDate < currentDate || exhibitEndDate < currentDate;
  });

  const exhibitionsData = showAll
    ? previousExhibitions
    : previousExhibitions.slice(0, 2);

  const handleLoading = () => {
    console.log("image is loaded!");
    
  }

  return (
    <div
      className={`${
        showAll ? "lg:grid-cols-3" : "lg:grid-cols-2"
      } grid gap-6 grid-cols-1 sm:grid-cols-2`}
    >
      {exhibitionsData.map((prevExhibit) => (
        <div key={prevExhibit.id}>
          <Link href={`/exhibitions/${prevExhibit.slug}`}>
            <div className="h-[200px] xl:h-[338px]  mb-3">
              {prevExhibit.image ? (
                <Image
                  src={`/${prevExhibit.image[0].url}`}
                  width={prevExhibit.image[0].width}
                  height={prevExhibit.image[0].height}
                  alt={prevExhibit.name}
                  className="object-cover object-center h-full duration-100 hover:opacity-80"
                  onLoad={handleLoading}
                />
              ) : (
                <div className="bg-slate-200 h-[338px] w-full animate-pulse"></div>
              )}
            </div>
            <h3 className="text-base font-medium leading-none">
              {prevExhibit.name}
            </h3>
            <span className="text-sm text-[#7d7d7d]">
              <DateFormat
                startDate={prevExhibit.start_date}
                endDate={prevExhibit.end_date}
              />
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PreviousExhibitions;
