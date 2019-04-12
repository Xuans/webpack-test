const gulp = require('gulp');

const concat = require('gulp-concat');


gulp.task('default', async function () {
	gulp.src([
		'./src/Uglifyjs/start.js',
		"./node_modules/uglify-es/lib/utils.js",
		"./node_modules/uglify-es/lib/ast.js",
		"./node_modules/uglify-es/lib/parse.js",
		"./node_modules/uglify-es/lib/transform.js",
		"./node_modules/uglify-es/lib/scope.js",
		"./node_modules/uglify-es/lib/output.js",
		"./node_modules/uglify-es/lib/compress.js",
		"./node_modules/uglify-es/lib/sourcemap.js",
		"./node_modules/uglify-es/lib/mozilla-ast.js",
		"./node_modules/uglify-es/lib/propmangle.js",
		"./node_modules/uglify-es/lib/minify.js",
		"./node_modules/uglify-es/tools/exports.js",
		'./src/Uglifyjs/end.js',
	])
		.pipe(concat('uglifyes.js'))
		.pipe(gulp.dest('./src'))
		.on('end', function () {
			console.log('done');
		});
});