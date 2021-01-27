import './App.css';
import Row from './Row';
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Professional Netflix clone! You can see the netflix from here! I am cool bro</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
