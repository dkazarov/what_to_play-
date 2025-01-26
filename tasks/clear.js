const { src, dest } = require('gulp');
const clean = require('gulp-clean');

const clear = () => {
	return src('./dist', { read: false }).pipe(clean());
};

module.exports = clear;