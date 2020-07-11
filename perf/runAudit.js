const fs = require('fs');
const path = require('path');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const budgets = require('./budget.json');

if (process.argv.length <= 2) {
  console.log('No url was provided.');
  process.exit(-1);
}

let lighthouseFlags = {
  output: 'html',
  chromeFlags: [
    '--headless',
    '--show-paint-rects',
    '--ignore-certificate-errors',
  ],
  onlyCategories: ['performance'],
  emulatedFormFactor: ['mobile'],
  budgets,
};

const dot2Dash = (name) => name.replace(/\./g, '-');
const slash2Dash = (name) => name.replace(/\//g, '-');

const makeFolder = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  return dir;
};

const [url = null] = process.argv.reverse();
const { hostname, pathname } = new URL(url);
const timestamp = new Date();
const mainReportsFolder = path.resolve('perf', 'reports');
const siteFolder = makeFolder(path.join(mainReportsFolder, dot2Dash(hostname)));
const dateFolder = makeFolder(
  path.join(
    siteFolder,
    `audit${slash2Dash(pathname)}__${slash2Dash(
      timestamp.toLocaleDateString('en-US')
    )}`
  )
);

const reportFileName = (device) =>
  `${device}-${slash2Dash(pathname)}__${timestamp.toISOString()}.html`;

async function runLighthouse(url, flags, config = null) {
  const [device] = flags.emulatedFormFactor;
  const reportFile = path.join(dateFolder, reportFileName(device));

  console.log(`
     ----------------------
      LIGHTHOUSE AUDIT
      
      Device: (${device})
      Url: ${url}
      Saved to: ${reportFileName(device)}
     ----------------------`);

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

const runAudit = async () => {
  await runLighthouse(url, lighthouseFlags);
  lighthouseFlags.emulatedFormFactor = ['desktop'];
  await runLighthouse(url, lighthouseFlags);
};

module.exports = runAudit();
