import SinglePage from "@/components/ExhibitionPage/SinglePage";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Exhibit } from "@/types/exhibit";
import { fetchExhibitions } from "@/utils/api";


type ExhibitProps = {
  exhibit: Exhibit;
};

export default function ExhibitionDetails({ exhibit }: ExhibitProps) {
  const router = useRouter();
   
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
      <SinglePage data={exhibit} />
  );
}

export const getStaticPaths: GetStaticPaths = async () => {  
  const response = await fetchExhibitions();
  const exhibitions: Exhibit[] = await response;

  const paths = exhibitions.map((exhibit) => ({
    params: { slug: exhibit.slug },
  }));

  return {
    paths,
    fallback: true, 
  };
};

export const getStaticProps: GetStaticProps<ExhibitProps> = async ({
  params,
}) => {
  const { slug } = params ?? {}; 

  if (!slug) {
    return {
      notFound: true, 
    };
  }
 
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibitions/${slug}`
  );
  const exhibit: Exhibit = await response.json();
     
  return {
    props: {
      exhibit,
    },
    revalidate: 1, 
  };
};
