import ArtworkCard from "@/components/ContactPage/ArtworkCard";
import Layout from "@/components/common/Layout";
import PageHead from "@/components/common/PageHead";
import { fetchArtworks } from "@/utils/api";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Artworks } from "@/types/artworks";

export default function Contact() {
  const [artwork, setArtwork] = useState<Artworks | undefined>();
  const router = useRouter();

  useEffect(() => {
    const { asPath } = router;
    const slug = asPath.split("artwork=")[1];

    const fetchArtwork = async () => {
      const artworkList = await fetchArtworks();
      const filteredArtworks = artworkList.find((art: { slug: string }) => {
        const artistCondition = art.slug === slug;
        return artistCondition;
      });

      setArtwork(filteredArtworks);
    };

    fetchArtwork();
  }, [router.asPath]);

  return (
    <>
      <PageHead title={"Contact"} />
      <Layout defaultHeader={true}>
        <section className="py-24 lg:py-32">
          <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto px-5">
            {/* <div>{artworkSlug}</div>  */}
            <div className="gap-16 md:flex md:justify-between">
              <div
                id="contact-form"
                className="sm:min-w-[384px] max-w-[450px] md:mb-0 border-b border-[#ccc] md:border-none mb-12 pb-12 md:pb-0 "
              >
                {artwork && <ArtworkCard artwork={artwork} />}
                <h1 className="text-4xl">Get in touch</h1>
                <p className="mt-2 mb-6 text-grayText">
                  If you have any questions, feedback, or would like to inquire
                  about our artwork, please don't hesitate to reach out:
                </p>

                <form className="flex flex-col gap-6 text-sm">
                  <div className="flex flex-col">
                    <label className="mb-2">Your name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="border border-[#CCCCCC] rounded-lg px-4 py-2.5 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">Your email</label>
                    <input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      className="border border-[#CCCCCC] rounded-lg px-4 py-2.5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">Your mobile(optional)</label>
                    <input
                      type="text"
                      placeholder="09952548789"
                      className="border border-[#CCCCCC] rounded-lg px-4 py-2.5"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-2">Your message</label>
                    <textarea
                      className="border border-[#CCCCCC] rounded-lg px-4 py-2.5"
                      name="myTextarea"
                      id="myTextarea"
                      cols={30}
                      rows={10}
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button className="group flex gap-2 font-medium px-[16px] py-[10px] text-sm bg-[#F3F2F2] hover:bg-[#c2c2c2] rounded-full items-center w-fit">
                    <span>Send message</span>
                    <Icon
                      icon="material-symbols:mail-outline"
                      className="w-4 h-4 duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              </div>
              <div className="flex flex-wrap items-center lg:h-[500px]">
                <div className="contact-icon">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg">
                    <Icon
                      icon="logos:google-gmail"
                      className="w-8 h-8 text-[#0082c6]"
                    />
                  </div>
                  <p className="mb-1 text-2xl">Email us:</p>
                  <p>hello@espaciomanilagallery.com</p>
                </div>
                <div className="contact-icon">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg">
                    <Icon
                      icon="carbon:phone-filled"
                      className="w-8 h-8 text-[#0e9b0a]"
                    />
                  </div>
                  <p className="mb-1 text-2xl">Call us:</p>
                  <p>&#40;+63&#41; 0998 964 0872</p>
                </div>
                <div className="contact-icon">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg">
                    <Icon
                      icon="carbon:location-filled"
                      className="w-8 h-8 text-[#e62829]"
                    />
                  </div>
                  <p className="mb-1 text-2xl">Address:</p>
                  <p className="leading-6 text-center">
                    2/F Expansion Wing, Festival Mall, Alabang, Muntinlupa City,
                    Metro Manila, Philippines 1781
                  </p>
                </div>
                <div className="contact-icon">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full shadow-lg">
                    <div className="mr-[-8px] -rotate-12">
                      <Icon icon="logos:facebook" className="w-7 h-7" />
                    </div>
                    <div className="rotate-6">
                      <Icon icon="skill-icons:instagram" className="w-7 h-7 " />
                    </div>
                  </div>
                  <p className="mb-1 text-2xl">Follow us:</p>
                  <p className="flex flex-col text-center">
                    <span className="relative">
                      <a
                        href="https://www.facebook.com/espaciomanila"
                        target="_blank"
                        className="flex gap-1 hover:underline"
                      >
                        Facebook/espaciomanila
                        <span>
                          <Icon
                            icon="fluent-mdl2:open-in-new-tab"
                            className="w-2.5 h-2.5"
                          />
                        </span>
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.instagram.com/espaciomanila/"
                        target="_blank"
                        className="flex gap-1 hover:underline"
                      >
                        Instagram/espaciomanila
                        <Icon
                          icon="fluent-mdl2:open-in-new-tab"
                          className="w-2.5 h-2.5"
                        />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
