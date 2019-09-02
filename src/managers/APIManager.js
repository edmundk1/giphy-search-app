let apiKey = "aXvyXMehTPDEv8CqiRnyhmVwbTwCaX0M";

const getAPIEndPoint = async (baseEndpoint, params) => {
  let paramKeys = Object.keys(params);
  let paramsToUrl = "";
  paramKeys.forEach((paramKey) => {
    paramsToUrl = paramsToUrl + "&" + paramKey + "=" + params[paramKey];
  });
  let endpoint = baseEndpoint + "?api_key=" + apiKey + paramsToUrl;
  let response = await fetch(endpoint);
  let data = await response.json();
  return data;
};

const getTrendingGifs = async (offset) => {
  console.log(offset)
  let baseEndpoint = "http://api.giphy.com/v1/gifs/trending";
  let limit = 6;
  let params = {"limit": limit, "offset": offset};
  let results = await getAPIEndPoint(baseEndpoint, params);
  return results.data;
};

export default getTrendingGifs;
