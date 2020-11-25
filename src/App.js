import './App.css';
import Row from './Row'
import requests from './requests'
export default function App() {
  return (
    <div className="App">
      <h1>Hey lets start</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

