import Navbar from './Navbar.js';
import MovieCard from './MovieCard.js';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <div className="background">
      <Navbar />
      <div className="container">
        <MovieCard />
      </div>
    </div>
  );
}

export default App;