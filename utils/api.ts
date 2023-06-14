export async function fetchArtworks() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("[utisl/api - fetchArtworks] Error fetching artworks:", error);
    return [];
  }
}

export async function fetchArtworksArtists() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks/artists`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "[utisl/api - fetchArtworksArtists] Error fetching artists:",
      error
    );
    return [];
  }
}

export async function getArtworkBySlug(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks`
    );
    const data = await response.json();

    const filteredArtwork = data.find((artwork: { slug: string; }) => artwork.slug === slug);

    return filteredArtwork;
  } catch (error) {
    console.error(
      "[utisl/api - getArtworkBySlug] Error fetching artwork:",
      error
    );
    return [];
  }
}

export async function fetchExhibitions() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/exhibitions`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "[utisl/api - fetchExhibitions] Error fetching exhibitions:",
      error
    );
    return [];
  }
}
