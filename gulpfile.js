var gulp       = require('gulp');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');
var watchify   = require('gulp-watchify');

// file and dir path of browserify
var paths = {
  OUT: "bundle.js",
  SRC: "./src/",
  BUILD: "./public/"
};

gulp.task('html', function() {
  gulp.src(paths.SRC + 'html/**/*.html')
    .pipe(gulp.dest(paths.BUILD));
});

gulp.task('build', function() {
  watchify(browserify([paths.SRC + 'js/main.jsx'], {debug: true})
    .transform(babelify)
    .bundle()
    .on('error', function(err) {
        console.log(err.message);
        this.emit('end');
    })
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.BUILD))
)});

gulp.task('watch', function() {
  gulp.watch('./src/**/*', ['build', 'html'])
});

gulp.task('default', ['watch']);
