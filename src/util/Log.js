// Log: Supress console.log && console.debug statements in Production

export default class Log {
  constructor (siteUrl) {
    this.debug = window.location.host === siteUrl;

    if (this.debug === false) {
      console.log = () => {};
      console.debug = () => {};
    }
  }
}
