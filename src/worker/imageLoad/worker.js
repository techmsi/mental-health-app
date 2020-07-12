/* eslint-disable no-restricted-globals */
const { getImageBlob, createImage } = require('./loadImages');

self.onmessage = function ({ data }) {
  if (!data) return null;
  const { imagesArray } = data;

  imagesArray.forEach(({ name, src }) => {
    console.log(`Worker creating image blob for ${name}`);

    getImageBlob({ name, src: `${src}.webp` }).then(blob => {
      const image = createImage({
        src: `${src}.webp`,
        id: name,
        blob
      });

      self.postMessage(image);
    });

    getImageBlob({ name, src: `${src}.jpg` }).then(blob => {
      const image = createImage({
        src: `${src}.jpg`,
        id: name,
        blob
      });

      self.postMessage(image);
    });
  });
};
