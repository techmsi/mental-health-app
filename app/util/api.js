class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      // 'X-Requested-With': 'XMLHttpRequest'
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://localhost:3001';

    const url = `${host}${route}`;
    console.log(url);

    let options = Object.assign({ method: verb },
      params ? { body: JSON.stringify(params) } : null );

    options.headers = Api.headers();

    return fetch(url, options).then( resp => {
      let json = resp.json();

      if (resp.ok) {
        return json;
      }

      return json.then(err => {throw err});
    })
    .catch(err =>  { console.log('Fetch API Error', err); });
  }
}
export default Api;
