const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new Visualizer({ filename: '../bundle-stats.html' }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
];

if (process.env.NODE_ENV === 'production') plugins.push(new UglifyJSPlugin({ sourceMap: true }));

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: `${__dirname}/src/index.js`,

  output: {
    path: `${__dirname}/umd`,
    filename: `number-picture${process.env.NODE_ENV === 'production' ? '.min' : ''}.js`,
    library: 'NumberPicture',
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
};
