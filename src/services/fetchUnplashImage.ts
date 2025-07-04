import { UNPLASH_KEY } from "./appwrite";

export async function fetchUnsplashImage(
  query: string,
): Promise<string | null> {
  const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&client_id=${UNPLASH_KEY}`;

  try {
    const res = await fetch(endpoint);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular; // image de taille moyenne
    }

    return null;
  } catch (err) {
    console.error("Erreur Unsplash:", err);
    return null;
  }
}
