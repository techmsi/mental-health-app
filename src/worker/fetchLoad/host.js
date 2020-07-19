// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
let FetchLoaderWorker = new Worker();

const logName = 'FetchLoaderWorker';
const logStyle = 'color:chartreuse';

FetchLoaderWorker.addEventListener('message', function(event) {
  console.log(`%csuccess ${logName}:`, logStyle);
});

FetchLoaderWorker.addEventListener('error', function(event) {
  console.error(`error ${logName}:`, event);
});

FetchLoaderWorker.postMessage({ type: 'fetch.therapists' });
FetchLoaderWorker.postMessage({ type: 'fetch.questionnaire' });
export default FetchLoaderWorker;
