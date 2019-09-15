const apiKey = 'aXvyXMehTPDEv8CqiRnyhmVwbTwCaX0M';
const defaultNumResults = 18;
const intArray = [1, 2, 3, 4];
const numResultsArray = intArray.map((intVal) => intVal * defaultNumResults);

const getAPIEndPoint = async (baseEndpoint, params) => {
  const paramKeys = Object.keys(params);
  let paramsToUrl = '';
  paramKeys.forEach((paramKey) => {
    paramsToUrl = `${paramsToUrl}&${paramKey}=${params[paramKey]}`;
  });
  const endpoint = `${baseEndpoint}?api_key=${apiKey}${paramsToUrl}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
};

const getTrendingGifs = async (offset) => {
  const baseEndpoint = 'http://api.giphy.com/v1/gifs/trending';
  const limit = defaultNumResults;
  const params = { limit, offset };
  const results = await getAPIEndPoint(baseEndpoint, params);

  return results.data;
};

const getSearchGifs = async (offset, numResultsPerPage, searchString) => {
  const baseEndPoint = 'http://api.giphy.com/v1/gifs/search';
  const limit = numResultsPerPage;
  const params = { q: searchString, limit, offset };
  const results = await getAPIEndPoint(baseEndPoint, params);

  return results;
};

export { getTrendingGifs, getSearchGifs, defaultNumResults, numResultsArray };
