import { useEffect, useState } from "react";
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/HomePage/HeroSection";
import ExhibitionsSection from "@/components/HomePage/ExhibitionsSection";
import AboutSection from "@/components/HomePage/AboutSection";
import ArtworksSection from "@/components/HomePage/ArtworksSection";
import PageHead from "@/components/common/PageHead";
import { fetchExhibitions } from "@/utils/api";
import { Exhibit } from "@/types/exhibit";
import PreviousExhibitions from "@/components/ExhibitionPage/PreviousExhibitions";
import { SkeletonLoader } from "@/components/common/SkeletonLoader";


export default function Home() {
  const [headerColor, setHeaderColor] = useState("exhibition");
  const [exhibitions, setExhibitions] = useState<Exhibit[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExhibitionData = async () => {
    try {
      setIsLoading(true);
      const exhibitions = await fetchExhibitions();
      setExhibitions(exhibitions);
    } catch (error) {
      console.error(`/page/index Error fetching exhibition data: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    const sections = [
      { id: "footer", color: "light" },
      { id: "artworks", color: "dark" },
      { id: "about", color: "light" },
      { id: "exhibitions", color: "dark" },
    ];
    const scrollPosition = window.scrollY + 50;
    const activeSection = sections.find((section) => {
      const sectionElement = document.getElementById(section.id);
      return sectionElement && scrollPosition >= sectionElement.offsetTop;
    });
    const headerColor = activeSection ? activeSection.color : "light";
    setHeaderColor(headerColor);
  };

  useEffect(() => {
    fetchExhibitionData();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <PageHead title={"Homepage"} />
      <Layout headerColor={headerColor} headerPosition={"fixed"}>
        <HeroSection />
        <ExhibitionsSection>
          {/* <SkeletonLoader count={2} className={"gap-6 sm:grid-cols-2"} /> */}
          {isLoading ? (
            <SkeletonLoader count={2} className={"gap-6 sm:grid-cols-2"} />
          ) : (
            <PreviousExhibitions data={exhibitions} showAll={false} />
          )}
        </ExhibitionsSection>
        <AboutSection />
        <ArtworksSection />
      </Layout>
    </>
  );
}
