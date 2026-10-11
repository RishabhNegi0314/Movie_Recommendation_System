import React, { useState, useEffect } from 'react';
import { Film, Sparkles, Clapperboard, Filter, Star, Info, Menu, X, Search } from 'lucide-react';
import { MOVIES_DATASET, Movie, recommend, recommendByGenre, getUniqueGenres } from './data/movies';
import { fetchPoster } from './services/tmdb';

export default function App() {
  const [movieList] = useState<string[]>(MOVIES_DATASET.map(m => m.title));
  const [uniqueGenres] = useState<string[]>(getUniqueGenres());
  const [selectedMovie, setSelectedMovie] = useState<string>(MOVIES_DATASET[0]?.title || 'Avatar');
  const [selectedGenre, setSelectedGenre] = useState<string>(uniqueGenres[0] || 'Action');

  const [movieSearchTerm, setMovieSearchTerm] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const [similarRecommendations, setSimilarRecommendations] = useState<Movie[]>([]);
  const [genreRecommendations, setGenreRecommendations] = useState<Movie[]>([]);
  const [posters, setPosters] = useState<Record<number, string>>({});
  const [loadingSimilar, setLoadingSimilar] = useState<boolean>(false);
  const [loadingGenre, setLoadingGenre] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<'similar' | 'genre' | 'both'>('similar');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [selectedDetailMovie, setSelectedDetailMovie] = useState<Movie | null>(null);

  // Load initial recommendations on mount
  useEffect(() => {
    handleFindSimilarMovies(selectedMovie);
  }, []);

  // Fetch poster helper
  const loadPostersForMovies = async (moviesToLoad: Movie[]) => {
    for (const movie of moviesToLoad) {
      if (!posters[movie.movie_id]) {
        fetchPoster(movie.movie_id, movie.title).then(posterUrl => {
          setPosters(prev => ({ ...prev, [movie.movie_id]: posterUrl }));
        });
      }
    }
  };

  const handleFindSimilarMovies = async (movieTitleToFind?: string) => {
    const title = movieTitleToFind || selectedMovie;
    if (!title) return;

    setLoadingSimilar(true);
    setActiveSection('similar');

    // Content-based recommendation algorithm
    const recs = recommend(title);
    setSimilarRecommendations(recs);

    // Fetch TMDB posters for recommended movies
    await loadPostersForMovies(recs);
    setLoadingSimilar(false);
  };

  const handleRecommendByGenre = async (genreToFilter?: string) => {
    const genre = genreToFilter || selectedGenre;
    if (!genre) return;

    setLoadingGenre(true);
    setActiveSection('genre');

    const genreRecs = recommendByGenre(genre);
    setGenreRecommendations(genreRecs);

    await loadPostersForMovies(genreRecs);
    setLoadingGenre(false);
  };

  const filteredMovies = movieList.filter(m =>
    m.toLowerCase().includes(movieSearchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen text-white relative flex flex-col md:flex-row"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.85)), url('https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-zinc-950/90 border-b border-zinc-800 z-30">
        <div className="flex items-center gap-2">
          <Clapperboard className="w-6 h-6 text-red-500" />
          <span className="font-bold text-lg tracking-wide">Lights, Camera, Recommendations!</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded bg-zinc-800 hover:bg-zinc-700 text-white"
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar (Streamlit Sidebar Replica with Custom Background) */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-80 z-40 transition-transform duration-300 overflow-y-auto custom-scrollbar p-6 flex flex-col justify-between ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.90)), url('https://static.vecteezy.com/system/resources/previews/000/258/943/original/modern-dark-texture-background-vector.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold tracking-wide">Filter by Genre</h2>
            </div>
            {sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden p-1 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Genre Selection Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Select a Genre
              </label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full bg-zinc-900/90 border border-zinc-700 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-sm font-medium cursor-pointer shadow-inner"
              >
                {uniqueGenres.map((genre) => (
                  <option key={genre} value={genre} className="bg-zinc-900 text-white">
                    {genre}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-2">
              <p className="text-xs text-zinc-400 mb-3">Genre-Based Recommendations</p>
              <button
                onClick={() => {
                  handleRecommendByGenre();
                  setSidebarOpen(false);
                }}
                disabled={loadingGenre}
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                {loadingGenre ? 'Fetching Movies...' : 'Get Suggestions!'}
              </button>
            </div>
          </div>

          {/* Genre Quick Tags */}
          <div className="mt-8 pt-6 border-t border-zinc-800">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              Popular Genres
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Action', 'Science Fiction', 'Adventure', 'Drama', 'Comedy', 'Animation', 'Thriller'].map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    setSelectedGenre(g);
                    handleRecommendByGenre(g);
                    setSidebarOpen(false);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    selectedGenre === g
                      ? 'bg-red-600/30 border-red-500 text-red-300'
                      : 'bg-zinc-800/60 border-zinc-700 text-zinc-300 hover:border-zinc-500'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Footer info */}
        <div className="pt-6 border-t border-zinc-800 text-xs text-zinc-400 space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>TMDB 5000 Content-Based Model</span>
          </div>
          <p className="text-[11px] text-zinc-500">
            Cosine similarity on genre, keywords, overview, director & cast tokens.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
        {/* Hero Title */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 rounded-xl bg-red-600/20 border border-red-500/30 text-red-500">
              <Clapperboard className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Lights, Camera, Recommendations!
              </h1>
              <p className="text-sm text-zinc-400 mt-1">
                Content-based movie recommendation system powered by TMDB metadata & cosine similarity
              </p>
            </div>
          </div>
        </header>

        {/* Movie Search & Selector Card */}
        <section className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-5 md:p-6 mb-8 shadow-xl">
          <label className="block text-sm md:text-base font-semibold text-zinc-200 mb-2">
            Type or select a movie from the dropdown
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* Custom Searchable Select Box */}
            <div className="relative flex-1">
              <div
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-white flex items-center justify-between cursor-pointer hover:border-zinc-500 transition-colors shadow-inner"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <Film className="w-4 h-4 text-red-500 shrink-0" />
                  <span className="truncate font-medium">{selectedMovie || 'Choose a movie...'}</span>
                </div>
                <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              </div>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="p-2 border-b border-zinc-800 bg-zinc-950">
                    <input
                      type="text"
                      placeholder="Search movie title..."
                      value={movieSearchTerm}
                      onChange={(e) => setMovieSearchTerm(e.target.value)}
                      className="w-full bg-zinc-800 text-white text-sm px-3 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:border-red-500"
                      autoFocus
                    />
                  </div>
                  <ul className="max-h-60 overflow-y-auto custom-scrollbar p-1">
                    {filteredMovies.length > 0 ? (
                      filteredMovies.map((title) => (
                        <li
                          key={title}
                          onClick={() => {
                            setSelectedMovie(title);
                            setIsDropdownOpen(false);
                            setMovieSearchTerm('');
                          }}
                          className={`px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors flex items-center justify-between ${
                            selectedMovie === title
                              ? 'bg-red-600 text-white font-medium'
                              : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                          }`}
                        >
                          <span>{title}</span>
                          {selectedMovie === title && <Star className="w-3.5 h-3.5 fill-white" />}
                        </li>
                      ))
                    ) : (
                      <li className="px-3 py-4 text-center text-zinc-500 text-sm">
                        No movies match "{movieSearchTerm}"
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* Find Similar Movies Button */}
            <button
              onClick={() => handleFindSimilarMovies()}
              disabled={loadingSimilar}
              className="bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              {loadingSimilar ? 'Finding...' : 'Find Similar Movies'}
            </button>
          </div>

          {/* Quick Select Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-400">Try these:</span>
            {['Inception', 'The Dark Knight', 'Interstellar', 'Avatar', 'Pulp Fiction', 'The Matrix'].map((m) => (
              <button
                key={m}
                onClick={() => {
                  setSelectedMovie(m);
                  handleFindSimilarMovies(m);
                }}
                className="px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors cursor-pointer"
              >
                {m}
              </button>
            ))}
          </div>
        </section>

        {/* Content Section: Movie Recommendations (5 Columns) */}
        {activeSection === 'similar' && (
          <section className="mb-10 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Similar to:</span>
                  <span className="text-red-400 font-extrabold">{selectedMovie}</span>
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Top 5 content-based recommendations sorted by cosine similarity
                </p>
              </div>
            </div>

            {/* 5 Column Grid for Recommendations */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {similarRecommendations.map((movie) => {
                const posterUrl = posters[movie.movie_id];
                return (
                  <MovieCard
                    key={movie.movie_id}
                    movie={movie}
                    posterUrl={posterUrl}
                    onSelect={() => setSelectedDetailMovie(movie)}
                    onExploreSimilar={() => {
                      setSelectedMovie(movie.title);
                      handleFindSimilarMovies(movie.title);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                );
              })}
            </div>
          </section>
        )}

        {/* Genre Recommendations Section */}
        {activeSection === 'genre' && (
          <section className="mb-10 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Top {selectedGenre} Movies</span>
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Curated recommendations from the TMDB 5000 catalogue
                </p>
              </div>
              <button
                onClick={() => handleRecommendByGenre()}
                className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                Shuffle Picks
              </button>
            </div>

            {/* 5 Column Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {genreRecommendations.map((movie) => {
                const posterUrl = posters[movie.movie_id];
                return (
                  <MovieCard
                    key={movie.movie_id}
                    movie={movie}
                    posterUrl={posterUrl}
                    onSelect={() => setSelectedDetailMovie(movie)}
                    onExploreSimilar={() => {
                      setSelectedMovie(movie.title);
                      handleFindSimilarMovies(movie.title);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                );
              })}
            </div>
          </section>
        )}
      </main>

      {/* Movie Details Modal */}
      {selectedDetailMovie && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDetailMovie(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-xl w-full p-6 text-white relative shadow-2xl animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDetailMovie(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-36 shrink-0 rounded-xl overflow-hidden shadow-lg border border-zinc-800 bg-zinc-950 aspect-[2/3]">
                <img
                  src={posters[selectedDetailMovie.movie_id] || `https://placehold.co/500x750/1e293b/ffffff?text=${encodeURIComponent(selectedDetailMovie.title)}`}
                  alt={selectedDetailMovie.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedDetailMovie.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mt-1">
                    {selectedDetailMovie.release_year && <span>{selectedDetailMovie.release_year}</span>}
                    <span>•</span>
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {selectedDetailMovie.rating || 8.0}
                    </span>
                    <span>•</span>
                    <span>Directed by {selectedDetailMovie.director}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {selectedDetailMovie.genres.map((g) => (
                    <span
                      key={g}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-red-950/60 border border-red-800/50 text-red-300"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed line-clamp-4">
                  {selectedDetailMovie.overview}
                </p>

                <div className="pt-2 text-xs text-zinc-400">
                  <span className="font-semibold text-zinc-300">Top Cast: </span>
                  {selectedDetailMovie.cast.join(', ')}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedMovie(selectedDetailMovie.title);
                      handleFindSimilarMovies(selectedDetailMovie.title);
                      setSelectedDetailMovie(null);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Recommend Similar to {selectedDetailMovie.title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface MovieCardProps {
  movie: Movie;
  posterUrl?: string;
  onSelect: () => void;
  onExploreSimilar: () => void;
}

function MovieCard({ movie, posterUrl, onSelect, onExploreSimilar }: MovieCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden shadow-lg transition-all duration-200 hover:-translate-y-1">
      {/* Poster Image Container */}
      <div
        className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-950 cursor-pointer"
        onClick={onSelect}
      >
        <img
          src={
            imageError || !posterUrl
              ? `https://placehold.co/500x750/1e293b/ffffff?text=${encodeURIComponent(movie.title)}`
              : posterUrl
          }
          alt={movie.title}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Rating Badge */}
        {movie.rating && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-bold text-amber-400 flex items-center gap-1 border border-white/10 shadow">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            {movie.rating}
          </div>
        )}

        {/* Hover overlay with details icon */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
          <div className="flex flex-col items-center gap-2">
            <span className="p-2 rounded-full bg-red-600/90 text-white shadow-lg">
              <Info className="w-4 h-4" />
            </span>
            <span className="text-[11px] font-medium text-white text-center">View Overview</span>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3
            className="font-bold text-sm text-zinc-100 line-clamp-1 group-hover:text-red-400 transition-colors cursor-pointer"
            onClick={onSelect}
            title={movie.title}
          >
            {movie.title}
          </h3>
          <p className="text-[11px] text-zinc-400 truncate mt-0.5">
            {movie.genres.slice(0, 2).join(', ')}
          </p>
        </div>

        <button
          onClick={onExploreSimilar}
          className="mt-3 w-full text-[11px] py-1.5 px-2 rounded-lg bg-zinc-800 hover:bg-red-600/20 hover:text-red-400 hover:border-red-500/40 border border-zinc-700/60 text-zinc-300 transition-colors font-medium flex items-center justify-center gap-1 cursor-pointer"
          title="Find movies similar to this"
        >
          <Sparkles className="w-3 h-3 text-red-400" />
          <span>Similar</span>
        </button>
      </div>
    </div>
  );
}
