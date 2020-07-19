let backendHost;
// eslint-disable-next-line no-restricted-globals
const hostname = location && location.hostname;
const imageBaseUrl =
  'https://raw.githubusercontent.com/techmsi/mental-health-app/master/public';
if (hostname.includes('localhost')) {
  backendHost = 'http://localhost:9000/api';
} else {
  backendHost = 'https://phq9api.netlify.app/.netlify/functions/api';
}

export const API_ENDPOINT = {
  imageBaseUrl,
  therapists: `${backendHost}/therapists`,
  phq9: `${backendHost}/phq9`,
  diagnosis: `${backendHost}/diagnosis`
};
