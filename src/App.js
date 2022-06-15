import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ProviderSection from "./components/ProviderSection";
import indexMovies from "./services/movie-API";
import searchShows from "./services/search-API";
import Form from "./components/Form";

function App() {

  const [netflixShows, setNetShows] = useState([]);
  const [craveShows, setCraveShows] = useState([]);
  const [disneyShows, setDisneyShows] = useState([]);
  const [appleShows, setAppleShows] = useState([]);
  
  const [searchedShows, setSearchedShows] = useState([]);

  useEffect(() => {
    indexMovies("8").then((netflixShows) => setNetShows(netflixShows));
  }, []);

  useEffect(() => {
    indexMovies("230").then((craveShows) => setCraveShows(craveShows));
  }, []);

  useEffect(() => {
    indexMovies("337").then((disneyShows) => setDisneyShows(disneyShows));
  }, []);

  useEffect(() => {
    indexMovies("350").then((appleShows) => setAppleShows(appleShows));
  }, []);

  useEffect((query) => {
    searchShows(query).then((searchedShows) => setSearchedShows(searchedShows));
  }, []);

  const handleSearch = (query) => {
    searchShows(query).then((searchedShows) => setSearchedShows(searchedShows));
  };

  return (
    <div className="App">
      <Router>
        <div id="root">
          <Header>
            <Form searchShows={handleSearch} />
          </Header>
            <Routes>
              <Route path="/" element={
                <>
                <ProviderSection company={"Netflix"} shows={netflixShows}/> 
                <ProviderSection company={"Crave"} shows={craveShows}/>
                <ProviderSection company={"Disney"} shows={disneyShows}/>
                <ProviderSection company={"Apple Plus"} shows={appleShows}/> 
                </>
              }/>
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
