/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
    outputPaths: {
    app: {
      css: {
        'app': '/assets/ember-rock-roll.css',
        'bootstrap': '/assets/ember-rock-roll-bootstrap.css'
      }
    }
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// var tree = [
//   'dist/assets/ember-rock-roll.css'
// ];
// var autoprefixer = require('broccoli-autoprefixer');
// tree = autoprefixer(tree);

app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');

// Glyphicons
var pickFiles = require('broccoli-static-compiler');
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
     srcDir: '/',
     destDir: '/fonts'
});

module.exports = app.toTree(bootstrapFonts);
