const del = require('del');
const babel = require('gulp-babel');
const gulp = require('gulp');
const babelrc = require('./babel.config.js');

const LIB_DIR = './lib';
const ESM_DIR = './es';
const SOURCE_DIR = ['./src/**/*.js'];

function clean(done) {
  del.sync([LIB_DIR], { force: true });
  done();
}

function copyTypescriptDeclarationFiles() {
  return gulp
    .src('./src/**/*.d.ts')
    .pipe(gulp.dest(LIB_DIR))
    .pipe(gulp.dest(ESM_DIR));
}

function build() {
  return gulp.src(SOURCE_DIR).pipe(babel(babelrc())).pipe(gulp.dest(LIB_DIR));
}

function buildEsm() {
  return gulp
    .src(SOURCE_DIR)
    .pipe(
      babel(
        babelrc(null, {
          NODE_ENV: 'esm',
        })
      )
    )
    .pipe(gulp.dest(ESM_DIR));
}

exports.build = gulp.series(
  clean,
  build,
  buildEsm,
  copyTypescriptDeclarationFiles
);
