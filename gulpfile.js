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

gulp.task('copy-css', function(){
  gulp.src('client/styles/*.css')
    .pipe(gulp.dest('client/dist/styles'));
});

gulp.task('htmlReplaceDev', function(){
  gulp.src(path.HTML)
  .pipe(htmlreplace({
    'js': 'src/' + path.OUT
  }))
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function(){
  gulp.watch(path.HTML, [ 'htmlReplaceDev' ]);
  gulp.watch('client/styles/styles.css', [ 'copy-css' ]);

  var watcher = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function(){
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC));
      console.log('Updated!');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('default', [
  'htmlReplaceDev',
  'copy-css',
  'watch'
]);

