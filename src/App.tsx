import logo from './kindpng_834491.png';
import './App.css';
import MovieCardList from './components/MovieCardList';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Displaying data from the <a
          className="App-link"
          href="https://ghibliapi.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Studio Ghibli API.
        </a>
        </p>
        
        <MovieCardList />
      </header>
    </div>
  );
}

export default App;
