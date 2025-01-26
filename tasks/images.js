const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const newer = require('gulp-newer');

const images = () => {
	return src('./src/images/*', { encoding: false })
		.pipe(newer('./dist/images/**/*'))
		.pipe(webp())

		.pipe(src('./src/images/**/*'))
		.pipe(newer('./dist/images/**/*'))
		.pipe(
			imagemin(
				{
					verbose: true,
				},
				[
					imagemin.gifsicle({ interlaced: true }),
					imagemin.mozjpeg({ quality: 75, progressive: true }),
					imagemin.optipng({ optimizationLevel: 3 }),
					imagemin.svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
					}),
				],
			),
		)
		.pipe(dest('./dist/images/'));
};

module.exports = images;
