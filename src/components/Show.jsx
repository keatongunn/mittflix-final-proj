const Show = ( { show, toggleWatchList, onWatch } ) => {
  const {title, overview, vote_average, poster_path, id} = show;

  const handleClick = (event) => {
    toggleWatchList(id);
    console.log(id);
  }
  return (
    <div className="movie">
      <a href="/details/60735" key={id}
        ><img src={
          `https://image.tmdb.org/t/p/w500/${poster_path}`
          } 
          alt="Movie poster" />
        <div className="overlay">
          <div className="title">{title}</div>
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