'use strict';

import gulp from 'gulp';
import config from '../../gulp/config';
import path from 'path';
import express from 'express';
import compiler from 'express-compile';
import falcorExpress from 'falcor-express';
import Router from 'falcor-router';
import routes from '../../routes/index';

let port = process.env.PORT || config.port.dev;
let app = module.exports.app = exports.app = express();

// Port
app.listen(port, function() {
    console.info('Started: http://localhost:%d', port);
  })
  .on('error', function(error) {
    console.info('Server error:', error.message);
  });

// Aliases
app.use('/' + config.path.common.dir, express.static(__dirname + '/../../' + config.path.common.dir));

// Static file route
app.use(express.static(path.resolve(config.path.src.dir)));

// Compile ES6 files
app.use('*.js', compiler({
  root: config.path.src.dir,
  paths: [config.path.src.js.files],
  compilerOpts: {
    js: config.babel
  }
}));

// Falcor Route
app.use('/model.json', falcorExpress.dataSourceRoute(function(req, res) {
  return new Router(routes);
}));

// Dynamic SPA route
app.use('*', (req, res) => {
  res.sendFile(path.resolve(config.path.src.dir + '/' + config.path.src.html.index));
});
