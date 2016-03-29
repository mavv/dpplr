import babel from 'rollup-plugin-babel';

export default {
  entry: './src/main.js',
  dest: './build/bundle.js',
  format: 'iife',
  moduleName: 'app',
  plugins: [ babel() ]

}
