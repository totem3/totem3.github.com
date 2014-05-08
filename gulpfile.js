var gulp = require('gulp'),
    compass = require('gulp-compass')

gulp.task('compass', function () {
  gulp.src('./sass/*.scss')
  .pipe(compass({
    css: 'css',
    sass: 'sass',
    image: 'images'
  }))
});

gulp.task('default', function () {
  gulp.start('compass')
});

gulp.task('watch', function () {
  gulp.watch('sass/*.scss', ['compass'])
});
