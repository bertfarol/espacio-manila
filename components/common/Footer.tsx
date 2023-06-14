import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="footer" className="bg-black">
      <div className="max-w-6xl 2xl:max-w-[1400px] px-5 mx-auto w-full">
        <div className="py-10 md:py-20 lg:flex lg:justify-between">
          <p className="text-lg md:text-2xl md:leading-normal font-medium text-white lg:max-w-[520px] pr-8">
            Be the first to receive news about upcoming shows, events, and
            promos at Espacio Manila.
          </p>
          <form className="flex flex-col gap-3 mt-5 md:flex-row grow">
            <input
              type="text"
              placeholder="Your name"
              className="h-10 px-4 rounded-full grow"
            />
            <input
              type="text"
              placeholder="Your email"
              className="h-10 px-4 rounded-full grow"
            />
            <button
              type="submit"
              className="h-10 text-[#3B371F] hover:bg-[#bcbaab] text-sm font-medium bg-[#EBE8D6] rounded-full md:w-24"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="border-y border-[#1C1C1C] py-10 lg:pt-14 lg:flex gap-20">
          <div className="lg:max-w-[360px]">
            <Image
              src="/logo-espacio-manila.svg"
              alt="espacio manila"
              height="34"
              width="170"
            />
            <p className="mt-5 text-sm font-light leading-relaxed text-white">
              A blank slate for the artwork and its artist, Espacio Manila is a
              cultured home to contemporary art pieces; providing artists a
              boundless and open space.
            </p>
          </div>
          <div className="gap-10 text-white lg:grid grid-cols-footer">
            <div className="mt-6 text-sm">
              <p className="font-medium uppercase">Browse</p>
              <ul className="mt-5 leading-loose">
                <li className="underline hover:no-underline underline-offset-2">
                  <a href="#">Artworks</a>
                </li>
                <li className="underline hover:no-underline underline-offset-2">
                  <a href="#">Exhibitions</a>
                </li>
                <li className="underline hover:no-underline underline-offset-2">
                  <a href="#">About us</a>
                </li>
                <li className="underline hover:no-underline underline-offset-2">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="mt-6 text-sm ">
              <p className="font-medium uppercase">Contact</p>
              <ul className="mt-5 leading-loose">
                <li>
                  <span className="break-all">
                    hello@espaciomanilagallery.com
                  </span>
                </li>
                <li>(02) 829 0831 | 0998 9640832 | 0998 9640858</li>
                <li>
                  <a href="#">links</a>
                </li>
              </ul>
            </div>
            <div className="mt-6 text-sm">
              <p className="font-medium text-white uppercase">Location</p>
              <ul className="mt-5 leading-loose">
                <li>11:00 am - 8:00 pm</li>
                <li>
                  2nd Level Festival Mall -Expansion Wing, Alabang, Muntinlupa
                  City 1781
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4 text-sm text-white lg:flex-row">
          <ul className="flex flex-col gap-1 mb-2 lg:flex-row lg:gap-4 lg:order-1">
            <li>
              <a
                href="#"
                className="underline hover:no-underline underline-offset-2"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="underline hover:no-underline underline-offset-2"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="underline hover:no-underline underline-offset-2"
              >
                Sitemap
              </a>
            </li>
          </ul>
          <p>Copyright © 2023 Espacio Manila Gallery</p>
        </div>
      </div>
    </footer>
  );
}
