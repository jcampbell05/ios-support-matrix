var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  return gulp.src('src/index.js')
  .pipe(webpack())
  .pipe(gulp.dest('dist/index.js'));
});
