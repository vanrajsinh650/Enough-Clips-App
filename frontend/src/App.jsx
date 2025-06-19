import Favorites from "./pages/Favorites.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext.jsx";
import NavBar from "./components/NavBar.jsx";


function App() {
  return (
    <>
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      </MovieProvider>
      </>
  );
}

export default App;