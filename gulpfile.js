var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    refresh = require('gulp-livereload'),
    lr = require('tiny-lr'), 
      server = lr();

gulp.task('style', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions' , 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
        .pipe(gulp.dest('./css/'))
        .pipe(refresh(server));
});

// default gulp watch task 
gulp.task('default', function() {
	var client = ['style'];
	gulp.watch ('./sass/*.scss', client);
});

