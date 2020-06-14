const path = require('path');
const madge = require('madge');

if (process.argv.length <= 2) {
  console.log('No url was provided.');
  process.exit(-1);
}

const appSourceFolder = path.resolve('.', 'src');

const [url = null] = process.argv.reverse();
const { hostname } = new URL(url);
const timestamp = new Date().toISOString();
const graphFile = path.join(
  path.resolve('perf', 'graphs'),
  `${hostname}-graph-${timestamp}.svg`
);

console.log(`Dependecy Graph for ${url} saved to `, graphFile);
const runGraph = () =>
  madge(appSourceFolder)
    .then((res) => {
      console.log(`leaves: ${res.leaves().length} | orphans: ${res.orphans().length} | circular: ${res.circular().length}`);

      return res.image(graphFile);
    })
    .then((writtenImagePath) => {
      console.log('Image written to ' + writtenImagePath);
    });

module.exports = runGraph();