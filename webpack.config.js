const { readdirSync, lstatSync } = require('fs');
const { join } = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const packagesDir = join(__dirname, './packages');
const isDirectory = source => lstatSync(join(packagesDir, source)).isDirectory();
const packages = readdirSync(packagesDir).filter(isDirectory).concat('main');

const plugins = [
  new Visualizer({ filename: '../bundle-stats.html' }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'production') plugins.push(new UglifyJSPlugin({ sourceMap: true }));

module.exports = packages.map(packageName => ({
  devtool: 'cheap-module-source-map',

  entry: packageName === 'main' ?
    `${__dirname}/src/index.js` :
    `${__dirname}/packages/${packageName}/src/index.js`,

  resolve: {
    mainFields: [
      'jsnext:main',
      'browser',
      'main',
    ],
  },

  output: {
    path: packageName === 'main' ?
      `${__dirname}/umd` :
      `${__dirname}/packages/${packageName}/umd`,
    filename: `lego${packageName === 'main' ? '' : `-${packageName}`}${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
    library: `Lego${packageName === 'main' ? '' : `${packageName[0].toUpperCase()}${packageName.slice(1)}`}`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  plugins,

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}));
