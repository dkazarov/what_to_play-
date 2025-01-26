const { src, dest, series, parallel, watch } = require('gulp');

const clear = require('./tasks/clear');
const html = require('./tasks/html');
const style = require('./tasks/style');
const js = require('./tasks/js');
const images = require('./tasks/images');
const fonts = require('./tasks/fonts');
const startServer = require('./tasks/server');

const watcher = () => {
	watch('src/html-components/**.html', html);
	watch('src/pages/**.html', html);
	watch('src/*.html', html);
	watch('src/scss/**', style);
	watch('src/images/**', images);
	watch('src/fonts/**', fonts);
	watch('src/js/**', js);
};

exports.clear = clear;
exports.html = html;
exports.style = style;
exports.images = images;
exports.fonts = fonts;
exports.js = js;
exports.startServer = startServer;
exports.watcher = watcher;

exports.build = series(clear, fonts, html, style, images, js);

exports.default = series(clear, fonts, html, style, images, js, startServer, parallel(watcher));
