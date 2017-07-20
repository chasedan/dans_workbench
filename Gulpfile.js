'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('styles', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        // Inject CSS changes without reloading the browser.
        .pipe(browserSync.stream({match: '**/*.css'}))
});
// BrowserSync
gulp.task('browser-sync', function () {
  // Watch files
  var files = [
    './css/**/*.css',
  ];

  // Initialize browsersync
  browserSync.init(files, {
    // Browsersync with a php server
    proxy: 'http://dans_workbench.dev/', // Set this to whatever acquia dev desktop url gives you
    notify: true,
    open: "ui"
  });
});
//Watch task
// Watch for any changes.
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss',['styles']);
});
gulp.task('default',['styles', 'browser-sync', 'watch'], function() {
});
