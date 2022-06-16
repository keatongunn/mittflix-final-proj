const apiKey = 'f23d62c6094ac0359ecaed6ceb4dcb59';

const baseUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`

const IndexShows = async (providerId) => {
  const request = await fetch(`${baseUrl}&with_watch_providers=${providerId}&watch_region=CA`);
  const response = await request.json();
  const movies = await response.results;
  return movies;
};

export default IndexShows;