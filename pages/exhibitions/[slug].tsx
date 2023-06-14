import SinglePage from "@/components/ExhibitionPage/SinglePage";
import { useRouter } from "next/router";
import { Exhibit } from "@/types/exhibit";
import { fetchExhibitions, getExhibitionBySlug } from "@/utils/api";

type ExhibitProps = {
  exhibit: Exhibit;
};

export default function ExhibitionDetails({ exhibit }: ExhibitProps) {
  const router = useRouter();

  if (!router.isFallback && !exhibit?.slug) {
    return <h1>404 - Page Not Found</h1>;
  }

   return (
     <>
       {router.isFallback ? (
         <p>Loading...</p>
       ) : (
         <SinglePage data={exhibit} />
       )}
     </>
   );

}

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  if (!params.slug) return { notFound: true };

  const exhibition = await getExhibitionBySlug(params.slug);

  return {
    props: {
      exhibit: exhibition,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  try {
    const exhibitions = await fetchExhibitions();

    return {
      paths: exhibitions.map((exhibition: { slug: string }) => ({
        params: {
          slug: exhibition.slug,
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error(
      "[pages/exhibitions/[slug] - getStaticPaths()]Error fetching exhibitions:",
      error
    );

    return {
      paths: [],
      fallback: false,
    };
  }
};
