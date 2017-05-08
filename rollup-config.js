import fable from 'rollup-plugin-fable';

export default {
  entry: './fable_narumi_node.fsproj',
  dest: './dist/bundle.js',
  plugins: [
    fable()
  ],
  format: 'es'
};