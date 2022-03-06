import logo from './kindpng_834491.png';
import './App.css';
import AppBody from './components/AppBody';

function App() {

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Displaying data from the <a
          className="app-link"
          href="https://ghibliapi.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Studio Ghibli API.
        </a>
        </p>
      </header>
      <AppBody />
    </div>
  );
}

export default App;
