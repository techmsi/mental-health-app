const q = params =>
  Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');

// Api: Helper
export const fetchData = async (url, params = false) => {
  if (params) url = `${url}?${q(params)}`;

  const response = await fetch(url);
  const data = await response.json();

  console.debug(`Fetched data from ${url}`);

  return data;
};

export const sendData = async (url, data) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, options);
  const responseData = await response.json();

  console.debug(`Request to ${url} succeeded`, responseData);

  return responseData;
};
