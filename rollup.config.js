import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupVisualizer from 'rollup-plugin-visualizer';
import babel from 'rollup-plugin-babel';
import rollupCommonJs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';

const env = process.env.NODE_ENV;
const config = {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'NumberPicture',
  exports: 'named',
  external: [
    'react',
    'react-dom',
    'react/**',
  ],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  dest: `umd/number-picture${env === 'production' ? '.min' : ''}.js`,
  sourceMap: true,
  plugins: [
    rollupNodeResolve({
      extensions: ['.js', '.jsx'],
      jsnext: true,
      main: true,
      browser: true,
    }),
    rollupCommonJs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/react.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
          'cloneElement',
        ],
      },
    }),
    babel({
      babelrc: false,
      presets: [['es2015', { modules: false, loose: true }], 'react'],
      plugins: [
        'external-helpers',
        'transform-object-rest-spread',
        'syntax-object-rest-spread',
        'lodash',
      ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    rollupVisualizer({
      filename: './bundle-stats.html',
    }),
    filesize(),
  ],
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
      },
      sourceMap: {
        filename: 'umd/number-picture.min.js.map', // TODO
      },
    })
  );
}

export default config;
