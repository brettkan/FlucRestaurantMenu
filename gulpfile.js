var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var minifyCss = require('gulp-minify-css');
var replace = require('gulp-replace');

var path = {
  HTML: 'client/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'client/dist',
  DEST_BUILD: 'client/dist/build',
  DEST_SRC: 'client/dist/src',
  ENTRY_POINT: './client/js/components/app.js'
};