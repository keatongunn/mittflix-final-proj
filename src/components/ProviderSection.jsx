import Show from "./Show";

const ProviderSection = ({company, shows, toggleWatchList, onWatchList, handleDetails}) => {
  return (
    <div className="titleList">
        <div className="title">
          <h1>{company}</h1>
          <div className="titles-wrapper">
            {shows.map((show) => (
            <Show 
              handleDetails={handleDetails}
              key={show.id} 
              show={show} 
              toggleWatchList={toggleWatchList}
              onWatch={ 
                onWatchList.findIndex(
                  (showId) => show.id === showId 
                ) === -1
                ? false
                : true
              }
              />
            ))}
          </div>
        </div>
      </div>
  );
}
 
export default ProviderSection;