import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ProviderSection from "./components/ProviderSection";
import IndexShows from "./services/movie-API";
import searchShows from "./services/search-API";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
import ShowDetailsSearch from "./services/details-API"; 
import Details from "./components/Details";
import Show from "./components/Show";

function App() {

  const [netflixShows, setNetShows] = useState([]);
  const [craveShows, setCraveShows] = useState([]);
  const [disneyShows, setDisneyShows] = useState([]);
  const [appleShows, setAppleShows] = useState([]);
  const [watchShows, setWatchShows] = useState([]);

  const[showDetails, setShowDetails] = useState([]);
  
  const [searchedShows, setSearchedShows] = useState([]);

  useEffect(() => {
    ShowDetailsSearch(50).then((showDetails) => setShowDetails(showDetails));
  }, []);

  useEffect(() => {
    IndexShows("8").then((netflixShows) => setNetShows(netflixShows));
  }, []);

  useEffect(() => {
    IndexShows("230").then((craveShows) => setCraveShows(craveShows));
  }, []);

  useEffect(() => {
    IndexShows("337").then((disneyShows) => setDisneyShows(disneyShows));
  }, []);

  useEffect(() => {
    IndexShows("350").then((appleShows) => setAppleShows(appleShows));
  }, []);


  const handleSearch = (query) => {
    searchShows(query).then((searchedShows) => setSearchedShows(searchedShows));
  };

  const handleToggleWatchList = (id) => {
    setWatchShows((prevState) => {
      if(prevState.findIndex((showId) => showId === id) === -1) {
        return [...prevState, id];
        
      }
      localStorage.setItem('shows', JSON.stringify(watchShows));
      return prevState.filter((showId) => showId !== id);
    })
  }

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
                <ProviderSection company={"Netflix"} shows={netflixShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows}/> 
                <ProviderSection company={"Crave"} shows={craveShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows}/>
                <ProviderSection company={"Disney"} shows={disneyShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows}/>
                <ProviderSection company={"Apple Plus"} shows={appleShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows}/> 
                </>
              }/>
              <Route path="/search" element={
                <SearchResults company={"Results"} 
                shows={searchedShows} />
              } />
              <Route path="/details" element= {
                <Details  /> } /> 
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
