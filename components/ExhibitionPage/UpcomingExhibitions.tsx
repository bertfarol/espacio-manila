import Image from "next/image";
import Link from "next/link";
import { Exhibit } from "@/types/exhibit";
import DateFormat from "../common/DateFormat";

interface UpcomingProps {
  data: Exhibit[];
}

const UpcomingExhibitions = ({ data }: UpcomingProps) => {
  return (
    <>
      {data.map((exhibit) => (
        <div key={exhibit.id} className="relative h-[300px] xl:h-[500px]">
          <Link
            href={`/exhibitions/${exhibit.slug}`}
            className="duration-100 hover:opacity-80"
          >
            <Image
              src={`/${exhibit.image[0].url}`}
              width={exhibit.image[0].width}
              height={exhibit.image[0].height}
              alt={exhibit.name}
              className="object-cover object-center w-full h-full"
            />
            <div className="text-center bg-white max-w-[90%] md:max-w-[500px] px-3.5 py-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex items-center flex-col">
              <p className="px-2 py-1 text-xs font-medium tracking-wider text-white bg-black rounded w-fit">
                Upcoming
              </p>
              <h3 className="mb-2 mt-2.5 text-4xl capitalize">
                {exhibit.name}
              </h3>
              <p className="text-grayText">
                <DateFormat
                  startDate={exhibit.start_date}
                  endDate={exhibit.end_date}
                />
              </p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default UpcomingExhibitions;
