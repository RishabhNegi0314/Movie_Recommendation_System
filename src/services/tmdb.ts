const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || "0db030a783ec2266aa3334a434c26748";

const posterCache: Map<number, { url: string; timestamp: number }> = new Map();
const CACHE_TTL = 3600 * 1000; // 1 hour in ms

export async function fetchPoster(movieId: number, fallbackTitle?: string): Promise<string> {
  // Check in-memory cache
  const cached = posterCache.get(movieId);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.url;
  }

  // Check localStorage cache
  try {
    const stored = localStorage.getItem(`tmdb_poster_${movieId}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Date.now() - parsed.timestamp < CACHE_TTL && parsed.url) {
        posterCache.set(movieId, parsed);
        return parsed.url;
      }
    }
  } catch {
    // localStorage may be disabled or quota reached
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data.poster_path) {
        const fullUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        posterCache.set(movieId, { url: fullUrl, timestamp: Date.now() });
        try {
          localStorage.setItem(`tmdb_poster_${movieId}`, JSON.stringify({ url: fullUrl, timestamp: Date.now() }));
        } catch {
          // ignore
        }
        return fullUrl;
      }
    }
  } catch (error) {
    console.warn(`Could not fetch poster from TMDB for movie ${movieId}:`, error);
  }

  const encodedTitle = encodeURIComponent(fallbackTitle || 'No Image');
  const fallbackUrl = `https://placehold.co/500x750/1e293b/ffffff?text=${encodedTitle}`;
  return fallbackUrl;
}
