export const API_KEY = "31a2443faf807b3a1b32b34ae159d609";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const HERO_IMG_URL = "https://image.tmdb.org/t/p/w780";
export const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

// ─── MOVIES ───────────────────────────────────────────────
export const MOVIES = {
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  upcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  nowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  search: (query) =>
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`,
  details: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  videos: (id) =>
    `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`,
  similar: (id) =>
    `${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
  actors: (id) => `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
  byGenre: (genreId) =>
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=1`,
};

// ─── TV SHOWS ─────────────────────────────────────────────
export const TV = {
  popular: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  onTheAir: `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`,
  airingToday: `${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
  trending: `${BASE_URL}/trending/tv/week?api_key=${API_KEY}`,
  search: (query) =>
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${query}&language=en-US&page=1`,
  details: (id) => `${BASE_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`,
  videos: (id) =>
    `${BASE_URL}/tv/${id}/videos?api_key=${API_KEY}&language=en-US`,
  similar: (id) =>
    `${BASE_URL}/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
  byGenre: (genreId) =>
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}&language=en-US&page=1`,
  actors: (id) => `${BASE_URL}/tv/${id}/credits?api_key=${API_KEY}`,
  season: (id, seasonNumber) =>
    `${BASE_URL}/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`,
  episode: (id, seasonNumber, episodeNumber) =>
    `${BASE_URL}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}?api_key=${API_KEY}&language=en-US`,
};

// ─── GENRES ───────────────────────────────────────────────

export const GENRES = (type, id) => `${BASE_URL}/discover/${type}?api_key=${API_KEY}&with_genres=${id}&language=en-US&page=`

// export const GENRES = {
  // movies: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  // tv: `${BASE_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`,
// };

export const MOVIE_GENRES = {
  action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US&page=1`,
  adventure: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=12&language=en-US&page=1`,
  comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US&page=1`,
  crime: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80&language=en-US&page=1`,
  drama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US&page=1`,
  horror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US&page=1`,
  mystery: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US&page=1`,
  romance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US&page=1`,
  sciFi: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878&language=en-US&page=1`,
  thriller: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=53&language=en-US&page=1`,
};

export const TV_GENRES = {
  actionAdventure: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10759&language=en-US&page=1`,
  comedy: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35&language=en-US&page=1`,
  crime: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=80&language=en-US&page=1`,
  documentary: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=99&language=en-US&page=1`,
  drama: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18&language=en-US&page=1`,
  family: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10751&language=en-US&page=1`,
  mystery: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=9648&language=en-US&page=1`,
  sciFiFantasy: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10765&language=en-US&page=1`,
  soap: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10766&language=en-US&page=1`,
  warPolitics: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10768&language=en-US&page=1`,
};

export const FAVORITE = (type, id) => `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=en-US`
