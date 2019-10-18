const gulp = require('gulp');
const clean = require('gulp-clean');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const render = require('gulp-nunjucks-render');

const startServer = done => {
  browserSync.init({
    server: './dist',
    port: 6950
  });
  done();
};

const compileScripts = () => {
  return gulp
    .src(['src/assets/js/*.js', 'src/assets/js/custom.js'])
    .pipe(
      babel({
        presets: ['@babel/preset-env']
      })
    )
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(browserSync.reload({ stream: true }));
};

const compileStyles = () => {
  return gulp
    .src('src/assets/css/styles.css')
    .pipe(postcss())
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.reload({ stream: true }));
};

const compileMarkup = () => {
  return gulp
    .src('src/pages/**/*.+(njk)')
    .pipe(
      render({
        path: ['src/pages']
      })
    )
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ stream: true }));
};

const copyAssets = () => {
  return gulp
    .src('src/assets/images/**/*.*')
    .pipe(gulp.dest('./dist/assets/images'));
}

const watchMarkup = () => {
  gulp.watch(['src/**/*.+(njk)'], compileMarkup);
};

const watchScripts = () => {
  gulp.watch(['src/assets/js/**/*.js'], compileScripts);
};

const watchStyles = () => {
  gulp.watch(['src/assets/css/**/*.css'], compileStyles);
};

const cleanDist = () => {
  return gulp.src('./dist', {allowEmpty: true, read: false}).pipe(clean());
};
cleanDist.description = 'Clean dist folder before building new application';

const compile = gulp.parallel(compileScripts, compileStyles, compileMarkup);
compile.description = 'Compile all sources';

// Not exposed to CLI
const serve = gulp.series(compile, copyAssets, startServer);
serve.description = 'Serve compiled source on local server at port 6950';

const watch = gulp.parallel(watchMarkup, watchScripts, watchStyles);
watch.description = 'Watch for changes to all source';

const build = gulp.parallel(serve, watch);
build.description = 'Clean application, then build and start watching folders';

const defaultTasks = gulp.series(cleanDist, build);

export {
  compile,
  compileScripts,
  compileStyles,
  compileMarkup,
  copyAssets,
  watch,
  watchMarkup,
  watchScripts,
  watchStyles
};

export default defaultTasks;
