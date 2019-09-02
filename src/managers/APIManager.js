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

export default getAPIEndPoint;
