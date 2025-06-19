import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {

    const [favorites, setfavorites] = useState([])

    useEffect(() => {
        const stroedFav = localStorage.getItem("favorites")

        if (stroedFav) setfavorites(JSON.parse(stroedFav))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const getMovieId = (movie) => movie.imdbID || movie.Id || movie.id || movie.ID || movie._id;

    const addToFavorite = (movieID) => {
        const movieId = getMovieId(movieID);
        if(!favorites.some((fav) => getMovieId(fav) === movieID )){
            setfavorites(prev => [...prev, movieID])
        }
    }

    const removeFavorite = (movieID) => {
        setfavorites(prev => prev.filter((movie) => getMovieId(movie) !== movieID))
    }

    const isFavorite = (movieID) => {
        return favorites.some((movie) => getMovieId(movie) === movieID)
    }

    const value = {
        favorites,
        addToFavorite,
        setfavorites,
        isFavorite,
        removeFavorite,
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
};