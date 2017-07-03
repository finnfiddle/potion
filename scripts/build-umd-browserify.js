const browserify = require('browserify');
const babelify = require('babelify');
const path = require('path');
const fs = require('fs');

const YES_TO_MINIFY = true;

const bundle = (dest, shouldMinify = false) => {
  const bundler = browserify(path.join(__dirname, '../src/index.js'), {
    standalone: 'NumberPicture',
  })
  .ignore('react')
  .ignore('react-dom')
  .transform(babelify);

  if (shouldMinify) bundler.transform({ global: true }, 'uglifyify');

  bundler.bundle()
    .pipe(dest);
};

bundle(fs.createWriteStream(path.join(__dirname, '../umd/number-picture.js')));
bundle(fs.createWriteStream(path.join(__dirname, '../umd/number-picture.min.js')), YES_TO_MINIFY);
