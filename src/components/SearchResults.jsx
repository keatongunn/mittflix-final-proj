import ProviderSection from "./ProviderSection";

const SearchResults = ( {company, shows, toggleWatchList, onWatchList} ) => {
  return ( 
    <>
      <ProviderSection company={company} shows={shows} toggleWatchList={toggleWatchList} onWatchList={onWatchList}/>
    </> 
  );
}
 
export default SearchResults;