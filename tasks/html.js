const { src, dest } = require('gulp');

const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const webphtml = require('gulp-webp-html-nosvg');
const strip = require('gulp-strip-comments');

const html = () => {
	return (
		src('./src/**.html')
			.pipe(
				fileinclude({
					prefix: '@',
					basepath: '@file',
				}),
			)
			.pipe(webphtml())
			.pipe(strip())
			// .pipe(htmlmin({ collapseWhitespace: true }))
			.pipe(dest('./dist'))
	);
};

module.exports = html;
