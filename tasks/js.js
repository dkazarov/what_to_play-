const { src, dest } = require('gulp');
const webpack = require('webpack-stream');
const strip = require('gulp-strip-comments');
const babel = require('gulp-babel');

const js = () => {
	return src('./src/js/main.ts')
		.pipe(babel())
		.pipe(strip())
		.pipe(webpack(require('../webpack.config.js')))
		.pipe(dest('dist/js'));
};

module.exports = js;
