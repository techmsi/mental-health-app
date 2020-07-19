// eslint-disable-next-line import/no-webpack-loader-syntax
import Worker from 'worker-loader!./worker.js';
let FontLoaderWorker = new Worker();

const logName = 'FontLoaderWorker';
const logStyle = 'color:green';

FontLoaderWorker.addEventListener('message', function (event) {
  console.log(`%csuccess ${logName}:`, logStyle);
});

FontLoaderWorker.addEventListener('error', function (event) {
  console.error(`error ${logName}:`, event);
});

FontLoaderWorker.postMessage({ type: 'get.font' });
export default FontLoaderWorker;
