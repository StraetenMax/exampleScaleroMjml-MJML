const gulp = require('gulp')
const mjml = require('gulp-mjml')

const mjmlEngine = require('mjml')

gulp.task('default', function () {
  return gulp.src('./index.mjml')
    .pipe(mjml(mjmlEngine, {minify: true}))
    .pipe(gulp.dest('./html'))
})