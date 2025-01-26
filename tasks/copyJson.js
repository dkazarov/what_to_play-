const { src, dest } = require('gulp');

const copyJson = () => {
	return src(['./src/*.json']).pipe(dest('./dist/'));
};

module.exports = copyJson;
