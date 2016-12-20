var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('css',function(){
	console.log('this is css');
})

gulp.task('default',function(){
	console.log('this default');
})

gulp.task('stylus',function(){
	return gulp.src('./stylus/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/css'))
})

gulp.task('watcher',['browserSync','stylus'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch(['./public/css/**/*.css','./public/js/**/*.js']).on('change',function(){
		reload();
	})
})

gulp.task('nodemon',function(ab){
	var ft = false;
	return nodemon({
		script: './app.js'
	}).on('start',function(){
		if(!ft){
			ab();
			tf = true;
		}
	})
})

gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy: {
			target: 'http://127.0.0.1:9999'
		},
		port:8989,
		open:false,
		flies:['*']
	})
})
