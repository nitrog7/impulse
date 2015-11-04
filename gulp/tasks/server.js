'use strict';

import gulp from 'gulp';
import config from '../config';
import childProcess from 'child_process';
import psTree from 'ps-tree';

let node;

let restartServer = (type, callback) => {
  if(node) {
    console.log('Restarting server...');
    node.kill();
  }

  node = childProcess.spawn('node', ['server/' + type + '.js'], {stdio: 'inherit'});

  node.on('close', function(code) {
    if(code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });

  node.on('error', function(error) {
    gulp.log('Error detected');
  });
};

gulp.task('server:dev', (done) => {
  restartServer('dev', done);

  gulp.watch(['server//modules/dev.js', 'routes/*.js'], function() {
    restartServer('dev', done);
  })
});

gulp.task('server:release', (done) => {
  restartServer('release', done);
});