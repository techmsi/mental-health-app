const sharp = require('sharp');
const { resolve, join, basename } = require('path');
const { readdirSync } = require('fs');
const headshotsFolder = resolve('.', 'public/images/headshots/');

const square = () => {
  try {
    const headshots = readdirSync(headshotsFolder).filter(file =>
      file.includes('.jpg')
    );

    headshots.forEach(imageFile => {
      const imageFileName = `${imageFile.replace('.jpg', '')}_200.jpg`;
      const fullImagePath = join(headshotsFolder, imageFile);
      const fullImageFileName = join(headshotsFolder, imageFileName);

      sharp(fullImagePath)
        .resize(200, 200)
        .toFile(fullImageFileName, (err, info) => {
          if (err) return;
          console.log(`${imageFileName}`, info.size);
        });
    });
  } catch (error) {
    console.log('Cropping error', error);
  }
};

module.exports = square();
