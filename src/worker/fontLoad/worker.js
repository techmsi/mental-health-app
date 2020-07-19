/* eslint-disable no-restricted-globals */
const { getImageBlob, createFont } = require('../imageLoad/loadImages');

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
    const font = createFont({
      src: fontRequest.src,
      id: fontRequest.name,
      blob
    });

    self.postMessage(font);
  });
});
