export async function fetchArtworks() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching artworks:", error);
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
    console.error("Error fetching artworks:", error);
    return [];
  }
}

export async function getArtworkBySlug(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/artworks/${slug}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching artworks:", error);
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
    console.error("Error fetching exhibitions:", error);
    return [];
  }
}
