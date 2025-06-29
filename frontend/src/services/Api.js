const API_KEY = "992a5af7";
const BASE_URL = "https://www.omdbapi.com/";

export const SearchMovie = async (query) => {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);
    const data = await response.json();

    if (data.Response === "False") {
    throw new Error(data.Error);
  }

  return data.Search
};

 