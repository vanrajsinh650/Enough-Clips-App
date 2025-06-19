import { useMovieContext } from "../context/MovieContext.jsx"
import MovieCard from "../components/MovieCard.jsx"
import "../css/favorite.css";

function Favorites() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map(
                        (movie, index) =>
                            <MovieCard movie={movie} key={movie.imdbID || index} />
                        )}
                </div>
            </div>
        )
    }
    return <div className="favorites-empty">
        <h2>No Favorite Movie Yet</h2>
        <p>Start adding movies to your favorite and they will appear here!</p>
    </div>
}

export default Favorites