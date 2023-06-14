import { useEffect, useState } from "react";
import Layout from "@/components/common/Layout";
import HeroSection from "@/components/HomePage/HeroSection";
import ExhibitionsSection from "@/components/HomePage/ExhibitionsSection";
import AboutSection from "@/components/HomePage/AboutSection";
import ArtworksSection from "@/components/HomePage/ArtworksSection";
import PageHead from "@/components/common/PageHead";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("exhibition");

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
        <ExhibitionsSection />
        <AboutSection />
        <ArtworksSection />
      </Layout>
    </>
  );
}
