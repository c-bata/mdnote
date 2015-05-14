var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

var paths = {
    src: "./src/",
    build: "./build/"
};

gulp.task('html', function() {
    gulp.src(paths.src + 'html/**/*.html')
        .pipe(gulp.dest(paths.build + 'html'));
});

gulp.task('build', function() {
    browserify({
        entries: paths.src + 'js/main.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(paths.build + 'js'));
});

gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['build', 'html'])
});

gulp.task('default', ['watch']);
