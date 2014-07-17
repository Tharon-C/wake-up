var gulp = require('gulp');
// include plug-ins
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

//prefix
gulp.task('prefix', function() {
gulp.src('./sass/compiled/*.css')
  .pipe(prefix('last 2 versions' , 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
	.pipe(gulp.dest('./css/'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./sass/compiled'));
});


// default gulp watch task 
gulp.task('default', function() {
	var client = ['sass','prefix'];
	gulp.watch ('./sass/compiled/*.css', client);
	gulp.watch ('./sass/*.scss', client);
});

