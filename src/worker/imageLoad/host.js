// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
import { API_ENDPOINT } from 'Api/api-config';
import therapistHeadshots from 'worker/imageLoad/therapistHeadshots.json';
let ImageLoaderWorker = new Worker();

const logName = 'ImageLoaderWorker';
const logStyle = 'color:skyblue';

ImageLoaderWorker.addEventListener('message', function (event) {
  console.log(`%csuccess ${logName}:`, logStyle);
});

ImageLoaderWorker.addEventListener('error', function (event) {
  console.error(`error ${logName}:`, event);
});

export const imagesArray = therapistHeadshots.map(imageName => {
  const baseUrl = API_ENDPOINT.imageBaseUrl;
  const imageUrl = `${baseUrl}/images/headshots/${imageName}`;

  return { name: imageName, src: imageUrl };
});

ImageLoaderWorker.postMessage({ type: 'fetch.all.images', imagesArray });

export default ImageLoaderWorker;
