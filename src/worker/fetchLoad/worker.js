/* eslint-disable no-restricted-globals */
const { fetchData } = require('Api');
const { API_ENDPOINT } = require('Api/api-config');
const { cacheResource } = require('worker/imageLoad/cacheResource');

self.addEventListener('message', async ({ data }) => {
  if (data.type === 'fetch.therapists') {
    const { therapists } = await fetchData(API_ENDPOINT.therapists);
    console.log(data.type);
    cacheResource({ src: API_ENDPOINT.therapists });
  }

  if (data.type === 'fetch.questionnaire') {
    const { questionnaire } = await fetchData(API_ENDPOINT.questionnaire);
    console.log(data.type);
    cacheResource({ src: API_ENDPOINT.questionnaire });
  }
});
