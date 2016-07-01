var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  return gulp.src('src/index.js')
  .pipe(webpack({
      output: {
        filename: '[name].js',
      },
  }))
  .pipe(gulp.dest('dist/'));
});
