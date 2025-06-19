import MovieCard from "../components/MovieCard.jsx";
import { useState } from "react";
import { SearchMovie } from "../services/Api.js";
import popularMovies from "../data/popularMovies.jsx";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState(popularMovies);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
      const searchResults = await SearchMovie(searchQuery)
      setMovies(searchResults)
      setError(null)
    } catch (err) {
      console.log(err)
      setError("Failed to search movies...")
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie, index) =>
            <MovieCard movie={movie} key={movie.imdbID || index} />
          )}
        </div>
      )}
    </div>
  );
}

export default Home;