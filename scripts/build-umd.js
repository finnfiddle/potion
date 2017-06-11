const browserify = require('browserify');
const babelify = require('babelify');
const path = require('path');
const fs = require('fs');

const dest = fs.createWriteStream(path.join(__dirname, '../umd/test123.js'));

browserify(path.join(__dirname, '../src/index.js'), {
  // debug: true,
  // cache: {},
  // packageCache: {},
  standalone: 'NumberPicture',
  // fullPaths: true,
})
.ignore('react')
.ignore('react-dom')
.transform(babelify)
.transform({ global: true }, 'uglifyify')
.bundle()
.pipe(dest);
