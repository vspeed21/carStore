const { src, dest, series, watch } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


const path = {
  sass: 'src/scss/**/*.scss',
  js: 'src/js/**/*.js',
  images: 'src/img/**/*.{png,jpg}',
}

function css(done) {
  src(path.sass)
    .pipe( sass())
    .pipe( dest('build/css') )
  
  done();
}

function imagenes( done ) {
  src(path.images)
		.pipe(imagemin())
		.pipe(dest('build/img'))

  done();
}

function js( done ) {
  src(path.js)
    .pipe( dest('build/js') )
  
  done();
}

function dev( done ) {
  watch(path.sass, css);
  watch(path.js, js);

  done();
}

exports.css = css;
exports.js = js;
exports.imagenes = imagenes;
exports.dev = series( css, js,imagenes, dev );