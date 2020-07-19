export const getImageBlob = async ({ name, src }) => {
  const response = await fetch(src);
  const fileBlob = await response.blob();
  fileBlob.name = name;

  return fileBlob;
};
