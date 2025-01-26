const { src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

const style = () => {
	return (
		src('./src/scss/*.scss', { sourcemaps: true })
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		// .pipe(cssnano())
		.pipe(concat('./style.css'))
			.pipe(dest('./dist/css', { sourcemaps: false }))
	);
};

module.exports = style;
