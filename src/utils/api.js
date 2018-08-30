import 'isomorphic-fetch';

const API_ROOT = process.env.REACT_APP_API_ROOT;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

function callApi(endpoint, request) {
  if (request && request.body) request.body = JSON.stringify(request.body);

  const requestWithHeaders = {
    ...{ headers },
    ...request
  };

  const url = API_ROOT + endpoint;

  return fetch(url, requestWithHeaders)
    .then(response => response.json())
    .then(body => {
      if (body.code === 0) {
        return body.data;
      } else {
        throw body.message;
      }
    });
}

export default {
  fetchSites() {
    return callApi('/sites');
  },
  fetchHotList(siteId) {
    return callApi(`/sites/${siteId}/news`);
  }
};
