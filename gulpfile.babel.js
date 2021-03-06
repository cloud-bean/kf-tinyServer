const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');

gulp.task('mocha', () =>
  gulp.src(['test/**/*.js'], { read: false })
          .pipe(mocha({ reporter: 'list' }))
          .on('error', gutil.log)
);

gulp.task('watch-mocha', () =>
    gulp.watch(['test/**'], ['mocha'])
);
