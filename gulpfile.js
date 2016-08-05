var gulp       = require('gulp'),
    nodemon    = require('gulp-nodemon'),
    watch      = require('gulp-watch'),
    jshint     = require('gulp-jshint'),
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename'),
    uglify     = require('gulp-uglify'),
    imagemin   = require('gulp-imagemin'),
    livereload = require('gulp-livereload');

var paths = {
	src: {
		js: 'src/assets/js/**/*.js',
		scss: 'src/assets/scss/**/*.scss',
		css: 'src/assets/css',
		img: 'src/assets/img',
		app: 'src/app/**/*.js'
	},
	server: {
		models: 'server/models',
		routes: 'server/routes',
		config: 'server/config'
	},
	dist: {
		assets: 'dist/assets',
		app: 'dist/app'
	}
};

gulp.task('nodemon', function() {
	nodemon({
		script: 'server.js',
		env: {
			'NODE_ENV': 'development'
		}
	})
	.on('restart');
});

gulp.task('sass', function() {
	gulp.src(paths.src.scss)
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(gulp.dest(paths.src.css));
});

// gulp.task('scripts', function() {
// 	return gulp.src(paths.src.app)
// 		.pipe(concat('main.js'))
// 		.pipe(gulp.dest(paths.dist.app))
// 		.pipe(rename('main.min.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest(paths.dist.app));
// });

gulp.task('jshint', function() {
	return gulp.src([
		paths.src.app,
		paths.server.routes,
		paths.server.models,
		paths.server.config
	])
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

// gulp.task('images', function() {
// 	return gulp.src(paths.src.img)
// 		.pipe(imagemin())
// 		.pipe(gulp.dest(paths.dist));
// });

gulp.task('watch', function() {
	livereload.listen();
	
	gulp.watch(paths.src.scss, ['sass'])
	 .on('change', livereload.changed);

	gulp.watch([
		paths.src.app,
		paths.server.routes,
		paths.server.models,
		paths.server.config
	], ['jshint'])
	  .on('change', livereload.changed);
});

gulp.task('default', ['watch', 'jshint', /*'images', 'scripts',*/ 'sass', 'nodemon']);
