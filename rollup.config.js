import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupVisualizer from 'rollup-plugin-visualizer';
import babel from 'rollup-plugin-babel';
import rollupCommonJs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

export default {
  entry: 'src/index.js',
  format: 'iife',
  moduleName: 'NumberPicture',
  plugins: [
    rollupCommonJs({
      ignoreGlobal: true,
      include: 'node_modules/**',
      exclude: ['node_modules/react/**'],
      // namedExports: {
      //   'node_modules/react/react.js': [
      //     'Children',
      //     'Component',
      //     'PropTypes',
      //     'createElement',
      //     'cloneElement',
      //   ],
      // },
    }),
    rollupNodeResolve({
      extensions: ['.js', '.jsx'],
      jsnext: true,
      main: true,
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
    rollupVisualizer({
      filename: './bundle-stats.html',
    }),
    filesize(),
  ],
  external: ['react', 'react-dom'],
  globals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  dest: 'umd/number-picture.js',
};
