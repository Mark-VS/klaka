var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('popa', function() {
  console.log("Жируха")
});

gulp.task('sass', function() {
  return gulp.src('app/sass/main.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
})
