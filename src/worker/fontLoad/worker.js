/* eslint-disable no-restricted-globals */
const { getImageBlob, cacheResource } = require('../imageLoad/loadImages');

self.addEventListener('message', async ({ data }) => {
  console.log(data.type);
  try {
    self.importScripts(
      'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
    );
    console.log('imported');
  } catch (error) {
    console.log('error', error);
  }
  const fontRequest = {
    name: 'googleFont',
    src:
      'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300&display=swap'
  };
  getImageBlob(fontRequest).then(blob => {
    const fontBlobUrl = URL.createObjectURL(blob);

    const font = {
      src: fontRequest.src,
      id: fontRequest.name,
      blob,
      blobUrl: fontBlobUrl
    };

    cacheResource({ src: fontRequest.src });

    self.postMessage(font);
  });
});
