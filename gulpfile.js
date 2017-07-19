var gulp = require('gulp');




gulp.task('default', function() {
  gulp.src('./src/**/*.html')//datos
    .pipe(gulp.dest('./public'));//crear toda la informacion en una ruta dada (copy/paste)
});
