var gulp = require('gulp'); 

var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('default', function () {
  return gulp.src('src/templates/*.html')
    .pipe(nunjucksRender({
      path: ['src/templates/'] // String or Array
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|nunjucks)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
      }))
    // output files in app folder
    .pipe(gulp.dest('app'))
  });