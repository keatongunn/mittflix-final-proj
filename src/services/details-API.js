const apiKey = 'f23d62c6094ac0359ecaed6ceb4dcb59';

const detailsURL = `https://api.themoviedb.org/3/tv`

const ShowDetailsSearch = async (showId) => {
  const request = await fetch(`${detailsURL}/${showId}?api_key=${apiKey}&language=en-US`);
  const response = await request.json();
  const show = await response.results;
  return show;
};

export default ShowDetailsSearch;