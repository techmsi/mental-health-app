const fs = require('fs');
const path = require('path');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const budgets = require('./budget.json');

if (process.argv.length <= 2) {
  console.log('No url was provided.');
  process.exit(-1);
}

const [url = null] = process.argv.reverse();
const { hostname } = new URL(url);
const timestamp = new Date().toISOString();
const reportFile = path.join(
  path.resolve('perf', 'reports'),
  `${hostname}-report-${timestamp}.html`
);

console.log(`Lighthouse audit for ${url} saved to `, reportFile);

let lighthouseFlags = {
  output: 'html',
  chromeFlags: ['--headless', '--show-paint-rects'],
  onlyCategories: ['performance'],
  budgets,
};

async function runLighthouse(url, flags, config = null) {
  try {
    const chrome = await chromeLauncher.launch({
      chromeFlags: flags.chromeFlags,
    });
    flags.port = chrome.port;
    const html = (await lighthouse(url, flags)).report;
    await chrome.kill();
    fs.writeFileSync(reportFile, html);

    return html;
  } catch (err) {
    await chromeLauncher.killAll();
    console.log('Lighthouse error.', err);
  }
}

const runAudit = async () => await runLighthouse(url, lighthouseFlags);

module.exports = runAudit();
