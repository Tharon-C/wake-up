var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr'); 
var server = lr();

gulp.task('style', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(prefix('last 2 versions' , 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
        .pipe(gulp.dest('./css/'))
        .pipe(refresh(server));
});

gulp.task('livereload', function(){  
    server.listen(35729, function(err){
        if(err) return console.log(err);
    });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch ('scss/*.scss').on('change', livereload.changed);
});

// default gulp watch task 
gulp.task('default', function() {
	var client = ['style'];
	gulp.watch ('./sass/*.scss', client);
});

