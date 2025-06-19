import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext.jsx"

function MovieCard({ movie }) {
    const { isFavorite, addToFavorite, removeFavorite } = useMovieContext()

    const movieId = movie.imdbID || movie.Id;
    const favorite = isFavorite(movieId)

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFavorite(movieId)
        else addToFavorite(movie)
    }

    const poster = movie.Poster || movie.url || "https://via.placeholder.com/300x450?text=No+Image";
    const title = movie.Title || movie.title || "No Title";
    const year = movie.Year || movie.year || "";

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={poster !== "N/A" ? poster : "https://via.placeholder.com/300x450?text=No+Image"} 
            alt={movie.Title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{title}</h3>
            <p>{year}</p>
        </div>
    </div>
}

export default MovieCard


