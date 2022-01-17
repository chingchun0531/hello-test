import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"//開新視窗
          rel="noopener noreferrer"//讓當前瀏覽頁面不受影響
        >
         Hello world!
        </a>
      </header>
    </div>
  );
}
export default App;
