const apiKey = 'f23d62c6094ac0359ecaed6ceb4dcb59';

const searchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}`;

const searchShows = async (query) => {
  const request = await fetch(`${searchUrl}&query=${query}`);
  const response = await request.json();
  const shows = await response.results;
  return shows;
}

export default searchShows;