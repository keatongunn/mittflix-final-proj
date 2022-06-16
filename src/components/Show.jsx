import placeholder from "../images/image-not-available.jpg";

const Show = ( { show, toggleWatchList, onWatch } ) => {
  const {name, overview, vote_average, poster_path, id} = show;

  const handleClick = (event) => {
    toggleWatchList(id);
  }
  return (
    <div className="movie">
      <a href="/details" key={id}
        ><img 
          src={
            poster_path === null
              ? placeholder
              : `https://image.tmdb.org/t/p/w500/${poster_path}`  
          } 
          alt="Movie poster" />
        <div className="overlay">
          <div className="title">{name}</div>
          <div className="rating">{vote_average}</div>
          <div className="plot">
          {overview}
          </div>
        </div></a>
      <div data-toggled={onWatch} className="listToggle">
        <div onClick={handleClick}><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
      </div>
    </div>
  );
}
 
export default Show;