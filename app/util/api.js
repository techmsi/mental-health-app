import fetch from 'isomorphic-fetch';

class Api {
  static host() {
    return `http://${window.location.host}`;
  }

  static get(route) {
    const url = `${Api.host()}${route}`;

    return fetch(url).then(resp => {
      const json = resp.json();

      return (resp.ok) ? json : json.then(err => { throw err; });
    })
    .catch(err => {
      console.error(`Fetch (GET) API Error for ${url}`, err);
    });
  }

  static post(route, data) {
    const url = `${Api.host()}${route}`;

    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        dataType: 'json',
      },
      credentials: 'same-origin',
    };

    return fetch(url, options).then(resp => {
      const json = resp.json();
      console.debug('Request succeeded with JSON response', json);

      return (resp.ok) ? json : json.then(err => { throw err; });
    })
    .catch(err => {
      console.error(`Fetch API (POST) Error for ${url}`, err);
    });
  }

}

export default Api;
