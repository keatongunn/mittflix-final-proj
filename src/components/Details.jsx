const Details = ({ show }) => {
  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original}`} alt="" />
      <div className="show-details-inner">
        <h1></h1>
        <div className="description">
            
        </div>
        <button className="add-to-watchlist">+ Add to watch list</button>
      </div>
    </div>
  );
}
 
export default Details;