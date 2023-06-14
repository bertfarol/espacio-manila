import Layout from "@/components/common/Layout";
import { Exhibit } from "@/types/exhibit";
import UpcomingExhibitions from "@/components/ExhibitionPage/UpcomingExhibitions";
import PreviousExhibitions from "@/components/ExhibitionPage/PreviousExhibitions";
import { fetchExhibitions } from "@/utils/api";
import Head from "next/head";


interface ExhibitProps {
  upcomingExhibitions: Exhibit[];
  exhibitions: Exhibit[];
}

export default function Exhibitions({ exhibitions, upcomingExhibitions }: ExhibitProps) {

  
  return (
    <>
      <Head>
        <title>Espacio Manila - Exhibitions</title>
        <meta
          name="description"
          content="A blank slate for the artwork and its artist, Espacio Manila is a cultured home to contemporary art pieces; providing artists a boundless and open space."
        />
        <meta name="tags" content="artworks, painting, sculpture, gallery" />
      </Head>
      <Layout defaultHeader={true}>
        <div className="py-20 lg:py-32 lg:pt-24">
          <div className="max-w-6xl 2xl:max-w-[1400px] mx-auto w-full">
            <div className="max-w-lg px-5 mb-12 text-center sm:text-left">
              <h1 className="text-5xl">Exhibitions</h1>
              <p className="mt-2 text-grayText">
                Explore our upcoming, current, and previous exhibitions, and be
                immersed in a diverse range of artistic expressions.
              </p>
            </div>
            {/* Hero */}
            <section className="px-0 mb-12 lg:px-5">
              <h2 className="hidden px-5 mb-4 text-3xl lg:px-0 lg:block">
                {upcomingExhibitions ? "Upcoming" : "Current"} exhibition
              </h2>
              {upcomingExhibitions && (
                <UpcomingExhibitions data={upcomingExhibitions} />
              )}
            </section>

            {/* Exhibitions */}
            <section className="px-5 pb-8 mb-5">
              <h2 className="mb-4 text-3xl">Previous exhibitions</h2>
              {exhibitions && (
                <PreviousExhibitions data={exhibitions} showAll={true} />
              )}
            </section>
            {/* END** Artworks */}
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetchExhibitions();
  const currentDate = new Date();

  // Upcoming Exhibit
  const upcomingExhibitions = data.filter((exhibition: Exhibit) => {
    const exhibitStartDate = new Date(exhibition.start_date);
    const exhibitEndDate = new Date(exhibition.end_date);

    return exhibitStartDate >= currentDate && exhibitEndDate >= currentDate;
  });

 
  return {
    props: {
      upcomingExhibitions,
      exhibitions: data,
    },
  };
}
