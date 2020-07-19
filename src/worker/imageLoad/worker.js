/* eslint-disable no-restricted-globals */
const { getImageBlob, createImage } = require('./loadImages');

self.onmessage = function ({ data }) {
  if (!data) return null;
  console.time('worker image creation');
  const { imagesArray } = data;
  imagesArray.forEach(({ name, src }) => {
    const blobRequests = [
      { name, src: `${src}_200.webp` },
      { name, src: `${src}.webp` },
      { name, src: `${src}_200.jpg` },
      { name, src: `${src}.jpg` }
    ];
    console.log(`Worker creating image blob for ${name}`);
    blobRequests.forEach(blobRequest => {
      getImageBlob(blobRequest).then(blob => {
        const image = createImage({
          src: blobRequest.src,
          id: blobRequest.name,
          blob
        });
        self.postMessage(image);
      });
    });
  });
  console.timeEnd('worker image creation');
};
