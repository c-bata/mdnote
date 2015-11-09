import gulp       from 'gulp';
import browserify from 'browserify';
import babelify   from 'babelify';
import uglify     from 'gulp-uglify';
import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import watchify   from 'gulp-watchify';
import sourcemaps from 'gulp-sourcemaps';

const paths = {
  OUT: "bundle.js",
  SRC: "./src/",
  BUILD: "./public/js/"
};

gulp.task('build', () => {
  watchify(browserify(paths.SRC + 'main.jsx', { debug: true })
    .transform(babelify.configure({
      presets: ["es2015", "react"]
    }))
    .bundle()
    .on("error", (err) => { console.log("Error : " + err.message); })
    .pipe(source(paths.OUT))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.BUILD))
)});

gulp.task('watch', () => {
  gulp.watch('./src/**/*', ['build'])
});

gulp.task('default', ['build', 'watch']);
