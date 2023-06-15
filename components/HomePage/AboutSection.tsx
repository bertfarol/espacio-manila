import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative before:content-[''] before:absolute before:bg-[url('/dotted-white.png')] 3xl:before:h-[189px] before:w-[88px] before:left-0 before:bottom-0 after:content-[''] after:absolute after:bg-[url('/dotted-white.png')] 3xl:after:h-[189px] after:w-[88px] after:right-0 after:top-32"
    >
      <div className=" pb-16 md:px-5 md:pt-16 lg:py-32 2xl:pt-40 2xl:pb-28 bg-[#0C0C0C] before:absolute before:bg-[url('/blur-circle-white.png')] lg:before:h-[665px] before:w-[665px] before:left-[-300px] before:top-[-170px] before:bg-cover overflow-hidden">
        <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto w-full lg:flex relative after:absolute after:bg-[url('/blur-circle-white.png')] 3xl:after:h-[665px] after:w-[665px] after:right-96 after:top-0 after:bg-cover">
          <div className="relative z-10 mb-6 lg:mb-0 grow lg:pr-8">
            <Image
              src="/image.espacio.jpg"
              width="926"
              height="653"
              alt="Espacio Manila"
              className="lg:object-cover lg:h-full lg:object-center"
            />
          </div>
          <div className="px-5 lg:px-0 lg:max-w-[424px] flex flex-col justify-between">
            <p className="px-2 py-1 text-xs font-medium tracking-wider bg-white rounded w-fit">
              About Us
            </p>
            <div>
              <h2 className="text-4xl  mb-4 lg:text-5xl lg:mb-[30px] text-white lg:max-w-[210px] lg:leading-tight">
                Espacio Manila
              </h2>
              <p className="mb-3 text-white/80 lg:leading-relaxed">
                Espacio Manila is a cultured home that draws attention to
                contemporary art pieces; providing artists and their public
                audience with a boundless and open space that presents its
                identity in an extraordinary way.
              </p>
              <p className="text-white/80 lg:leading-relaxed">
                Espacio, Spanish for “space”, may be interpreted as an area that
                is readily available or as the seemingly boundless extent
                outside of our known world. We see Espacio Manila as a merged
                state of both definitions; the singular middle-ground that is
                available to those who wish to explore their boundless
                potential. A blank slate for the artwork and its artist, it will
                be a testament to the profound relations between art and the
                human race.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
