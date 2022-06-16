import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import ProviderSection from "./components/ProviderSection";
import IndexShows from "./services/shows-API";
import searchShows from "./services/search-API";
import Form from "./components/Form";
import SearchResults from "./components/SearchResults";
import ShowDetailsSearch from "./services/details-API"; 
import Details from "./components/Details";

function App() {

  const watchMovieList = JSON.parse(localStorage.getItem('watchMovies'));
  const [netflixShows, setNetShows] = useState([]);
  const [craveShows, setCraveShows] = useState([]);
  const [disneyShows, setDisneyShows] = useState([]);
  const [appleShows, setAppleShows] = useState([]);
  const [watchShows, setWatchShows] = useState(watchMovieList || []);

  const[showDetails, setShowDetails] = useState([]);
  
  const [searchedShows, setSearchedShows] = useState([]);

  useEffect(() => {
    localStorage.setItem('watchShows', JSON.stringify(watchShows));
  }, [watchShows]);

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

  const handleDetails = (id) => {
    ShowDetailsSearch(id).then((showDetails) => setShowDetails(showDetails));
    console.log(showDetails)   
  };

  const handleSearch = (query) => {
    searchShows(query).then((searchedShows) => setSearchedShows(searchedShows));
  };

  const handleToggleWatchList = (id) => {
    setWatchShows((prevState) => {
      if(prevState.findIndex((showId) => showId === id) === -1) {
        return [...prevState, id];
      }
      return prevState.filter((showId) => showId !== id);
    })
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
                <ProviderSection company={"Netflix"} shows={netflixShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows} handleDetails={handleDetails}/> 
                <ProviderSection company={"Crave"} shows={craveShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows} handleDetails={handleDetails}/>
                <ProviderSection company={"Disney"} shows={disneyShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows} handleDetails={handleDetails}/>
                <ProviderSection company={"Apple Plus"} shows={appleShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows} handleDetails={handleDetails}/> 
                </>
              }/>
              <Route path="/search" element={
                <SearchResults company={"Results"} 
                shows={searchedShows} toggleWatchList={handleToggleWatchList} onWatchList={watchShows} handleDetails={handleDetails}/>
              } />
              <Route path="/details" element= {
                <Details  show={showDetails}
                   />
              } />      
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
