import ProviderSection from "./ProviderSection";

const SearchResults = ( {company, shows} ) => {
  return ( 
    <>
      <ProviderSection company={company} shows={shows}/>
    </> 
  );
}
 
export default SearchResults;