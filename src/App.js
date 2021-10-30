import movies from "./data/movies-with-images.json";
import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="background">
      <Navbar />
      <div className="container">
        {movies.slice(0, 12).map(movie =>
          <MovieCard movie={movie} />
        )}
      </div>
    </div>
  );
}

export default App;