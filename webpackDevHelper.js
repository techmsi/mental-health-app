const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackCompiler = webpack(webpackConfig);

//enable webpack middleware for hot-reloads in development
const useWebpackMiddleware = app => {
  app.use(webpackHotMiddleware(webpackCompiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true,
        timings: true,
      }
    }
  ));
  app.use(webpackDevMiddleware(webpackCompiler,{
      log: console.log,
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }
  ));

  return app;
}

module.exports = { useWebpackMiddleware };
