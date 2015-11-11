gulp = require('gulp');
concat = require('gulp-concat');
notify = require('gulp-notify');


gulp.task('scripts-code', function() {  
  return gulp.src('code/*.js')
    .pipe(concat('mario.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'scripts-code' }));
});

gulp.task('scripts-enjine', function() {  
  return gulp.src('Enjine/*.js')
    .pipe(concat('enjine.js'))
    .pipe(gulp.dest('dist/assets/js'))
    .pipe(notify({ message: 'scripts-enjine' }));
});


gulp.task('scripts', function() {  
  gulp.start('scripts-code', 'scripts-enjine');
});