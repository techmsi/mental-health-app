// Log: Supress console.debug && console.debug statements in Production

export default class Log {
  constructor (siteUrl) {
    this.debug = window.location.host === siteUrl;

    if (this.debug === false) {
      console.debug = () => {};
      console.debug = () => {};
    }
  }
}
