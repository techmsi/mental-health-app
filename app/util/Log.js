// Log: Supress console.log statements in Production

export default class Log {
  constructor(siteUrl) {
    this.debug = window.location.host === siteUrl ? false : true;

    if (this.debug === false) {
      console.log = () => { };
    }
  }
}
