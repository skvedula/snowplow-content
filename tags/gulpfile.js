var gulp = require('gulp')
	, packageJSON  = require('./package')
	, jshintConfig = packageJSON.jshintConfig
	, gutil = require('gulp-util')
	, jshint = require('gulp-jshint')
	, uglify = require('gulp-uglify')
	, src = ['./*.js', './gulpfile.js']
	, rename = require('gulp-rename')
	, path = require('path')
;

gulp.task('lint', function() {
  return gulp.src(src)
	.pipe(jshint(jshintConfig))
	.pipe(jshint.reporter('default'));
});

gulp.task('compress', function() {
  return gulp.src(src)
	.pipe(uglify().on('error', gutil.log))
	.pipe(rename(function(path) {
		path.extname = ".min.js";
	}))
	.pipe(gulp.dest('dist'));
});

gulp.task('build', ['lint', 'compress']);

gulp.task('default', function() {
	gulp.start('build');
});