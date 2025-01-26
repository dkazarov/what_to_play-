const { src, dest } = require('gulp');
const ttf2woff2 = require('gulp-ttf2woff2');
const newer = require('gulp-newer');

const fonts = () => {
	return src(['./src/fonts/*.ttf'])
		.pipe(newer('./dist/fonts/**/*'))
		.pipe(ttf2woff2())
		.pipe(dest('./dist/fonts/'));
};

module.exports = fonts;
