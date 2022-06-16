const Details = ({ show }) => {
  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt="" />
      <div className="show-details-inner">
        <h1>{show.name}</h1>
        <div className="description">
            {show.overview}
        </div>
        <button className="add-to-watchlist">+ Add to watch list</button>
      </div>
    </div>
  );
}
 
export default Details;