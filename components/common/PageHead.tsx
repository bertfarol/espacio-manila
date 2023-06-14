import Head from "next/head";

interface PageHeadProps {
  title: string;
}

const PageHead = ({ title }: PageHeadProps) => {
  return (
    <Head>
      <title>{`Espacio Manila - ${title}`}</title>
      <link rel="icon" type="image/x-icon" href="/espacio-manila.png"></link>
      <meta
        name="description"
        content="A blank slate for the artwork and its artist, Espacio Manila is a cultured home to contemporary art pieces; providing artists a boundless and open space."
      />
      <meta name="tags" content="artworks, painting, sculpture, gallery" />
    </Head>
  );
};

export default PageHead;
