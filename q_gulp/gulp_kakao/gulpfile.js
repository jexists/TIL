const gulp = require('gulp'),
	scss = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	nodemon = require('gulp-nodemon'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-terser'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	fileinclude = require('gulp-file-include');

// source file path
const PATH = {
	HTML: './src',
	ASSETS: {
		FONTS: './src/assets/fonts',
		IMAGES: './src/assets/images',
		STYLE: './src/assets/style',
		SCRIPT: './src/assets/script',
		LIB: './src/assets/lib'
	}
},

	// outputs path
	DEST_PATH = {
		HTML: './dist',
		ASSETS: {
			FONTS: './dist/assets/fonts',
			IMAGES: './dist/assets/images',
			STYLE: './dist/assets/style',
			SCRIPT: './dist/assets/script',
			LIB: './dist/assets/lib'
		}
	};

gulp.task('clean', () => {
	return new Promise(resolve => {
		del.sync(['./dist/assets/style', './dist/assets/script', './dist/*.html', './dist/page/*.html']);
		resolve();
	});
});


gulp.task('scss:compile', () => {
	return new Promise(resolve => {
		const scssOptions = {
			outputStyle: 'compact' // nested, expanded, compact, compressed
			, indentType: 'tab' // space, tab
			, indentWidth: 2
			, precision: 8
			, sourceComments: false // 코맨트 제거 여부
		};
		gulp.src(PATH.ASSETS.STYLE + '/*.scss', { allowEmpty: true })
			.pipe(sourcemaps.init())
			.pipe(scss(scssOptions).on('error', scss.logError))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(DEST_PATH.ASSETS.STYLE))
			.pipe(browserSync.reload({ stream: true }))

		resolve();
	});
});

gulp.task('html', () => {
	return new Promise(resolve => {
		gulp.src(PATH.HTML + '/*.html', { allowEmpty: true })
			.pipe(gulp.dest(DEST_PATH.HTML));
		resolve();
	});
});

gulp.task('page', () => {
	return new Promise(resolve => {
		gulp.src(PATH.HTML + '/page/*.html', { allowEmpty: true })
			.pipe(fileinclude({
				prefix: '@@',
				basepath: './src'
			}))
			.pipe(gulp.dest(DEST_PATH.HTML + '/page'))
			.pipe(browserSync.reload({ stream: true }))

		resolve();
	})
});

gulp.task('nodemon:start', () => {
	return new Promise(resolve => {
		nodemon({
			script: 'app.js'
			, watch: 'app'
		});
		resolve();
	});
});

gulp.task('library', () => {
	return new Promise(resolve => {
		gulp.src([PATH.ASSETS.LIB + '/*.js', PATH.ASSETS.LIB + '/*.css'])
			.pipe(gulp.dest(DEST_PATH.ASSETS.LIB));
		resolve();
	});
});


gulp.task('script:build', () => {
	return new Promise(resolve => {
		gulp.src(PATH.ASSETS.SCRIPT + '/index.js', { allowEmpty: true })
			.pipe(concat('script.js'))
			.pipe(uglify(
				{
					ecma: 6,
					keep_fnames: false,
					mangle: {
						toplevel: true,
					},
				}
			))
			.pipe(rename('script.min.js'))
			.pipe(gulp.dest(DEST_PATH.ASSETS.SCRIPT))
			.pipe(browserSync.reload({ stream: true }));
		resolve();
	})
});

gulp.task('fonts', () => {
	return new Promise(resolve => {
		gulp.src(PATH.ASSETS.FONTS + '/*.*', { allowEmpty: true })
			.pipe(gulp.dest(DEST_PATH.ASSETS.FONTS));
		resolve();
	});
});

gulp.task('imagemin', () => {
	return new Promise(resolve => {
		gulp.src(PATH.ASSETS.IMAGES + '/**/*.*', { allowEmpty: true })
			.pipe(imagemin([imagemin.gifsicle({ interlaced: false }),
			imagemin.mozjpeg({ progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
			]))
			.pipe(gulp.dest(DEST_PATH.ASSETS.IMAGES))
			.pipe(browserSync.reload({ stream: true }));
		resolve();
	});
});

gulp.task('watch', () => {
	return new Promise(resolve => {
		gulp.watch(PATH.HTML + "/**/*.html", gulp.series(['html']));
		gulp.watch(PATH.HTML + "/page/*.html", gulp.series(['page']));
		gulp.watch(PATH.ASSETS.STYLE + "/**/*.scss", gulp.series(['scss:compile']));
		gulp.watch(PATH.ASSETS.SCRIPT + "/**/*.js", gulp.series(['script:build']));
		gulp.watch(PATH.ASSETS.IMAGES + "/**/*.*", gulp.series(['imagemin']));
		resolve();
	});
});

gulp.task('browserSync', () => {
	return new Promise(resolve => {
		browserSync.init(null, {
			proxy: 'http://localhost:8005'
			, port: 8006
		});
		resolve();
	});
});

const allSeries = gulp.series([
	'clean',
	'scss:compile',
	'html',
	'page',
	'script:build',
	'fonts',
	'imagemin',
	'library',
	'nodemon:start',
	'browserSync',
	'watch'
])

gulp.task('default', allSeries);