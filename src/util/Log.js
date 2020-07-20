// Log: Supress console.debug && console.debug statements in Production

export default class Log {
  constructor (siteUrl) {
    // eslint-disable-next-line no-restricted-globals
    this.debug = location.host === siteUrl;

    if (this.debug === false) {
      console.debug = () => {};
      console.debug = () => {};
    }
  }
}
