export const getPDF = (url) => {
  console.log('Get PDF ', url);
  return fetch(url, {
    headers: {
      Accept: 'application/pdf'
    }
  })
    .then(r => r.blob())
    .then(data => {
      const blob = new Blob([data], { type: 'application/pdf' });
      return blob;
    }).catch(error => {
      console.log(error);
    });
};

export const createHiddenPDFLink = (blob, filename) => {
  const fileURL = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = fileURL;
  link.setAttribute('download', filename);
  console.log(`
    link.href ${link.href}
    link.download ${link.download}
  `);
  link.click();
};
