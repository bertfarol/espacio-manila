import React, { ReactNode, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Exhibit } from "@/types/exhibit";
import { fetchExhibitions } from "@/utils/api";


type Props = {
  children: ReactNode;
};

export default function ExhibitionsSection({ children }: Props) {
  const [exhibitions, setExhibitions] = useState<Exhibit[]>([]);

  const fetchData = async () => {
    const response = await fetchExhibitions();
    setExhibitions(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      id="exhibitions"
      className="relative py-16 lg:py-32 2xl:py-48  before:content-[''] before:absolute before:bg-[url('/dotted-gray.png')] 3xl:before:h-[189px] before:w-[88px] before:left-0 before:top-28 after:content-[''] after:absolute after:bg-[url('/dotted-gray.png')] 3xl:after:h-[189px] after:w-[88px] after:right-0 after:bottom-[35%]"
    >
      <div className="max-w-6xl 2xl:max-w-[1400px] px-5 mx-auto w-full relative">
        <div className="mb-8 lg:mb-10 md:items-center md:justify-between md:flex">
          <div className="mb-5">
            <h2 className="text-4xl">Exhibitions</h2>
            <p className="mt-1 text-grayText">
              Discover our previous exhibitions
            </p>
          </div>
          <Link
            href="/exhibitions"
            className="group flex gap-2 font-medium px-[16px] py-[10px] text-sm bg-[#F3F2F2] hover:bg-[#c2c2c2] rounded-full items-center w-fit"
          >
            <span>View all exhibitions</span>
            <Icon
              icon="teenyicons:arrow-right-solid"
              className="w-5 h-5 duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
        {/* exhibition list */}
        {children}
        {/* end**exhibition list */}
      </div>
    </section>
  );
}
